import Title from "@/styles/Components/Title/Title";
import Link from "next/link";
import styles from "./page.module.css"
import Grid from "@/styles/System/Layout/Grid/Grid";
import FetchDVLBestPhoto from "@/modules/API/FetchDVLBestPhoto";
import Image from "next/image";

export default async function Home() {

    const posts = await FetchDVLBestPhoto();

    return (
        <>
            <Title size="h2" text={{pri: "베스트포토 목록", sec: "디벨로이드 커뮤니티"}}/>
            <Grid grid={3} strict>
                {posts.map((post, index) => 
                    <Link key={index} className={styles.Post} href={post.link || ""} target="_blank">
                        <Image alt={post.title || ""} src={post.images || ""} className={styles.Image} sizes="auto" width={1} height={1}/>
                        <div className={styles.GroupNumber}>
                            <div className={styles.GroupSubData}>
                                <div className={styles.SubData}>👁️ {post.view}</div>
                                <div className={styles.SubData}>🩷 {post.likes}</div>
                            </div>
                        </div>
                        <div className={styles.GroupTitle}>
                            {post.title && <Title size="h4" text={{pri: post.title}}/>}
                            <div className={styles.DateAuthor}>{post.author} · {post.date}</div>
                        </div>
                    </Link>
                )}
            </Grid>
        </>
    )
}
