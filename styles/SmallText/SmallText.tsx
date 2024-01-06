import styles from "./SmallText.module.css";

interface Props {
    children?: any;
    align?: "left" | "center" | "right";
}

const SmallText = ({
    children, align
}: Props) => {
    return (
        <div className={styles.SmallText} style={{textAlign: align || "left"}}>{children}</div>
    )
}

export default SmallText