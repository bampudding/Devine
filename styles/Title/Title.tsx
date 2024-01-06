import styles from "./Title.module.css";

interface Props {
    children?: any;
    text?: React.ReactNode;
    multipleText?: {
        text: React.ReactNode;
        onClick?: () => void;
        checked?: boolean;
    }[];
    titleHref?: string | string[];
    titleOnClick?: (() => void) | (() => void[]);
    type?: "h1" | "h2" | "h3" | "h4" | "h5";
    arrow?: {
        folded?: boolean;
    };
    subText?: string;
    subTextHref?: string;
    subTextOnClick?: () => void;
}

const Title = ({
    children, text, multipleText, titleHref, titleOnClick, type, arrow, subText, subTextHref, subTextOnClick, 
}: Props) => {

    return (
        <div className="h1">
            {text}
        </div>
    )

}

export default Title