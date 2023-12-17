import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
    <Navbar expand="lg" className="nav justify-content-center p-3">
            <h1>Automatic Counter App</h1>
    </Navbar>
  </div>
  )
}

export default Header