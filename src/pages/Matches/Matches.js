import { useState, useEffect } from "react"
import './style.css';
import MatchCard from "../../components/MatchCard/MatchCard";
import getMatches from "../../utils/api_rugby/matches";

import { Container, Row, Col } from 'react-bootstrap';

import tempData from "./Fixtures.json"
import Filters from "./Filters/Filters";

const Matches = () => {

  const [data, setData] = useState(tempData.results);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ isError: false, message: '' });

  const [matches, setMatches] = useState(tempData.results);
  const [team, setTeam] = useState('all');

  // useEffect(() => {

  //   const fetchMatches = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await getMatches();
  //       setMatches(data.results)
  //       console.log(data)
  //     } catch (error) {
  //       setError({ isError: true, message: error.message })
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   fetchMatches()

  // }, []);


  //Use effect to filter on change
  useEffect(() => {
    if (team === 'all') {
      setMatches(data);
    } else {
      const filteredMatches = data.filter(match => match.home_id === team || match.away_id === team)
      setMatches(filteredMatches);
    }
  }, [team])


  //Get all teams Names and Id's
  const getTeams = () => {
    const teams = {}

    data.forEach(match => {
      if (!teams[match.home]) teams[match.home] = match.home_id;
      if (!teams[match.away]) teams[match.away] = match.away_id;
    });

    return Object.entries(teams);
  }

  const teams = getTeams();

  return (
    <Container fluid className="matches-page-container">
      <div className="matches-title-container">
        <Container>
          <h2 className="matches-title">All  Matches</h2>
        </Container>
      </div>
      <Container className="matches-content">
        <Row>
          <Col xs={12} md={3}>
            <Filters teams={teams} setTeam={setTeam} team={team} />
          </Col>
          <Col xs={12} md={9}>
            {matches.map(match => <MatchCard key={match.id} match={match} />)}
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Matches