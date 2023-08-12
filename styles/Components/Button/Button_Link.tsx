import SVG from "@/styles/System/SVG/SVG";
import Link from "next/link";
import styles from "./Button.module.css";

interface Props {
    matrix?: "row" | "column";
    icon?: string;
    text: React.ReactNode;
    link?: string;
}

const Button_Link = ({
    matrix, icon, text, link
}: Props) => {
    return (
        <Link href={link || ""} className={`${styles.Group} ${matrix === "column" ? styles.Column : styles.Row}`}>
            {icon && <SVG Icon={icon} Size={matrix === "column" ? 18 : 14}/>}
            {text}
        </Link>
    )
}

export default Button_Link