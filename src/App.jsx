import React from 'react';
import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
  // Состояния: список шагов и текущий активный шаг
  const [steps] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);

  // Проверяем первый и последний шаг
  const isFirstStep = activeIndex === 0;
  const isLastStep = activeIndex === steps.length - 1;

  // Обработчик кнопки "Назад"
  const handlePrev = () => {
    if (!isFirstStep) {
      setActiveIndex(activeIndex - 1);
    }
  };

  // Обработчик кнопки "Далее" или "Начать сначала"
  const handleNextOrRestart = () => {
    if (isLastStep) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  // Обработчик клика по кнопке шага
  const handleStepClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles['steps-content']}>
            {steps[activeIndex].content}
          </div>
          <ul className={styles['steps-list']}>
            {steps.map((step, index) => {
              let stepClass = styles['steps-item'];

              if (index < activeIndex) {
                stepClass += ' ' + styles.done;
              }
              if (index === activeIndex) {
                stepClass += ' ' + styles.active + ' ' + styles.done;
              }

              return (
                <li
                  key={step.id}
                  className={stepClass}
                  onClick={() => handleStepClick(index)}
                >
                  <button className={styles['steps-item-button']}>
                    {index + 1}
                  </button>
                  Шаг {index + 1}
                </li>
              );
            })}
          </ul>

          <div className={styles['buttons-container']}>
            <button
              className={styles.button}
              onClick={handlePrev}
              disabled={isFirstStep}
            >
              Назад
            </button>
            {/* Кнопка Далее или Начать сначала */}
            <button className={styles.button} onClick={handleNextOrRestart}>
              {isLastStep ? 'Начать сначала' : 'Далее'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
