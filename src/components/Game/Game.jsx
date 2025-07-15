import { useEffect, useState } from 'react';
import GameLayout from './GameLayout';
import { store } from '../../store';

export default function Game() {
  // 1. Локальное состояние только для запуска рендера
  const [state, setState] = useState(store.getState());

  // 2. Подписка на Redux Store
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState()); // обновляем React при изменении store
    });
    return unsubscribe;
  }, []);

  // 3. Обработчики диспатчат action'ы
  const handleClick = index => {
    store.dispatch({ type: 'CLICK_CELL', payload: index });
  };

  const handleRestart = () => {
    store.dispatch({ type: 'RESTART_GAME' });
  };

  state;
  const { currentPlayer, field, isGameEnded, isDraw } = state;

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
