import { Container, Row, Col } from "react-bootstrap";
import tempData from "./exampleData.json";
import "./style.css";


const ExampleUpdate = () => {
  const data = tempData.results
  return (
    <Container fluid className="live-page-container">
      <div>
        <div className="live-title-container">
          <Container>
            <h2 className="live-title">Example Match Data</h2>
          </Container>
        </div>
        <Container className="live-content">
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
              <Col xs={12} lg={12}>
                <Container className="live-card-container">
                  <h4 className="exampleHeading">Match Referees: </h4>{" "}
                  <div>
                    {data.referees?.map((referee) => (
                      <div key={referee.name}>
                        {referee.name}, {referee.country} Role: {referee.role}
                      </div>
                    ))}
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs={12} lg={6}>
                <Container className="live-card-container">
                  <Row>
                    <Col xs={12} lg={6}>
                      <h1 className="exampleHeading">
                        {data.match?.home_team}{" "}
                      </h1>
                    </Col>
                    <Col xs={12} lg={4}>
                      <h1 className="exampleHeading">
                        {" "}
                        Score: {data.match?.home_score}
                      </h1>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col xs={12} lg={6}>
                <Container className="live-card-container">
                  <Row>
                    <Col xs={12} lg={6}>
                      <h1 className="exampleHeading">
                        {data.match?.away_team}
                      </h1>
                    </Col>
                    <Col xs={12} lg={4}>
                      <h1 className="exampleHeading">
                        {" "}
                        Score: {data.match?.away_score}
                      </h1>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs={12} lg={6}>
                <Container className="live-card-container">
                  <h4 className="exampleTitle">Teamsheet</h4>
                  <div className="exampleHeading">
                    {" "}
                    Player Name and Player Number
                  </div>{" "}
                  {data.home?.teamsheet.map((player) => (
                    <div key={player.player_id}>
                      {player.name}, {player.position}
                    </div>
                  ))}
                </Container>
              </Col>
              <Col xs={12} lg={6}>
                <Container className="live-card-container">
                  <h4 className="exampleTitle">Teamsheet</h4>
                  <div className="exampleHeading">
                    Player Name and Player Number
                  </div>{" "}
                  {data.away?.teamsheet.map((player) => (
                    <div key={player.player_id}>
                      {player.name}, {player.position}
                    </div>
                  ))}
                </Container>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs={12} lg={6}>
                <Container className="live-card-container">
                  <h4 className="live-away-stats">Team stats:</h4>
                </Container>
                <Container className="live-card-container">
                  <h4 className="exampleHeading">Attack:</h4>{" "}
                  {data.home?.team_stats.attack.map((stats) => (
                    <div key={stats.stat}>
                      {stats.stat}:{stats.value}
                    </div>
                  ))}
                </Container>
                <Container className="live-card-container">
                  <h4 className="exampleHeading">Defence:</h4>{" "}
                  {data.home?.team_stats.defence.map((stats) => (
                    <div key={stats.stat}>
                      {stats.stat}:{stats.value}
                    </div>
                  ))}
                </Container>
                <Container className="live-card-container">
                  <h4 className="exampleHeading">Discipline:</h4>{" "}
                  {data.home?.team_stats.discipline.map((stats) => (
                    <div key={stats.stat}>
                      {stats.stat}:{stats.value}
                    </div>
                  ))}
                </Container>
                <Container className="live-card-container">
                  <h4 className="exampleHeading">Kicking:</h4>
                  {data.home?.team_stats.kicking.map((stats) => (
                    <div key={stats.stat}>
                      {stats.stat}:{stats.value}
                    </div>
                  ))}
                </Container>
                <Container className="live-card-container">
                  <h4 className="exampleHeading"> Breakdown:</h4>
                  {data.home?.team_stats.breakdown.map((stats) => (
                    <div key={stats.stat}>
                      {stats.stat}:{stats.value}
                    </div>
                  ))}
                </Container>
                <Container className="live-card-container">
                  <h4 className="exampleHeading">Lineouts:</h4>{" "}
                  {data.home?.team_stats.lineouts.map((stats) => (
                    <div key={stats.stat}>
                      {stats.stat}:{stats.value}
                    </div>
                  ))}
                </Container>
                <Container className="live-card-container">
                  <h4 className="exampleHeading">Scrums:</h4>{" "}
                  {data.home?.team_stats.scrums.map((stats) => (
                    <div key={stats.stat}>
                      {stats.stat}:{stats.value}
                    </div>
                  ))}
                </Container>
                <Container className="live-card-container">
                  <h4 className="exampleHeading">Possession:</h4>{" "}
                  {data.home?.team_stats.possession.map((stats) => (
                    <div key={stats.stat}>
                      {stats.stat}:{stats.value}
                    </div>
                  ))}
                </Container>
              </Col>
              <Col xs={12} lg={6}>
                <Container className="live-card-container">
                  <h4 className="live-away-stats exampleTitle">Team stats:</h4>
                </Container>
                <Container className="live-card-container">
                  <h4 className="exampleHeading">Attack:</h4>{" "}
                  {data.away?.team_stats.attack.map((stats) => (
                    <div key={stats.stat}>
                      {stats.stat}:{stats.value}
                    </div>
                  ))}
                </Container>
                <Container className="live-card-container">
                  <h4 className="exampleHeading">Defence:</h4>{" "}
                  {data.away?.team_stats.defence.map((stats) => (
                    <div key={stats.stat}>
                      {stats.stat}:{stats.value}
                    </div>
                  ))}
                </Container>
                <Container className="live-card-container">
                  <h4 className="exampleHeading">Discipline:</h4>{" "}
                  {data.away?.team_stats.discipline.map((stats) => (
                    <div key={stats.stat}>
                      {stats.stat}:{stats.value}
                    </div>
                  ))}
                </Container>
                <Container className="live-card-container">
                  <h4 className="exampleHeading">Kicking:</h4>
                  {data.away?.team_stats.kicking.map((stats) => (
                    <div key={stats.stat}>
                      {stats.stat}:{stats.value}
                    </div>
                  ))}
                </Container>
                <Container className="live-card-container">
                  <h4 className="exampleHeading">Breakdown:</h4>
                  {data.away?.team_stats.breakdown.map((stats) => (
                    <div key={stats.stat}>
                      {stats.stat}:{stats.value}
                    </div>
                  ))}
                </Container>
                <Container className="live-card-container">
                  <h4 className="exampleHeading">Lineouts:</h4>{" "}
                  {data.away?.team_stats.lineouts.map((stats) => (
                    <div key={stats.stat}>
                      {stats.stat}:{stats.value}
                    </div>
                  ))}
                </Container>
                <Container className="live-card-container">
                  <h4 className="exampleHeading">Scrums:</h4>{" "}
                  {data.away?.team_stats.scrums.map((stats) => (
                    <div key={stats.stat}>
                      {stats.stat}:{stats.value}
                    </div>
                  ))}
                </Container>
                <Container className="live-card-container">
                  <h4 className="exampleHeading">Possession:</h4>{" "}
                  {data.away?.team_stats.possession.map((stats) => (
                    <div key={stats.stat}>
                      {stats.stat}:{stats.value}
                    </div>
                  ))}
                </Container>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs={12} lg={4}>
                <Container className="live-card-container">
                  <h4 className="exampleTitle">Event Stats: </h4>
                  <div>
                    {data.events?.map((event) => (
                      <div key={event.event_id}>
                        {event.player_1_name}, {event.time}, {event.type}
                      </div>
                    ))}
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </Container>
  );
};

export default ExampleUpdate;