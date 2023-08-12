import Link from "next/link"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.TopContent}>
                <div className={styles.Element}>
                    <div>
                        DEVELOID
                    </div>
                </div>
                <div className={styles.Element}>
                    <Link className={styles.Button} href="/policy/terms">이용 약관</Link>
                    <Link className={styles.Button} href="/policy/privacy">개인정보처리방침</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer