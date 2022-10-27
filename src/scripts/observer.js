import { getNews } from "./api.js"
import { renderNews } from "./render.js"

let page = 0


const observe = new IntersectionObserver(async (entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
        if (page < 3) {
            const ListNews = await getNews(page++)
            renderNews(ListNews)
        }
      }
})


export {
    observe
}