import styles from "./SmallText.module.css";

interface Props {
    Text: React.ReactNode;
    align?: "left" | "center" | "right";
}

const SmallText = ({
    Text, align
}: Props) => {
    return (
        <div className={styles.SmallText} style={{textAlign: align || "left"}}>{Text}</div>
    )
}

export default SmallText