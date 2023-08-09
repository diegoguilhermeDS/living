const baseUrl = "https://api.spaceflightnewsapi.net/v4/articles";

export async function getNews(limit, offset) {
  try {
    const response = await fetch(`${baseUrl}/?limit=${limit}&offset=${offset}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const request = await response.json();
      return request.results;
    } else {
      console.log("algo deu errado");
      console.log(request);
    }
  } catch (err) {
    alert("algo deu errado na request");
  }
}

export async function RetrieveOneNew(id) {
  try {
    const response = await fetch(`${baseUrl}/${id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const request = await response.json();
      return request;
    } else {
      alert("algo deu errado");
    }
  } catch (err) {
    alert("algo deu errado");
  }
}
