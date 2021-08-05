import React from 'react'
import { Link } from 'react-router-dom'
import { Card,Button } from 'react-bootstrap'

const Similarlist = ({id,title,sourceUrl,readyInMinutes}) => {
    return (
        <div>
            
            <Card className="bg-dark text-white" style={{ width: '20rem', height:'250px'}}>
  <Card.Img src="https://img.freepik.com/free-photo/fork-with-fusilli-pasta-basil-leaves-black-background_23-2148195016.jpg?size=626&ext=jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>{title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Ready in {readyInMinutes} mins</Card.Subtitle>
    <Card.Text style={{fontSize:'13px'}}>
      {sourceUrl}
    </Card.Text>
    <Link to={`/recipe/${id}`}><Button variant="light" style={{marginTop:'5px'}}>Detail</Button></Link>
  </Card.ImgOverlay>
</Card>
        </div>
    )
}

export default Similarlist
