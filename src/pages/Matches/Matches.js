import { useState, useEffect } from "react"
import './style.css';
import MatchCard from "../../components/MatchCard/MatchCard";
import getMatches from "../../utils/api_rugby/matches";

import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Box } from '@mui/material';

import tempData from "./Fixtures.json"
import Filters from "./Filters/Filters";

const Matches = () => {

  const [data, setData] = useState(tempData.results);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ isError: false, message: 'Something went wrong...' });

  const [matches, setMatches] = useState(tempData.results);
  const [team, setTeam] = useState('all');
  const [venue, setVenue] = useState('all');

  useEffect(() => {

    const fetchMatches = async () => {
      try {
        setLoading(true);
        const data = await getMatches();
        setData(data.results)
        if (!data.results) {
          throw new Error(data)
        }
      } catch (error) {
        setError({ isError: true, message: error.message })
      } finally {
        setLoading(false)
      }
    }

    fetchMatches()

  }, []);


  //Use effect to filter on change
  useEffect(() => {

    let filtered;
    if (team === 'all') {
      filtered = data
    } else {
      filtered = data.filter(match => match.home_id === team || match.away_id === team)
    }

    if (venue === 'all') {
      setMatches(filtered)
      return
    } else {
      filtered = filtered.filter(match => match.venue === venue)
    }

    setMatches(filtered);
  }, [team, venue, data]);


  const filterOptions = getFilterOptions(data);

  return (
    <Container fluid className="matches-page-container">
      <div>
        <div className="matches-title-container">
          <Container>
            <h2 className="matches-title">All  Matches</h2>
          </Container>
        </div>
        {loading ? <div className="notification" ><Spinner /> </div>
          : error.isError ? <div className="notification">{error.message}</div>
            : <Container className="matches-content">
              <Row>
                <Col xs={12} lg={3}>
                  <Box className="filters-container" sx={{ flexDirection: { lg: 'column' } }}>
                    <Filters
                      filterOptions={filterOptions.teams}
                      setOption={setTeam}
                      option={team}
                      title="Team"
                    />
                    <Filters
                      filterOptions={[...filterOptions.venues]}
                      setOption={setVenue}
                      option={venue}
                      title="Venue"
                    />
                  </Box>
                </Col>
                <Col xs={12} lg={9}>
                  {
                    matches.length ?
                      matches.map(match => <MatchCard key={match.id} match={match} />) :
                      <h4 className="notification">No results for selected criteria</h4>
                  }
                </Col>
              </Row>
            </Container>
        }
      </div>

    </Container>
  )
}


  //Get all filterOptions  Names and Id's 
 export const getFilterOptions = (data) => {
    const teams = {}
    const venues = new Set([]);

    data.forEach(match => {
      if (!teams[match.home]) teams[match.home] = match.home_id;
      if (!teams[match.away]) teams[match.away] = match.away_id;
      venues.add(match.venue);
    });

    const venuesInArray = [...venues].map(venue => [venue]);
    return { venues: venuesInArray, teams: Object.entries(teams) }
  }
export default Matches

