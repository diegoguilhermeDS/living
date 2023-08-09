import { RetrieveOneNew } from "./api.js";
import { getLocalStorage, setLocalStorage } from "./getAndSetLocalStorage.js";

async function renderNews(list) {
  const divObsever = document.querySelector(".container-observer");

  let filteredList = list;

  filteredList.forEach((news) => {
    const { id, title, summary, image_url } = news;

    divObsever.insertAdjacentHTML(
      "beforebegin",
      `
            <li class="card" id="${id}">
                <div class="container-img-card">
                    <img src="${image_url}" alt="imagem notícia">
                </div>
                <div class="container-info-card">
                    <h2 class="font-3-semibold">${title}</h2>
                    <span class="font-4-regular grey-2">${summary}</span>
                    <a href="#" id="${id}" class="link-post font-4-semibold">Acessar conteúdo</a>
                </div>
            </li>
        `
    );
  });

  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      let id = e.target.id;
      setLocalStorage("@living:idNews", id);
      location.replace("/src/pages/post/index.html");
    });
  });
}

async function renderNewsSelected() {
  let idNews = getLocalStorage("@living:idNews");
  let newSelected = await RetrieveOneNew(idNews);

  const { title, summary, image_url } = newSelected;
  const Container = document.querySelector(".container-main");
  console.log(Container);
  Container.insertAdjacentHTML(
    "afterbegin",
    `
          <section class="section-title">
              <h1 class="font-1-semibold">${title}</h1>
              <span class="font-4-regular">${summary}</span>
          </section>
          <section class="section-img">
              <img src="${image_url}" alt="imagem notícia">
          </section>
          `
  );
}

export { renderNews, renderNewsSelected };
