import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Background from './Images/marble.jpg';

import './App.css';

function App() {
  return(
    <div className="Home">
        <img className="background" src={Background}/>
    </div>
)
}

export default App;