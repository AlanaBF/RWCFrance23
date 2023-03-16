import NewsCarousel from '../../components/carousel';
import Shop from '../../components/Shop/Shop';
import getNews from '../../utils/api_news';

import HeroImage from '../../components/Hero/Hero';
import Map from "../../components/Map/index"
const Home = () => {
  getNews()
  return (
    <div>
      <HeroImage />
      <NewsCarousel />
        <Shop />
      <Map />
    </div>

  )
}

export default Home