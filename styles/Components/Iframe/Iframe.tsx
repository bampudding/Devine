import Loading from "@/styles/System/Loading/Loading";
import { Suspense } from "react";
import styles from "./Iframe.module.css";

interface Props {
    link: string;
}

const Iframe= ({
    link
}: Props) => {
    return (
        <Suspense fallback={<Loading/>}>
            <iframe className={styles.Iframe} tabIndex={-1} src={link}/>
        </Suspense>
    )
}

export default Iframe