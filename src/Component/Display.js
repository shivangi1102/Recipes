import React from 'react'
import { Container } from 'react-bootstrap'
import RecipeList from './RecipeList'

const Display = () => {
    const [randon,setrandom]=React.useState([])
        
    

    const url='https://api.spoonacular.com/recipes/random?apiKey=196ffa074a274bc08fb3d542500c7395&number=5'
    
    async function randomrecepi(){
        try{
            
                const response= await fetch(`${url}`)
            const data = await response.json()
            
            const {recipes}=data
           
            
                
                setrandom(recipes)

        
        }
            
        
        catch(error){

        }
    }
    React.useEffect(()=>{
        randomrecepi();
    },[])

    
    
    
    return (
        <>

        <h2 style={{textAlign:'center' ,marginTop:'30px'}}>Top Recipes</h2>
        <div className='cocktails-center'>
            
            {randon.map((item) => {
          return <RecipeList key={item.id} {...item} />
        })}
        
        </div>
        </>
    )
}


export default Display
