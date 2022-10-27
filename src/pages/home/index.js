/* Desenvolva seu script aqui */

import { getNews, AccessNews } from "../../scripts/api.js";
import { setLocalStorage, getLocalStorage } from "../../scripts/getAndSetLocalStorage.js";
import { renderNews } from "../../scripts/render.js";

const page = 1

const ListNews = await getNews(page)
const News = await AccessNews(ListNews[0].id)


renderNews(ListNews)

