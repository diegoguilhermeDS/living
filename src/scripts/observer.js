import { getNews } from "./api.js";
import { getLocalStorage, setLocalStorage } from "./getAndSetLocalStorage.js";
import { renderNews } from "./render.js";

const observe = new IntersectionObserver(async (entries) => {
  if (entries.some((entry) => entry.isIntersecting)) {
    let offsetByLocalStorage = getLocalStorage("@living:offset");
    if (offsetByLocalStorage <= 30) {
      const news = await getNews(6, offsetByLocalStorage + 6);
      renderNews(news);
      setLocalStorage("@living:offset", offsetByLocalStorage + 6);
    }
  }
});

export { observe };
