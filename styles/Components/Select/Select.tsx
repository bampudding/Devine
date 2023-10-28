'use client'

import SVG from '@/styles/System/SVG/SVG';
import styles from './Select.module.css';
import { useState } from 'react';

interface Props {
    label?: string;
    value?: string[];
    onClick?: () => void;
}

const Select = ({
    label, value
}: Props) => {
    const initialValue = Array.isArray(value) ? value[0] : value;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | number | undefined>(initialValue);

    const toggleSelect = () => {
        setIsOpen(prev => !prev);
    }

    const handleMenuItemClick = (val: string | number) => {
        setSelectedValue(val);
        toggleSelect();
    }

    let menuItems: (string | number)[] = [];

    if (Array.isArray(value)) {
        menuItems = value;
    } else if (value !== undefined) {
        menuItems = [value];
    }

    return (
        <div className={styles.MenuSelect}>
            <div className={`${styles.Group} ${isOpen && styles.Selected}`} onClick={toggleSelect}>
                <div className={styles.GroupInput}>
                    {label && <div className={styles.Label}>{label}</div>}
                    <div className={styles.GroupSelect}>
                        <div className={styles.Select}>{selectedValue}</div>
                    </div>
                </div>
                <div style={{ opacity: 0.4 }}>
                    <SVG Icon={isOpen ? 'ArrowKeyUp' : 'ArrowKeyDown'} Size={16} />
                </div>
            </div>
            {isOpen &&
                <div className={styles.Menu}>
                    {menuItems.map(item =>
                        <div key={item.toString()} className={`${styles.MenuData} ${item === selectedValue && styles.MenuDataFocused}`} onClick={() => handleMenuItemClick(item)}>
                            {item}
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default Select

