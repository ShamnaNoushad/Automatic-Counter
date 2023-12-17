import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Counter() {
 const [count,setCount]=useState(0)
 useEffect(() => {
  const interval = setInterval(() => {
    setCount((prevCount) => prevCount + 1);
  }, 2000); 
  return () => clearInterval(interval);
}, []);
function rset(){
 setCount(0)
}
  return (
   <div>
     <Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body style={{height:'65vh'}}>
        <Card.Title style={{marginTop:'100px',fontFamily:'Times New Roman',fontWeight:'bolder',fontSize:'xx-large',color:'rgb(105, 76, 128)'}}>Clicks & Counts</Card.Title>
        <Card.Text>
        <p style={{textAlign:"center",fontWeight:'bolder',color:'rgb(105, 76, 128)',fontSize:'larger'}}>Count: {count} Seconds</p> <br /><br />
        </Card.Text>
        <Button onClick={rset} style={{backgroundColor:'rgb(105, 76, 128)',border:'none'}} className='px-5 py-2'>RESET</Button>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
 </div>
);
  
}

export default Counter

