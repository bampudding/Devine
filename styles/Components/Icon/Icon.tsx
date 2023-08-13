'use client'

import SvgIcon from "@/styles/System/SVG/SVG";
import styles from "./Icon.module.css";

interface Props {
    Type?: "Default" | "Theme" | "Rectangle" | "System"
    Icon: string;
    Size: number;
    Checked?: boolean;
    onClick?: () => void;
}

const Icon = ({
    Type, Icon, Size, Checked, onClick
}: Props) => {

    return (
        <button type="button" title={Icon} className={`${styles.Icon} ${Checked ? styles.Checked : ""} ${Type === "System" ? styles.System : Type === "Theme" ? styles.Theme : ""}`} onClick={onClick} style={{borderRadius: Type === "Rectangle" ? "var(--radius-default)" : "var(--radius-circle)"}}>
            <SvgIcon Icon={Icon} Size={Size}/>
        </button>
    )

}

export default Icon