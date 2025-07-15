const initialState = {
  currentPlayer: 'X',
  field: Array(9).fill(''),
  isGameEnded: false,
  isDraw: false,
};

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

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CLICK_CELL': {
      if (state.isGameEnded || state.field[payload]) return state;

      const field = state.field.slice();
      field[payload] = state.currentPlayer;

      const isWin = WIN_PATTERNS.some((pattern) =>
        pattern.every((i) => field[i] === state.currentPlayer)
      );

      const isDraw = !isWin && field.every((cell) => cell !== '');

      return {
        ...state,
        field,
        isGameEnded: isWin || isDraw,
        isDraw,
        currentPlayer:
          isWin || isDraw
            ? state.currentPlayer
            : state.currentPlayer === 'X'
              ? 'O'
              : 'X',
      };
    }

    case 'RESTART_GAME':
      return initialState;

    default:
      return state;
  }
};
