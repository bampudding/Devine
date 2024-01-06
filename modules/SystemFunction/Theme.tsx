'use client'

import { ThemeProvider, useTheme } from "next-themes";

interface Props {
    children: any;
}

const ThemeProviders = ({
    children
}: Props) => {

    return (
       <ThemeProvider>{children}</ThemeProvider>
    )
}

export default ThemeProviders