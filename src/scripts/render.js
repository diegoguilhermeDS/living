function renderNews(list) {
    const divObsever = document.querySelector(".container-observer")

    list.forEach((news) => {
        const { id, title, description, image } = news

        divObsever.insertAdjacentHTML("beforebegin", `
            <li class="card" id="${id}">
                <div>
                    <img src="${image}" alt="imagem notícia">
                </div>
                <div>
                    <h2>${title}</h2>
                    <span>${description}</span>
                    <button class="button-access-news">Acessar conteúdo</button>
                </div>
            </li>
        `)
    })
}


export {
    renderNews
}