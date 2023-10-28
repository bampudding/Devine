'use client'

import styles from "./GroupBox.module.css"

interface Props {
    type?: "Default" | "Box" | "InnerBox" | "InnerMaintainedBox" | "MaintainedBox";
    grid?: 1 | 2 | 3 | 4;
    mobileHide?: boolean;
    pcHide?: boolean;
    tabletHide?: boolean;
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: any;
}

const GroupBox = ({
    type, grid, mobileHide, pcHide, tabletHide, className, children, style, onClick
}: Props) => {

    return (
        onClick ?
            <button className={`${styles.Group} ${className} ${mobileHide && "mobile-hide"} ${pcHide && "pc-hide"} ${tabletHide && "tablet-hide"} ${grid && styles.Grid} ${grid === 1 ? styles.gridOne : grid === 2 ? styles.gridTwo : grid === 3 ? styles.gridThree : grid === 4 && styles.gridFour} ${styles[type || ""]}`} style={style}>
                {children}
            </button>
        :
            <div className={`${styles.Group} ${className} ${mobileHide && "mobile-hide"} ${pcHide && "pc-hide"} ${tabletHide && "tablet-hide"} ${grid && styles.Grid} ${grid === 1 ? styles.gridOne : grid === 2 ? styles.gridTwo : grid === 3 ? styles.gridThree : grid === 4 && styles.gridFour} ${styles[type || ""]}`} style={style}>
                {children}
            </div>
    )
}

export default GroupBox