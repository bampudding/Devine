'use client'

import Footer from "@/styles/System/Footer/Footer";
import Header from "@/styles/System/Header/Header";
import LiveActivity from "@/styles/System/LiveActivity/LiveActivity";
import NavigationTab from "@/styles/System/NavigationTab/NavigationTab";

export default function NestedLayout({
  	children,
}: {
  	children: React.ReactNode
}) {

    const NavigationData = [
        {icon: "Home", text: "홈", headertext: "Home", link: "/"},
        {icon: "Explore", text: "커뮤니티", headertext: "Community", link: "https://develoid.net"},
        {icon: "ShoppingBag", text: "이벤트", headertext: "Event", link: "https://cafe.naver.com/develoid/menu/604"},
        {icon: "Chat", text: "서포트", headertext: "Support", link: "/support"},
        {icon: "Menu", text: "메뉴", headertext: "Menu", link: "/all"},
    ];
    
	return (
        <>
            <Header array={NavigationData}/>
            <NavigationTab array={NavigationData}/>
            <LiveActivity>
                {children}
            </LiveActivity>
            <Footer/>
        </>
  	)
}
