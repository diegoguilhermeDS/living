/* Desenvolva seu script aqui */
import toBackTop from "../../scripts/backTop.js";
import { observe } from "../../scripts/observer.js";


const divObsever = document.querySelector(".container-observer")

observe.observe(divObsever)

toBackTop()