'use client'

import SvgIcon from '@/styles/System/SVG/SVG';
import React, { KeyboardEvent, useEffect, useState } from 'react';
import styles from './Input.module.css';

interface Props {
    type?: "email" | "number" | "password" | "tel" | "url";
    label?: string;
    placeholder?: string;
    name?: string;
    value?: string | string[] | number | undefined;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    min?: number;
    max?: number;
    erase?: boolean;
    onErase?: () => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({
    type, label, placeholder, name, value, onChange, form, disabled, error, pattern, readOnly, focus, required, min, max, erase, onErase, onKeyDown
}: Props) => {

    const { register } = form || "not form";
    
    return (
        <div className={styles.GroupTop}>
            <div className={`${styles.Group} ${disabled ? styles.disabled : error ? styles.error : readOnly ? styles.readOnly : focus && styles.focus}`}>
                {label && <div className={styles.Label}>{label}</div>}
                <div className={styles.GroupInput}>
                    <input className={styles.Input} placeholder={placeholder} type={type} id={name} name={name} value={value} readOnly={readOnly} disabled={disabled} min={min} max={max} autoFocus={focus} onChange={onChange} onWheel={(e) => (e.target as HTMLInputElement).blur()} onKeyDown={onKeyDown}
                        {...(form && name && {
                            ...register(name, {pattern: {value: pattern?.value, message: pattern?.message}, valueAsNumber: type === "number", required: required })
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

export default Input

