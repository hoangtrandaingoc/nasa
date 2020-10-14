import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Home/>
    </div>
  );
}

export default App;
