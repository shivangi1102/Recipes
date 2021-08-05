import React from 'react'
import Searchrecipe from './Serachrecipe'
import Similarlist from './Similarlist'

const Simlar = ({id}) => {
    
    const url1=`https://api.spoonacular.com/recipes/${id}/similar?apiKey=196ffa074a274bc08fb3d542500c7395&number=5`
    const [similarrec,setSimilarrec]=React.useState([])

React.useEffect(()=>{
    
    
    async function getSimilarRecipe() {
    
        const response= await fetch(url1)
        const sdata = await response.json()
        
        setSimilarrec(sdata)
           
           

        
        }
        window.scrollTo(0, 0)


    
getSimilarRecipe()},[id])
    return (
        <>
           
            <h2 style={{textAlign:'center'}}>Similar Recipes</h2>
           <div className='cocktails-center' style={{marginBottom:'30px'}}>
        {similarrec.map((item) => {
              return <Similarlist key={item.id} {...item} />
            })}
        </div>
        </>
    )
}

export default Simlar
