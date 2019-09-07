import React from 'react';
import './App.css';
import Logo from './assets/react_logo.png';

import TechList from './components/TechList';

function App () {
  return (
    <div className="container">
      <img className="logo" src={Logo} alt="Logo React JS"/>
      <h1 className="title">Started with React</h1>
      <TechList />
    </div>
  )
}

export default App;