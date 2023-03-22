import { Container, Row, Col } from 'react-bootstrap';
import Flags from '../../components/Flag';
import "./style.css";
import moment from "moment-timezone";
import { Link } from 'react-router-dom';



const MatchCard = ({ match }) => {
  //away_id, home_id, away_score, home_score, id
  const { home, away, date, venue, id, home_score, away_score } = match;
  const { month, dayDate, day, frenchTime, time } = formatDate(date);

  return (
    <Container fluid className='match-card-container' >
      <Row className='p-3'>
        <Col xs={12} md={3} className={'match-card-column'}>
          <Row>
            <Col xs={6} md={12}>
              <h5 className='match-card-day'>{day}</h5>
              <p><span>{dayDate}</span> {month}</p>
            </Col>
            <Col xs={6} md={12}>
              <Row className='match-card-times'>
                <Col xs={6} md={12}>
                  <p>French Time: <span className='fw-bold'>{frenchTime}</span></p>
                </Col>
                <Col xs={6} md={12}>
                  <p className='match-card-local'>Your Time: <span className='fw-bold'>{time}</span></p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={7} className={'match-card-column match-card-center'}>
          <div className='matches-card-flags '>
            <Flags team={home} />
            <Flags team={away} />
          </div>
          <div>
            <div>
              <h3 className='match-card-teams'>{home} <span>v</span> {away}</h3>
              <span className='match-card-score'>{home_score} : {away_score}</span>
            </div>
            <div >
              <span className='match-card-venue'>Venue:</span>  <span className='fw-lighter'>{venue}</span>
            </div>
          </div>
        </Col>
        <Col xs={12} md={2} className={'match-card-column match-card-right'}>
          <a href="https://tickets.rugbyworldcup.com/en"
            target="_blank" rel="noreferrer"
          >
            Tickets Info
          </a>
          <Link to={`/liveupdates/${id}`} className='match-card-live'>
            Live Updates
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default MatchCard


const formatDate = (timeStamp) => {
  const m = moment(timeStamp);

  const month = m.format('MMMM');
  const dayDate = m.format("DD");
  const day = m.format('dddd');
  const frenchTime = moment(timeStamp).tz('Europe/Paris').format('HH:mm');
  const time = m.format('HH:mm');

  return { month, dayDate, day, time, frenchTime }
}


// away
// : 
// "New Zealand"
// away_id
// : 
// 2567
// away_score
// : 
// 0
// comp_id
// : 
// 1272
// comp_name
// : 
// "Rugby Union World Cup"
// date
// : 
// "2023-09-08T19:00:00+00:00 "
// game_week
// : 
// 1
// home
// : 
// "France"
// home_id
// : 
// 1967
// home_score
// : 
// 0
// id
// : 
// 920716
// season
// : 
// "2024"
// status
// : 
// "Not Started"
// updated
// : 
// "2023-03-16T01:00:01+00:00"
// venue
// : 
// "Stade de France"