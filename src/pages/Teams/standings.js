import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import TeamCard from "../../components/TeamCard";

const Pooling = ({pool_name, teamsCard}) => {
  return (
    <div>
      <h3>{pool_name}</h3>
      <Container className="teams-content">
          <Row className="teams-card-container">
            {teamsCard.map((team) => (
              <TeamCard
                key={team.id}
                home={team.name}
                pool={pool_name}
                stade="Stade de France"
              />
            ))}
          </Row>
        </Container>
    </div>
  )
  
  
  };
  
  export default Pooling;