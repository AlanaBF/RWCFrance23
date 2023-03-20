import React from 'react'
import "./styles.css"
import { Container } from 'react-bootstrap'
import oops from './img/oops.png'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <Container fluid className='notfound-page-container'>
      <Container className='notfound-page-inner'>
        <div className='notfound-page-content'>
          <div>
            <p>Ouch..</p>
            <span> 404 </span>
            <p>Page Not Found</p>
            <Link to='/'>Go To Home Page..</Link>
          </div>
          <div>
            <img src={oops} alt="wonky rugby player" />
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default NotFound
