import SvgIcon from "@/styles/System/SVG/SVG";
import Image from "next/image";
import checkboxStyles from "./Checkbox.module.css";
import integratedStyles from "./Integrated.module.css";
import styles from "./Radio.module.css";

interface Props {
    type?: "Default" | "Select";
    icon?: {
        type: "Row" | "Column";
        text: string;
    };
    image?: string;
    text: string;
    name?: string;
    value?: string | number | null;
    checked?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    form?: any;
    toWhere?: string;
    color?: "Light" | "System" | "Dark" | "Muse" | "MuseSecondary" | "Sand" | "SandSecondary" | "Water" | "WaterSecondary" | "Coral" | "CoralSecondary";
}

const Radio = ({
    type, icon, image, text, name, value, checked, disabled, readOnly, onChange, form, toWhere, color
}: Props) => {

    // type === "Default" : 일반 라디오
    // type === "Select" : 버튼과 동일한 디자인을 가진 라디오 (이미지 이용 가능)

    const { register } = form || "not form";

    return (
        <label className={type === "Select" ? (`${checked && "Muse"} ${styles.Select}`) : styles.Group}>

            {/* 숨김 목적의 input */}
            <input type="radio" id={value} name={name} value={value} className={integratedStyles.Input} checked={checked} disabled={disabled} readOnly={readOnly} onChange={onChange} {...(form && register && { ...register(toWhere)})}/>

            {type === "Select" ?
                <div className={integratedStyles.Text}>
                    {icon &&
                        <SvgIcon Icon={icon.text} Size={icon.type === "Column" ? 18 : 14} Color="var(--body-default)"/>
                    }

                    {image &&
                        <div className={styles.Image}>
                            <Image sizes="auto" width={100} height={100} style={{width: "100%", height: "100%"}} className={styles.ImageData} src={image} alt="Icon"/>
                        </div>
                    }

                    {text}
                </div>
            :
                <>
                    <div className={checkboxStyles.Checkbox}/>
                    {text &&
                        <div className={integratedStyles.Text}>
                            {text}
                        </div>
                    }
                </>
            }
        </label>
    );
    
};

export default Radio