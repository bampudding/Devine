import SvgIcon from "@/styles/System/SVG/SVG";
import styles from "./Checkbox.module.css";

interface Props {
    type?: "Default" | "Filter" | "Toggle" | "Settings";
    size?: "Default" | "Small";
    icon?: {
        type: "Row" | "Column";
        text: string;
    };
    text: string;
    name?: string;
    value?: string | number;
    checked?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    form?: any;
    toWhere?: string;
    color?: "Light" | "System" | "Dark" | "Muse" | "MuseSecondary" | "Sand" | "SandSecondary" | "Water" | "WaterSecondary" | "Coral" | "CoralSecondary";
}

const Radio = ({
    type, size, icon, text, name, value, checked, disabled, readOnly, onChange, form, toWhere, color
}: Props) => {

    const { register } = form || "not form";

    return (
        <label className={`${type === "Filter" ? styles.GroupFilter : type === "Settings" ? styles.GroupSettings : styles.Group} ${size === "Small" ? styles.Small : ""} ${color ? color : ""}`}>

            <input type="radio" id={value} name={name} value={value} className={styles.Input} checked={checked} disabled={disabled} readOnly={readOnly} onChange={onChange} {...(form && register && { ...register(toWhere)})}/>

            {type !== "Filter" && type !== "Settings" && <div className={styles.Checkbox} />}

            {type === "Filter" || type === "Settings" ? 
                <div className={type === "Filter" ? styles.FilterText : styles.SettingsText}>
                    {icon &&
                        <div className={styles.Icon}>
                            <SvgIcon Icon={icon.text} Size={icon.type === "Column" ? 18 : 14} Color={checked ? "white" : "var(--body-default)"}/>
                        </div>
                    }

                    <div className={styles.Text}>{text}</div>
                </div>
                
                :
                
                <div className={styles.Text}>
                    {text}
                </div>
            }



            
        </label>
    );
    
};

export default Radio