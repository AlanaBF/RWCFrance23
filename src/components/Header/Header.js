import './styles.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Counter from './Counter/Counter.js';
import { LinkContainer } from 'react-router-bootstrap';
import rwc2023logo from '../../assets/images/rwc2023logo.svg'



function Header() {


  return (
    <Container fluid className='p-0'>
      <Counter />
      <Navbar expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand >
              <div className='logo-container'>
                <div className='logo-text logo-mobile'>
                  <p>RUGBY</p>
                  <p style={{ fontWeight: 700, fontSize: "0.7rem" }}>WORLD CUP</p>
                  <p>FRANCE 2023</p>
                </div>
                <div className='logo-holder'>
                  <img src={rwc2023logo} alt='logo' width="80px" />
                  <div className='logo-text'>
                    <p>RUGBY</p>
                    <p style={{ fontWeight: 700, fontSize: "0.7rem" }}>WORLD CUP</p>
                    <p>FRANCE 2023</p>
                  </div>
                </div>
              </div>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to='/matches'>
                <Nav.Link >MATCHES</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/teams">
                <Nav.Link >TEAMS</Nav.Link>
                
              </LinkContainer>
              <LinkContainer to="/exampleupdate">
                <Nav.Link>EXAMPLE</Nav.Link>
                </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </Container>
  );
}

export default Header;