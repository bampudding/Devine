'use client'

import Button_Link from "@/styles/Components/Button/Button_Link";
import Card from "@/styles/Components/Card/Card";
import Divider from "@/styles/Components/Divider/Divider";
import Iframe from "@/styles/Components/Iframe/Iframe";
import Title from "@/styles/Components/Title/Title";
import Bestphoto from "@/styles/Develoid/Bestphoto/Bestphoto";
import Develbest from "@/styles/Develoid/Develbest/Develbest";

export default function Page() {
    return (
        <>
            <Title size="h2" text="디벨로이드"/>
            <div className="GroupButton">
                <div className="GroupCard">
                    <Card text="제휴 업무 소개서" link={{link: "", pointer: true}}/>
                </div>
                <div className="GroupCard">
                    <Card text="제휴 맺기" link={{link: "", pointer: true}}/>
                </div>
            </div>

            <Divider/>

            <div className="LayoutHome">
                <div className="LayoutLeftHome">
                    <div className="Content">
                        <Title size="h4" text="베스트포토" side={{text: "참여하기", link: "https://cafe.naver.com/develoid?iframe_url=/ArticleList.nhn%3FMoon.clubid=23370764%26Moon.menuid=7%26Moon.boardtype=L%26userDisplay=15%26Moon.headid=2391"}}/>
                        <Bestphoto text="베스트포토" subText="메이비" image="https://go.develoid.net/gate/bestphoto/BESTPHOTO.png" link="https://go.develoid.net/gate/bestphoto/BESTPHOTO.html"/>
                        
                    </div>
                        
                    <div className="Content">
                        <Title size="h4" text="디벨베스트"/>
                        <div className="DVLBest">
                            <Develbest text="ONE UI 5.0 이하 CSC 변경 Tool 소개" subText="하늘목장" image="https://go.develoid.net/gate/bestphoto/BESTPHOTO.png" link="/"/>
                            <Develbest text="ONE UI 5.0 이하 CSC 변경 Tool 소개" subText="하늘목장" image="https://go.develoid.net/gate/bestphoto/BESTPHOTO.png" link="/"/>
                            <Develbest text="ONE UI 5.0 이하 CSC 변경 Tool 소개" subText="하늘목장" image="https://go.develoid.net/gate/bestphoto/BESTPHOTO.png" link="/"/>
                        </div>
                    </div>
                </div>
                <div className="Content">
                    <Title size="h4" text="커뮤니티"/>
                    <Iframe link="https://m.cafe.naver.com/develoid"/>
                </div>
            </div>

            <Divider/>
            
            <div className="GroupButton">
                <Button_Link matrix="column" icon="Moon" text="공지사항"/>
                <Button_Link matrix="column" icon="Moon" text="공동구매"/>
                <Button_Link matrix="column" icon="Moon" text="중고장터"/>
            </div>
        </>
    )
}