import React from "react";
import { Container, Row } from "react-bootstrap";
import TeamCard from "../../components/TeamCard";
import "./index.css";
// import standings from 'standings';

const Teams = () => {
  const country = [
    {
      id: 2417,
      name: "Argentina",
    },
    {
      id: 317,
      name: "Australia",
    },
    {
      id: 58739,
      name: "Chile",
    },
    {
      id: 1667,
      name: "England",
    },
    {
      id: 2879,
      name: "Fiji",
    }
  ];
//   const standings = 
// {
//     "table_name": "Pool A",
//     "teams": [
//       {
//         "position": 1,
//         "id": 9017,
//         "name": "Japan",
//         "played": 4,
//         "won": 4,
//         "drawn": 0,
//         "lost": 0,
//         "tries_for": 13,
//         "tries_against": 7,
//         "tries_diff": 6,
//         "points_for": 115,
//         "points_against": 62,
//         "points_diff": 0,
//         "try_bonus": 3,
//         "losing_bonus": 0,
//         "bye_bonus": 0,
//         "points": 19
//       },
//       {
//         "position": 2,
//         "id": 1817,
//         "name": "Ireland",
//         "played": 4,
//         "won": 3,
//         "drawn": 0,
//         "lost": 1,
//         "tries_for": 18,
//         "tries_against": 2,
//         "tries_diff": 16,
//         "points_for": 121,
//         "points_against": 27,
//         "points_diff": 0,
//         "try_bonus": 3,
//         "losing_bonus": 1,
//         "bye_bonus": 0,
//         "points": 16
//       },
//       {
//         "position": 3,
//         "id": 2117,
//         "name": "Scotland",
//         "played": 4,
//         "won": 2,
//         "drawn": 0,
//         "lost": 2,
//         "tries_for": 16,
//         "tries_against": 8,
//         "tries_diff": 8,
//         "points_for": 119,
//         "points_against": 55,
//         "points_diff": 0,
//         "try_bonus": 2,
//         "losing_bonus": 1,
//         "bye_bonus": 0,
//         "points": 11
//       },
//       {
//         "position": 4,
//         "id": 2867,
//         "name": "Samoa",
//         "played": 4,
//         "won": 1,
//         "drawn": 0,
//         "lost": 3,
//         "tries_for": 8,
//         "tries_against": 15,
//         "tries_diff": -7,
//         "points_for": 58,
//         "points_against": 128,
//         "points_diff": 0,
//         "try_bonus": 1,
//         "losing_bonus": 0,
//         "bye_bonus": 0,
//         "points": 5
//       },
//       {
//         "position": 5,
//         "id": 26567,
//         "name": "Russia",
//         "played": 4,
//         "won": 0,
//         "drawn": 0,
//         "lost": 4,
//         "tries_for": 1,
//         "tries_against": 24,
//         "tries_diff": -23,
//         "points_for": 19,
//         "points_against": 160,
//         "points_diff": 0,
//         "try_bonus": 0,
//         "losing_bonus": 0,
//         "bye_bonus": 0,
//         "points": 0
//       }
//     ]
//   }
  //get pools response
  //map response
    //for each pool 
      //map team names and push it to an array
  
  //check if name is included by mapping and add the pool name
  //check for pool
  return (
    <Container fluid className="teams-page-container">
      <Container className="teams-banner">
        <div className="teams-banner-content">
          <h3>RWC 2023 Team Profiles</h3>
          <h2>Qualified Teams</h2>
        </div>
        <img
          className="teams-hero"
          src="https://resources.world.rugby/photo-resources/2021/11/04/7841f49f-125c-47f3-b397-fc648c8ba2ae/RWC23_Teams-Page-Header.png?width=2000&height=520"
          alt="Rugby Player on Teams"
        />
      </Container>
      <Container className="title" fluid>
        <div className="teams-title-container">
          <Container>
            <h2 className="teams-title">All teams</h2>
          </Container>
        </div>
        <Container className="teams-content">
          <Row className="teams-card-container">
            {country.map((team) => 
              <TeamCard
                key={team.id}
                home= {team.name}
                pool="Pool A"
                stade="Stade de France"
              /> )}
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default Teams;
