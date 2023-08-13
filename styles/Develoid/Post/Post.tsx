import Loading from "@/styles/System/Loading/Loading";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import styles from "./Post.module.css";

interface Props {
    text: string;
    subText?: string;
    image: string;
    link: string;
}

const Post = ({
    text, subText, image, link
}: Props) => {
    return (
        <div className="GroupCard">
            <Link href={link} className={styles.Group}>
                <Suspense fallback={<Loading/>}>
                    <Image priority src={image} alt={text} fill sizes="auto"/>
                </Suspense>
                <div className={styles.Textarea}>
                    <div className={styles.Text}>{text}</div>
                    {subText && <div className={styles.Subtext}>{subText}</div>}
                </div>
            </Link>
        </div>
    )
}

export default Post