import Card from "@/styles/Components/Card/Card";
import Title from "@/styles/Components/Title/Title";
import Bestphoto from "@/styles/Develoid/Bestphoto/Bestphoto";

export default function Page() {
    return (
        <>
            <Title size="h2" text="메뉴"/>

            <div className="LayoutAll">

                <div className="LayoutLeftAll">

                    <div className="column gap-12">
                        <Bestphoto image="/images/12th.png" text="디벨로이드 12주년을 축하해 주세요!" link="/"/>
                    
                        <div className="GroupButton mobile-show">
                            <div className="GroupCard">
                                <Card size="small" icon={{icon: "Facebook"}} text="커뮤니티" link={{link: "/", pointer: true}}/>
                            </div>
                            <div className="GroupCard">
                                <Card size="small" icon={{icon: "Facebook"}} text="공지사항" link={{link: "/", pointer: true}}/>
                            </div>
                        </div>
                    </div>

                    <div className="Content">
                        <Title size="h4" text="디벨로이드"/>
                        <div className="GroupCard">
                            <Card icon={{icon: "Facebook"}} text="커뮤니티" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="공지사항" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="브랜드 아이덴티티" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="제휴 업무 소개서" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="제휴 맺기" link={{link: "/", pointer: true}}/>
                        </div>
                    </div>

                    <div className="Content">
                        <Title size="h4" text="디벨스퀘어"/>
                        <div className="GroupCard">
                            <Card icon={{icon: "Facebook"}} text="자유 게시판" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="뉴스 & 소식" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="질문 게시판" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="팁 게시판" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="포토 게시판" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="중고장터" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="공동구매" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="특가 핫딜" link={{link: "/", pointer: true}}/>
                        </div>
                    </div>
                </div>

                <div className="LayoutRightAll sticky">
                    <div className="Content">
                        <Title size="h4" text="디벨이벤트"/>
                        <div className="GroupCard">
                            <Card icon={{icon: "Facebook"}} text="진행 중인 이벤트" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="종료된 이벤트" link={{link: "/", pointer: true}}/>
                        </div>
                    </div>
                    
                    <div className="Content">
                        <Title size="h4" text="디벨베스트"/>
                        <div className="GroupCard">
                            <Card icon={{icon: "Facebook"}} text="디벨베스트" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="디벨콘텐츠" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="베스트포토" link={{link: "/", pointer: true}}/>
                        </div>
                    </div>

                    <div className="Content">
                        <Title size="h4" text="디벨서비스"/>
                        <div className="GroupCard">
                            <Card icon={{icon: "Facebook"}} text="디벨코드로 문의 및 신고" subText={{position: "top", text: "디벨로이드 공식 디스코드"}} link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="카카오톡으로 문의 및 신고" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="이메일로 불량 회원 신고" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="이메일로 운영 건의" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="이메일로 운영 문의" link={{link: "/", pointer: true}}/>
                        </div>
                    </div>

                    <div className="Content">
                        <Title size="h4" text="디벨로이드"/>
                        <div className="GroupCard">
                            <Card icon={{icon: "Facebook"}} text="커뮤니티" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="공지사항" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="브랜드 아이덴티티" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="제휴 업무 소개서" link={{link: "/", pointer: true}}/>
                            <Card icon={{icon: "Facebook"}} text="제휴 맺기" link={{link: "/", pointer: true}}/>
                        </div>
                    </div>
                </div>
           </div>     
        </>
    )
}