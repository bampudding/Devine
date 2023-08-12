import Link from "next/link"
import SVG from "../SVG/SVG"
import styles from "./Header.module.css"

interface Props {
    
}

const Header = ({

}: Props) => {
    return (
        <>
            <header className={styles.Group}>
                <Link href="/">
                    <SVG Icon="Google" Size={16}/>
                </Link>
                <div className={styles.GroupLink}>
                    <Link href="/" className={styles.Link}>COMMUNITY</Link>
                    <Link href="/" className={styles.Link}>GUIDE</Link>
                    <Link href="/" className={styles.Link}>EVENT</Link>
                    <Link href="/" className={styles.Link}>SUPPORT</Link>
                </div>
                <div className={styles.GroupIcon}>
                    <div className={styles.Icon}>
                        <SVG Icon="Apple" Size={16}/>
                    </div>
                </div>
            </header>
            <div className={styles.Background}/>
        </>
    )
}

export default Header