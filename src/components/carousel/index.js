import Carousel from "react-bootstrap/Carousel";
import "./index.css";
function NewsCarousel() {
  return (
    <div className="news-section">
      <div className="carousel">
        <Carousel>
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
