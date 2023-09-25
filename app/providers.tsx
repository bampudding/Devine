'use client'

import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'next-themes'

export function Providers({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AnimatePresence>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </AnimatePresence>
    )
}