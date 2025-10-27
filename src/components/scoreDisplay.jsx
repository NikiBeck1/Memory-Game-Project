import React from 'react';

class ScoreDisplay extends React.Component {
constructor(props) {
super(props);
this.state = {
  score: props.score,
  highScore: props.highScore,
};
}

render() {
const { score, highScore } = this.props;
return (
<div className="scoreboard">
<div className="current-score"><h3>Score: {score}</h3></div>
<div className="high-score"><h3>Highest Score: {highScore}</h3></div>
</div>
);
}
}

ScoreDisplay.defaultProps = {
score: 0,
highScore: 10,
};

export default ScoreDisplay;
