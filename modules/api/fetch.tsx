import PocketBase from 'pocketbase';
export const pbDomain = "http://hserv.reswns0210.org:8090"
export const pbFilesAPI = "http://hserv.reswns0210.org:8090/api/files"
const pb = new PocketBase(pbDomain);
export default pb;

interface Props {
    id?: string;
    collection: string;
}

export async function FetchDB({
    id, collection
}: Props) {
    try {
        if (id) {
            const data = await pb.collection(collection).getOne(id);
            return data;
        } else {
            const data = await pb.collection(collection).getFullList();
            return data;
        }
    } catch (error) {
        console.error("🚫 DB Fetch를 정지합니다. 안되잖아. 오류 코드: ",error);
        return null;
    }
};

export const FetchDVLBest = async () => {
    try {
        const data = await fetch(`https://opensheet.elk.sh/1I_j7-xXIt4uISHHe-JoF6CJLfsBUy8QJq5KFY2FgdqM/Current`);
        return data.json();
    } catch(error) {
        console.error("🚫 디벨베스트 Fetch를 정지합니다. 안되잖아. 오류 코드: ", error);
        return null;
    }
}

export const revalidate = 0