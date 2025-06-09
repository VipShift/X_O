import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  function onInputButtonClick() {
    const userInput = prompt('Введите значение');
    if (userInput !== null) {
      const promtValue = userInput.trim();

      if (promtValue.length < 3) {
        setError('Введенное значение должно содержать минимум 3 символа');
        setValue('');
      } else {
        setValue(promtValue);
        console.log(promtValue);
        setError('');
      }
    }
  }
  const isValueValid = value.trim().length >= 3;

  function onAddButtonClick() {
    if (isValueValid) {
      const newItem = {
        id: Date.now(),
        value: value,
        time: new Date().toLocaleString('ru-RU'),
      };

      setList((prevList) => [...prevList, newItem]);
      setValue('');
      setError('');
    }
  }

  return (
    <>
      <div className="glass-wrapper">
        <div className={styles.app}>
          <h1 className={styles['page-heading']}>Ввод значения</h1>
          <p className={styles['no-margin-text']}>
            Текущее значение <code>value</code>:
            <output className={styles['current-value']}>{value}</output>
          </p>
          {error !== '' && <div className={styles.error}>{error}</div>}
        </div>

        <div className={styles['buttons-container']}>
          <button className={styles.button} onClick={onInputButtonClick}>
            Ввести новое
          </button>
          <button
            className={styles.button}
            onClick={onAddButtonClick}
            disabled={!isValueValid}
          >
            Добавить в список
          </button>
        </div>
        <div className={styles['list-container']}>
          <h2 className={styles['list-heading']}>Список</h2>
          {list.length === 0 ? (
            <p className={styles['no-margin-text']}>
              Нет добавленных елементов
            </p>
          ) : (
            <ul className={styles['list']}>
              {list.map((item) => (
                <li key={item.id} className={styles['list-item']}>
                  <span>{item.value}</span>
                  <span className={styles['list-item-time']}>{item.time}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
export default App;
