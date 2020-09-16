import { NEWS_API_KEY } from "./config";
export const getBitcoinArticles = async () => {
  const response = await fetch(
    `http://newsapi.org/v2/top-headlines?country=fr&apiKey=${NEWS_API_KEY}`
  );
  const json = await response.json();
  return json;
};