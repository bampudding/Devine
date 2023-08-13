'use client'

interface Props {
    Title: string;
    Author: string;
    Image: string;
    URL: string;
}

import { useEffect, useState } from "react";

export function FetchDVLBest(): Props[] | null {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("https://opensheet.elk.sh/1I_j7-xXIt4uISHHe-JoF6CJLfsBUy8QJq5KFY2FgdqM/Current");
                const responseData = await res.json();
                setData(responseData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return data;
}