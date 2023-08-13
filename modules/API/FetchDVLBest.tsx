'use client'

import useSWR from 'swr';

interface Props {
    Title: string;
    Author: string;
    Image: string;
    URL: string;
}


const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function FetchDVLBest(): Props[] | null {

    const { data, error } = useSWR(
        "https://opensheet.elk.sh/1I_j7-xXIt4uISHHe-JoF6CJLfsBUy8QJq5KFY2FgdqM/Current",
        fetcher
      )

      if (error) console.log("에러가 발생했습니다.")
      if (!data) console.log("데이터를 찾지 못했습니다..")
     
      return data
}