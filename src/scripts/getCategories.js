import { getNews } from "/src/scripts/api.js"


async function getCategories() {
    const listCategories = []

    for (let index = 0; index < 3; index++) {
        let news = await getNews(index)

        news.forEach((elem) => {
            if (!listCategories.includes(elem.category)){
                listCategories.push(elem.category)
            }
        })
    }
    return listCategories
}

export default getCategories