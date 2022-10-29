import { getNews } from "./api.js"
import { getLocalStorage, setLocalStorage } from "./getAndSetLocalStorage.js"

let page = 1

function renderCategories(list) {
    const listCategories = document.querySelector(".list-category")

    const categoryAll = document.createElement("li")

    if (location.pathname == "/src/pages/post/index.html") {
        categoryAll.classList.add("font-4-semibold", "button-primary", "button-category-default", "grey-2", "old")
    } else {
        categoryAll.classList.add("font-4-semibold", "button-primary", "button-category-green", "white", "currency")
    }

    categoryAll.id = "category"
    categoryAll.innerText = "Todos"
    categoryAll.setAttribute("name", "Todos")

    listCategories.appendChild(categoryAll)

    list.forEach((category) => {
        const tagLi = document.createElement("li")
        tagLi.classList.add("font-4-semibold", "button-primary", "button-category-default", "grey-2", "old")
        tagLi.id = "category"
        tagLi.setAttribute("name", `${category}`)

        tagLi.innerText = category

        listCategories.appendChild(tagLi)
    })

    eventBtnCategories()
}


function renderNews(list) {
    const divObsever = document.querySelector(".container-observer")

    let category = getLocalStorage("@kenzie: categoryCurrency")

    let filteredList = []
    if (category !== "Todos") {
        filteredList = list.filter((news) => {
            if (news.category === category) {
                return news
            }
        })
    } else {
        filteredList = list
    }
    


    filteredList.forEach((news) => {
        const { id, title, description, image } = news

        divObsever.insertAdjacentHTML("beforebegin", `
            <li class="card" id="${id}">
                <div class="container-img-card">
                    <img src="${image}" alt="imagem notícia">
                </div>
                <div class="container-info-card">
                    <h2 class="font-3-semibold">${title}</h2>
                    <span class="font-4-regular grey-2">${description}</span>
                    <a href="#" class="link-post font-4-semibold">Acessar conteúdo</a>
                </div>
            </li>
        `)
    })

    const links = document.querySelectorAll("a")

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault()

            let id = e.path[2].id
            setLocalStorage("@kenzie: idPost", id)
            location.replace("/src/pages/post/index.html")
        })
    })
}


function eventBtnCategories() {
    const btnsCategory = document.querySelectorAll("#category")

    btnsCategory.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            let btnSelected = e.target
            let btnCurrency = document.querySelector(".button-category-green")
         
            if (location.pathname == "/src/pages/home/index.html") {

                btnCurrency.classList.remove("button-category-green", "white", "currency")
                btnCurrency.classList.add("button-category-default", "grey-2", "old")

                btnSelected.classList.remove("button-category-default", "grey-2", "old")
                btnSelected.classList.add("button-category-green", "white", "currency")


                let listCards = document.querySelectorAll(".card")
                
                setLocalStorage("@kenzie: categoryCurrency", btnSelected.innerText)
                const ListNews = await getNews(0)
                renderNews(ListNews)

                listCards.forEach((card) => {
                    card.remove()
                })
            } else if (location.pathname == "/src/pages/post/index.html") {
                location.replace("/src/pages/home/index.html")
                setLocalStorage("@kenzie: categoryCurrency", btnSelected.innerText)
            }
        })
    })
}


export {
    renderNews,
    renderCategories,
    page
}