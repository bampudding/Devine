import LiveActivity from "@/styles/Activity/LiveActivity/LiveActivity";
import Footer from "@/styles/System/Footer/Footer";
import Header from "@/styles/System/Header/Header";
import NavigationTab from "@/styles/System/NavigationTab/NavigationTab";

export default function NestedLayout({
  	children,
}: {
  	children: React.ReactNode
}) {

    const NavigationTabData = [
        {icon: "HomeActive", text: "홈", link: "/"},
        {icon: "SearchFill", text: "가이드", link: "https://develoid.github.io"},
        {icon: "ShoppingBag", text: "이벤트", link: "https://cafe.naver.com/develoid/menu/604"},
        {icon: "KakaoTalk", text: "서포트", link: "/support"},
        {icon: "Menu", text: "메뉴", link: "/all"},
    ];
    
	return (
        <>
            <Header/>
            <NavigationTab array={NavigationTabData}/>
            <LiveActivity>
                {children}
            </LiveActivity>
            <Footer/>
        </>
  	)
}
