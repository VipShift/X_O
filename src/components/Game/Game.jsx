import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GameLayout from './GameLayout';

export default function Game() {
  const { currentPlayer, field, isGameEnded, isDraw } = useSelector(
    state => state
  );
  const dispatch = useDispatch();

  const handleClick = index => {
    dispatch({ type: 'CLICK_CELL', payload: index });
  };

  const handleRestart = () => {
    dispatch({ type: 'RESTART_GAME' });
  };

  return (
    <>
      <GameLayout
        currentPlayer={currentPlayer}
        field={field}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
        onCellClick={handleClick}
        onRestart={handleRestart}
      />
    </>
  );
}
