import { getNews } from "../../scripts/api.js";
import toBackTop from "../../scripts/backTop.js";
import { getLocalStorage, setLocalStorage } from "../../scripts/getAndSetLocalStorage.js";
import { observe } from "../../scripts/observer.js";
import { renderNews } from "../../scripts/render.js";

setLocalStorage("@living:offset", 6)
let offsetByLocalStorage = getLocalStorage("@living:offset")
if (offsetByLocalStorage.length <= 0) {
    offsetByLocalStorage = 6
    setLocalStorage("@living:offset", 6)
}

console.log(offsetByLocalStorage)
setTimeout(() => {
    const divObsever = document.querySelector(".container-observer")

    observe.observe(divObsever)
}, 1000)

toBackTop();
const news = await getNews(6, offsetByLocalStorage);
renderNews(news);
