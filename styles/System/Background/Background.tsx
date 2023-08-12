'use client'

import useScrollLock from '@/modules/SystemFunction/ScrollLock';
import styles from './Background.module.css';

interface Props {
    Color?: string;
    onClick?: () => void;
}

const Background = ({ Color, onClick }: Props) => {
    const { openScroll } = useScrollLock();

    const handleBackgroundClick = () => {
        openScroll();
        if (onClick) {
            onClick();
        }
    };

    return <div className={styles.Background} style={{ background: Color }} onClick={handleBackgroundClick}/>
}

export default Background;