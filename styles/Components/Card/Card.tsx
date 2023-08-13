import Loading from "@/styles/System/Loading/Loading";
import SVG from "@/styles/System/SVG/SVG";
import Link from "next/link";
import { Suspense } from "react";
import styles from "./Card.module.css";

interface Props {
    type?: "horizontal" | "vertical"
    size?: "default" | "small";
    icon?: {
        hidebox?: boolean;
        icon: string;
    }
    image?: {
        hidebox?: boolean;
        url: string;
    }
    text: React.ReactNode;
    subText?: {
        position: "top" | "bottom";
        text: React.ReactNode;
    }
    link?: {
        link: string;
        pointer?: boolean;
    };
}

const Card = ({
    type, size, icon, image, text, subText, link
}: Props) => {
    return (
        <Link href={link?.link || ""} className={`${styles.Group} ${size === "small" ? styles.Small : ""} ${type === "vertical" ? styles.Vertical : ""}`}>
            
            <div className={`${styles.LeftContent} ${type === "vertical" ? styles.Vertical : ""}`}>

                {icon && <div className={`${styles.Icon} ${icon.hidebox ? styles.hidebox : ""}`}><SVG Icon={icon.icon} Size={size === "small" ? 12 : type === "vertical" ? 14 : 18}/></div>}
                {image && <Suspense fallback={<Loading/>}><div className={`${styles.Image} ${image.hidebox ? styles.hidebox : ""}`}><SVG Icon={image.url} Size={size === "small" ? 12 : type === "vertical" ? 14 : 18}/></div></Suspense>}

                <div className={styles.GroupText}>
                    {subText?.position === "top" && <div className={styles.subText}>{subText.text}</div>}
                    <div className={styles.Text}>{text}</div>
                    {subText?.position === "bottom" && <div className={styles.subText}>{subText.text}</div>}
                </div>
                
            </div>

           {link?.pointer && <div className={styles.Pointer}><SVG Icon="ArrowKeyRight" Size={16}/></div>}

        </Link>
    )
}

export default Card