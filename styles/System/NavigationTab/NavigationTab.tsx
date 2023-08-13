'use client'

import CheckInvisible from '@/modules/SystemFunction/CheckInvisible';
import Link from 'next/link';
import SVG from '../SVG/SVG';
import styles from './NavigationTab.module.css';

interface Props {
    array: {
        icon: string;
        text: string;
        link: string;
    }[];
}

const NavigationTab = ({
    array
}: Props) => {

    const { isClassInvisible } = CheckInvisible({Class: "SubHeaderZone"});
    
    return (
        <>
            <header className={styles.GroupHeader}>

            </header>
            
            <nav className={styles.Group}>
                <div className={styles.Container}>
                    {array.map((item, index) => (
                    <Link key={index} href={item.link} className={styles.Box}>
                        <SVG Icon={item.icon} Size={20}/>
                        <div className={styles.Text}>{item.text}</div>
                    </Link>
                    ))}
                </div>
            </nav>
        </>
    )
}

export default NavigationTab