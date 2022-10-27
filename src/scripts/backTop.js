function toBackTop() {
    const buttonBackTop = document.getElementById("back-top")

    buttonBackTop.addEventListener("click", () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    })
}

export default toBackTop