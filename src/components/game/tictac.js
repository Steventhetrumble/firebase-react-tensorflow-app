import React from 'react';

import 'bulma/css/bulma.css';
import './Game.css';

function Square(props){
  return (
    <button className="square" onClick= {props.onClick}>
      {props.value}
    </button>
  );
}
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square 
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)} 
        />
      );
    }
    render() { 
      return (
        <div >
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
      };
    }
    handleClick(i){
      const history = this.state.history.slice(0,this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if(calculateWinner(squares) || squares[i]){
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }
    jumpTo(step){
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      const moves = history.map((step,move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
          return (
            <li key = {move} >
              <span>
              <button  onClick={() => this.jumpTo(move)}>{desc}</button>
              </span>
            </li>
          );
      });

      let status;
      if(winner){
        status = 'Winner: ' + winner;

      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
      return (
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="">
                    <div className="game columns is-vcentered">
                        <div className="game-board column is-3-desktop is-12-mobile is-offset-2">
                            <Board
                            squares= {current.squares}
                            onClick={(i) => this.handleClick(i)}
                            />
                        </div>
                        <div className="game-info column is-4-desktop is-4-mobile is-offset-1" >
                            <h4 className="title is-2">{status}</h4>
                            <br></br>
                            <ul className="menu-list" >{moves}</ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      );
    }
  }
  // ========================================

  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


  export default Game;
  