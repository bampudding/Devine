'use client'

import SVG from '@/styles/System/SVG/SVG';
import styles from './Select.module.css';
import { useState } from 'react';

interface Props {
    label?: string;
    value: string | number;
    options: any[];
    onValueChange: (value: string | number) => void;
}

const Select = ({
    label, value, options, onValueChange
}: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSelect = () => {
        setIsOpen(prev => !prev);
    }

    const handleMenuItemClick = (val: string | number) => {
        setIsOpen(false);
        onValueChange(val);
    }

    return (
        <div className={styles.MenuSelect}>
            <div className={`${styles.Group} ${isOpen && styles.Selected}`} onClick={toggleSelect}>
                <div className={styles.GroupInput}>
                    {label && <div className={styles.Label}>{label}</div>}
                    <div className={styles.GroupSelect}>
                        <div className={styles.Select}>{value}</div>
                    </div>
                </div>
                <div style={{ opacity: 0.4 }}>
                    <SVG Icon={isOpen ? 'ArrowKeyUp' : 'ArrowKeyDown'} Size={16} />
                </div>
            </div>
            {isOpen &&
                <div className={styles.Menu}>
                    {options.map(item =>
                        <label key={item.toString()} className={`${styles.MenuData} ${item === value && styles.MenuDataFocused}`}>
                            <input type='radio' style={{display: "none"}} onChange={() => handleMenuItemClick(item)}/>
                            {item}
                        </label>
                    )}
                </div>
            }
        </div>
    );
};

export default Select;