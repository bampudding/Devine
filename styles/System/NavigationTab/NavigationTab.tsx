'use client'

import CheckInvisible from '@/modules/SystemFunction/CheckInvisible';
import { AnimatePresence, motion } from 'framer-motion';
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
        pathname === '/' ? '디벨서비스' :
        pathname === '/support' ? '디벨서포트' :
        pathname === '/admin/cafefront' ? '카페 대문 편집기' :
        array.find(item => pathname === item.link)?.text
    );
    
    return (
        <>
            <AnimatePresence>
                {isClassInvisible &&
                    <motion.header
                        initial={{ top: -100 }}
                        animate={{ top: 0 }}
                        exit={{ top: -100 }}
                        className={styles.GroupHeader}
                    >
                        <div className={styles.text}>{headerText}</div>
                    </motion.header>
                }
            </AnimatePresence>
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