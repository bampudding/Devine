'use client'

import { motion } from "framer-motion";
import { useEffect } from "react";
import styles from "./LiveActivity.module.css";

interface Props {
    children: any;
    className?: any;
}

const LiveActivity = ({
    children, className
}: Props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .2 }}
            className={`${styles.LiveActivity} ${className}`}
        >
            <div className={styles.Container}>
                {children}
            </div>
        </motion.div>
    )

}

export default LiveActivity