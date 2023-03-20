import { useState, useEffect } from "react"
import getLiveData from "./LiveMatch_Api";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import liveMatchInfo from "./LiveMatchData.json"
import { useParams } from 'react-router-dom'
import Flags from '../../components/Flags'
import './style.css'

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
               <Col>
               <Container className="live-card-container">
              <h1> Venue: {data.match?.venue} </h1>
              <h1> {data.match?.home_team} vs {data.match?.away_team}</h1>
              <div className='live-card-flags '>
                {/* <Flags team={home} />
                <Flags team={away} /> */}
              </div>
              <h4> Score: {data.match?.home_score} : {data.match?.away_score}</h4>
              <h4>Match Referees: {data.referees}</h4>
              </Container>
              </Col>
              <Row>
                <Col xs={12} lg={6}>
                  <Container className="live-card-container">
                    <h1>{data.match?.home_team}</h1>
                    <h4>Teamsheet: {data.home?.teamsheet}</h4>
                    <h4 className="live-home-stats">Team stats:
                      Attack: {data.home?.team_stats.attack}
                      Defence: {data.home?.team_stats.defence}
                      Discipline: {data.home?.team_stats.discipline}
                      Kicking:{data.home?.team_stats.kicking}
                      Breakdown:{data.home?.team_stats.breakdown}
                      Lineouts: {data.home?.team_stats.lineouts}
                      Scrums: {data.home?.team_stats.scrums}
                      Possession: {data.home?.team_stats.possession}
                    </h4>
                  </Container>
                </Col>
                <Col xs={12} lg={6}>
                  <Container className="live-card-container">
                    <h1>{data.match?.away_team}</h1>
                    <h4>Teamsheet: {data.away?.teamsheet}</h4>
                    <h4 className="live-away-stats">Team stats:
                      Attack: {data.away?.team_stats.attack}
                      Defence: {data.away?.team_stats.defence}
                      Discipline: {data.away?.team_stats.discipline}
                      Kicking:{data.away?.team_stats.kicking}
                      Breakdown:{data.away?.team_stats.breakdown}
                      Lineouts: {data.away?.team_stats.lineouts}
                      Scrums: {data.away?.team_stats.scrums}
                      Possession: {data.away?.team_stats.possession}
                    </h4>
                  </Container>
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={6}>
                  <Container className="live-card-container">
                    <h4>Events Stats: {data.events}</h4>
                  </Container>
                </Col>
              </Row>
            </Container>
        }
      </div>


    </Container>
  )
}

export default LiveUpdates

