import NewsApi from "newsapi";

const newsApi = new NewsApi(process.env.REACT_APP_NEWS_API);

export default newsApi;
