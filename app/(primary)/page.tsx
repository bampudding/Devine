import DVLBest from "@/modules/PageData/DVLBest";
import Button_Link from "@/styles/Components/Button/Button";
import Card from "@/styles/Components/Card/Card";
import Iframe from "@/styles/Components/Iframe/Iframe";
import Title from "@/styles/Components/Title/Title";

export default function Page() {
    return (
        <>
            <Title size="h2" text={{pri: "디벨서비스"}}/>
            <div className="GroupButton">
                <div className="GroupCard">
                    <Card size="small" text="제휴 업무 소개서" link={{link: "http://naver.me/5IsbVWnO", pointer: true}}/>
                </div>
                <div className="GroupCard">
                    <Card size="small" text="제휴 맺기" link={{link: "https://docs.google.com/forms/d/e/1FAIpQLSeB6dvSsHVPy69geM4y6rmTGzTqTaM3rmF6UCIocrnvQWLQMw/viewform", pointer: true}}/>
                </div>
            </div>

            <div className="LayoutHome iframemode">
                <div className="LayoutLeftHome">
                    <DVLBest/>
                </div>
                <div className="LayoutRightHome iframehide">
                    <div className="Content height-100">
                        <Title size="h4" text={{pri: "디벨로이드 커뮤니티"}}/>
                        
                        <div className="column gap-16 height-100">
                            <Iframe link="https://m.cafe.naver.com/develoid"/>
                            <div className="grid-col-2 gap-12">
                                <Button_Link matrix="column" icon="Notice" text="공지사항" link="https://cafe.naver.com/develoid/menu/1"/>
                                <Button_Link matrix="column" icon="DeveloidFill" text="아이덴티티" link="/brand"/>
                                <Button_Link matrix="column" icon="Discord" text="디벨코드" link="https://discord.gg/YrHnmFphVY"/>
                                <Button_Link matrix="column" icon="DocumentData" text="디벨콘텐츠" link="https://cafe.naver.com/develoid/menu/1312"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}