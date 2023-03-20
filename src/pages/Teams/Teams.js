import {useEffect, useState} from "react";
import { Container, Row } from "react-bootstrap";
import TeamCard from "../../components/TeamCard";
import "./index.css";
import Pooling from "./standings";
import { getFilterOptions as getTeamsNames } from '../Matches/Matches.js';
import tempData from "../Matches/Fixtures.json"


const Teams = () => {
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState({ isError: false, message: 'Something went wrong...' });

  useEffect(() => {
    // const fetchMatches = async () => {
    //   try {
    //     setLoading(true);
    //     const data = await getMatches();
    //     setData(data.results)
    //     if (!data.results) {
    //       throw new Error(data)
    //     }
    //     console.log(data)
    //   } catch (error) {
    //     setError({ isError: true, message: error.message })
    //   } finally {
    //     setLoading(false)
    //   }
    // }

    // fetchMatches()

  }, []);
  const [data, setData] = useState(tempData.results);
  const filterOptions = getTeamsNames(data).teams;
  console.log(filterOptions);
  
  //from filtered options I need to use the id to get next match and venue
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
            {data.map((team) => 
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
