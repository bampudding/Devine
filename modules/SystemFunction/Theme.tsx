'use client'

import Radio from "@/styles/Components/Checkbox/Radio";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";
import CheckDevice from "./CheckDevice";

interface Props {
    children: any;
}

interface ButtonProps {
    Type?: "Default" | "Settings";
}

const ThemeProviders = ({
    children
}: Props) => {

    return (
       <ThemeProvider>{children}</ThemeProvider>
    )
}

export const ThemeButtons = ({
    Type
}: ButtonProps) => {
    
    const [mounted, setMounted] = useState(false)
    const {resolvedTheme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    
    const ThemeChange = (theme: string) => {
        setTheme(theme);
    };

    const IconName = (theme: string) => {
        if (resolvedTheme === theme) {
            return `${theme}Fill`;
        }
        if (theme === 'Sun') {
            return localStorage.theme === 'light' ? 'SunFill' : 'Sun';
        }
        if (theme === 'Phone') {
            return localStorage.theme === 'system' || !localStorage.theme ? 'PhoneFill' : 'Phone';
        }
        if (theme === 'Screen') {
            return localStorage.theme === 'system' || !localStorage.theme ? 'ScreenFill' : 'Screen';
        }
        if (theme === 'Moon') {
            return localStorage.theme === 'dark' ? 'MoonFill' : 'Moon';
        }
        return theme;
    };

    const isMobile = CheckDevice()
    
    return (
        <>
            <Radio icon={{type: "Column", text: IconName("Sun")}} text="라이트 모드" checked={localStorage.theme === 'light'} onChange={() => ThemeChange("light")} color="Light"/>
            <Radio icon={{type: "Column", text: isMobile ? IconName("Phone") : IconName("Screen")}} text="시스템 연동" checked={localStorage.theme === 'system' || !localStorage.theme} onChange={() => ThemeChange("system")} color="System"/>
            <Radio icon={{type: "Column", text: IconName("Moon")}} text="다크 모드" checked={localStorage.theme === 'dark'} onChange={() => ThemeChange("dark")} color="Dark"/>
        </>
    )
}

export default ThemeProviders