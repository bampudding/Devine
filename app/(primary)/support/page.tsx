import Card from "@/styles/Components/Card/Card";
import Title from "@/styles/Components/Title/Title";
import Post from "@/styles/Develoid/Post/Post";

export default function Page() {

    const Notice = {
        text: "2023년 10월 공지사항 모음",
        link: "https://cafe.naver.com/develoid/1017657"
    }

    return (
        <>
            <Title size="h2" text={{pri: "디벨서포트"}}/>

            <div className="LayoutSupport">

                <div className="LayoutLeftSupport">
                    <div className="Content">
                        <div className="column gap-12">
                            <div className="mobile-hide flex-1">
                                <Post text={Notice.text} subText="디벨로이드 커뮤니티" link={Notice.link} image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2320&q=80"/>
                            </div>
                            <div className="mobile-hide grid-col-2 gap-12">
                                <Post text="커뮤니티 규칙" subText="디벨로이드 커뮤니티" link="https://cafe.naver.com/develoid/984805" image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"/>
                                <Post text="커뮤니티 활동 필독사항" subText="디벨로이드 커뮤니티" link="https://cafe.naver.com/develoid/944968" image="https://images.unsplash.com/photo-1470472304068-4398a9daab00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"/>
                            </div>
                            <div className="mobile-show flex-1">
                                <div className="GroupCard">
                                    <Card icon={{icon: "Notice"}} text={Notice.text} link={{link: Notice.link, pointer: true}}/>
                                </div>
                            </div>
                            <div className="mobile-show grid-col-2 gap-12">
                                <div className="GroupCard">
                                    <Card icon={{icon: "Discord"}} text="커뮤니티 규칙" link={{link: "https://cafe.naver.com/develoid/984805", pointer: true}}/>
                                </div>
                                <div className="GroupCard">
                                    <Card icon={{icon: "Discord"}} text="커뮤니티 활동 필독사항" link={{link: "https://cafe.naver.com/develoid/944968", pointer: true}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="LayoutRightSupport">
                    <div className="Content">
                        <Title size="h4" text={{pri: "빠른 문의"}}/>
                        <div className="GroupCard">
                            <Card icon={{icon: "Discord"}} text="디벨코드로 문의 및 신고" subText={{position: "top", text: "디벨로이드 공식 디스코드"}} link={{link: "https://discord.gg/YrHnmFphVY", pointer: true}}/>
                            <Card icon={{icon: "KakaoTalk"}} text="카카오톡으로 문의 및 신고" link={{link: "http://pf.kakao.com/_jNylj/chat", pointer: true}}/>
                        </div>
                    </div>
                    
                    <div className="Content">
                        <Title size="h4" text={{pri: "이메일 문의"}}/>
                        <div className="column gap-12">
                            <div className="GroupCard">
                                <Card icon={{icon: "PersonFill"}} text="불량 회원 신고" link={{link: "https://goo.gl/forms/5kb71oAXFtlqM8Fj2", pointer: true}}/>
                            </div>
                            <div className="grid-col-2 gap-12">
                                <div className="GroupCard">
                                    <Card icon={{icon: "Document"}} text="운영 건의" link={{link: "https://forms.gle/2WgX8qCCPLRmVM3R6", pointer: true}}/>
                                </div>
                                <div className="GroupCard">
                                    <Card icon={{icon: "Document"}} text="운영 문의" link={{link: "https://forms.gle/F7Q35szejXc6dcya8", pointer: true}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Content">
                        <Title size="h6" text={{pri: "다른 기능을 찾고 있나요?"}}/>
                        <div className="GroupCard">
                            <Card size="small" icon={{icon: "PersonAdd"}} text="제휴 문의" link={{link: "https://forms.gle/31vn3DnVHsTjyc6Z7", pointer: true}}/>
                            <Card size="small" icon={{icon: "DeveloidFill"}} text="브랜드 아이덴티티" link={{link: "/brand", pointer: true}}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}