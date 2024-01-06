import styles from "./LiveActivity.module.css";

interface Props {
    children: any;
    className?: any;
}

const LiveActivity = ({
    children, className
}: Props) => {

    return (
        <div className={`${styles.LiveActivity} ${className}`}>
            <div className={styles.Container}>
                {children}
            </div>
        </div>
    )

}

export default LiveActivity