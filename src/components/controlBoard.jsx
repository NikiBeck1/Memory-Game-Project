import React from 'react';


function controlBoard() {
  return (
    <div className="control-board">
        <div className="buttons">
            <p className='game-prompt'>Have you seen this string before?</p>
            <button className="yes-button">Yes</button>
            <button className="no-button">No</button>
        </div>
        <div className="word-display">
            <p>juu</p>
        </div>
    </div>
  );
}

export default controlBoard;
