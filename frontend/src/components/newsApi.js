// src/components/newsApi.js

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchNews = async (category = 'business') => {
  try {
    const response = await fetch(`${NEWS_API_URL}?country=us&category=${category}&apiKey=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    const data = await response.json();
    return data.articles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      imageUrl: article.urlToImage  // Add image URL if available
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
