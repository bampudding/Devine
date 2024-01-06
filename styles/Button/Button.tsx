'use client'

import SvgIcon from "@/styles/System/SVG/SVG";
import styles from "./Button.module.css";
import Link from "next/link";

interface Props {
    filter?: boolean;
    tabIndex?: number;
    matrix?: "Row" | "Column";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    icon?: string;
    text?: string;
    href?: any;
    target?: string;
    replace?: boolean;
    scroll?: boolean;
    prefetch?: boolean;
    backgroundColor?: string;
    color?: string;
    onClick?: () => void;    
}

export function HDS_Button({
    filter, tabIndex, matrix, type, disabled, icon, text, href, target, replace, scroll, prefetch, backgroundColor, color, onClick
}: Props) {

    const ButtonContent = () => {
        return (
            <>
                {icon && <SvgIcon icon={icon} size={matrix === "Column" ? 20 : 14} color={"var(--"}/>}
                {text}
            </>
        )
    }
  
    return (
        href ?
            <Link tabIndex={tabIndex} href={href} target={target} replace={replace} scroll={scroll} prefetch={prefetch} className={`${styles.Button} ${matrix === "Column" ? styles.Column : styles.Row}`} style={{background: backgroundColor || "var(--hds-background-stock)", color: color || "var(--hds-color-data)"}}>
                {ButtonContent()}
            </Link>
        : onClick ?
            <button type={type} disabled={disabled} title={text} className={`${styles.Button} ${matrix === "Column" ? styles.Column : styles.Row}`} onClick={onClick} style={{background: backgroundColor || "var(--hds-background-stock)", color: color || "var(--hds-color-data)"}}>
                {ButtonContent()}
            </button>
        :  
            <div className={`${styles.Button} ${matrix === "Column" ? styles.Column : styles.Row}`} style={{background: backgroundColor || "var(--hds-background-stock)", color: color || "var(--hds-color-data)"}}>
                {ButtonContent()}
            </div>
    );
};