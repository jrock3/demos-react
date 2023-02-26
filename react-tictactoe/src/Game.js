import { useState } from 'react';

const calculateWinner = (squares) => {
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
      return [squares[a], a, b, c];
    }
  }
  return null;
};

const Square = ({ colorClass, onClick, value }) => {
  return (
    <button className={colorClass} onClick={onClick}>
      {value}
    </button>
  );
};

const NewGame = ({ onClick }) => {
  return (
    <button className="new-game" onClick={onClick}>Reset</button>
  );
};

export default function Game() {
  const [ squares, setSquares ] = useState(Array(9).fill(null));
  const [ xIsNext, setNext ] = useState(true);

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setNext(!xIsNext);
  };

  const handleResetClick = () => {
    const newSquares = squares.slice();
    for (var i = 0; i < newSquares.length; i++) {
      newSquares[i] = null;
    }
    setSquares(newSquares);
    setNext(true);
  };

  const renderSquare = (i) => {
    const winner = calculateWinner(squares);
    let colorClass = 'square';
    if (winner) {
      for (var j = 1; j < winner.length; j++) {
        if (i === winner[j]) {
          colorClass += ' orange';   
        }
      }
    }
    return <Square colorClass={colorClass} value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const renderReset = () => <NewGame onClick={handleResetClick}/>;

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner[0];
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
    
  return (
    <div className="game">
      <div className="game-board">
        <div>
          <h1>Tic Tac Toe</h1>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <div className="reset-game">
            {renderReset()}
          </div>
        </div>
      </div>
    </div>
  );
}