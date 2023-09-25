'use client'

import { AnimatePresence, motion } from 'framer-motion';
import styles from './Loading.module.css';

interface Props {
    full?: boolean;
}

const Loading = ({
    full
}: Props) => {

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: .2 }}
                className={`${styles.Container} ${full ? styles.Full : ""}`}>
                <div className={styles.spinner}>
                    <svg viewBox="0 0 400 400">
                        <circle cx="200" cy="200" r="20" />
                    </svg>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Loading