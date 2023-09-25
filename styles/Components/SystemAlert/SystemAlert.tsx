'use client'

import SvgIcon from '@/styles/System/SVG/SVG';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './SystemAlert.module.css';

interface Props {
    Icon: string;
    Text: string;
}

const SystemAlert = ({
    Icon, Text
}: Props) => {
    
    const [Show, setShow] = useState(true);

    const Click = () => {
        setShow(false);
    }
    
    return (
        Show &&
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: .2 }}
                className={styles.Group} onClick={Click}>
                    {Icon && <SvgIcon Icon={Icon} Size={12}/>}
                <div className={styles.Text}>{Text}</div>
            </motion.button>
    )
}

export default SystemAlert