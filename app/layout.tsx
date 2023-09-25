import '@/styles/StyleSheet/ImportStyleSheet.css';
import { Metadata } from "next";
import { Providers } from './providers';

const APP_NAME = "디벨로이드";
const APP_DESCRIPTION = "디벨로이드 서비스";

export const metadata: Metadata = {
  	title: APP_NAME,
  	description: APP_DESCRIPTION,
	  metadataBase: new URL('https://devine.develoid.net'),
	applicationName: APP_NAME,
	appleWebApp: {
		capable: true,
		title: APP_NAME,
		statusBarStyle: "default"
	},
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#F2F2F7' },
		{ media: '(prefers-color-scheme: dark)', color: '#000000' }
	],
	manifest: "/manifest.json",
	icons: {
		icon: '/images/favicon.svg',
		shortcut: '/images/favicon.svg',
		apple: '/images/favicon.svg',
		other: {
			rel: '/images/favicon',
			url: '/images/favicon.svg',
		}
	},
	keywords: ["디벨로이드", "IT 테크 커뮤니티", "Develoid"],
	openGraph: {
		type: "website",
		url: "https://devine.develoid.net",
		title: APP_NAME,
		description: APP_DESCRIPTION,
		siteName: APP_NAME,
		images: [
			{ url: "/images/ogimage.png" }
		]
	}
}

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
	
	return (
		<html lang="ko" suppressHydrationWarning>
			<body>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
  	)
}