import styles from "./SVG.module.css";
import SVGData from "./SVGData";

interface Props {
    Icon: string;
    Size: number;
    Color?: string;
}

const normalizeDToArray = (d: string | (string | string[])[]): string[] => {
    if (Array.isArray(d)) {
        return d.flat();
    }
    return [d];
};

const SVG = ({
    Icon, Size, Color,
}: Props) => {
    const dArray: string[] = normalizeDToArray(SVGData[Icon].d);

    return (
        <div className={styles.SVG} style={{ width: `calc(.1 * ${Size}rem)`, height: `calc(.1 * ${Size}rem)` }}>
            <svg style={{ width: `calc(.1 * ${Size}rem)`, height: `calc(.1 * ${Size}rem)` }} viewBox={SVGData[Icon].viewBox}>
                {dArray.map((d, index) => (
                    <path key={index} d={d} fill={Color ? Color : "var(--body-default)"} />
                ))}
            </svg>
        </div>
    );
}

export default SVG