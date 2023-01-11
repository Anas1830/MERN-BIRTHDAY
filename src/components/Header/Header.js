import React from 'react'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
   
        <Navbar className='navbar' bg="primary" expand="lg" variant="dark">
          <Container >
            {/* <Navbar.Brand >
                <Link to="/">Birthday Scheduling App</Link>
                
                </Navbar.Brand> */}<Link to="/"><a class="navbar-brand" href="#">Bithday Scheduling App</a></Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/mynotes">
                    <Link to="/mynotes">
                    Dashboard
                    </Link>
                    </Nav.Link>
                
               
              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
    
    
   
  )
}

export default Header
