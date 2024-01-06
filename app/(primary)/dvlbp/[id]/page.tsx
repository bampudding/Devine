import { FetchDB, pbFilesAPI } from "@/modules/api/fetch";
import Grid from "@/styles/System/Layout/Grid/Grid";
import Title from "@/styles/Title/Title";
import { HDS_Develoid_BestPhoto_List } from "@/styles/develoid/bestphoto/list/develoid_bestphoto_list";
import Image from "next/image";

interface Props {
    params: {id: string};
}

export interface Type_dvl_bp {
    id: string;
    elect?: number;
    title: string;
    author: string;
    image: string[];
    href: string;
    posted: string;
    elected?: string;
}

export default async function Page({
    params
}: Props) {
    const data = await FetchDB({id: params.id, collection: "dvl_bp"}) as unknown as Type_dvl_bp;

    return (
        <>
            <>
                <Title text={data.title}/>
            </>
            <div>
                타이틀: {data.title}
                <br/>
                당선됨: 제 {data.elect} 회 베스트포토, 당선일: {data.elected}
                <br/>
                게시일: {data.posted},
                <br/>
                {data.image.map((imageName: string, index: number) =>
                    <Image key={index} priority alt={imageName} width={250} height={150} sizes="auto" src={`${pbFilesAPI}/rucphpozn3ylt35/${data.id}/${imageName}`}/>
                )}
            </div>
        </>
    )
}