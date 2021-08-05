import React from 'react'
import { Card,Button,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function RecipeList({id,title,image,creditsText,sourceName}) {
    return (
        <>
        
        <Card style={{ width: '21rem' , boxShadow:'5px 10px #c5c5c5', backgroundColor:'#f0f8ff'}} className="cocktail">
  <Card.Img variant="top" style={{height:'15rem'}} src={image}/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Title style={{letterSpacing:'5px'}}as="h4">{sourceName}</Card.Title>
    <Card.Text>
     {creditsText}
    </Card.Text>
    <Link to={`/recipe/${id}`}><Button variant="dark">Detail</Button></Link>
  </Card.Body>
</Card>


        </>

    )
}
