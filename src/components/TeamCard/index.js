import { Container, Row, Col } from "react-bootstrap";
import Flags from '../Flags'
import "./index.css";
// import moment from "moment-timezone";

const TeamCard = ({ away, stade, home, position, name, played , points, pool  }) => {
  //   const { month, dayDate, day, frenchTime, time } = formatDate(date);

  return (
    <Container fluid className={`team-card-container ${pool}`}>
      <Row className="p-3 card-body">
        <Col xs={12} md={1} className={"team-card-column position"} style={{ margin: 'auto 0'}}>
          <span>{position}</span>
        </Col>
        <Col
          xs={12}
          md={4}
          className={"team-card-column team-card-center cvc"}
          style={{ margin: 'auto 0'}}
        >
          <Flags team={name} />
          <h3>{name}</h3>
        </Col>
        <Col
          xs={12}
          md={5}
          className={"team-card-column team-card-center"}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h6 className="section-title">NEXT RWC MATCH</h6>
          <h5>
            <b>{home} v {away}</b>
          </h5>
          <h5>
            <span> {stade}</span>
          </h5>
        </Col>
        <Col xs={12} md={2} className={"team-card-column"} style={{ margin: 'auto 0'}}>
          <p><b>PL:</b>   {played}</p>
          <p><b>PTS:</b>  {points}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamCard;

//Team Name - Team id
//Ranking position
//Next Match
//Vs
//pool - stadium
//Highest RWC Finish

//order by closest to day

//load a card for each team
//use de countryCode.json for country name
//with the id - make an api call to fixtures by team endpoint
//look if exist any comp_name: "Rugby Union World Cup"
//If so, get the closes to date one and load:
//vs team
//pool
//stadium

//We need to find pool, wordl ranking, highest rwc finish

//api call to standings for pool

// {
//   "meta": {
//     "title": "Live Rugby API -  Upcoming Fixtures for Argentina",
//     "description": "Upcoming or in play fixtures only for given team across all competitions",
//     "fields": {
//       "id": "Integer - unique fixture id, use to query match endpoint",
//       "comp_id": "Integer",
//       "comp_name": "String",
//       "season": "Integer",
//       "date": "Timestamp - ISO 8601 - always UTC",
//       "game_week": "Integer",
//       "home": "String",
//       "away": "String",
//       "home_id": "Integer",
//       "away_id": "Integer",
//       "status": "String - Not Started, First Half, Half Time, Second Half, Full Time, Postponed, Cancelled, Result",
//       "venue": "String",
//       "home_score": "Integer",
//       "away_score": "Integer",
//       "updated": "Timestamp - IS0 8601 - always UTC"
//     }
//   },
//   "results": [
//     {
//       "id": 8424772,
//       "comp_id": 30,
//       "comp_name": "International",
//       "season": "2024",
//       "date": "2023-08-05T19:10:00+00:00",
//       "game_week": 1,
//       "home": "Argentina",
//       "away": "South Africa",
//       "home_id": 2417,
//       "away_id": 2717,
//       "status": "Not Started",
//       "venue": "Estadio Jose Amalfitani",
//       "home_score": 0,
//       "away_score": 0,
//       "updated": "2023-03-18T01:00:09+00:00"
//     },
//     {
//       "id": 8420200,
//       "comp_id": 30,
//       "comp_name": "International",
//       "season": "2024",
//       "date": "2023-08-26T00:00:00+00:00",
//       "game_week": 1,
//       "home": "Spain",
//       "away": "Argentina",
//       "home_id": 2888,
//       "away_id": 2417,
//       "status": "Not Started",
//       "venue": "Civitas Metropolitano",
//       "home_score": 0,
//       "away_score": 0,
//       "updated": "2023-03-18T01:00:09+00:00"
//     },
//     {
//       "id": 920752,
//       "comp_id": 1272,
//       "comp_name": "Rugby Union World Cup",
//       "season": "2024",
//       "date": "2023-09-09T19:00:00+00:00",
//       "game_week": 1,
//       "home": "England",
//       "away": "Argentina",
//       "home_id": 1667,
//       "away_id": 2417,
//       "status": "Not Started",
//       "venue": "Orange Velodrome",
//       "home_score": 0,
//       "away_score": 0,
//       "updated": "2023-03-18T01:00:03+00:00"
//     },
//     {
//       "id": 920878,
//       "comp_id": 1272,
//       "comp_name": "Rugby Union World Cup",
//       "season": "2024",
//       "date": "2023-09-22T15:45:00+00:00",
//       "game_week": 1,
//       "home": "Argentina",
//       "away": "Samoa",
//       "home_id": 2417,
//       "away_id": 2867,
//       "status": "Not Started",
//       "venue": "Stade Geoffroy Guichard",
//       "home_score": 0,
//       "away_score": 0,
//       "updated": "2023-03-18T01:00:03+00:00"
//     },
//     {
//       "id": 920959,
//       "comp_id": 1272,
//       "comp_name": "Rugby Union World Cup",
//       "season": "2024",
//       "date": "2023-09-30T13:00:00+00:00",
//       "game_week": 1,
//       "home": "Argentina",
//       "away": "Chile",
//       "home_id": 2417,
//       "away_id": 58739,
//       "status": "Not Started",
//       "venue": "Stade de la Beaujoire",
//       "home_score": 0,
//       "away_score": 0,
//       "updated": "2023-03-18T01:00:03+00:00"
//     },
//     {
//       "id": 921049,
//       "comp_id": 1272,
//       "comp_name": "Rugby Union World Cup",
//       "season": "2024",
//       "date": "2023-10-08T11:00:00+00:00",
//       "game_week": 1,
//       "home": "Japan",
//       "away": "Argentina",
//       "home_id": 9017,
//       "away_id": 2417,
//       "status": "Not Started",
//       "venue": "Stade de la Beaujoire",
//       "home_score": 0,
//       "away_score": 0,
//       "updated": "2023-03-18T01:00:03+00:00"
//     }
//   ]
// }
