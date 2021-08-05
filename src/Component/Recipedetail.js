import React, { useState } from 'react'
import breadcumb3 from './breadcumb3.jpg'
import { Carousel } from 'react-bootstrap'
import {Link , useParams } from 'react-router-dom'
import {FcLike } from "react-icons/fc";
import { Row, Col } from 'react-bootstrap';
import Simlar from './Simlar';
const Recipedetail = () => {
   const {id}=useParams()
   const [detail,setDetail]=useState([])
   const [loading, setLoading] = useState(true)
   const [itemi,setItemi]=useState([])
   const [itemd,setItemd]=useState([])
   
   const url ="https://api.spoonacular.com/recipes/informationBulk?apiKey=196ffa074a274bc08fb3d542500c7395&ids="

   React.useEffect(()=>{
    
    async function getRecipe() {
    
        const response= await fetch(`${url}${id}`)
        const data = await response.json()
        
        if(data){
            const {
                image:image,
                readyInMinutes:prep,
                cookingMinutes:cooking,
                summary:summary,
                title:title,
                pricePerServing:price,
                instructions,
                extendedIngredients,
                dishTypes,
            }=data[0]
           
           

        const newrecipe={image,prep,cooking,summary,title,price,instructions,extendedIngredients,dishTypes}
        setDetail(newrecipe)
        setItemi(extendedIngredients)
        setItemd(dishTypes)
        setLoading(false)
        }


    }
getRecipe()},[id])

const clickl=()=>{
    
}






    const {image,prep,cooking,summary,title,price,instructions,extendedIngredients,dishTypes}=detail
   
  
    return (
        <>
        <div style={{position:'relative',marginRight:'30px',marginLeft:'30px'}}>
        <h1>{loading ? 'loading...' : ""}</h1>
            <img style={{marginTop: '30px',filter:"brightness(40%)",height:'200px',width:'100%'}} src={breadcumb3} alt="source"/>
            <Carousel.Caption>
      <h1 style={{fontSize:'60px'}}>Recipe</h1>
      
      
    </Carousel.Caption>
        </div>
        <div style={{marginTop: '60px',marginLeft:'200px',marginRight:'200px',backgroundColor:'#ffffff',marginBottom:'60px',paddingBottom:'60px'}}>
            <img style={{marginTop: '30px',marginLeft:'200px',marginRight:'200px',height:'500px',width:'700px',border:'2px solid'}}src={image}/>
         <h1 style={{marginTop:'20px', marginLeft:'30px'}}>{title}</h1>
         <div style={{ marginTop:'20px',marginLeft:'30px',borderLeft:'2px solid green',paddingLeft:'20px'}}>
          <h4>Prep {prep} mins <span style={{marginLeft:'60%'}}><FcLike/></span></h4>
          <h4>Price {price} Rs</h4>
          
          
         </div>
         <Row>
             <Col xs={8}>
         <div><div style={{marginTop:'30px', marginLeft:'40px', marginRight:'50px'}}>
             <h2>Details</h2>
         <h6 dangerouslySetInnerHTML={ {__html: summary} } />
         </div>
         <div style={{marginTop:'30px', marginLeft:'40px', marginRight:'50px'}}>
             <h2 style={{color:'darkgreen'}}>Instructions</h2>
         <h6 dangerouslySetInnerHTML={ {__html: instructions} } />

         </div></div>
         </Col>
         <Col>
         
         <div style={{marginTop:'30px',marginBottom:'30px'}}>
         <h1>{loading ? 'loading...' : ""}</h1>
             <h2>Ingredients</h2>
             {itemi.map((item, index) => {
              return <h6 style={{color:'gray'}}> {item.original}</h6>})}
                
              </div>
            
              {itemd.map((item, index) => {
              return <h4 style={{color:'green',textDecoration:'bold',display: 'inline-block',marginLeft:'20px',border:'2px solid',borderRadius:'4px',padding:'4px'}}> {item} </h4>})}
              </Col>
              <Row>
              <div style={{marginTop:'30px',marginBottom:'30px', display:'inline',marginLeft:'70px'}}>
             
              
              </div>
              </Row>
              </Row>
              
           </div>
           <Simlar id={id}/>
</>
    )
}

export default Recipedetail
