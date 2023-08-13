import LiveActivity from "@/styles/Activity/LiveActivity/LiveActivity";
import Footer from "@/styles/System/Footer/Footer";
import Header from "@/styles/System/Header/Header";
import Loading from "@/styles/System/Loading/Loading";
import { Suspense } from "react";

export default function NestedLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
    
	return (
        <>
            <Header/>
            <LiveActivity>
                <Suspense fallback={<Loading/>}>
                    {children}
                </Suspense>
            </LiveActivity>
            <Footer/>
        </>
  	)
}
