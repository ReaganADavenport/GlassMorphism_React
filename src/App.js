import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Background from './Images/polygon.jpg';

import './App.css';

function App() {
  return(
    <div className="Home">
        <img className="background" src={Background}/>
        
        <div className="content">

          <div className="header">
            <h1>Hi I'm a header</h1>
          </div>

          <div className="glass">
            <h2>Hello World</h2>
            <p>I am practicing coding glassmorphism</p>
          </div>
          
        </div>
        

    </div>
)
}

export default App;