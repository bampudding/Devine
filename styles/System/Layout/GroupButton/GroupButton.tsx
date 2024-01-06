import styles from "./GroupButton.module.css"

interface Props {
    matrix?: "Row" | "Column";
    grid?: 1 | 2 | 3 | 4;
    flexible?: boolean;
    mobileHide?: boolean;
    pcHide?: boolean;
    tabletHide?: boolean;
    className?: string;
    children: React.ReactNode;
}

const GroupButton = ({
    matrix, grid, flexible, mobileHide, pcHide, tabletHide, className, children
}: Props) => {
    return (
        <div className={`${styles.Group} ${className} ${mobileHide && "mobile-hide"} ${pcHide && "pc-hide"} ${tabletHide && "tablet-hide"} ${grid && styles.Grid}
        ${
            grid === 1 ?
                (flexible ? styles.gridOneFlex : styles.gridOne) :
            grid === 2 ?
                (flexible ? styles.gridTwoFlex : styles.gridTwo) :
            grid === 3 ?
                (flexible ? styles.gridThreeFlex : styles.gridThree) :
            grid === 4 &&
                (flexible ? styles.gridFourFlex : styles.gridFour) 
        } ${styles[matrix || ""]}`}>
            {children}
        </div>
    )
}

export default GroupButton