import { HDS_Button } from "@/styles/Button/Button";
import Title from "@/styles/Title/Title";
import Link from "next/link";

export default function page() {
    return (
        <>
            <Title text="디벨로이드"/>
            <HDS_Button text="베스트포토 목록" href="/dvlbp"/>
        </>
    )
}