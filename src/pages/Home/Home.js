import NewsCarousel from '../../components/carousel';
import getNews from '../../utils/api_news';
import HeroImage from '../../components/Hero/Hero';
const Home = () => {
  getNews()
  return (
    <div>
      <HeroImage />
      <NewsCarousel />
    </div>

  )
}

export default Home