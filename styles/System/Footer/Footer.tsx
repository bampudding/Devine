import { ThemeButtons } from "@/modules/SystemFunction/Theme"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.Group}>
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
        </footer>
    )
}

export default Footer