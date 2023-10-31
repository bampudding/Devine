import axios from 'axios';
import { load } from 'cheerio';
import { decode } from 'iconv-lite';

const FetchDVLBestPhoto = async () => {
    try {
        const url = 'https://cafe.naver.com/ArticleList.nhn?search.clubid=23370764&search.menuid=7&search.boardtype=C&userDisplay=10&search.headid=2391';
        const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36';

        const response = await axios.get(url, {
            responseType: 'arraybuffer',
            headers: {
                'User-Agent': userAgent,
            },
        });

        const contentType = response.headers['content-type'];
        const charsetMatch = /charset=([^;]+)/.exec(contentType);
        const charset = (charsetMatch && charsetMatch[1]) || 'utf-8';

        const data = decode(response.data, charset);
        const $ = load(data);

        const posts: {
            title?: string;
            author?: string;
            date?: string;
            view?: string | number;
            likes?: string | number;
            link?: string | undefined;
            images?: string;
        }[] = [];

        // 각 게시글에서 정보 추출
        $('.card_area').each((_index, element) => {
            const title = $(element).find('.inner').text().trim();
            const author = $(element).find('.p-nick').text().trim();
            const date = $(element).find('.date').text().trim();
            const view = $(element).find('.num').text().trim().replace("조회 ", "");
            const likes = $(element).find('.u_cnt').text().trim();
            const images = $(element).find('.movie-img > a > img').attr('src');
            const initiallink = $(element).find('.tit').attr('href');
            const articleidMatch = initiallink ? /articleid=(\d+)/.exec(initiallink) : null;
            const articleid = articleidMatch ? articleidMatch[1] : '';
            const link = `https://cafe.naver.com/develoid/${articleid}`;
            const post = { title, author, date, view, likes, link, images };
            posts.push(post);
        });

        console.log(posts)
        

        return posts;
    } catch (error) {
        console.error('Error scraping data:', error);
        return [];
    }
};

export default FetchDVLBestPhoto;