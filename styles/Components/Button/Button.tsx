import SVG from "@/styles/System/SVG/SVG";
import Link from "next/link";
import styles from "./Button.module.css";

interface Props {
    matrix?: "row" | "column";
    icon?: string;
    text: React.ReactNode;
    link?: string;
    onClick?: () => void;
}

const Button = ({
    matrix, icon, text, link, onClick
}: Props) => {

    const renderData = () => {
        return (
            <>
                {icon && <SVG Icon={icon} Size={matrix === "column" ? 18 : 14}/>}
                {text}
            </>
        )
    }

    return (
        link ?
            <Link href={link} className={`${styles.Group} ${matrix === "column" ? styles.Column : styles.Row}`}>
                {renderData()}
            </Link>
        : onClick ?
            <button type="button" onClick={onClick} className={`${styles.Group} ${matrix === "column" ? styles.Column : styles.Row}`}>
                {renderData()}
            </button>
        : 
            <div className={`${styles.Group} ${matrix === "column" ? styles.Column : styles.Row}`}>
                {renderData()}
            </div>
    )
}

export default Button