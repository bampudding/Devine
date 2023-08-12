import Image from "next/image";
import Link from "next/link";
import styles from "./Bestphoto.module.css";

interface Props {
    text: string;
    subText?: string;
    image: string;
    link: string;
}

const Bestphoto = ({
    text, subText, image, link
}: Props) => {
    return (
        <div className="GroupCard">
            <Link href={link} className={styles.Group}>
                <Image loading="eager" src={image} alt="베스트포토" fill/>
                <div className={styles.Textarea}>
                    <div className={styles.Text}>{text}</div>
                    {subText && <div className={styles.Subtext}>{subText}</div>}
                </div>
            </Link>
        </div>
    )
}

export default Bestphoto