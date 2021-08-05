import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Searchrecipe({id,title,image,creditsText,sourceName}) {
    return (
        <>
        <Card style={{ width: '21rem' , boxShadow:'5px 10px #c5c5c5', backgroundColor:'#f0f8ff'}} className="cocktail">
  <Card.Img variant="top" style={{height:'15rem'}} src={image}/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    
     <Link to={`/recipe/${id}`}><Button variant="outline-success" style={{marginTop:'5px'}}>Detail</Button></Link>
  </Card.Body>
</Card>

        </>

    )
}
