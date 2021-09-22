import React from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route } from 'react-router-dom';
import Logout from './components/Logout';


const App = () => {
  return (
    <div>
  <Navbar/>

  <Route path="/" exact>
  <Home/>
  </Route>

  <Route path="/about">
  <About/>
  </Route>

  <Route path="/contact">
  <Contact/>
  </Route>

  <Route path="/login">
  <Login/>
  </Route>

  <Route path="/signup">
  <Signup/>
  </Route>

  <Route path="/logout">
  <Logout/>
  </Route>
 
    </div>
  )
}

export default App
