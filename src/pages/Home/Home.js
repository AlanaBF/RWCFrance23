import NewsCarousel from '../../components/carousel';
import getNews from '../../utils/api_news';
import HeroImage from '../../components/Hero/Hero';
import Map from "../../components/Map/index"
const Home = () => {
  getNews()
  return (
    <div>
      <HeroImage />
      <NewsCarousel />
      <Map />
    </div>

  )
}

export default Home