'use client'

import SvgIcon from '@/styles/System/SVG/SVG';
import React, { useRef } from 'react';
import styles from './Textarea.module.css';

interface Props {
    label?: string;
    placeholder?: string;
    value?: React.ReactNode | string;
    rows?: number;
    name?: string;
    onClick?: () => void;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    form?: any;
    disabled?: boolean;
    error?: string;
    pattern?: {
        value: any;
        message: string;
    }
    readOnly?: boolean;
    focus?: boolean;
    required?: string;
}

const Textarea = ({
    label, value, placeholder, rows, name, onChange, form, disabled, error, pattern, readOnly, focus, required
}: Props) => {

    const { register } = form || "not form";
    const textarea = useRef<HTMLTextAreaElement | null>(null);

    const ResizeHeight = () => {
        if (textarea.current) {
            textarea.current.style.height = 'auto';
            textarea.current.style.height = `${textarea.current.scrollHeight}px`;
        }
    };
    
    return (
        <div className={styles.GroupTop}>
            <div className={`${styles.Group} ${disabled ? styles.disabled : error ? styles.error : readOnly ? styles.readOnly : focus && styles.focus}`}>
                {label && <div className={styles.Label}>{label}</div>}
                <div className={styles.GroupInput}>
                    <textarea value={value} className={`${styles.Textarea} ${disabled ? styles.disabled : error ? styles.error : readOnly ? styles.readOnly : focus && styles.focus}`} name={name} placeholder={placeholder} readOnly={readOnly} disabled={disabled} autoFocus={focus} ref={textarea} rows={rows || 5} onInput={ResizeHeight} onChange={onChange}
                        {...(form && name && {
                            ...register(name, {pattern: {value: pattern?.value, message: pattern?.message}, required: required})
                        })}
                    />
                </div>
            </div>
            {error &&
                <div className={styles.ErrorMessage}>
                    <SvgIcon Icon="Warning" Size={12} Color='var(--color-coral-secondary)'/> {error}
                </div>}
        </div>
    );
};

export default Textarea

