export const FetchDVLBest = async () => {
    try {
        const data = await fetch(`https://opensheet.elk.sh/1I_j7-xXIt4uISHHe-JoF6CJLfsBUy8QJq5KFY2FgdqM/Current`,  {next: {revalidate: 3600}});
        if (!data.ok) {
            throw new Error('데이터를 왜 못 불러오는지 알 수 없습니다.');
        }
        return data.json();
    } catch(error) {
        console.error('데이터를 못 불러온다고 합니다.', error);
        return null;
    }
}