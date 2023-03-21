import { useState, useEffect } from "react"
import getExampleData from "./Example_Api";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
// import liveMatchInfo from "../LiveMatchData/LiveMatchData.json"

import './style.css'

const ExampleUpdate = () => {
    // const { id } = useParams()
    const [data, setData] = useState([]);
    //const [query, setQuery] = useState();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({ isError: false, message: 'Something went wrong...' });
  
    useEffect(() => {
  
      const fetchExampleData = async () => {
        try {
          setLoading(true);
          const response = await getExampleData();
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
  
      fetchExampleData()
  
    }, []);
  
    return (
      <Container fluid className="live-page-container">
        <div>
          <div className="live-title-container">
            <Container>
              <h2 className="live-title">Example Match Data</h2>
            </Container>
          </div>
          {loading ? <div className="notification" ><Spinner /> </div>
            : error.isError ? <div className="notification">{error.message}</div>
              : <Container className="live-content">
  
                <Container>
                  <Row>
                    <Col>
                      <Container>
                        <h1 className="live-venue"> Venue: {data.match?.venue} </h1>
                      </Container>
                    </Col>
                  </Row>
                </Container>
  
                <Container>
                  <Row>
                    <Col xs={12} lg={6}>
                      <Container className="live-card-container">
                        <h4>Match Referees: {data.referees}</h4>
                      </Container>
                    </Col>
                  </Row>
                </Container>
  
                <Container>
                  <Row>
                    <Col xs={12} lg={6}>
                      <Container className="live-card-container">
                        <Row>
                          {/* <Col xs={12} lg={2}><Flags className='live-card-flags' team={data.match?.home_team || 'tbc'} /></Col> */}
                          <Col xs={12} lg={6}><h1>{data.match?.home_team} </h1></Col>
                          <Col xs={12} lg={4}><h1> Score: {data.match?.home_score}</h1></Col>
                        </Row>
                      </Container>
                    </Col>
                    <Col xs={12} lg={6}>
                      <Container className="live-card-container">
                        <Row>
                          {/* <Col xs={12} lg={2}><Flags className='live-card-flags' team={data.match?.away_team || 'tbc'} /> </Col> */}
                          <Col xs={12} lg={6}><h1>{data.match?.away_team}</h1></Col>
                          <Col xs={12} lg={4}><h1> Score: {data.match?.away_score}</h1></Col>
                        </Row>
                      </Container>
                    </Col>
                  </Row>
                </Container>
  
                <Container>
                  <Row>
                    <Col xs={12} lg={6}>
                      <Container className="live-card-container">
                        <h4>Teamsheet: {data.home?.teamsheet}</h4>
                      </Container>
                    </Col>
  
                    <Col xs={12} lg={6}>
                      <Container className="live-card-container">
                        <h4>Teamsheet: {data.away?.teamsheet}</h4>
                      </Container>
                    </Col>
                  </Row>
                </Container>
  
                <Container>
                  <Row>
                    <Col xs={12} lg={6}>
                      <Container className="live-card-container">
                        <h4 className="live-home-stats">
                          Team stats:
                          <li>Attack: {data.home?.team_stats.attack}</li>
                          <li>Defence: {data.home?.team_stats.defence}</li>
                          <li>Discipline: {data.home?.team_stats.discipline}</li>
                          <li>Kicking:{data.home?.team_stats.kicking}</li>
                          <li>Breakdown:{data.home?.team_stats.breakdown}</li>
                          <li>Lineouts: {data.home?.team_stats.lineouts}</li>
                          <li>Scrums: {data.home?.team_stats.scrums}</li>
                          <li>Possession: {data.home?.team_stats.possession}</li>
                        </h4>
                      </Container>
                    </Col>
  
                    <Col xs={12} lg={6}>
                      <Container className="live-card-container">
                        <h4 className="live-away-stats">
                          Team stats:
                          <li>Attack: {data.away?.team_stats.attack}</li>
                          <li>Defence: {data.away?.team_stats.defence}</li>
                          <li>Discipline: {data.away?.team_stats.discipline}</li>
                          <li>Kicking:{data.away?.team_stats.kicking}</li>
                          <li>Breakdown:{data.away?.team_stats.breakdown}</li>
                          <li>Lineouts: {data.away?.team_stats.lineouts}</li>
                          <li>Scrums: {data.away?.team_stats.scrums}</li>
                          <li>Possession: {data.away?.team_stats.possession}</li>
                        </h4>
                      </Container>
                    </Col>
                  </Row>
                </Container>
  
                <Container>
                  <Row>
                    <Col xs={12} lg={12}>
                      <Container className="live-card-container">
                        <h4>Events Stats: {data.events}</h4>
                      </Container>
                    </Col>
                  </Row>
                </Container>
  
              </Container>
          }
        </div >
      </Container >
    )
  }
  
  export default ExampleUpdate
  
  