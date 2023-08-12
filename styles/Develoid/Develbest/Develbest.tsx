import Image from "next/image";
import Link from "next/link";
import styles from "./Develbest.module.css";

interface Props {
    text: string;
    subText: string;
    image: string;
    link: string;
}

const Develbest = ({
    text, subText, image, link
}: Props) => {
    return (
        <div className="GroupCard">
            <Link href={link} className={styles.Group}>
                <div className={styles.Textarea}>
                    <div className={styles.Text}>{text}</div>
                    <div className={styles.Subtext}>{subText}</div>
                </div>
                <Image src={image} alt={text} fill sizes="auto"/>
            </Link>
        </div>
    )
}

export default Develbest