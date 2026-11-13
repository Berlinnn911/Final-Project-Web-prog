
import { useEffect, useState } from "react";
import { FaNewspaper } from "react-icons/fa";

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchNews() {
      try {
        const params = new URLSearchParams({
          query: "(war OR conflict OR NATO OR nuclear)",
          mode: "artlist",
          format: "json",
          maxrecords: "10",
          timespan: "7d",
          sort: "datedesc",
        });

        const url =
          `https://api.gdeltproject.org/api/v2/doc/doc?${params.toString()}`;

        console.log("Fetching news from:", url);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log("GDELT API Response:", data);

        setArticles(data.articles || []);
      } catch (err) {
        console.error("News API Error:", err);

        setError("Unable to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <FaNewspaper className="text-danger fs-1 mb-3" />

        <h1 className="display-5 fw-bold">
          World News
        </h1>

        <p className="text-secondary">
          Latest international conflict and geopolitical news.
        </p>
      </div>

      {loading && (
        <p className="text-center">
          Loading news...
        </p>
      )}

      {error && (
        <p className="text-danger text-center">
          {error}
        </p>
      )}

      <div className="row g-4">
        {articles.map((article, index) => (
          <div
            className="col-md-6"
            key={article.url || index}
          >
            <div className="dashboard-card">
              <h5>{article.title}</h5>

              <p className="text-secondary small">
                {article.domain}
              </p>

              <p className="text-secondary small">
                {article.seendate}
              </p>

              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-danger btn-sm"
              >
                Read Article
              </a>
            </div>
          </div>
        ))}
      </div>

      {!loading && !error && articles.length === 0 && (
        <p className="text-center">
          No articles found.
        </p>
      )}
    </div>
  );
}

export default News;
