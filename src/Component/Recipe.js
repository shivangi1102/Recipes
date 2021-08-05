import React from 'react'
import { useState,useEffect,useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import Searchrecipe from './Serachrecipe'
import paginate from '../utils'
import { Pagination } from 'react-bootstrap'

const Recipe = () => {
    const [recipe,setrecipe]=useState([])
    const {searchrecipe}=useParams()
    const [page,setPage]=useState(0)
    const [rec,setrec]=useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        if(loading) return
        setrec(recipe[page])
      },[loading,page])

    
    var url='https://api.spoonacular.com/recipes/complexSearch?apiKey=196ffa074a274bc08fb3d542500c7395&number=20&query='
   
    const fetchSearch= useCallback(async ()=>{
        
        try{
        const response = await fetch(`${url}${searchrecipe}`)
        const data = await response.json()
        const {results}=data
        
        setLoading(true)
        setrecipe(paginate(results))
        
        setLoading(false)
        }
        
        catch(error){
            console.log(error)
        }
    },[searchrecipe])


    useEffect(()=>{
        fetchSearch();
    },[searchrecipe])



//Pagination

const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > recipe.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = recipe.length - 1
      }
      return prevPage
    })
  }

  const handlePage = (index) => {
    setPage(index)
  }
//end 
    
    return (<>
        <h1 style={{textAlign:'center'}}>{loading ? 'loading...' : ''}</h1>
        <div className='cocktails-center'>
        
    {rec.map((item) => {
          return <Searchrecipe key={item.id} {...item} />
        })}
    </div>
        <div style={{marginTop:'30px', marginLeft:'40%'}}>
        {
        !loading && (
            <Pagination>
          
            <Pagination.Item  onClick={prevPage}>
              prev
            </Pagination.Item>
            {recipe.map((item, index) => {
              return (
                <Pagination.Item
                  key={index}
                  
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </Pagination.Item>
              )
            })}
            <Pagination.Item onClick={nextPage}>
              next
            </Pagination.Item>
          
          </Pagination>
        )}

    </div>
    </>
    )
}

export default Recipe
