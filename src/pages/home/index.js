/* Desenvolva seu script aqui */
import { getNews } from "../../scripts/api.js";
import toBackTop from "../../scripts/backTop.js";
import { getLocalStorage, setLocalStorage } from "../../scripts/getAndSetLocalStorage.js";
import getCategories from "../../scripts/getCategories.js";
import { observe } from "../../scripts/observer.js";
import { renderCategories } from "../../scripts/render.js";
import eventScrollCategories from "../../scripts/scrollCategories.js";


if (getLocalStorage("@kenzie: categoryCurrency") == 0) {
    setLocalStorage("@kenzie: categoryCurrency", "Todos")
}


const categories = await getCategories()

renderCategories(categories)


const btnsCategory = document.querySelectorAll("#category")

btnsCategory.forEach((btn) => {
    let cat = getLocalStorage("@kenzie: categoryCurrency")
    if(cat === btn.innerText) {
        let name = btn.getAttribute("name")
        document.getElementsByName(name)[0].click()
    }
})

eventScrollCategories()


setTimeout(() => {
    const divObsever = document.querySelector(".container-observer")

    observe.observe(divObsever)
}, 1000)

toBackTop()