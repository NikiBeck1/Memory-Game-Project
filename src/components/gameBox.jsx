import React from 'react';

class GameBox extends React.Component {
constructor(props) {
super(props);
this.state = {
  currentIndex: 0,
  allStrings: [
  "juu",
  "shiki",
  "nari",
  "koro",
  "mika",
  "raku",
  "suto",
  "taji",
  "yuki",
  "zura",
  "hano",
  "kiba",
  "seki",
  "mori",
  "baji",
  "naka",
  "tosu",
  "rika",
  "zeno",
  "fuyu"
]
};
}

handleClickYes() {
  this.props.updateScore(1);
  this.setState((prevState) => ({
    currentIndex: (prevState.currentIndex + 1) % prevState.allStrings.length,
  }));
}

handleClickNo() {
  this.setState((prevState) => ({
    currentIndex: (prevState.currentIndex + 1) % prevState.allStrings.length,
  }));
}

handleClickReset() {
    this.props.resetScore();
    this.setState({currentIndex: 0});
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
    document.body.style.backgroundColor = this.getColor();
}
        

render() {
    return (        
    <>
        <div className="game-box">
            <div className="string-display">
                <h3>{this.state.allStrings[this.state.currentIndex]}</h3>
            </div>
        </div>

        <div className="control-board">
            <div className="game-prompt">
                <h2>Have you seen this string before?</h2>
            </div>
            <div className='button-group'>
                <button onClick={() => this.handleClickYes()} className="yes-button"><h3>Yes</h3></button>
                <button onClick={() => this.handleClickNo()} className="no-button"><h3>No</h3></button>
                <button onClick={() => this.handleClickReset()} className="reset-button"><h3>Reset</h3></button>
            </div>
        </div>
    </>
);
}
}

export default GameBox;
