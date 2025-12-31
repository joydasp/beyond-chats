const API_URL = "http://localhost:5000/api/articles";

export async function fetchArticles() {
  const res = await fetch(API_URL);
  return res.json();
}
