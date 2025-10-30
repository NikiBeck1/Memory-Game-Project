import React from 'react';

class GameBox extends React.Component {
  constructor(props) {
    super(props);
    const originalStrings = [
      "juu", "shiki", "nari", "koro", "mika", "raku", "suto", "taji", "yuki", "zura",
      "hano", "kiba", "seki", "mori", "baji", "naka", "tosu", "rika", "zeno", "fuyu"
    ];
    const shuffledStrings = this.shuffleArray(originalStrings);
    this.state = {
      seen: [],               
      allStrings: shuffledStrings,     
      currentString: shuffledStrings[0] 
    };
  }

  shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  getNextString() {
    const { allStrings, seen } = this.state;

    const unseenStrings = allStrings.filter(str => !seen.includes(str));
    const shouldShowRepeat = Math.random() < 0.5 && seen.length > 0; // 50% chance of repeat

    if (shouldShowRepeat) {
      const randomSeenIndex = Math.floor(Math.random() * seen.length);
      return seen[randomSeenIndex];
    } else {
      if (unseenStrings.length === 0) {
        const randomIndex = Math.floor(Math.random() * allStrings.length);
        return allStrings[randomIndex];
      } else {
        const randomUnseenIndex = Math.floor(Math.random() * unseenStrings.length);
        return unseenStrings[randomUnseenIndex];
      }
    }
  }

  getColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  changeBackgroundColor() {
    const element = document.getElementById('string-display');
    if (element) {
      element.style.backgroundColor = this.getColor();
    }
  }

  handleClickYes() {
    const string = this.state.currentString;
    const seenBefore = this.state.seen.includes(string);

    if (seenBefore) {
      this.props.updateScore(1);
    } else {
      this.props.resetScore();
    }

    const next = this.getNextString();
    this.setState((prevState) => ({
      currentString: next,
      seen: [...prevState.seen, string]
    }), () => {
      this.changeBackgroundColor();
      this.checkWin();
    });
  }

  handleClickNo() {
    const string = this.state.currentString;
    const seenBefore = this.state.seen.includes(string);

    if (!seenBefore) {
      this.props.updateScore(1);
    } else {
      this.props.resetScore();
    }

    const next = this.getNextString();
    this.setState((prevState) => ({
      currentString: next,
      seen: [...prevState.seen, string]
    }), () => {
      this.changeBackgroundColor();
      this.checkWin();
    });
  }


  handleClickReset() {
    this.props.resetScore();
    const next = this.getNextString();
    this.setState({
      seen: [],
      currentString: next
    });
  }

  checkWin() {
    if (this.props.score >= 10) {
      alert("🎉 Congratulations! You’ve won the game!");
      this.handleClickReset();
    }
  }

  render() {
    return (
      <>
        <div className="game-box">
          <div className="string-display" id="string-display">
            <h3>{this.state.currentString}</h3>
          </div>
        </div>

        <div className="control-board">
          <div className="prompt">
            <h2>Have you seen this string before?</h2>
          </div>
          <div className='button-group'>
            <button onClick={() => this.handleClickYes()} className="yes-button" id='yes'>
              <h3>Yes</h3>
            </button>
            <button onClick={() => this.handleClickNo()} className="no-button" id='no'>
              <h3>No</h3>
            </button>
            <button onClick={() => this.handleClickReset()} className="reset-button" id='reset'>
              <h3>Reset</h3>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default GameBox;
