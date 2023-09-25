import Link from "next/link";
import { usePathname } from "next/navigation";
import SVG from "../SVG/SVG";
import styles from "./Header.module.css";

interface Props {
    array: {
        headertext: string;
        link: string;
    }[];
}

const Header = ({
    array
}: Props) => {
    
    const pathname = usePathname();
    
    return (
        <>
            <header className={styles.Group}>
                <Link href="/" className={styles.Icon}>
                    <SVG Icon="Develoid" Size={22}/>
                </Link>
                <div className={styles.GroupLink}>
                    {array.map((item, index) => 
                        item.link !== '/' && item.link !== '/all' && (
                            <Link key={index} href={item.link} className={`${styles.Link} ${pathname === item.link && styles.Activated}`}>
                                {item.headertext}
                            </Link>
                        )
                    )}
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