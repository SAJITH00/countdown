import React from 'react'
import { Container,Navbar } from 'react-bootstrap'
function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className='d-flex '>
          <i class="fa-solid fa-stopwatch fa-shake mx-5 fa-2x"></i>
            <h2>stopwatch</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header