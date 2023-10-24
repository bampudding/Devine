import { FetchDVLBest } from "@/modules/API/FetchDVLBest";
import Title from "@/styles/Components/Title/Title";
import Bestphoto from "@/styles/Develoid/Bestphoto/Bestphoto";
import Post from "@/styles/Develoid/Post/Post";

export default async function DVLCont() {
    
    const data = await FetchDVLBest();
    
    return (
        <div className="Content">
            <Title size="h4" text={{pri: "디벨콘텐츠"}} side={{text: "모두 보기", link: "https://cafe.naver.com/develoid/menu/1312", target: "_blank"}}/>
            <div className="grid-col-2 gap-16">
                <Post text={data[8].Title} subText={data[8].Author} image={data[8].Image} link={data[8].URL} target="_blank"/>
                <Post text={data[9].Title} subText={data[9].Author} image={data[9].Image} link={data[9].URL} target="_blank"/>
            </div>
            <div className="grid-col-3_def gap-16">
                <Post text={data[10].Title} subText={data[10].Author} image={data[10].Image} link={data[10].URL} target="_blank"/>
                <Post text={data[11].Title} subText={data[11].Author} image={data[11].Image} link={data[11].URL} target="_blank"/>
                <Post text={data[12].Title} subText={data[12].Author} image={data[12].Image} link={data[12].URL} target="_blank"/>
            </div>
        </div>
    )
}