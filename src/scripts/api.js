const baseUrl = "https://m2-api-living.herokuapp.com/news"

export async function getNews(page) {
    try {
        const response = await fetch(`${baseUrl}?page=${page}`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            const request = await response.json()

            return request.news
        } else {
            alert('algo deu errado')
        }

    } catch (err) { 
        alert('algo deu errado')
    }
}


export async function AccessNews(id) {
    try {
        const response = await fetch(`${baseUrl}/${id}`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            const request = await response.json()

            return request
        } else {
            alert('algo deu errado')
        }

    } catch (err) {
        alert('algo deu errado')
    }
}