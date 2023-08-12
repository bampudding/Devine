
import Link from "next/link";
import styles from "./Title.module.css";

interface Props {
    size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    text: React.ReactNode;
    side?: {
        text: React.ReactNode;
        link?: string;
        onClick?: () => void;
    }
}

const Title = ({
    size, text, side
}: Props) => {
    return (
        <div className={`${styles.Group} ${styles[size]}`}>
            <div className={styles.Title}>{text}</div>
            {side && (side?.onClick ? <button className={styles.Side} onClick={side.onClick}>{side.text}</button> :
            side?.link ? <Link className={styles.Side} href={side.link}>{side.text}</Link> :
            <div className={styles.Side}>{side.text}</div>)}
        </div>
    )
}

export default Title