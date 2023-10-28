'use client'

import SvgIcon from "@/styles/System/SVG/SVG";
import styles from "./Icon.module.css";
import Link from "next/link";

interface Props {
    Type?: "Default" | "Square" | "System" | "Exit" | "Filter";
    Icon?: string;
    Size: number;
    Title?: string;
    Padding?: string | number;
    Checked?: boolean;
    className?: string;
    opacity?: number;
    onClick?: () => void;
    href?: string;
    target?: string;
    replace?: boolean;
    scroll?: boolean;
    prefetch?: boolean;
    style?: React.CSSProperties;
}

const Icon = ({
    Type, Title, Icon, Size, Padding, Checked, className, opacity, onClick, href, target, replace, scroll, prefetch, style
}: Props) => {

    const RenderData = () => {
        return <SvgIcon Icon={Type === "Exit" ? "Exit" : Icon ? Icon : "Musecat" } Size={Size}/>
    }

    return (
        href ?
            <Link href={href} target={target} replace={replace} scroll={scroll} prefetch={prefetch} className={`${className} ${styles.Icon} ${Checked ? styles.Checked : ""} ${styles[Type || "Default"]}`} style={{padding: Padding, opacity: opacity}}>
                {RenderData()}
            </Link>
        : onClick ?
            <button type="button" className={`${className} ${styles.Icon} ${Checked ? styles.Checked : ""} ${styles[Type || "Default"]}`} onClick={onClick} style={{padding: Padding, opacity: opacity}}>
                {RenderData()}
            </button>
        :
            <div className={`${className} ${styles.Icon} ${Checked ? styles.Checked : ""} ${styles[Type || "Default"]}`} style={{padding: Padding, opacity: opacity}}>
                {RenderData()}
            </div>
    )

}

export default Icon