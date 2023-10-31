'use client'

import Button from "@/styles/Components/Button/Button";
import Checkbox from "@/styles/Components/Checkbox/Checkbox";
import Icon from "@/styles/Components/Icon/Icon";
import Input from "@/styles/Components/Input/Input";
import Select from "@/styles/Components/Select/Select";
import SmallText from "@/styles/Components/SmallText/SmallText";
import Textarea from "@/styles/Components/Textarea/Textarea";
import Title from "@/styles/Components/Title/Title";
import Grid from "@/styles/System/Layout/Grid/Grid";
import GroupBox from "@/styles/System/Layout/GroupBox/GroupBox";
import GroupButton from "@/styles/System/Layout/GroupButton/GroupButton";
import { useEffect, useState } from "react";
import styles from "@/styles/StyleSheet/Admin/CafeFront.module.css"

type Type = {
    purpose: "디벨로이드" | "디벨플레이",
    date?: string,
    changelog?: React.ReactNode,
    partner?: {
        single?: {
            image?: string;
            link?: string;
        }[],
        dual?: {
            image?: string;
            link: string;
        }[]
    },
    sponsor?: {
        image?: string;
        link?: string;
    }[],
    shortcut?: {
        subtitle?: {
            title?: string;
            link?: string;
        },
        button?: {
            title?: string;
            link?: string;
        }[]
    },
    footer?: {
        description?: string;
        copyright?: string;
    }
}

export default function Page() {

    const [data, setData] = useState<Type>({
        purpose: "디벨로이드",
        date: ''
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const hour = date.getHours();
            const min = date.getMinutes();
            const sec = date.getSeconds();
            
            const ExportTime = year + "년 " + month + "월 " + day + "일 " + hour + "시 " + min + "분 " + sec + "초";
            
            setData(prevData => ({...prevData, date: ExportTime}));
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    const Remove = () => {

    }

    const More = () => {
        
    }

    const handleValueChange = (selectedValue: any) => {
        setData({purpose: selectedValue})
    };
    

    return (
        <>
            <Title size="h2" text={{pri: "카페 대문 편집기", sec: "오늘도 구른다"}}/>

            {/* 문서에 대한 설명 */}
            <GroupBox type="MaintainedBox">
                <Title size="h4" text={{pri: "문서에 대한 설명"}}/>
                <Grid grid={2}>
                    {/* 사용 목적 (purpose) */}
                    <Select label="사용 목적" value={data.purpose} options={["디벨로이드", "디벨플레이"]} onValueChange={handleValueChange}/>
                    {/* 현재 날짜 (date) */}
                    <Input label="만든 날짜" readOnly value={data.date}/>
                </Grid>
                <Input label="현재 날짜" readOnly value={data.date}/>
                {/* 수정 사항 (changelog) */}
                <Textarea label="수정 사항" value={data.changelog}/>
            </GroupBox>

            
            {/* 디벨파트너 (partner) */}
            <GroupBox type="MaintainedBox">
                <Title size="h4" text={{pri: "디벨파트너"}}/>
                {/* 1단 (partner.single) */}
                <GroupBox>
                    <Title size="h6" text={{pri: "1단"}} side={{text: "추가"}}/>
                    <GroupButton strict>
                        <Input label="이미지"/>
                        <Input label="링크"/>
                        <div className="gap-12">
                            <Icon Icon="Close" Size={16} Padding={12}/>
                            <Icon Icon="More" Size={16} Padding={12}/>
                        </div>
                    </GroupButton>
                </GroupBox>
                {/* 2단 (partner.dual) */}
                <GroupBox>
                    <Title size="h6" text={{pri: "2단"}} side={{text: "추가"}}/>
                    <GroupButton strict>
                        <Input label="1열 이미지"/>
                        <Input label="1열 링크"/>
                        <div className="gap-12">
                            <Icon Icon="Close" Size={16} Padding={12}/>
                            <Icon Icon="More" Size={16} Padding={12}/>
                        </div>
                    </GroupButton>
                    <GroupButton strict>
                        <Input label="2열 이미지"/>
                        <Input label="2열 링크"/>
                        <div className="gap-12">
                            <Icon Icon="Close" Size={16} Padding={12}/>
                            <Icon Icon="More" Size={16} Padding={12}/>
                        </div>
                    </GroupButton>
                </GroupBox>
            </GroupBox>

            
            {/* 디벨스폰서 (sponsor) */}
            <GroupBox type="MaintainedBox">
                <Title size="h4" text={{pri: "디벨스폰서"}}/>
                <GroupButton strict>
                    <Input label="이미지"/>
                    <Input label="링크"/>
                    <div className="gap-12">
                        <Icon Icon="Close" Size={16} Padding={12}/>
                        <Icon Icon="More" Size={16} Padding={12}/>
                    </div>
                </GroupButton>
            </GroupBox>


            {/* 디벨베스트 */}
            <GroupBox type="MaintainedBox">
                <Title size="h4" text={{pri: "콘텐츠"}} side={{text: "스프레드시트 수정"}}/>
                <SmallText align="center" Text="베스트포토, 디벨베스트, 디벨콘텐츠는 이제 스프레드시트에서 관리합니다."/>
            </GroupBox>


            {/* 바로가기 (shortcut) */}
            <GroupBox type="MaintainedBox">
                {/* 서브 타이틀 (shortcut.subtitle) */}
                <Title size="h4" text={{pri: "바로가기"}} side={{text: "버튼 추가"}}/>
                <Grid grid={2}>
                    <Input label="서브 타이틀 제목" value={data.shortcut?.subtitle?.title}/>
                    <Input label="서브 타이틀 링크" value={data.shortcut?.subtitle?.link}/>
                </Grid>
                {/* 버튼 (shortcut.button) */}
                <GroupButton strict>
                    <Input label="버튼 제목"/>
                    <Input label="버튼 링크"/>
                    <div className="gap-12">
                        <Icon Icon="Close" Size={16} Padding={12}/>
                        <Icon Icon="More" Size={16} Padding={12}/>
                    </div>
                </GroupButton>
            </GroupBox>


            {/* 푸터 (footer) */}
            <GroupBox type="MaintainedBox">
                <Title size="h4" text={{pri: "푸터"}}/>
                <Input label="내용" value={data.footer?.description}/>
                <Input label="카피라이트" value={data.footer?.copyright}/>
            </GroupBox>

    
            {/* 외부 버튼 */}
            <div className="jc-center">
                <div style={{width: "min-content"}}>
                    <Grid grid={2}>
                        <Button icon="Chat" text="문제가 생겼나요?" link="https://discord.com/channels/737523681915306084/1062634940509986817"/>
                        <Button icon="Explore" text="미리보기"/>
                    </Grid>
                </div>
            </div>


            {/* 부유하는 버튼 */}
            <div className={styles.Air}>
                <Button text="불러오기"/>
                <Button text="저장하기"/>
                <Button text="미리보기"/>
            </div>
        </>
    )
}