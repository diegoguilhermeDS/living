export function getLocalStorage(type) {
    return JSON.parse(localStorage.getItem(`${type}`)) || []
}

export function setLocalStorage(type, data) {
    localStorage.setItem(`${type}`, JSON.stringify(data))
}