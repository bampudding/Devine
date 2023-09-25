'use client'

import Button from "@/styles/Components/Button/Button";
import SvgIcon from "@/styles/System/SVG/SVG";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Error.module.css";

interface TextMapping {
    [key: string]: {
        Image: string;
        Title: string;
        SubTitle: string;
    };
}

const TextMapping: TextMapping = {
    NotFound: {
        Image: "https://images.unsplash.com/photo-1519242220831-09410926fbff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2708&q=80",
        Title: "잘못된 경로로 접근됨",
        SubTitle: "주소를 올바르게 입력했는지 확인해 주세요."
    },
    SystemError: {
        Image: "https://images.unsplash.com/photo-1511968822213-92de73315bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3840&q=80",
        Title: "시스템 오류가 발생함",
        SubTitle: "문제가 발생할 경우 디벨서포트로 문의해 주세요."
    }
}

interface Props {
    Type: keyof typeof TextMapping;
    text?: string;
    onClick?: () => void;
}

const ErrorData = ({
    Type, text, onClick
}: Props) => {

    const router = useRouter();
    
    const [Show, setShow] = useState(false);

    const Click = () => {
        setShow(prev => !prev);
        if (onClick) {
            onClick
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .2 }}
            className={styles.Group}>

            <div className={styles.LeftContent}>
                <Image priority src={TextMapping[Type].Image} alt={TextMapping[Type].Title} sizes="auto" width={1} height={1} style={{width: "100%", height: "100%"}}/>
            </div>

            <div className={styles.RightContent}>
                <div className={styles.GroupError}>
                    <div className={styles.Develoid}>
                        <SvgIcon Icon="Develoid" Size={28} Color='var(--background-default)'/>
                    </div>
                    <div className={styles.GroupText}>
                        <div className={styles.Title}>
                            {TextMapping[Type].Title}
                        </div>
                        <div className={styles.SubTitle} dangerouslySetInnerHTML={{ __html: TextMapping[Type].SubTitle }}/>
                    </div>
                </div>
                
                
                <div className={`${styles.GroupInteractionButton}`}>
                    {
                        Type === "NotFound" ?
                            <div className="grid-col-2 gap-12">
                                <Button matrix="row" icon="ArrowLeft" text="뒤로가기" onClick={() => window.history.back()}/>
                                <Button matrix="row" icon="HomeFill" text="홈으로 가기" link="/"/>
                            </div>
                        : Type === "SystemError" ?
                            <>
                                <div className="grid-col-3 gap-12">
                                    <Button matrix="row" icon="ArrowLeft" text="뒤로가기" onClick={() => router.back()}/>
                                    <Button matrix="row" icon="Refresh" text="새로고침" onClick={() => window.location.reload()}/>
                                    <Button matrix="row" icon="HomeFill" text="홈으로 가기" link="/"/>
                                </div>
                            </>
                        : null
                    }
                </div>
                
            </div>

            {Type === "SystemError" &&
                <div className={styles.GroupErrorLog}>

                    <button type="button" className={styles.Button} onClick={Click} style={{opacity: Show ? 1 : .6}}>
                        <SvgIcon Icon="Warning" Size={12}/>
                    </button>
                        
                    {Show && text &&
                        <div className={`${styles.ErrorLog} GroupBox_Maintained`}>
                            <div className={styles.ErrorTextTitle}>오류 로그</div>
                            <div className={styles.ErrorText}>{text}</div>
                        </div>
                    }
                    
                </div>
            }
        </motion.div>
    )
}

export default ErrorData