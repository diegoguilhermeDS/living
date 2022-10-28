/* Desenvolva seu script aqui */
import toBackTop from "../../scripts/backTop.js";
import getCategories from "../../scripts/getCategories.js";
import { observe } from "../../scripts/observer.js";

const categories = await getCategories()

console.log(categories)

const divObsever = document.querySelector(".container-observer")

observe.observe(divObsever)

toBackTop()