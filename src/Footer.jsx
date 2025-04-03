import React from 'react'
import { Card } from 'react-bootstrap'
function Footer() {
  return (
    <div>
         <Card className="text-center ">
      <Card.Header>
      <i className="fa-brands fa-square-facebook m-2 fa-2x"></i>
      <i className="fa-brands fa-square-instagram m-2 fa-2x"></i>
      <i className="fa-brands fa-square-github m-2 fa-2x"></i>
      <i className="fa-brands fa-square-twitter m-2 fa-2x"></i>
      <i className="fa-brands fa-square-x-twitter m-2 fa-2x"></i>
      <i className="fa-brands fa-linkedin m-2 fa-2x"></i>
      <i className="fa-brands fa-square-google-plus m-2 fa-2x"></i>
      </Card.Header>
      <Card.Body>
        <Card.Title>Simple Counter Application</Card.Title>
        <Card.Text>
        This is a simple counter application built with React. It automatically counts up 
        from zero when the page loads, and provides controls to pause or reset the counting.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted bg-dark"><p style={{color:'white'}}>**********</p></Card.Footer>
    </Card>
    </div>
  )
}

export default Footer