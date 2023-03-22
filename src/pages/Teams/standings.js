import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "./standigns.css";
import TeamCard from "../../components/TeamCard";
import fixtures from "../Matches/Fixtures.json";

const Pooling = ({ pool_name, teamsCard }) => {
  const data = fixtures.results;
  const [teams, setTeams] = useState([]); //---> set the team for each card

  data.sort((a, b) => new Date(a.date) - new Date(b.date));

  useEffect(() => {
    const teams_ids = teamsCard.map((team) => {
      const ob = {
        name: team.name,
        id: team.id,
        played: team.played,
        points: team.points
      };
      return ob;
    });
    const teamsData = teams_ids.map((country) => {

      const currentMatch = data.filter(team => country.id === team.away_id || country.id === team.home_id)[0];

      const merged = { ...currentMatch, ...country }

      return merged;
    });
    setTeams(teamsData);
  }, [teamsCard, data]);


  //Ranking Position - the cards are ordered by position so just by adding this fuction it will start from 1 - to 5 on each pool.
  let position = 1;
  function rankingPosition() {
    return position++;
  }

  return (
    <div className='pool' >
      <h3 className="pool_title">{pool_name}</h3>
      <Container className="teams-content">
        <Row className="teams-card-container">
          {teams.map((team) => (
            <TeamCard
              pool={pool_name}
              key={team?.id}
              name={team?.name}
              home={team?.home}
              position={rankingPosition()}
              stade={team?.venue}
              away={team?.away}
              played={team?.played}
              points={team?.points}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Pooling;
