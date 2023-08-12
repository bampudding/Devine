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
                <Link href="/" className={styles.Icon}>
                    <SVG Icon="Develoid" Size={22}/>
                </Link>
                <div className={styles.GroupLink}>
                    <Link href="https://develoid.net" className={styles.Link}>COMMUNITY</Link>
                    <Link href="https://develoid.github.io" className={styles.Link}>GUIDE</Link>
                    <Link href="https://cafe.naver.com/develoid/menu/604" className={styles.Link}>EVENT</Link>
                    <Link href="/support" className={styles.Link}>SUPPORT</Link>
                </div>
                <Link href="/all" className={styles.Icon}>
                    <SVG Icon="Menu" Size={20}/>
                </Link>
            </header>
            <div className={styles.Background}/>
        </>
    )
}

export default Header