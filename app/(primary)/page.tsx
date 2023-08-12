import DVLBest from "@/modules/PageData/DVLBest";
import Button_Link from "@/styles/Components/Button/Button_Link";
import Card from "@/styles/Components/Card/Card";
import Iframe from "@/styles/Components/Iframe/Iframe";
import Title from "@/styles/Components/Title/Title";

export default function Page() {
    return (
        <>
            <Title size="h2" text="디벨로이드"/>
            <div className="GroupButton">
                <div className="GroupCard">
                    <Card size="small" icon={{icon: "Google"}} text="제휴 업무 소개서" link={{link: "", pointer: true}}/>
                </div>
                <div className="GroupCard">
                    <Card size="small" icon={{icon: "Google"}} text="제휴 맺기" link={{link: "", pointer: true}}/>
                </div>
            </div>

            <div className="LayoutHome">
                <div className="LayoutLeftHome">
                    <DVLBest/>
                </div>
                <div className="LayoutRightHome">
                    <div className="Content height-100">
                        <Title size="h4" text="커뮤니티"/>
                        
                        <div className="column gap-16 height-100">
                            <Iframe link="https://m.cafe.naver.com/develoid"/>
                            <div className="grid-col-2 gap-12">
                                <Button_Link matrix="column" icon="Moon" text="공지사항"/>
                                <Button_Link matrix="column" icon="Moon" text="아이덴티티"/>
                                <Button_Link matrix="column" icon="Moon" text="디벨코드"/>
                                <Button_Link matrix="column" icon="Moon" text="디벨콘텐츠"/>
                            </div>
                        </div>
            
                    </div>
                    
                </div>
            </div>
        </>
    )
}