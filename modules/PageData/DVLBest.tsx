import { FetchDVLBest } from "@/modules/API/FetchDVLBest";
import Title from "@/styles/Components/Title/Title";
import Bestphoto from "@/styles/Develoid/Bestphoto/Bestphoto";
import Post from "@/styles/Develoid/Post/Post";

export default async function DVLBest() {
    
    const data = await FetchDVLBest();
    
    return (
        <>
            <div className="Content">
                <Title size="h4" text={{pri: "베스트포토"}} side={{text: "참여하기", link: "https://cafe.naver.com/ArticleList.nhn?search.clubid=23370764&search.menuid=7&search.boardtype=L&userDisplay=15&search.headid=2391"}}/>
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
    )
}