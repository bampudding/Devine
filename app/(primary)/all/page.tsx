import Button_Link from "@/styles/Components/Button/Button";
import Card from "@/styles/Components/Card/Card";
import Title from "@/styles/Components/Title/Title";

export default function Page() {
    return (
        <>
            <Title size="h2" text={{pri: "메뉴"}}/>
            
            <div className="Content">
                <Title size="h4" text={{pri: "디벨서비스"}}/>
                <div className="GroupCard">
                    <Card icon={{icon: "Document"}} text="제휴 업무 소개서" link={{link: "http://naver.me/5IsbVWnO", pointer: true}}/>
                    <Card icon={{icon: "PersonAdd"}} text="제휴 맺기" link={{link: "https://forms.gle/31vn3DnVHsTjyc6Z7", pointer: true}}/>
                    <Card icon={{icon: "ShoppingBagFill"}} text="디벨이벤트" link={{link: "https://cafe.naver.com/develoid/menu/604", pointer: true}}/>
                    <Card icon={{icon: "DeveloidFill"}} text="브랜드 아이덴티티" link={{link: "/brand", pointer: true}}/>
                </div>
            </div>

            <div className="LayoutAll">

                <div className="LayoutLeftAll">

                    <div className="Content">
                        <Title size="h4" text={{pri: "디벨로이드"}}/>

                        <div className="column gap-16">
                            <div className="GroupButton">
                                <div className="GroupCard">
                                    <Button_Link matrix="column" icon="DeveloidFill" text="커뮤니티" link="https://develoid.net"/>
                                </div>
                                <div className="GroupCard">
                                    <Button_Link matrix="column" icon="Notice" text="공지사항" link="https://cafe.naver.com/develoid/menu/1"/>
                                </div>
                            </div>

                            <div className="GroupCard">
                                <Card icon={{icon: "Message"}} text="자유 게시판" link={{link: "https://cafe.naver.com/develoid/menu/5", pointer: true}}/>
                                <Card icon={{icon: "Document"}} text="뉴스 & 소식" link={{link: "https://cafe.naver.com/develoid/menu/102", pointer: true}}/>
                                <Card icon={{icon: "Support"}} text="질문 게시판" link={{link: "https://cafe.naver.com/develoid/menu/1314", pointer: true}}/>
                                <Card icon={{icon: "DocumentData"}} text="팁 게시판" link={{link: "https://cafe.naver.com/develoid/menu/577", pointer: true}}/>
                                <Card icon={{icon: "Photo"}} text="포토 게시판" link={{link: "https://cafe.naver.com/develoid/menu/7", pointer: true}}/>
                                <Card icon={{icon: "Store"}} text="중고장터" link={{link: "https://cafe.naver.com/develoid/menu/1200", pointer: true}}/>
                                <Card icon={{icon: "Vehicle"}} text="공동구매" link={{link: "https://cafe.naver.com/develoid/menu/1292", pointer: true}}/>
                                <Card icon={{icon: "ShoppingCart"}} text="특가 핫딜" link={{link: "https://cafe.naver.com/develoid/menu/1154", pointer: true}}/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="LayoutRightAll">
                    <div className="Content">
                        <Title size="h4" text={{pri: "디벨플레이"}}/>
                        <div className="column gap-16">
                            <div className="GroupButton">
                                <div className="GroupCard">
                                    <Button_Link matrix="column" icon="DeveloidFill" text="커뮤니티" link="https://develoid.net"/>
                                </div>
                                <div className="GroupCard">
                                    <Button_Link matrix="column" icon="Notice" text="공지사항" link="https://cafe.naver.com/develoid/menu/1"/>
                                </div>
                            </div>

                            <div className="GroupCard">
                                <Card icon={{icon: "Message"}} text="자유 게시판" link={{link: "https://cafe.naver.com/develoid/menu/5", pointer: true}}/>
                                <Card icon={{icon: "Support"}} text="질문 게시판" link={{link: "https://cafe.naver.com/develoid/menu/1314", pointer: true}}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="Content">
                        <Title size="h4" text={{pri: "디벨베스트"}}/>
                        <div className="GroupCard">
                            <Card icon={{icon: "DocumentData"}} text="디벨베스트" link={{link: "https://cafe.naver.com/develoid/menu/1363", pointer: true}}/>
                            <Card icon={{icon: "DocumentData"}} text="디벨콘텐츠" link={{link: "https://cafe.naver.com/develoid/menu/1312", pointer: true}}/>
                            <Card icon={{icon: "Photo"}} text="베스트포토" link={{link: "https://cafe.naver.com/ArticleList.nhn?search.clubid=23370764&search.menuid=7&search.boardtype=L&userDisplay=15&search.headid=2391", pointer: true}}/>
                        </div>
                    </div>

                    <div className="Content">
                        <Title size="h4" text={{pri: "디벨서포트"}}/>
                        <div className="GroupCard">
                            <Card icon={{icon: "Discord"}} text="디벨코드로 문의 및 신고" subText={{position: "top", text: "디벨로이드 공식 디스코드"}} link={{link: "https://discord.gg/YrHnmFphVY", pointer: true}}/>
                            <Card icon={{icon: "KakaoTalk"}} text="카카오톡으로 문의 및 신고" link={{link: "http://pf.kakao.com/_jNylj/chat", pointer: true}}/>
                            <Card icon={{icon: "EmailOpen"}} text="이메일로 불량 회원 신고" link={{link: "https://goo.gl/forms/5kb71oAXFtlqM8Fj2", pointer: true}}/>
                            <Card icon={{icon: "EmailOpen"}} text="이메일로 운영 건의" link={{link: "https://forms.gle/2WgX8qCCPLRmVM3R6", pointer: true}}/>
                            <Card icon={{icon: "EmailOpen"}} text="이메일로 운영 문의" link={{link: "https://forms.gle/F7Q35szejXc6dcya8", pointer: true}}/>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}