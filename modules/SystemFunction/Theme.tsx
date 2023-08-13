'use client'

import Icon from "@/styles/Components/Icon/Icon";
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
        <div className="GroupTheme">
            {mounted &&
                <Icon Type="Theme" Icon={IconName("Sun")} Size={16} Checked={localStorage.theme === 'light'} onClick={() => ThemeChange("light")} />
            }
            
            <Icon Type="Theme" Icon={isMobile ? IconName("Phone") : IconName("Screen")} Size={16} Checked={localStorage.theme === 'system' || !localStorage.theme} onClick={() => ThemeChange("system")} />
            
            {mounted &&
                <Icon Type="Theme" Icon={IconName("Moon")} Size={16} Checked={localStorage.theme === 'dark'} onClick={() => ThemeChange("dark")} />
            }
        </div>
    )
}

export default ThemeProviders