import React from 'react';
import ScoreDisplay from './scoreDisplay';

function Header() {
  return (
    <div className="header">
        <div className="title">
            <h1>Niki's Memory Game</h1>
        </div>
        <div className="instructions">
            <h2>Let's see how good your memory is. Click yes if you've seen the string before.</h2>
        </div>
        <ScoreDisplay />
    </div>
  );
}

export default Header;
