import { useState, useEffect } from "react"
import getLiveData from "./LiveMatch_Api";
import { Container, Spinner } from 'react-bootstrap';
import liveMatchInfo from "./LiveMatchData.json"
import { useParams } from 'react-router-dom'
const LiveUpdates = () => {

  const { id } = useParams()

  const [data, setData] = useState([]);
  const [query, setQuery] = useState(id);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ isError: false, message: 'Something went wrong...' });



  useEffect(() => {

    const fetchLiveData = async () => {
      try {
        setLoading(true);
        const response = await getLiveData(query);
        setData(response.results)
        if (!response.results) {
          throw new Error(response)
        }
        console.log(response)
      } catch (error) {
        setError({ isError: true, message: error.message })
      } finally {
        setLoading(false)
      }
    }

    fetchLiveData()

  }, [query]);

  console.log(data)
  return (
    <Container fluid className="live-page-container">
      <div>
        <div className="live-title-container">
          <Container>
            <h2 className="live-title">Live Match Data</h2>
          </Container>
        </div>
        {loading ? <div className="notification" ><Spinner /> </div>
          : error.isError ? <div className="notification">{error.message}</div>
            : <Container className="live-content">
              <h1> Venue: {data.match?.venue}</h1>
            </Container>
        }
      </div>


    </Container>
  )
}

export default LiveUpdates

