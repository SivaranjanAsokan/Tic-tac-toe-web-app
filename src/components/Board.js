import React, { useState, useEffect } from 'react';
import resetIcon from '../assets/reset-icon.png'; // Make sure to add a reset icon image in the assets folder

const Board = ({ player1, player2 }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const win = calculateWinner(board);
    if (win) {
      setWinner(win);
    }
  }, [board]);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? player1 : player2;
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const renderCell = (index) => {
    const cellClass = board[index] === 'X' ? 'cell x' : board[index] === 'O' ? 'cell o' : 'cell';
    return (
      <div className={cellClass} onClick={() => handleClick(index)}>
        {board[index]}
      </div>
    );
  };

  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? player1 : player2}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        {board.map((_, index) => renderCell(index))}
      </div>
      <div className="reset-container">
        <button className="reset-button" onClick={handleReset}>
          <img src={resetIcon} alt="Reset" />
          Reset
        </button>
      </div>
    </div>
  );
};

const calculateWinner = (board) => {
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
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default Board;