import React from 'react';
import PropTypes from 'prop-types';
import InformationLayout from './InformationLayout';

const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
    />
  );
};

Information.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
};

export default Information;
