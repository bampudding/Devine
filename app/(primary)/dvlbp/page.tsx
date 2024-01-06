// 모든 베스트포토 목록 페이지

import { FetchDB, pbFilesAPI } from "@/modules/api/fetch"
import Grid from "@/styles/System/Layout/Grid/Grid";
import Title from "@/styles/Title/Title";
import { HDS_Develoid_BestPhoto_List } from "@/styles/develoid/bestphoto/list/develoid_bestphoto_list";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    const data = await FetchDB({id: undefined, collection: "dvl_bp"});

    return (
        <>
            <Title text="베스트포토 목록"/>
            <Grid grid={2} gap="1.6rem">
                {data?.map((dataItem: any, index: number) =>
                    <HDS_Develoid_BestPhoto_List key={index} id={dataItem.id} href={dataItem.href} image={dataItem.image} title={dataItem.title} author={dataItem.author} posted={dataItem.posted} elect={dataItem.elect} elected={dataItem.elected}/>
                )}
            </Grid>
        </>
    )
}
