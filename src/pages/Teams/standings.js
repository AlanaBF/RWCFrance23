import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import './standigns.css';
import TeamCard from "../../components/TeamCard";
import fixtures from '../Matches/Fixtures.json';
import countryCode from './countryCode.json';

const Pooling = ({pool_name, teamsCard}) => {

  const [data, setData] = useState(fixtures.results);
  const [teams, setTeams] = useState([]); //---> set the team for each card

  data.sort((a, b) => new Date(a.date) - new Date(b.date));
  //use this to check if order is correct
    // argentina.map(match => {
    //     const date = new Date(match.date);
    //     const day = date.getDate();
    //     const month = date.getMonth() + 1;
    //     const year = date.getFullYear();
    //     console.log(`${day}/${month}/${year}`)
    // })
  //loop trhow the teamsCard (which is pools.teams)
    //for each team filter by home.name ||away.name === team.name
    //get the first element of the filtered array [0]
    //update data

  useEffect(() => {
    const teams_ids = teamsCard.map( team => team.id);
    const teamsData = teams_ids.map(id => {
      return data.filter(team => id === team.away_id || id === team.home_id)[0];
    })
    setTeams(teamsData);
  },[]);
  //Ranking Position - the cards are ordered by position so just by adding this fuction it will start from 1 - to 5 on each pool.
  let position = 1;
  function rankingPosition() {
    return position++;
  }
  //filter by id
    //get closest to date match (match[0]) for each id

  //----
  //const team = create an object with each country id and closest to date match []
  //create a card for each 

  return (
    <div className="pool">
      <h3 className="pool_title">{pool_name}</h3>
      <Container className="teams-content">
          <Row className="teams-card-container">
            {teams.map((team, index) =>
             (
              <TeamCard
                key={index}
                home={team?.home}
                position={rankingPosition()}
                stade={team?.venue}
                away={team?.away}
              />
            ))}
          </Row>
        </Container>
    </div>
  )


  };

  export default Pooling;