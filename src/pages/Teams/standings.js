import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import TeamCard from "../../components/TeamCard";

const Pooling = ({pool_name, teamsCard}) => {
  const argentinaInfo = {
    "results": [
      {
        "id": 8424772,
        "comp_id": 30,
        "comp_name": "International",
        "season": "2024",
        "date": "2023-08-05T19:10:00+00:00",
        "game_week": 1,
        "home": "Argentina",
        "away": "South Africa",
        "home_id": 2417,
        "away_id": 2717,
        "status": "Not Started",
        "venue": "Estadio Jose Amalfitani",
        "home_score": 0,
        "away_score": 0,
        "updated": "2023-03-20T01:00:09+00:00"
      },
      {
        "id": 8420200,
        "comp_id": 30,
        "comp_name": "International",
        "season": "2024",
        "date": "2023-08-26T00:00:00+00:00",
        "game_week": 1,
        "home": "Spain",
        "away": "Argentina",
        "home_id": 2888,
        "away_id": 2417,
        "status": "Not Started",
        "venue": "Civitas Metropolitano",
        "home_score": 0,
        "away_score": 0,
        "updated": "2023-03-20T01:00:09+00:00"
      },
      {
        "id": 920752,
        "comp_id": 1272,
        "comp_name": "Rugby Union World Cup",
        "season": "2024",
        "date": "2023-09-09T19:00:00+00:00",
        "game_week": 1,
        "home": "England",
        "away": "Argentina",
        "home_id": 1667,
        "away_id": 2417,
        "status": "Not Started",
        "venue": "Orange Velodrome",
        "home_score": 0,
        "away_score": 0,
        "updated": "2023-03-20T01:00:01+00:00"
      },
      {
        "id": 920878,
        "comp_id": 1272,
        "comp_name": "Rugby Union World Cup",
        "season": "2024",
        "date": "2023-09-22T15:45:00+00:00",
        "game_week": 1,
        "home": "Argentina",
        "away": "Samoa",
        "home_id": 2417,
        "away_id": 2867,
        "status": "Not Started",
        "venue": "Stade Geoffroy Guichard",
        "home_score": 0,
        "away_score": 0,
        "updated": "2023-03-20T01:00:02+00:00"
      },
      {
        "id": 920959,
        "comp_id": 1272,
        "comp_name": "Rugby Union World Cup",
        "season": "2024",
        "date": "2023-09-30T13:00:00+00:00",
        "game_week": 1,
        "home": "Argentina",
        "away": "Chile",
        "home_id": 2417,
        "away_id": 58739,
        "status": "Not Started",
        "venue": "Stade de la Beaujoire",
        "home_score": 0,
        "away_score": 0,
        "updated": "2023-03-20T01:00:02+00:00"
      },
      {
        "id": 921049,
        "comp_id": 1272,
        "comp_name": "Rugby Union World Cup",
        "season": "2024",
        "date": "2023-10-08T11:00:00+00:00",
        "game_week": 1,
        "home": "Japan",
        "away": "Argentina",
        "home_id": 9017,
        "away_id": 2417,
        "status": "Not Started",
        "venue": "Stade de la Beaujoire",
        "home_score": 0,
        "away_score": 0,
        "updated": "2023-03-20T01:00:02+00:00"
      }
    ]
  }
  const [data, setData] = useState(argentinaInfo.results);
  const argentina = data.filter(match => match.comp_id === 1272);
  argentina.sort((a, b) => new Date(a.date) - new Date(b.date));
  //use this to check if order is correct
    // argentina.map(match => {
    //     const date = new Date(match.date);
    //     const day = date.getDate();
    //     const month = date.getMonth() + 1;
    //     const year = date.getFullYear();
    //     console.log(`${day}/${month}/${year}`)
    // })
  console.log(argentina);
  //needs to make this responsive for each match
  const nextMatch = argentina[0];
  const {home, away, venue } = nextMatch;
  return (
    <div>
      <h3>{pool_name}</h3>
      <Container className="teams-content">
          <Row className="teams-card-container">
            {teamsCard.map((team) => (
              <TeamCard
                key={team.id}
                home={home}
                pool={pool_name}
                stade={venue}
                away={away}
              />
            ))}
          </Row>
        </Container>
    </div>
  )
  
  
  };
  
  export default Pooling;