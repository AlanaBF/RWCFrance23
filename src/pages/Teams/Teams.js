import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getFilterOptions as getTeamsNames } from "../Matches/Matches.js";
import "./index.css";
import Pooling from "./standings";


const Teams = () => {
  const [pools, setPools] = useState([]);
  const pooling = {
    "results": {
      "comp_id": "1272",
      "comp_name": "Rugby World Cup",
      "season": "2024",
      "standings": [
        {
          "table_name": "Pool A",
          "teams": [
            {
              "position": 1,
              "id": 1967,
              "name": "France",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            },
            {
              "position": 2,
              "id": 2873,
              "name": "Italy",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            },
            {
              "position": 3,
              "id": 8717,
              "name": "Namibia",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            },
            {
              "position": 4,
              "id": 2567,
              "name": "New Zealand",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            },
            {
              "position": 5,
              "id": 8417,
              "name": "Uruguay",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            }
          ]
        },
        {
          "table_name": "Pool B",
          "teams": [
            {
              "position": 1,
              "id": 1817,
              "name": "Ireland",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            },
            {
              "position": 2,
              "id": 2870,
              "name": "Romania",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            },
            {
              "position": 3,
              "id": 2117,
              "name": "Scotland",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            },
            {
              "position": 4,
              "id": 2717,
              "name": "South Africa",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            },
            {
              "position": 5,
              "id": 2267,
              "name": "Tonga",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            }
          ]
        },
        {
          "table_name": "Pool C",
          "teams": [
            {
              "position": 1,
              "id": 317,
              "name": "Australia",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            },
            {
              "position": 2,
              "id": 2879,
              "name": "Fiji",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            },
            {
              "position": 3,
              "id": 8567,
              "name": "Georgia",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            },
            {
              "position": 4,
              "id": 2891,
              "name": "Portugal",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            },
            {
              "position": 5,
              "id": 1517,
              "name": "Wales",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            }
          ]
        },
        {
          "table_name": "Pool D",
          "teams": [
            {
              "position": 1,
              "id": 2417,
              "name": "Argentina",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            },
            {
              "position": 2,
              "id": 58739,
              "name": "Chile",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            },
            {
              "position": 3,
              "id": 1667,
              "name": "England",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            },
            {
              "position": 4,
              "id": 9017,
              "name": "Japan",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            },
            {
              "position": 5,
              "id": 2867,
              "name": "Samoa",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            }
          ]
        },
        {
          "table_name": "RWC 2023 Pool B",
          "teams": [
            {
              "position": 4,
              "id": 2888,
              "name": "Spain",
              "played": 0,
              "won": 0,
              "drawn": 0,
              "lost": 0,
              "tries_for": 0,
              "tries_against": 0,
              "tries_diff": 0,
              "points_for": 0,
              "points_against": 0,
              "points_diff": 0,
              "try_bonus": 0,
              "losing_bonus": 0,
              "bye_bonus": 0,
              "points": 0
            }
          ]
        }
      ]
    }
  }

  useEffect(() => {
//Get pools
    const allPools = pooling.results.standings.map((pool) => ({
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
        <Container fluid className="pools">
          {pools.map((p) => (
            <Pooling
              pool_name={p.name}
              teamsCard={p.teams}
              key={p.name}
            />
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default Teams;
