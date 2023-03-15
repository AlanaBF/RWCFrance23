import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./index.css";
import getNews from '../../utils/api_news';


function NewsCarousel() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    message: "something"
  });

  useEffect(() => {
    fetchNews()
    async function fetchNews() {
      setLoading(true)
      try {
        const response = await getNews()
        setNews(response)
      } catch (error) {
        // setError({
        //   isError: true,
        //   message: "Error on news fetching"
        // })
        console.log('here we are on the error')
      } finally {
        setLoading(false)
      }
    }
  }, [])
  console.log(news)
  if(loading) return <h1>spinner</h1>
  if(error.isError) return <h1>{error.message}</h1>
  return (
    <div className="news-section">
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <div className="new">
              <img
                src={news[0]?.image.thumbnail.contentUrl}
                alt={news[0]?.name}
              />
              <div className="new-content">
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="new">
              <img
                src="https://www.linguahouse.com/linguafiles/md5/d33da85b80c5fadd52b0753f6092fbc0"
                alt="..."
              />
              <div className="new-content">
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="new">
              <img
                src="https://www.linguahouse.com/linguafiles/md5/d33da85b80c5fadd52b0753f6092fbc0"
                alt="..."
              />
              <div className="new-content">
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default NewsCarousel;
