import React from 'react'
import { Navbar,Container,Nav,Form,FormControl,Button } from 'react-bootstrap'
import Search from './Search'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar  expand="xl">
  <Container>
    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Navbar.Brand style={{color:'darkgreen',fontSize:'35px'}}>Recipes</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto " style={{fontSize:'25px'}}>
      <Link to='/' style={{ textDecoration: 'none',color:'black' }}> <Nav.Item style={{fontSize:'25px',marginTop:'7px',marginRight:'10px'}}>Home</Nav.Item></Link>
      <Link to='/about' style={{ textDecoration: 'none',color:'black' }}> <Nav.Item style={{fontSize:'25px',marginTop:'7px',marginRight:'10px'}}>About</Nav.Item></Link>
        </Nav>
        <Nav>
          <Search/>
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
