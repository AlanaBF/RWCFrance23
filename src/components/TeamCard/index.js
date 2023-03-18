import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
// import moment from "moment-timezone";

const TeamCard = ({ match }) => {
  //   const { home, away, date, venue } = match;
  //   const { month, dayDate, day, frenchTime, time } = formatDate(date);

  return (
    <Container fluid className="match-card-container">
      <Row className="p-3">
        <Col xs={12} md={2} className={"match-card-column"}>
          <span>Country icon</span>
        </Col>
        <Col xs={12} md={3} className={"match-card-column match-card-center"} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h3>Country Name</h3>
          <h5 className="ranking-p">Ranking Position</h5>
        </Col>
        <Col xs={12} md={3} className={"match-card-column match-card-center"} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <h6 className="section-title">NEXT RWC MATCH</h6>
          <h5>COUNTRY v COUNTRY</h5>
          <h5>
            Pool A <span>Stade De France</span>
          </h5>
        </Col>
        <Col xs={12} md={4} className={"match-card-column"} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <h6 className="section-title">HIGHEST RWC FINISH</h6>
          <h5>RUNNER UP</h5>
          <span>177,182,922</span>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamCard;

// const formatDate = (timeStamp) => {
//   const m = moment(timeStamp);

//   const month = m.format("MMMM");
//   const dayDate = m.format("DD");
//   const day = m.format("dddd");
//   const frenchTime = moment(timeStamp).tz("Europe/Paris").format("HH:mm");
//   const time = m.format("HH:mm");

//   return { month, dayDate, day, time, frenchTime };
// };
