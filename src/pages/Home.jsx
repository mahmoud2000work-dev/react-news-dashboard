import axios from "axios"
import { useEffect, useState } from "react"
import Skeleton from "../components/Skeleton"
import NewsCard from "../components/NewsCard"
import CategoryFilter from "../components/CategoryFilter"

const CATEGORIES = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
  "politics",
];

export default function Home() {
  const randomCategory = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
  const [category, setCategory] = useState(randomCategory);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  async function fetchNews(cat) {
    setLoading(true);
    setError("");
    setArticles([]);

    try {
      const isPolitics = cat === "politics";

      const params = {
        apiKey: API_KEY,
        pageSize: 24,
      };

      if (isPolitics) {
        params.q = "politics";
      } else {
        params.country = "us";
        params.category = cat;
      }

      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines",
        { params }
      );

      if (response.data.status !== "ok") {
        setError("حدث خطأ أثناء جلب الأخبار");
        return;
      }

      setArticles(response.data.articles || []);
    } catch (err) {
      setError("Failed to connect with server");
    }

    setLoading(false);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Last News</h1>

      <CategoryFilter category={category} setCategory={setCategory} />

     {loading && (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
  )}

      {error && (
        <p className="text-center bg-red-100 text-red-600 py-3 rounded-md max-w-md mx-auto">
          {error}
        </p>
      )}

      {!loading && !error && articles.length === 0 && (
        <p className="text-center text-gray-600 py-6">No News Yet</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
