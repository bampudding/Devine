import styles from "./LiveActivity.module.css";

interface Props {
    children: any;
}

const LiveActivity = ({
    children
}: Props) => {

    return (
        <div className={styles.LiveActivity}>
            <div className={styles.Container}>
                {children}
            </div>
        </div>
    )

}

export default LiveActivity