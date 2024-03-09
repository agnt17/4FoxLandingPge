// News.js

import { useState, useEffect, useRef } from "react";
import axios from "axios";


function News() {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {

        const apiUrl = `https://saurav.tech/NewsAPI/top-headlines/category/business/in.json`;
        const response = await axios.get(apiUrl);
      
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error in fetching news:", error.message);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [articles]);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <>
      <div className="hidden sm:flex m-10 justify-center">
        <div className="news-container h-fit">
          <div
            className="flex justify-center"
            ref={containerRef}
            style={{ transition: "transform 0.5s ease" }}
          >
            {articles.map((article, index) => (
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer"
                key={index}
              >
                <div
                  className={`news-card p-5 mx-2 max-w-sm rounded h-96 overflow-y-scroll scrollbar-thin scrollbar-track-transparent shadow-lg ${
                    index >= currentIndex && index < currentIndex + 3
                      ? ""
                      : "hidden"
                  }`}
                >
                  <img
                    className="w-full"
                    src={article.urlToImage}
                    alt={article.title}
                  />
                  <p className="text-gray-500 text-sm mt-2">
                    {formatDate(article.publishedAt.slice(0, 10))}
                    {"    "}{" "}
                    <span className="text-orange-500"> - News Article</span>{" "}
                  </p>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      {article.title}
                    </div>
                    <p className="text-sm text-gray-600">
                      {article.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="sm:hidden flex mt-8 mb-8 justify-center">
        <div className="news-container h-fit">
          <div
            className="flex justify-center"
            ref={containerRef}
            style={{ transition: "transform 0.5s ease" }}
          >
            {articles.map((article, index) => (
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer"
                key={index}
              >
                <div
                  className={`news-card p-5 mx-auto max-w-sm rounded max-h-80 overflow-y-scroll scrollbar-thin scrollbar-track-transparent shadow-lg ${
                    index >= currentIndex && index < currentIndex + 1
                      ? ""
                      : "hidden"
                  }`}
                >
                  <img
                    className="w-fit"
                    src={article.urlToImage}
                    alt={article.title}
                  />
                  <p className="text-gray-500 text-sm mt-2">
                    {formatDate(article.publishedAt.slice(0, 10))}
                    {"    "}{" "}
                    <span className="text-orange-500"> - News Article</span>{" "}
                  </p>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      {article.title}
                    </div>
                    <p className="text-sm text-gray-600">
                      {article.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
