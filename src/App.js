import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import components here

import Home from './Components/Home/home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={Home}/>
      </Router>
    </div>
  );
}

export default App;