// React Tic Tac Toe
// We provided some simple React template code. Your goal is to create a functioning Tic Tac Toe game. It should work the following way: the first player to go places an X anywhere on the board by clicking a square, and then the next player will be able to place an O, and it continues alternating like this every turn.

// You should also implement a function to determine if any player won by getting 3 X's or O's in a row. If there is a winner, display a message at the top. If nobody wins, then do not display any message. Finally, you should also implement the reset function that resets the entire board.

// Submit your code once it is complete and our system will validate your output.

import React from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

class Square extends React.Component {
  render() {
    return (
      <div
        className="square"
        style={squareStyle}>
      </div>
    );
  }
}

class Board extends React.Component {
  render() {
    return (
      <div style={containerStyle} className="gameBoard">
        <div className="status" style={instructionsStyle}>Next player: X</div>
        <div className="winner" style={instructionsStyle}>Winner: None</div>
        <button style={buttonStyle}>Reset</button>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square />
            <Square />
            <Square />
          </div>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);