import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route} from 'react-router-dom'


function App() {
  const HatsPage  = () => {
    return(
      <h1>HatsPage</h1>
    )
  }
  return (
    <div >
        <Route exact path = '/' component={HomePage} />
        <Route exact path = '/hats' component={HatsPage} />
    </div>
  );
}

export default App;
