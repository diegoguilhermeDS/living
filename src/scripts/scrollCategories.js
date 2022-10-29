function eventScrollCategories() {
    let btnsArrow = document.querySelector(".btn-arrow")
    let x = 100

    const list = document.querySelector(".list-category")
    if (list.children.length <= 10) {
        btnsArrow.disabled = true
    } else {
        btnsArrow.disabled = false
    }

    btnsArrow.addEventListener("click", () => {
         list.scroll({
            left: x,
            behavior: "smooth"
        })
        if (list.scrollLeft >= 278) {
            x = 100
        } else {
            x += 100
        }
    })

}


export default eventScrollCategories