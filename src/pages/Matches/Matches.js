import { useState, useEffect } from "react"
import MatchCard from "../../components/MatchCard/MatchCard";
import getMatches from "../../utils/api_rugby/matches";

import { Container } from 'react-bootstrap';

import tempData from "./Fixtures.json"

const Matches = () => {

  const [matches, setMatches] = useState(tempData);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ isError: false, message: '' })

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


  const renderMatches = matches.results.map(match => {
    return (
      <MatchCard key={match.id} match={match} />
    )
  })

  return (
    <Container>
      {renderMatches}
    </Container>
  )
}

export default Matches