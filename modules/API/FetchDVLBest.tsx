export async function FetchDVLBest() {
    const res = await fetch("https://opensheet.elk.sh/1I_j7-xXIt4uISHHe-JoF6CJLfsBUy8QJq5KFY2FgdqM/Current");
    const data = await res.json();
    return data;
}

export const revalidate = 3600;