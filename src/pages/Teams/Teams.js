import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TeamCard from '../../components/TeamCard';
import './index.css';

const Teams = () => {
  return (
    <Container fluid className="teams-page-container">
      <div className="teams-title-container">
        <Container>
          <h2 className="teams-title">All  teams</h2>
        </Container>
      </div>
      <Container className="teams-content">
        <Row>
          <TeamCard />
        </Row>
      </Container>
    </Container>
  )
}

export default Teams