import { useState, useEffect } from "react"
import './style.css';
import getLiveData from "./LiveMatch_Api";

import { Container } from 'react-bootstrap';

import liveData from "./LiveMatch.json"

const LiveMatchData = () => {

  const [data, setData] = useState(liveData.results);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ isError: false, message: 'Something went wrong...' });

  useEffect(() => {

    const fetchLiveData = async () => {
      try {
        setLoading(true);
        const data = await getLiveData();
        setData(data.results)
        if (!data.results) {
          throw new Error(data)
        }
        console.log(data)
      } catch (error) {
        setError({ isError: true, message: error.message })
      } finally {
        setLoading(false)
      }
    }

    fetchLiveData()

  }, []);


  //Use effect to filter on change
//   useEffect(() => {

//     let filtered;
//     if (team === 'all') {
//       filtered = data
//     } else {
//       filtered = data.filter(match => match.home_id === team || match.away_id === team)
//     }

//     if (venue === 'all') {
//       setMatches(filtered)
//       return
//     } else {
//       filtered = filtered.filter(match => match.venue === venue)
//     }

//     setMatches(filtered);
//   }, [team, venue, data]);


  //Get all filterOptions  Names and Id's 
//   const getFilterOptions = () => {
//     const teams = {}
//     const venues = new Set([]);

//     data.forEach(match => {
//       if (!teams[match.home]) teams[match.home] = match.home_id;
//       if (!teams[match.away]) teams[match.away] = match.away_id;
//       venues.add(match.venue);
//     });

//     const venuesInArray = [...venues].map(venue => [venue]);
//     return { venues: venuesInArray, teams: Object.entries(teams) }
//   }

//   const filterOptions = getFilterOptions();

  return (
    <Container fluid className="live-page-container">
      <div>
        <div className="live-title-container">
          <Container>
            <h2 className="live-title">Live Match Data</h2>
          </Container>
        </div>
        {loading ? <div className="notification" ><Spinner /> </div>
          : error.isError ? <div className="notification">{error.message}</div>
            : <Container className="live-content">
              {/* <Row>
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
              </Row> */}
            </Container>
        }
      </div>

    </Container>
  )
}

export default LiveMatchData

