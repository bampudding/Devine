import SVG from "../SVG/SVG"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.Group}>
            <div className={styles.Container}>
                <div className={styles.LeftContent}>
                    DEVELOID
                </div>
                <div className={styles.RightContent}>
                    <SVG Icon="Develoid" Size={24}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer