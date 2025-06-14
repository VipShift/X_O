import React, { useState } from 'react';
import GameLayout from './GameLayout';

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [field, setField] = useState(Array(9).fill(''));
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  const handleClick = (index) => {
    if (field[index] || isGameEnded) return;

    const updatedField = field.map((cell, i) =>
      i === index ? currentPlayer : cell
    );

    setField(updatedField);

    const isWin = WIN_PATTERNS.some((pattern) =>
      pattern.every((i) => updatedField[i] === currentPlayer)
    );

    if (isWin) {
      setIsGameEnded(true);
      return;
    }

    if (!updatedField.includes('')) {
      setIsDraw(true);
      return;
    }

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'); // <- O вместо 0
  };

  const resetGame = () => {
    setField(Array(9).fill(''));
    setCurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
  };

  return (
    <GameLayout
      currentPlayer={currentPlayer}
      field={field}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
      onCellClick={handleClick}
      onRestart={resetGame}
    />
  );
};

export default Game;
