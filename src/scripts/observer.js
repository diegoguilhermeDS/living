import { getNews } from "./api.js"
import { getLocalStorage, setLocalStorage } from "./getAndSetLocalStorage.js"
import { renderNews } from "./render.js"




const observe = new IntersectionObserver(async (entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {    
        let pag = getLocalStorage("@kenzie: page")
        if (pag <= 2) {
            const ListNews = await getNews(pag)
            pag++
            renderNews(ListNews)
            setLocalStorage("@kenzie: page", pag)
        } 
      }
})


export {
    observe
}