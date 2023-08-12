import SvgIcon from "@/styles/System/SVG/SVG";
import styles from "./Checkbox.module.css";

interface Props {
    type?: "Default" | "Filter" | "Toggle";
    size?: "Default" | "Small";
    icon?: {
        type: "Row" | "Column";
        text: string;
    };
    text: string;
    value?: string | number;
    checked?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    form?: any;
    toWhere?: string;
}

const Checkbox = ({
    type, size, icon, text, value, checked, disabled, readOnly, onChange, form, toWhere
}: Props) => {

    const { register } = form || "not form";

    return (
        <label className={`${type === "Filter" ? styles.GroupFilter : styles.Group} ${size === "Small" ? styles.Small : ""}`}>

            <input type="checkbox" id={value} name={value} value={value} className={styles.Input} checked={checked} disabled={disabled} readOnly={readOnly} onChange={onChange} {...(form && register && { ...register(toWhere)})}/>

            {!(type === "Filter" || type === "Toggle") && <div className={styles.Checkbox} />}
            
            {type === "Toggle" &&
                <div className={styles.Toggle}>
                    <div className={styles.ToggleCircle}/>
                </div>
            }

            {type === "Filter" ? 
                <div className={styles.FilterText}>
                    {icon &&
                        <div className={styles.Icon}>
                            <SvgIcon Icon={icon.text} Size={icon.type === "Column" ? 18 : 14} Color={checked ? "white" : "var(--body-default)"}/>
                        </div>
                    }

                    <div className={styles.Text}>
                        {text}
                    </div>
                </div>
                
                :
                
                <div className={styles.Text}>
                    {text}
                </div>
            }



            
        </label>
    );
    
};

export default Checkbox