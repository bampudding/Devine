
import Link from "next/link";
import styles from "./Title.module.css";

interface Props {
    size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    text: {
        pri: React.ReactNode;
        sec?: React.ReactNode;
    }
    side?: {
        text: React.ReactNode;
        link?: string;
        target?: string;
        onClick?: () => void;
    }
}

const Title = ({
    size, text, side
}: Props) => {
    
    return (
        <div className={`${styles.Group} ${styles[size]} ${size === "h1" || "h2" && "SubHeaderZone"}`}>
            <div className={styles.Title}>
                {text.pri}
                {text.sec && <span className="opacity-70">{text.sec}</span>}
            </div>
            {side && (side?.onClick ? <button className={styles.Side} onClick={side.onClick}>{side.text}</button> :
            side?.link ? <Link className={styles.Side} href={side.link} target={side.target}>{side.text}</Link> :
            <div className={styles.Side}>{side.text}</div>)}
        </div>
    )
}

export default Title