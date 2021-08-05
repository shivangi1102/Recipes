import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Display from './Component/Display';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import About from './Component/About';
import { Row, Col } from 'react-bootstrap';
import Home from './Component/Home';
import Searchrecipe from './Component/Serachrecipe';
import Recipe  from './Component/Recipe';
import Recipedetail from './Component/Recipedetail';

function App() {
  return (
    <>
    <Router><Header/>
    
    <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path="/search/:searchrecipe">
          <Recipe/>
        </Route>
        <Route path="/recipe/:id">
          <Recipedetail/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
    </Switch>
    </Router>
      



</>

  );
}

export default App;










