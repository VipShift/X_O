import React from 'react';
import Information from '../Information/Information';
import Field from '../Field/Field';
import styles from './Game.module.css';
import PropTypes from 'prop-types';

export default function GameLayout({
  currentPlayer,
  field,
  isGameEnded,
  isDraw,
  onCellClick,
  onRestart,
}) {
  return (
    <div className={styles.container}>
      <h1>Крестики-Нолики</h1>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field field={field} onCellClick={onCellClick} />
      <button className={styles.restartButton} onClick={onRestart}>
        Начать заново
      </button>
    </div>
  );
}

GameLayout.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
  onCellClick: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
};
