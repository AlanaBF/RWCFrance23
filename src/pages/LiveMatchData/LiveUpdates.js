import { useState, useEffect } from "react"
import getLiveData from "./LiveMatch_Api";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './style.css';
import Flags from '../../components/Flag'

const LiveUpdates = () => {
  const { id } = useParams()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ isError: false, message: 'Something went wrong...' });

  useEffect(() => {

    const fetchLiveData = async () => {
      try {
        setLoading(true);
        const response = await getLiveData(id);
        setData(response.results)
        if (!response.results) {
          throw new Error(response)
        }
      } catch (error) {
        setError({ isError: true, message: error.message })
      } finally {
        setLoading(false)
      }
    }

    fetchLiveData()

  }, [id]);

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
              <Container>
                <Row>
                  <Col>
                    <Container>
                      <h1 className="live-venue liveHeading"> Venue: {data.match?.venue} </h1>
                    </Container>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col xs={12} lg={6}>
                    <Container className="live-card-container">
                      <h4 className="liveTitle">Match Referees:</h4> <div>{data.referees?.map(referee => <div key={referee.name}>Name: {referee.name}, Country: {referee.country}, Role: {referee.role}</div>)}</div>
                    </Container>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col xs={12} lg={6}>
                    <Container className="live-card-container">
                      <Row>
                        <Col xs={12} lg={2}><Flags className='live-card-flags' team={data.match?.home_team || 'tbc'} /></Col>
                        <Col xs={12} lg={6}><h1 className="liveTitle">{data.match?.home_team} </h1></Col>
                        <Col xs={12} lg={4}><h1 className="liveTitle"> Score: {data.match?.home_score}</h1></Col>
                      </Row>
                    </Container>
                  </Col>
                  <Col xs={12} lg={6}>
                    <Container className="live-card-container">
                      <Row>
                        <Col xs={12} lg={2}><Flags className='live-card-flags' team={data.match?.away_team || 'tbc'} /> </Col>
                        <Col xs={12} lg={6}><h1 className="liveTitle">{data.match?.away_team}</h1></Col>
                        <Col xs={12} lg={4}><h1 className="liveTitle"> Score: {data.match?.away_score}</h1></Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col xs={12} lg={6}>
                    <Container className="live-card-container">
                      <h4 className="liveHeading">Teamsheet</h4>
                      <div className="liveTitle">Player Name and Player Number</div> {data.home?.teamsheet.map(player => <div key={player.player_id}>{player.name}, {player.position}</div>)}
                    </Container>
                  </Col>
                  <Col xs={12} lg={6}>
                    <Container className="live-card-container">
                      <h4 className="liveHeading">Teamsheet:</h4>
                      <div className="liveTitle">Player Name and Player Number</div>{data.away?.teamsheet.map(player => <div key={player.player_id}>{player.name}, {player.position}</div>)}
                    </Container>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col xs={12} lg={6}>
                    <Container className="live-card-container liveHeading">
                      <h4 className="live-away-stats">Team stats:</h4></Container>
                    <Container className="live-card-container"><h4 className="liveTitle">Attack</h4>{data.home?.team_stats.attack.map(stats => <div key={stats.stat}>{stats.stat}:{stats.value}</div>)}</Container>
                    <Container className="live-card-container"><h4 className="liveTitle">Defence</h4>{data.home?.team_stats.defence.map(stats => <div key={stats.stat}>{stats.stat}:{stats.value}</div>)}</Container>
                    <Container className="live-card-container"><h4 className="liveTitle">Discipline</h4> {data.home?.team_stats.discipline.map(stats => <div key={stats.stat}>{stats.stat}:{stats.value}</div>)}</Container>
                    <Container className="live-card-container"><h4 className="liveTitle">Kicking</h4>{data.home?.team_stats.kicking.map(stats => <div key={stats.stat}>{stats.stat}:{stats.value}</div>)}</Container>
                    <Container className="live-card-container"><h4 className="liveTitle">Breakdown</h4>{data.home?.team_stats.breakdown.map(stats => <div key={stats.stat}>{stats.stat}:{stats.value}</div>)}</Container>
                    <Container className="live-card-container"><h4 className="liveTitle">Lineouts</h4>{data.home?.team_stats.lineouts.map(stats => <div key={stats.stat}>{stats.stat}:{stats.value}</div>)}</Container>
                    <Container className="live-card-container"><h4 className="liveTitle">Scrums</h4>{data.home?.team_stats.scrums.map(stats => <div key={stats.stat}>{stats.stat}:{stats.value}</div>)}</Container>
                    <Container className="live-card-container"><h4 className="liveTitle">Possession</h4>{data.home?.team_stats.possession.map(stats => <div key={stats.stat}>{stats.stat}:{stats.value}</div>)}</Container>
                  </Col>
                  <Col xs={12} lg={6}>
                    <Container className="live-card-container">
                      <h4 className="live-away-stats liveHeading">Team stats:</h4></Container>
                    <Container className="live-card-container"><h4 className="liveTitle">Attack</h4>{data.away?.team_stats.attack.map(stats => <div key={stats.stat}>{stats.stat}:{stats.value}</div>)}</Container>
                    <Container className="live-card-container"><h4 className="liveTitle">Defence</h4> {data.away?.team_stats.defence.map(stats => <div key={stats.stat}>{stats.stat}:{stats.value}</div>)}</Container>
                    <Container className="live-card-container"><h4 className="liveTitle">Discipline</h4> {data.away?.team_stats.discipline.map(stats => <div key={stats.stat}>{stats.stat}:{stats.value}</div>)}</Container>
                    <Container className="live-card-container"><h4 className="liveTitle">Kicking</h4>{data.away?.team_stats.kicking.map(stats => <div key={stats.stat}>{stats.stat}:{stats.value}</div>)}</Container>
                    <Container className="live-card-container"><h4 className="liveTitle">Breakdown</h4>{data.away?.team_stats.breakdown.map(stats => <div key={stats.stat}>{stats.stat}:{stats.value}</div>)}</Container>
                    <Container className="live-card-container"><h4 className="liveTitle">Lineouts</h4>{data.away?.team_stats.lineouts.map(stats => <div key={stats.stat}>{stats.stat}:{stats.value}</div>)}</Container>
                    <Container className="live-card-container"><h4 className="liveTitle">Scrums</h4> {data.away?.team_stats.scrums.map(stats => <div key={stats.stat}>{stats.stat}:{stats.value}</div>)}</Container>
                    <Container className="live-card-container"><h4 className="liveTitle">Possession</h4>{data.away?.team_stats.possession.map(stats => <div key={stats.stat}>{stats.stat}:{stats.value}</div>)}</Container>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col xs={12} lg={12}>
                    <Container className="live-card-container"><h4 className="liveHeading">Event Stats: </h4>
                      <div>{data.events?.map(event => <div key={event.event_id}>{event.player_1_name}, {event.time}, {event.type}</div>)}</div>
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

export default LiveUpdates

