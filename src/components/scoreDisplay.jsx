import React from 'react';

function scoreDisplay() {
  return (
    <div className="scoreboard">
        <div className="current-score">
            <h3>Score:</h3>
        </div>
        <div className="high-score">
            <h3>Highest Score: 10</h3>
        </div>
    </div>
  );
}

export default scoreDisplay;
