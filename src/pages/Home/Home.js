import NewsCarousel from '../../components/carousel';
import Shop from '../../components/Shop/Shop';
import getNews from '../../utils/api_news';
import './index.css';

import HeroImage from '../../components/Hero/Hero';
import Map from "../../components/Map/index"
const Home = () => {
  getNews()
  return (
    <div className='home'>
      <HeroImage />
      <NewsCarousel />
      <Shop />
      <Map />

    </div>

  )
}

export default Home