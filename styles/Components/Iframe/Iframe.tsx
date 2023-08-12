import styles from "./Iframe.module.css";

interface Props {
    link: string;
}

const Iframe= ({
    link
}: Props) => {
    return (
        <iframe className={styles.Iframe} loading="lazy" tabIndex={-1} src={link}/>
    )
}

export default Iframe