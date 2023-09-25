'use client'

import SVG from "@/styles/System/SVG/SVG";
import Link from "next/link";
import styles from "./Brand.module.css";

interface Props {
    type: "logo" | "color";
    smallLogo?: boolean;
    text: React.ReactNode;
    subText?: {
        hex: string;
        rgb: string;
    }
    image?: string;
    link?: string;
    onClick?: () => void;
}

const Brand = ({
    type, smallLogo, text, subText, image, link, onClick
}: Props) => {

    const renderData = () => {
        return (
            <>
                <div className={styles.Text}>{text}</div>
                {subText &&
                    <div className={styles.GroupSubText}>
                        <div className={styles.subText}>{subText.hex}</div>
                        <div className={styles.subText}>{subText.rgb}</div>
                    </div>
                }
                {type === "logo" && link && <Link href={link} className={styles.Download}>
                    <SVG Icon="ArrowTopRight" Size={14}/>다운로드</Link>}
            </>
        )
    }

    return (
        onClick ?
            <button type="button" className={`${styles.Group} ${type === "color" && styles.Color}`} style={{background: subText?.hex}} onClick={onClick}>
                {renderData()}
            </button>
        :
            <div className={`${styles.Group} ${smallLogo ? styles.SmallLogo : styles.DefaultLogo}`} style={{backgroundImage: `url(${image})`}}>
                {renderData()}
            </div>
    )
}

export default Brand