function renderNews(list) {
    const divObsever = document.querySelector(".container-observer")

    list.forEach((news) => {
        const { id, title, description, image } = news

        divObsever.insertAdjacentHTML("beforebegin", `
            <li class="card" id="${id}">
                <div class="container-img-card">
                    <img src="${image}" alt="imagem notícia">
                </div>
                <div class="container-info-card">
                    <h2 class="font-3-semibold">${title}</h2>
                    <span class="font-4-regular">${description}</span>
                    <a href="/src/pages/post/index.html" target="_self" class="link-post font-4-semibold">Acessar conteúdo</a>
                </div>
            </li>
        `)
    })
}


export {
    renderNews
}