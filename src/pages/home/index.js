/* Desenvolva seu script aqui */

import { getNews, AccessNews } from "../../scripts/api.js";

const ListNews = await getNews(1)
const News = await AccessNews(ListNews[0].id)

