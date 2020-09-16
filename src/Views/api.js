import { NEWS_API_KEY } from "./config";
export const getBitcoinArticles = async () => {
  const response = await fetch(
    `http://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
  );
  const json = await response.json();
  return json;
};