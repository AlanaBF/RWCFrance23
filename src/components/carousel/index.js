import { useState, useEffect } from "react";
import { Carousel, Button } from "react-bootstrap";
import "./index.css";
import getNews from '../../utils/api_news';
import Spinner from 'react-bootstrap/Spinner';
import RWClogo from "../../assets/images/Rugby-World-Cup-France-2023.png"

function NewsCarousel() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    message: "Initial error message"
  });

  useEffect(() => {
    fetchNews()
    async function fetchNews() {
      setLoading(true)
      try {
        const response = await getNews()
        if (!response) {
          throw new Error(response)
        }
        setNews(response.value)
      } catch (error) {
        setError({
          isError: true,
          message: error.message
        })
  
      } finally {
        setLoading(false)
      }
    }
  }, []);

  const renderCarouselItem = news.map(article => {
    return (
      <Carousel.Item key={article.name}>
        <div className="new">
          <img
            src={article?.image?.contentUrl || RWClogo}
            alt={article.name}
          />
          <div className="new-content">
            <h3>{article.name}</h3>
            <p>
              {article.description}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
            >
              <Button> Read more</Button>
            </a>
          </div>
        </div>
      </Carousel.Item>
    )
  })

  return (
    <div className="news-section">
      <div className="carousel">
        <Carousel>
          {
            loading
              ? <Carousel.Item>
                <div className="new">
                  <Spinner animation="grow" variant="light" />
                </div>
              </Carousel.Item>
              : error.isError
                ? <Carousel.Item>
                  <div className="new">
                    <h3>{error.message}</h3>
                  </div>
                </Carousel.Item>
                : renderCarouselItem
          }
        </Carousel>
      </div>
    </div>
  );
}

export default NewsCarousel;
