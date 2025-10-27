import './App.css';
import React from 'react';
import Header from './components/header';
import ControlBoard from './components/controlBoard';
import GameBox from './components/gameBox';

function App() {
  return (
    <div className="App">
      <Header />
      <GameBox stringToDisplay="Example String" />
      <ControlBoard />
    </div>
  );
}

export default App;
