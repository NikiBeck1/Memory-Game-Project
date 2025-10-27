import React from 'react';

class ControlBoard extends React.Component {
constructor(props) {
super(props);
}

render() {
return (
<div className="control-board">
<div className="game-prompt"><h2>Have you seen this string before?</h2></div>
<div className='button-group'>
  <div className="yes-button"><h3>Yes</h3></div>
  <div className="no-button"><h3>No</h3></div>
  <div className="reset-button"><h3>Start Over</h3></div>
</div>
</div>
);
}
}

export default ControlBoard;
