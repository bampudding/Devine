import Image from "next/image";
import Link from "next/link";
import styles from "./Bestphoto.module.css";

interface Props {
    text: string;
    subText?: string;
    image: string;
    link?: string;
    target?: string;
}

const Bestphoto = ({
    text, subText, image, link, target
}: Props) => {
    return (
        <div className="GroupCard">
            <Link href={link || ""} target={target} className={styles.Group}>
                <Image priority src={image} alt="베스트포토" fill sizes="auto"/>
                <div className={styles.Textarea}>
                    <div className={styles.Text}>{text}</div>
                    {subText && <div className={styles.Subtext}>{subText}</div>}
                </div>
            </Link>
        </div>
    )
}

export default Bestphoto