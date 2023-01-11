import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='main'>
        <Container>
            <Row>
            <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Bday Reminer App</h1>
              <p className="subtitle">Reminding You The Best Moments.</p>
            </div>
            </div>
            </Row>
        </Container>
      
    </div>
  )
}

export default LandingPage
