import React from 'react'
import { Link } from 'react-router-dom'
import { Form,FormControl,Button } from 'react-bootstrap'
import Display from './Display';
import RecipeList from './RecipeList';
import { useState,useEffect,useCallback } from 'react';
import Searchrecipe from './Serachrecipe';






function Search() {

    const [searchrecipe,setsearchrecipe]=useState('')
    


    //const searchValue = React.useRef('');
  //React.useEffect(() => {
    //searchValue.current.focus()
  //}, [])

  //function searchRec() {
      
    //setsearchrecipe(searchValue.current.value)
    
  //}
  function handleSubmit(e) {
    e.preventDefault()
  }

  function resetsearch() {
    setsearchrecipe("")
  }

    
    return (
        <>
        
            <Form className="d-flex " >
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        style={{borderRadius:'4px',borderColor:'green'}}
        value={searchrecipe}
        onChange={(e)=>setsearchrecipe(e.target.value)}
            
        
      />
      <Link to={`/search/${searchrecipe}`}> <Button  onClick={resetsearch} type='submit'   variant="success" style={{marginLeft:'20px',borderRadius:'35px',paddingLeft:'20px',paddingRight:'20px',fontWeight:'bold'}}>Search</Button>
      </Link>
      
    </Form>

    
    
        </>
    )
}

export default Search
