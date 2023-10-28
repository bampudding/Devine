import styles from "./Layout.module.css"

interface Props {
    type?: "Default" | "Inner";
    mobileHide?: boolean;
    pcHide?: boolean;
    tabletHide?: boolean;
    className?: string;
    children: React.ReactNode;
    ratio?: string;
}

const Layout = ({
    type, mobileHide, pcHide, tabletHide, className, children, ratio
}: Props) => {
    return (
        <div className={`${styles.Group} ${className} ${mobileHide && "mobile-hide"} ${pcHide && "pc-hide"} ${tabletHide && "tablet-hide"} ${styles[type || ""]}`} style={{gridTemplateColumns: ratio}}>
            {children}
        </div>
    )
}

export default Layout