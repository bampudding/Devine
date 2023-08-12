import LiveActivity from "@/styles/Activity/LiveActivity/LiveActivity";
import Footer from "@/styles/System/Footer/Footer";
import Header from "@/styles/System/Header/Header";

export default function NestedLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
    
	return (
        <>
            <Header/>
            <LiveActivity>
                {children}
            </LiveActivity>
            <Footer/>
        </>
  	)
}
