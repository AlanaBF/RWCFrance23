import React from "react";
import { Container, Row } from "react-bootstrap";
import TeamCard from "../../components/TeamCard";
import "./index.css";

const Teams = () => {
  const country = [
    {
      id: 2417,
      home: "Argentina",
    },
    {
      id: 317,
      home: "Australia",
    },
    {
      id: 58739,
      home: "Chile",
    },
    {
      id: 1667,
      home: "England",
    },
    {
      id: 2879,
      home: "Fiji",
    }
  ];
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
          <Row>
            {country.map((c) => (
              <TeamCard
                key={c.id}
                home={c.home}
                pool="Pool A"
                stade="Stade de France"
              />
            ))}
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default Teams;
