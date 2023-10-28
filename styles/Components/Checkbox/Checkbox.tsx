import SvgIcon from "@/styles/System/SVG/SVG";
import styles from "./Checkbox.module.css";
import radioStyles from "./Radio.module.css";
import integratedStyles from "./Integrated.module.css";
import Image from "next/image";

interface Props {
    type?: "Default" | "Filter" | "Toggle" | "Select";
    icon?: {
        type?: "Row" | "Column";
        text?: string;
    };
    image?: string;
    text?: string;
    value?: string | number;
    checked?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    form?: any;
    toWhere?: string;
}

const Checkbox = ({
    type, icon, image, text, value, checked, disabled, readOnly, onChange, form, toWhere
}: Props) => {

    // type === "Default" : 일반 체크박스
    // type === "Filter" : 홈 화면 등에서 이용되는 필터 체크박스
    // type === "Toggle" : 토글 디자인으로 된 체크박스
    // type === "Select" : 버튼과 동일한 디자인을 가진 라디오 (이미지 이용 가능)

    const { register } = form || "not form";

    return (
        // 필터일 때는 Filter, 아닐 때는 Group
        // 필터일 때 checked가 활성화되어 있으면 Muse 색상을 부여
        <label className={type === "Filter" ? (checked ? `Muse ${styles.Filter}` : styles.Filter) : type === "Select" ? (`${checked && "Muse"} ${radioStyles.Select} `) : integratedStyles.Group}>

            {/* 숨김 목적의 input */}
            <input type="checkbox" id={value} name={value} value={value} className={integratedStyles.Input} checked={checked} disabled={disabled} readOnly={readOnly} onChange={onChange} {...(form && register && { ...register(toWhere)})}/>

            {/* 필터와 토글이 모두 아닌 경우 기본 체크박스를 이용 */}
            {type !== "Filter" && type !== "Toggle" && type !== "Select" &&
                <div className={styles.Checkbox}/>
            }
            
            {/* 토글일 때는 토글 디자인 이용 */}
            {type === "Toggle" &&
                <div className={styles.Toggle}>
                    <div className={styles.ToggleCircle}/>
                </div>
            }

            {type === "Select" &&
                <div className={integratedStyles.Text}>
                    {icon && icon.text &&
                        <SvgIcon Icon={icon.text} Size={icon.type === "Column" ? 18 : 14} Color="var(--body-default)"/>
                    }

                    {image &&
                        <div className={radioStyles.Image}>
                            <Image sizes="auto" width={100} height={100} style={{width: "100%", height: "100%"}} className={styles.ImageData} src={image} alt="Icon"/>
                        </div>
                    }

                    {text}
                </div>
            }

            {/* 텍스트 디자인 */}
            {type !== "Select" &&
                <div className={integratedStyles.Text}>
                    {icon && icon.text &&
                        <SvgIcon Icon={icon.text} Size={icon.type === "Column" ? 18 : 14} Color={checked ? "white" : ""}/>
                    }
                    <div className={integratedStyles.Text}>
                        {text}
                    </div>
                </div>
            }
        </label>
    );
    
};

export default Checkbox