'use client'

import { Type_dvl_bp } from "@/app/(primary)/dvlbp/[id]/page"
import styles from "./develoid_bestphoto_list.module.css"
import Image from "next/image"
import { pbFilesAPI } from "@/modules/api/fetch"
import Link from "next/link"
import SvgIcon from "@/styles/System/SVG/SVG"
import { Clipboard, Share } from "@/modules/function/share"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export function HDS_Develoid_BestPhoto_List({
    id, elect, title, author, image, href, posted, elected
}: Type_dvl_bp) {

    const router = useRouter();

    const Sharing = (event: any) => {
        event.preventDefault()
        toast.success("OK")
        // router.replace("discord:///channels/737523681915306084/1167510086646775838")
        // Share({title: title, text: author, link: href})
    }

    const Clipboarding = (event: any) => {
        event.preventDefault()
        Clipboard({link: href})
    }

    return (
        <Link href={`/dvlbp/${id}`} className={styles.Group}>
            <Image priority alt={`디벨로이드 베스트포토: ${title}`} className={styles.Image} src={`${pbFilesAPI}/rucphpozn3ylt35/${id}/${image[0]}`} width={1} height={1} sizes="auto"/>
            <div className={styles.Bottom}>
                <div className={styles.Interaction}>
                    <div className={styles.Status}>
                        {elect ?
                            <>
                                <div className={styles.StatusText} style={{background: "var(--hds-blue)", color: "white"}}>
                                    선정작
                                </div>
                                <div className={styles.StatusText}>
                                    제 {elect} 회
                                </div>
                            </>
                        :
                            <div className={styles.StatusText} style={{background: "var(--hds-red)", color: "white"}}>
                                도전작
                            </div>
                        }
                    </div>
                    <div className={styles.GroupButton}>
                        <button type="button" title="클립보드에 복사" className={styles.Button} onClick={Clipboarding}>
                            <SvgIcon icon="Clipboard" size={12}/>
                        </button>
                        <button type="button" title="Discord로 공유" className={styles.Button} onClick={Sharing}>
                            <SvgIcon icon="ShareiOS" size={12}/>
                        </button>
                    </div>
                </div>
                <div className={styles.GroupText}>
                    <div className={styles.Title}>
                        {title}
                    </div>
                    <div className={styles.GroupSubText}>
                        <div className={styles.subText}>
                            {author}
                        </div>
                        <div className={styles.subText}>
                            ·
                        </div>
                        <div className={styles.subText}>
                            {posted}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}