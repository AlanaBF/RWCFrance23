import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import './standigns.css';
import TeamCard from "../../components/TeamCard";
import fixtures from '../Matches/Fixtures.json';
import countryCode from './countryCode.json';

const Pooling = ({pool_name, teamsCard}) => {

  const [data, setData] = useState(fixtures.results);
  const [teams, setTeams] = useState() //---> set the team for each card

  data.sort((a, b) => new Date(a.date) - new Date(b.date));
  //use this to check if order is correct
    // argentina.map(match => {
    //     const date = new Date(match.date);
    //     const day = date.getDate();
    //     const month = date.getMonth() + 1;
    //     const year = date.getFullYear();
    //     console.log(`${day}/${month}/${year}`)
    // })
  //Next Match information neeeded - needs to make this responsive for each match
  // useEffect(() => {
  //   let matches = [];
  //   teamsCard.map(c => {
  //     let country = data.filter(m => m.home === c.name || m.away === c.name);
  //     let team = {
  //       id: c.id,
  //       match: country[0]
  //     }
  //     matches.push(team)
  //   })
  //   setTeams(matches)
  //   console.log('---------------------------')
  //   console.log(teams)
  // }, [])
  

  const {home, away, venue } = data[0];
  
  //Ranking Position - the cards are ordered by position so just by adding this fuction it will start from 1 - to 5 on each pool.
  let position = 1;
  function rankingPosition() {
    return position++;
  }

  return (
    <div className="pool">
      <h3 className="pool_title">{pool_name}</h3>
      <Container className="teams-content">
          <Row className="teams-card-container">
            {teamsCard.map((team) =>
             (
              <TeamCard
                key={team.id}
                home={home}
                //get ranking position
                position={rankingPosition()}
                stade={venue}
                away={away}
              />
            ))}
          </Row>
        </Container>
    </div>
  )


  };

  export default Pooling;