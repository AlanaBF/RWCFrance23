import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import "./index.css";
import Pooling from "./standings";
import getPools from '../../utils/api_pools';


const Teams = () => {

  const [data, setData] = useState([])
  const [pools, setPools] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ isError: false, message: 'Something went wrong...' });

  //Fetch data
  useEffect(() => {
    //Get pools
    const fetchMatches = async () => {
      try {
        setLoading(true);
        const data = await getPools();
        setData(data.results.standings)
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


  // Combine two responses
  useEffect(() => {
    const allPools = data.map((pool) => ({
      name: pool.table_name,
      teams: pool.teams.map((team) => ({
        name: team.name,
        played: team.played,
        points: team.points,
        position: team.position,
        id: team.id
      })),
    }));
    //order pools with ranking position
    const sortedPools = allPools.map((pool) => ({
      ...pool,
      teams: pool.teams.sort((teamA, teamB) => teamA.position - teamB.position),
    }));
    const slicePools = sortedPools.slice(0, 4);
    setPools(slicePools);
  }, [data])



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
        <Container fluid className="pools">
          {loading ?
            <div className="spinner">
            <Spinner />
            </div> :
            error.isError ?
              <div><h4>{error.message}</h4></div> :
              pools.map((p) => (
                <Pooling
                  pool_name={p.name}
                  teamsCard={p.teams}
                  key={p.name}
                />
              ))
          }
        </Container>
      </Container>
    </Container>
  );
};

export default Teams;
