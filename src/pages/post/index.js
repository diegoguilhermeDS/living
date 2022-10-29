/* Desenvolva seu script aqui */

import { AccessNews } from "../../scripts/api.js";
import toBackTop from "../../scripts/backTop.js";
import { getLocalStorage, setLocalStorage } from "../../scripts/getAndSetLocalStorage.js";
import getCategories from "../../scripts/getCategories.js";
import { renderCategories } from "../../scripts/render.js";


let body = document.querySelector("body")

body.style.height = "244vh";


const categories = await getCategories()

renderCategories(categories)

toBackTop()



async function renderNewsSelected() {
    let idNews = getLocalStorage("@kenzie: idPost")
    let newSelected = await AccessNews(idNews)

    const {title, description, content, image} = newSelected
    const navContainer = document.querySelector("nav")

    navContainer.insertAdjacentHTML("beforebegin", `
        <section class="section-title">
            <h1 class="font-1-semibold">${title}</h1>
            <span class="font-4-regular">${description}</span>
        </section>
        <section class="section-img">
            <img src="${image}" alt="imagem notícia">
        </section>
        <section class="section-content">
            <p class="font-4-regular">${content}</p>
        </section>
    `)
}

renderNewsSelected()



function toBackHome(){
    const btnHome = document.getElementById("home")

    btnHome.addEventListener("click", () => {
        location.replace("/src/pages/home/index.html")
        setLocalStorage("@kenzie: categoryCurrency", "Todos")
    })
}

toBackHome()