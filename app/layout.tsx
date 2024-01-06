import type { Metadata } from 'next'
import "@/styles/Stylesheet/ImportStylesheet.css";
import { Providers } from './providers'
import LiveActivity from '@/styles/System/LiveActivity/LiveActivity'

export const metadata: Metadata = {
    title: '디벨로이드',
    description: '디벨서비스',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <head>
			</head>
			<body>
                <Providers>
                    <LiveActivity>
                        {children}
                    </LiveActivity>
                </Providers>
			</body>
        </html>
    )
}
