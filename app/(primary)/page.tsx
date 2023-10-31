import DVLBest from "@/modules/PageData/DVLBest";
import DVLCont from "@/modules/PageData/DVLCont";
import Button_Link from "@/styles/Components/Button/Button";
import Card from "@/styles/Components/Card/Card";
import Iframe from "@/styles/Components/Iframe/Iframe";
import Title from "@/styles/Components/Title/Title";
import GroupBox from "@/styles/System/Layout/GroupBox/GroupBox";
import GroupButton from "@/styles/System/Layout/GroupButton/GroupButton";
import GroupCard from "@/styles/System/Layout/GroupCard/GroupCard";
import Layout from "@/styles/System/Layout/Layout/Layout";

export default function Page() {
    return (
        <>
            <Title size="h2" text={{pri: "디벨서비스"}}/>
            <GroupButton>
                <GroupCard>
                    <Card size="small" text="제휴 업무 소개서" link={{link: "http://naver.me/5IsbVWnO", pointer: true}}/>
                </GroupCard>
                <GroupCard>
                    <Card size="small" text="제휴 맺기" link={{link: "https://docs.google.com/forms/d/e/1FAIpQLSeB6dvSsHVPy69geM4y6rmTGzTqTaM3rmF6UCIocrnvQWLQMw/viewform", pointer: true}}/>
                </GroupCard>
            </GroupButton>

            <Layout ratio="1fr 1fr">
                <Layout type="Inner">
                    <DVLBest Type="Default"/>
                </Layout>
                <Layout type="Inner" className="iframehide">
                    <GroupBox>
                        <Title size="h4" text={{pri: "디벨로이드 커뮤니티"}}/>
                        <Iframe link="https://m.cafe.naver.com/develoid"/>
                        <div className="grid-col-2 gap-12">
                            <Button_Link matrix="column" icon="Notice" text="공지사항" link="https://cafe.naver.com/develoid/menu/1"/>
                            <Button_Link matrix="column" icon="DeveloidFill" text="아이덴티티" link="/brand"/>
                            <Button_Link matrix="column" icon="Discord" text="디벨코드" link="https://discord.gg/YrHnmFphVY"/>
                            <Button_Link matrix="column" icon="DocumentData" text="디벨콘텐츠" link="https://cafe.naver.com/develoid/menu/1312"/>
                        </div>
                    </GroupBox>
                </Layout>
            </Layout>

            <div className="grid-col-4 gap-16">
                <DVLBest Type="Others"/>
            </div>
            
            <DVLCont/>
        </>
    )
}