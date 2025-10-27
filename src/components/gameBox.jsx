import React from 'react';

class GameBox extends React.Component {
constructor(props) {
super(props);
}

render() {
return (
<div className="game-box">
    <div className="string-display"><h2>{this.props.stringToDisplay}</h2></div> 
</div>
);
}
}

export default GameBox;
