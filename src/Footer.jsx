import React from 'react'
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <div>
        <Nav className="justify-content-center p-5" activeKey="/home">
            <p style={{color:'white',fontFamily:'Times New Roman'}}>Every great app begins with a simple idea. Thanks for counting with us!</p>
        </Nav>
    </div>
  )
}

export default Footer