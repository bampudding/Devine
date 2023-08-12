import Card from "@/styles/Components/Card/Card";
import Title from "@/styles/Components/Title/Title";
import Post from "@/styles/Develoid/Post/Post";

export default function Page() {
    return (
        <>
            <Title size="h2" text="디벨서포트"/>

            <div className="LayoutSupport">

                <div className="LayoutLeftSupport">
                    <div className="Content">
                        <div className="column gap-12">
                            <div className="mobile-hide flex-1">
                                <Post text="2023년 8월 공지사항 모음" link="/" image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2320&q=80"/>
                            </div>
                            <div className="mobile-hide grid-col-2 gap-12">
                                <Post text="규칙" link="/" image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2320&q=80"/>
                                <Post text="활동 필독사항" link="/" image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2320&q=80"/>
                            </div>
                            <div className="mobile-show flex-1">
                                <div className="GroupCard">
                                    <Card icon={{icon: "Discord"}} text="2023년 8월 공지사항 모음" link={{link: "/", pointer: true}}/>
                                </div>
                            </div>
                            <div className="mobile-show grid-col-2 gap-12">
                                <div className="GroupCard">
                                    <Card icon={{icon: "Discord"}} text="규칙" link={{link: "/", pointer: true}}/>
                                </div>
                                <div className="GroupCard">
                                    <Card icon={{icon: "Discord"}} text="활동 필독사항" link={{link: "/", pointer: true}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="LayoutRightSupport">
                    <div className="Content">
                        <Title size="h4" text="빠른 문의"/>
                        <div className="GroupCard">
                            <Card icon={{icon: "Discord"}} text="디벨코드로 문의 및 신고" subText={{position: "top", text: "디벨로이드 공식 디스코드"}} link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "KakaoTalk"}} text="카카오톡으로 문의 및 신고" link={{link: "/", pointer: true}}/>
                        </div>
                    </div>
                    
                    <div className="Content">
                        <Title size="h4" text="이메일 문의"/>
                        <div className="column gap-12">
                            <div className="GroupCard">
                                <Card icon={{icon: "Discord"}} text="불량 회원 신고" link={{link: "/", pointer: true}}/>
                            </div>
                            <div className="grid-col-2 gap-12">
                                <div className="GroupCard">
                                    <Card icon={{icon: "Discord"}} text="운영 건의" link={{link: "/", pointer: true}}/>
                                </div>
                                <div className="GroupCard">
                                    <Card icon={{icon: "Discord"}} text="운영 문의" link={{link: "/", pointer: true}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Content">
                        <Title size="h6" text="다른 기능을 찾고 있나요?"/>
                        <div className="GroupCard">
                            <Card size="small" icon={{icon: "Discord"}} text="제휴 문의" link={{link: "/", pointer: true}}/>
                            <Card size="small" icon={{icon: "Discord"}} text="브랜드 아이덴티티" link={{link: "/", pointer: true}}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}