import React from "react";
import { Container, Row } from "react-bootstrap";
import TeamCard from "../../components/TeamCard";
import "./index.css";
import Pooling from "./standings";
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
        <Container>
        <p>I don't see the pool</p>
          <Pooling />
        </Container>
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
