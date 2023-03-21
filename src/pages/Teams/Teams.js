import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getFilterOptions as getTeamsNames } from "../Matches/Matches.js";
import tempData from "../Matches/Fixtures.json";
import "./index.css";
import Pooling from "./standings";
import contryCodes from "./countryCode.json";

const Teams = () => {
  const [pools, setPools] = useState([]);
  const pooling = {
    meta: {
      title: "Live Rugby API - Standings Rugby World Cup - 2020",
      description: "Season standings file.",
      fields: {
        comp_id: "Integer",
        comp_name: "String",
        season: "Integer",
        standings_array: {
          table_name:
            "String - some competitions have multiple tables; if only one table, default name is comp_name",
          teams_array: {
            position: "Integer",
            id: "Integer - team_id",
            name: "String",
            played: "Integer",
            won: "Integer",
            drawn: "Integer",
            lost: "Integer",
            tries_for: "Integer",
            tries_against: "Integer",
            tries_diff: "Integer",
            points_for: "Integer",
            points_against: "Integer",
            points_diff: "Integer",
            try_bonus: "Integer",
            losing_bonus: "Integer",
            bye_bonus: "Integer",
            points: "Integer",
          },
        },
      },
    },
    results: {
      comp_id: "1272",
      comp_name: "Rugby World Cup",
      season: "2020",
      standings: [
        {
          table_name: "Pool A",
          teams: [
            {
              position: 1,
              id: 9017,
              name: "Japan",
              played: 4,
              won: 4,
              drawn: 0,
              lost: 0,
              tries_for: 13,
              tries_against: 7,
              tries_diff: 6,
              points_for: 115,
              points_against: 62,
              points_diff: 0,
              try_bonus: 3,
              losing_bonus: 0,
              bye_bonus: 0,
              points: 19,
            },
            {
              position: 2,
              id: 1817,
              name: "Ireland",
              played: 4,
              won: 3,
              drawn: 0,
              lost: 1,
              tries_for: 18,
              tries_against: 2,
              tries_diff: 16,
              points_for: 121,
              points_against: 27,
              points_diff: 0,
              try_bonus: 3,
              losing_bonus: 1,
              bye_bonus: 0,
              points: 16,
            },
            {
              position: 3,
              id: 2117,
              name: "Scotland",
              played: 4,
              won: 2,
              drawn: 0,
              lost: 2,
              tries_for: 16,
              tries_against: 8,
              tries_diff: 8,
              points_for: 119,
              points_against: 55,
              points_diff: 0,
              try_bonus: 2,
              losing_bonus: 1,
              bye_bonus: 0,
              points: 11,
            },
            {
              position: 4,
              id: 2867,
              name: "Samoa",
              played: 4,
              won: 1,
              drawn: 0,
              lost: 3,
              tries_for: 8,
              tries_against: 15,
              tries_diff: -7,
              points_for: 58,
              points_against: 128,
              points_diff: 0,
              try_bonus: 1,
              losing_bonus: 0,
              bye_bonus: 0,
              points: 5,
            },
            {
              position: 5,
              id: 26567,
              name: "Russia",
              played: 4,
              won: 0,
              drawn: 0,
              lost: 4,
              tries_for: 1,
              tries_against: 24,
              tries_diff: -23,
              points_for: 19,
              points_against: 160,
              points_diff: 0,
              try_bonus: 0,
              losing_bonus: 0,
              bye_bonus: 0,
              points: 0,
            },
          ],
        },
        {
          table_name: "Pool B",
          teams: [
            {
              position: 1,
              id: 2567,
              name: "New Zealand",
              played: 4,
              won: 3,
              drawn: 1,
              lost: 0,
              tries_for: 22,
              tries_against: 1,
              tries_diff: 21,
              points_for: 157,
              points_against: 22,
              points_diff: 0,
              try_bonus: 2,
              losing_bonus: 0,
              bye_bonus: 0,
              points: 16,
            },
            {
              position: 2,
              id: 2717,
              name: "South Africa",
              played: 4,
              won: 3,
              drawn: 0,
              lost: 1,
              tries_for: 27,
              tries_against: 3,
              tries_diff: 24,
              points_for: 185,
              points_against: 36,
              points_diff: 0,
              try_bonus: 3,
              losing_bonus: 0,
              bye_bonus: 0,
              points: 15,
            },
            {
              position: 3,
              id: 2873,
              name: "Italy",
              played: 4,
              won: 2,
              drawn: 1,
              lost: 1,
              tries_for: 14,
              tries_against: 11,
              tries_diff: 3,
              points_for: 98,
              points_against: 78,
              points_diff: 0,
              try_bonus: 2,
              losing_bonus: 0,
              bye_bonus: 0,
              points: 12,
            },
            {
              position: 4,
              id: 8717,
              name: "Namibia",
              played: 4,
              won: 0,
              drawn: 1,
              lost: 3,
              tries_for: 3,
              tries_against: 27,
              tries_diff: -24,
              points_for: 34,
              points_against: 175,
              points_diff: 0,
              try_bonus: 0,
              losing_bonus: 0,
              bye_bonus: 0,
              points: 2,
            },
            {
              position: 5,
              id: 2876,
              name: "Canada",
              played: 4,
              won: 0,
              drawn: 1,
              lost: 3,
              tries_for: 2,
              tries_against: 26,
              tries_diff: -24,
              points_for: 14,
              points_against: 177,
              points_diff: 0,
              try_bonus: 0,
              losing_bonus: 0,
              bye_bonus: 0,
              points: 2,
            },
          ],
        },
        {
          table_name: "Pool C",
          teams: [
            {
              position: 1,
              id: 1667,
              name: "England",
              played: 4,
              won: 3,
              drawn: 1,
              lost: 0,
              tries_for: 17,
              tries_against: 2,
              tries_diff: 15,
              points_for: 119,
              points_against: 20,
              points_diff: 0,
              try_bonus: 3,
              losing_bonus: 0,
              bye_bonus: 0,
              points: 17,
            },
            {
              position: 2,
              id: 1967,
              name: "France",
              played: 4,
              won: 3,
              drawn: 1,
              lost: 0,
              tries_for: 9,
              tries_against: 5,
              tries_diff: 4,
              points_for: 79,
              points_against: 51,
              points_diff: 0,
              try_bonus: 1,
              losing_bonus: 0,
              bye_bonus: 0,
              points: 15,
            },
            {
              position: 3,
              id: 2417,
              name: "Argentina",
              played: 4,
              won: 2,
              drawn: 0,
              lost: 2,
              tries_for: 14,
              tries_against: 13,
              tries_diff: 1,
              points_for: 106,
              points_against: 91,
              points_diff: 0,
              try_bonus: 2,
              losing_bonus: 1,
              bye_bonus: 0,
              points: 11,
            },
            {
              position: 4,
              id: 2267,
              name: "Tonga",
              played: 4,
              won: 1,
              drawn: 0,
              lost: 3,
              tries_for: 9,
              tries_against: 13,
              tries_diff: -4,
              points_for: 67,
              points_against: 105,
              points_diff: 0,
              try_bonus: 1,
              losing_bonus: 1,
              bye_bonus: 0,
              points: 6,
            },
            {
              position: 5,
              id: 8867,
              name: "USA",
              played: 4,
              won: 0,
              drawn: 0,
              lost: 4,
              tries_for: 7,
              tries_against: 23,
              tries_diff: -16,
              points_for: 52,
              points_against: 156,
              points_diff: 0,
              try_bonus: 0,
              losing_bonus: 0,
              bye_bonus: 0,
              points: 0,
            },
          ],
        },
        {
          table_name: "Pool D",
          teams: [
            {
              position: 1,
              id: 1517,
              name: "Wales",
              played: 4,
              won: 4,
              drawn: 0,
              lost: 0,
              tries_for: 17,
              tries_against: 9,
              tries_diff: 8,
              points_for: 136,
              points_against: 69,
              points_diff: 0,
              try_bonus: 3,
              losing_bonus: 0,
              bye_bonus: 0,
              points: 19,
            },
            {
              position: 2,
              id: 317,
              name: "Australia",
              played: 4,
              won: 3,
              drawn: 0,
              lost: 1,
              tries_for: 20,
              tries_against: 6,
              tries_diff: 14,
              points_for: 136,
              points_against: 68,
              points_diff: 0,
              try_bonus: 3,
              losing_bonus: 1,
              bye_bonus: 0,
              points: 16,
            },
            {
              position: 3,
              id: 2879,
              name: "Fiji",
              played: 4,
              won: 1,
              drawn: 0,
              lost: 3,
              tries_for: 17,
              tries_against: 14,
              tries_diff: 3,
              points_for: 110,
              points_against: 108,
              points_diff: 0,
              try_bonus: 2,
              losing_bonus: 1,
              bye_bonus: 0,
              points: 7,
            },
            {
              position: 4,
              id: 8567,
              name: "Georgia",
              played: 4,
              won: 1,
              drawn: 0,
              lost: 3,
              tries_for: 9,
              tries_against: 18,
              tries_diff: -9,
              points_for: 65,
              points_against: 122,
              points_diff: 0,
              try_bonus: 1,
              losing_bonus: 0,
              bye_bonus: 0,
              points: 5,
            },
            {
              position: 5,
              id: 8417,
              name: "Uruguay",
              played: 4,
              won: 1,
              drawn: 0,
              lost: 3,
              tries_for: 6,
              tries_against: 22,
              tries_diff: -16,
              points_for: 60,
              points_against: 140,
              points_diff: 0,
              try_bonus: 0,
              losing_bonus: 0,
              bye_bonus: 0,
              points: 4,
            },
          ],
        },
      ],
    },
  };

  useEffect(() => {
//Get pools

    const allPools = pooling.results.standings.map((pool) => ({
      name: pool.table_name,
      teams: pool.teams.map((team) => ({
        name: team.name,
        position: team.position,
        id: team.id,
      })),
    }));
    //order pools with ranking position
    const sortedPools = allPools.map((pool) => ({
      ...pool,
      teams: pool.teams.sort((teamA, teamB) => teamA.position - teamB.position),
    }));

    setPools(sortedPools);
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
  console.log(pools);

  //filter by name and get position

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
        <Container className="pools">
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
