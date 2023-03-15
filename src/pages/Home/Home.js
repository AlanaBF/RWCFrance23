import NewsCarousel from '../../components/carousel';
import getNews from '../../utils/api_news';

const Home = () => {
  getNews()
  return (
    <div>
        <h1>Home</h1>
        <NewsCarousel />
    </div>
  
  )
}

export default Home