'use client'

import CheckInvisible from '@/modules/SystemFunction/CheckInvisible';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
    const pathname = usePathname();
    const headerText = (
        pathname === '/' ? '디벨로이드' :
        pathname === '/support' ? '디벨서포트' :
        array.find(item => pathname === item.link)?.text
    );
    
    return (
        <>
            {isClassInvisible &&
                <motion.header
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .1 }}
                    className={styles.GroupHeader}
                >
                    <header className={`${styles.GroupHeader}`}>
                        <div className={styles.text}>{headerText}</div>
                    </header>
                    <div className={styles.Background}/>
                </motion.header>
            }
            <nav className={styles.Group}>
                <div className={styles.Container}>
                    {array.map((item, index) => 
                        <Link key={index} href={item.link} className={styles.Box}>
                            <SVG Icon={pathname === item.link ? item.icon + "Fill" : item.icon} Size={20}/>
                            <div className={styles.Text}>{item.text}</div>
                        </Link>
                    )}
                </div>
            </nav>
        </>
    )
}

export default NavigationTab