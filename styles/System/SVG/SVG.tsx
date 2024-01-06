import styles from "./SVG.module.css";
import SVGData from "./SVGData";

interface Props {
    icon: string;
    size?: number;
    width?: number;
    height?: number;
    color?: string;
}

const normalizeDToArray = (d: string | (string | string[])[]): string[] => {
    if (Array.isArray(d)) {
        return d.flat();
    }
    return [d];
};

const SvgIcon = ({
    icon, size, width, height, color,
}: Props) => {
    const dArray: string[] = normalizeDToArray(SVGData[icon].d);

    return (
        <div className={styles.SVG} style={{ width: `calc(.1 * ${width || size}rem)`, height: `calc(.1 * ${height || size}rem)` }}>
            <svg style={{ width: "auto", height: `calc(.1 * ${height || size}rem)` }} viewBox={SVGData[icon].viewBox}>
                {dArray.map((d, index) => (
                    <path key={index} d={d} fill={color ? color : "var(--hds-color-data)"} />
                ))}
            </svg>
        </div>
    );
}

export default SvgIcon