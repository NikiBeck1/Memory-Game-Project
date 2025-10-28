import React from 'react';
import GameBox from './components/gameBox';
import ScoreDisplay from './components/scoreDisplay';
import Header from './components/header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
  }

  updateScore = (amount) => {
    this.setState((prevState) => ({
      score: prevState.score + amount
    }));
  };

  resetScore = () => {
    this.setState({ score: 0 });
  };

  render() {
    return (
      <div className="app-container">
        <Header />
        <ScoreDisplay score={this.state.score} />
        <GameBox
        score={this.state.score}
        updateScore={this.updateScore}
        resetScore={this.resetScore} />
      </div>
    );
  }
}

export default App;
