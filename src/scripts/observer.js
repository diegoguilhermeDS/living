import { getNews } from "./api.js"
import { page, renderNews } from "./render.js"


let pag = page

const observe = new IntersectionObserver(async (entries) => {
    if (entries.some((entry) => entry.isIntersecting)) { 
        console.log(pag)
        if (pag < 3) {
            const ListNews = await getNews(pag++)
            renderNews(ListNews)
        } 
      }
})


export {
    observe,
    page
}