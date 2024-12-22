import React, { useState } from 'react';
import Board from './components/Board';
import './App.css';

const App = () => {
  const [player1, setPlayer1] = useState('X');
  const [player2, setPlayer2] = useState('O');

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="container">
        <div className="player player1">
          <h2>Player 1: {player1}</h2>
        </div>
        <Board player1={player1} player2={player2} />
        <div className="player player2">
          <h2>Player 2: {player2}</h2>
        </div>
      </div>
    </div>
  );
};

export default App;