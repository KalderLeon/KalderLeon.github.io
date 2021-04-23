import React, { Component } from 'react'
import './App.scss';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import NavBar from './Components/NavBar';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';


function App () {

    const [navToggle, setNavToggle] = useState(false);

    const navClick = () => {
      setNavToggle(!navToggle)
    }

    return (
      <div className="App">
        <div className={`sidebar ${navToggle ?'nav-toggle': ''}`}>
          <NavBar />
        </div>
        <div className="nav-btn" onClick={navClick}>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
       <div className="main-content">
         <div className="content">
           <Switch>
             <Route path="/" exact><HomePage /></Route>
             <Route path="/about" exact><AboutPage/></Route>
             <Route path="/portfolios" exact><PortfoliosPage/></Route>
             <Route path="/contact" exact><ContactPage/></Route>
           </Switch>
         </div>
       </div>
     </div>
    );
}

export default App;