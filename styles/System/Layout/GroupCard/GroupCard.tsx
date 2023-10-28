import Link from "next/link";
import styles from "./GroupCard.module.css"

interface Props {
    type?: "Default" | "LikeBox" | "NoBorder";
    noscale?: boolean;
    scale?: boolean;
    scale2x?: boolean;
    mobileHide?: boolean;
    pcHide?: boolean;
    tabletHide?: boolean;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    style?: React.CSSProperties;
}

const GroupCard = ({
    type, noscale, scale, scale2x, mobileHide, pcHide, tabletHide, className, children, onClick, style, href
}: Props) => {
    return (
        onClick ?
            <button type="button" onClick={onClick} className={`${styles.Group} ${noscale && "noscale"} ${scale && "scale"} ${scale2x && "scale2x"} ${className} ${mobileHide && "mobile-hide"} ${pcHide && "pc-hide"} ${tabletHide && "tablet-hide"} ${styles[type || ""]}`} style={{padding: 0} && style}>
                {children}
            </button>
        : href ?
            <Link href={href} className={`${styles.Group} ${scale && "scale"} ${scale2x && "scale2x"} ${className} ${mobileHide && "mobile-hide"} ${pcHide && "pc-hide"} ${tabletHide && "tablet-hide"} ${styles[type || ""]}`} style={style}>
                {children}
            </Link>
        :
            <div className={`${styles.Group} ${scale && "scale"} ${noscale && "noscale"} ${scale2x && "scale2x"} ${className} ${mobileHide && "mobile-hide"} ${pcHide && "pc-hide"} ${tabletHide && "tablet-hide"} ${styles[type || ""]}`} style={style}>
                {children}
            </div>
    )
}

export default GroupCard