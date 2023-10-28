import styles from "./Grid.module.css"

interface Props {
    matrix?: "Row" | "Column";
    grid?: 1 | 2 | 3 | 4;
    flexible?: boolean;
    gap?: string;
    strict?: boolean;
    mobileHide?: boolean;
    pcHide?: boolean;
    tabletHide?: boolean;
    className?: string;
    children: React.ReactNode;
}

const Grid = ({
    matrix, grid, flexible, gap, strict, mobileHide, pcHide, tabletHide, className, children
}: Props) => {
    return (
        <div className={`${styles.Group} ${strict && styles.strict} ${className} ${mobileHide && "mobile-hide"} ${pcHide && "pc-hide"} ${tabletHide && "tablet-hide"} ${grid && styles.Grid}
        ${
            grid === 1 ?
                (flexible ? styles.gridOneFlex : styles.gridOne) :
            grid === 2 ?
                (flexible ? styles.gridTwoFlex : styles.gridTwo) :
            grid === 3 ?
                (flexible ? styles.gridThreeFlex : styles.gridThree) :
            grid === 4 &&
                (flexible ? styles.gridFourFlex : styles.gridFour) 
        } 
        ${styles[matrix || ""]}`} style={{gap: gap}}>
            {children}
        </div>
    )
}

export default Grid