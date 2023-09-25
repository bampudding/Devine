import { ThemeButtons } from "@/modules/SystemFunction/Theme"
import { AnimatePresence, motion } from "framer-motion"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <AnimatePresence>
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: .2 }}
                className={styles.Group}
            >
                <div className={styles.Container}>
                    <div className={styles.LeftContent}>
                        <div className={styles.Promotion}>
                            <p>Build</p>
                            <h5>IT_Tech_Talks</h5>
                            <h5>Community</h5>
                            <h5>Content</h5>
                        </div>
                        <div className={styles.Promotion}>
                            <p>Make</p>
                            <h6>{`<DEVELOID/>`}</h6>
                        </div>
                    </div>
                    <div className={styles.RightContent}>
                        <ThemeButtons/>
                    </div>
                </div>
            </motion.footer>
        </AnimatePresence>
    )
}

export default Footer