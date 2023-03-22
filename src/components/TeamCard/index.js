import { Container, Row, Col } from "react-bootstrap";
import Flags from '../../components/Flag'
import "./index.css";
// import moment from "moment-timezone";

const TeamCard = ({ away, stade, home, position, name, played , points, pool  }) => {
  return (
    <Container fluid className={`team-card-container pool ${pool}`}>
      <Row className="p-3 card-body">
        <Col xs={0} md={1} className={"team-card-column position"} style={{ margin: 'auto 0'}}>
          <span>{position}</span>
        </Col>
        <Col
          xs={12}
          md={4}
          className={"team-card-column team-card-center cvc"}
          style={{ margin: 'auto 0', padding: '10px'}}
        >
          <Flags team={name} />
          <h3>{name}</h3>
        </Col>
        <Col
          xs={12}
          md={5}
          className={"team-card-column"}
          style={{ display: "flex", flexDirection: "column", padding: '10px', margin: 'auto 0', alignItems: 'center'}}
        >
          <h6 className="section-title">NEXT RWC MATCH</h6>
          <h5>
            <b>{home} v {away}</b>
          </h5>
          <h5>
            <span> {stade}</span>
          </h5>
        </Col>
        <Col xs={12} md={2} className={"points-info team-card-center "} style={{ margin: 'auto 0', padding: '10px'}}>
          <p><b>PL:</b>   {played}</p>
          <p><b>PTS:</b>  {points}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamCard;

