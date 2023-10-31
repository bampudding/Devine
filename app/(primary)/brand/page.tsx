'use client'

import SmallText from "@/styles/Components/SmallText/SmallText";
import SystemAlert from "@/styles/Components/SystemAlert/SystemAlert";
import Title from "@/styles/Components/Title/Title";
import Brand from "@/styles/Develoid/Brand/Brand";
import styles from "@/styles/Develoid/Brand/Brand.module.css";
import Grid from "@/styles/System/Layout/Grid/Grid";
import GroupBox from "@/styles/System/Layout/GroupBox/GroupBox";
import Layout from "@/styles/System/Layout/Layout/Layout";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Page() {

    const resolvedTheme = useTheme()
    const [showSystemAlert, setShowSystemAlert] = useState(false);
    const [themeLoaded, setThemeLoaded] = useState(false);
    useEffect(() => {
        if (resolvedTheme.resolvedTheme) {
            setThemeLoaded(true);
        }
    }, [resolvedTheme]);


    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (showSystemAlert) {
            timer = setTimeout(() => {
                setShowSystemAlert(false);
            }, 5000);
        }
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [showSystemAlert]);

    const copyToClipboard = (hex: string) => {
        navigator.clipboard.writeText(hex);
        setShowSystemAlert(true);
    }

    return (
        <>
            <Title size="h2" text={{pri: "브랜드 아이덴티티"}}/>

            <Layout>

                <GroupBox>
                    <GroupBox style={{gap: "var(--gap-small)"}}>
                        <Title size="h4" text={{pri: "로고"}}/>
                        <SmallText Text="심볼과 시그니처 또는 로고타입 전용으로 사용할 수 있습니다."/>
                    </GroupBox>
                    
                    {themeLoaded &&
                        <div className={styles.GridLogo}>
                            <div style={{gridColumn: "span 2"}}>
                                <Brand type="logo" image={`/images/brand/${resolvedTheme.resolvedTheme}/signature.svg`} text="시그니처 로고" link="https://go.develoid.net/brand/signature.zip"/>
                            </div>
                            <Brand type="logo" image={`/images/brand/${resolvedTheme.resolvedTheme}/symbol.svg`} text="심볼 로고" link="https://go.develoid.net/brand/symbol.zip"/>
                            <Brand type="logo" smallLogo image={`/images/brand/${resolvedTheme.resolvedTheme}/logotype.svg`} text="로고타입" link="https://go.develoid.net/brand/logotype.zip"/>
                        </div>
                    }

                </GroupBox>

                <GroupBox>
                    <Title size="h4" text={{pri: "컬러 팔레트"}}/>
                    
                    <Grid grid={3}>
                        <Brand type="color" text={<>Develoid<br/>Blue</>} subText={{hex: "#1F84FF", rgb: "R31 G132 B255"}} onClick={() => copyToClipboard("#1F84FF")}/>
                        <Brand type="color" text={<>Dynamic<br/>Violet</>} subText={{hex: "#6F53E0", rgb: "R121 G53 B255"}} onClick={() => copyToClipboard("#6F53E0")}/>
                        <Brand type="color" text={<>Dynamic<br/>Coral</>} subText={{hex: "#E56A6A", rgb: "R229 G106 B106"}} onClick={() => copyToClipboard("#E56A6A")}/>
                    </Grid>

                </GroupBox>
                
            </Layout>
            
            {showSystemAlert && <SystemAlert Icon="Clipboard" Text="HEX 값을 클립보드에 복사했어요."/>}
        </>
    )
}