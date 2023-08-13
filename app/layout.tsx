import ThemeProviders from '@/modules/SystemFunction/Theme';
import '@/styles/StyleSheet/ImportStyleSheet.css';
import { Metadata } from "next";

const APP_NAME = "디벨로이드";
const APP_DESCRIPTION = "디벨로이드 서비스";

export const metadata: Metadata = {
  	title: APP_NAME,
  	description: APP_DESCRIPTION,
	applicationName: APP_NAME,
	appleWebApp: {
		capable: true,
		title: APP_NAME,
		statusBarStyle: "default"
	},
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#F6F8FA' },
		{ media: '(prefers-color-scheme: dark)', color: '#000000' }
	],
}

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
	
	return (
		<html lang="ko" suppressHydrationWarning>
			<body>
				<ThemeProviders>
					{children}
				</ThemeProviders>
			</body>
		</html>
  	)
}