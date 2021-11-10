import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Link, Route, Routes, Switch } from "react-router-dom";
import Category from './Category';

const Home = () => {
  <div> 
    <h2>Home</h2> 
  </div> 
  
}; 

// const Category = () => {
//   <div> 
//     <h2>Category</h2> 
//   </div>
// };  

const Products = () => {
  <div> 
    <h2>Products</h2> 
  </div> 
};
function App() {
  
  return(
  <div>
    
    <nav className="navbar navbar-light"> 
      <ul className="nav navbar-nav"> 
        <li> 
          <Link to="/">Home</Link> 
        </li> 
        <li> 
          <Link to="/category">Category</Link> 
        </li> 
        <li> 
          <Link to="/products">Products</Link> 
        </li> 
      </ul> 
    </nav>
    {/* <Switch> */}
    <Routes>
      
      {/* <Route exact path="/" component={Home} /> 
      <Route  exact path="/category" component={Category} /> 
      <Route  exact path="/products" component={Products} /> */}
      <Route path="/" ><Home/></Route>
      <Route  path="/category"> <Category/></Route> 
      <Route  path="/products"><Products /></Route> 
      {/* <Route path="/:id"> 
        <p>This text will render for any route other than '/'</p> 
      </Route> */}
    {/* </Switch> */}
    </Routes>
  </div>
  );
}

export default App;