'use client'

import CheckScroll from "@/modules/SystemFunction/CheckScroll";
import styles from '../Header.module.css';

export const HBackground = () => {
    
    const { isScrolled } = CheckScroll();
    
    return (
        <div className={`${styles.Background} ${isScrolled && styles.HeaderScrolled}`}/>
    )
}