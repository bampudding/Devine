import { FetchDVLBest } from "@/modules/API/FetchDVLBest";
import Title from "@/styles/Components/Title/Title";
import Bestphoto from "@/styles/Develoid/Bestphoto/Bestphoto";
import Post from "@/styles/Develoid/Post/Post";

interface Props {
    Type: "Default" | "Others";
}

export default async function DVLBest({
    Type
}: Props) {
    
    const data = await FetchDVLBest();
    
    return (
        Type === "Default" ?
            <>
                <div className="Content">
                    <Title size="h4" text={{pri: data[0]["Additional Title"]}} side={{text: "참여하기", link: "https://cafe.naver.com/ArticleList.nhn?search.clubid=23370764&search.menuid=7&search.boardtype=L&userDisplay=15&search.headid=2391"}}/>
                    <Bestphoto text={data[0].Title} subText={data[0].Author} image={data[0].Image} link={data[0].URL}/>
                </div>
                    
                <div className="Content">
                    <Title size="h4" text={{pri: "디벨베스트"}}/>
                    <div className="DVLBest">
                        <Post text={data[1].Title} subText={data[1].Author} image={data[1].Image} link={data[1].URL}/>
                        <Post text={data[2].Title} subText={data[2].Author} image={data[2].Image} link={data[2].URL}/>
                        <Post text={data[3].Title} subText={data[3].Author} image={data[3].Image} link={data[3].URL}/>
                    </div>
                </div>
            </>
        :
            <>
                <Post text={data[4].Title} subText={data[4].Author} image={data[4].Image} link={data[4].URL}/>
                <Post text={data[5].Title} subText={data[5].Author} image={data[5].Image} link={data[5].URL}/>
                <Post text={data[6].Title} subText={data[6].Author} image={data[6].Image} link={data[6].URL}/>
                <Post text={data[7].Title} subText={data[7].Author} image={data[7].Image} link={data[7].URL}/>
            </> 
    )
}