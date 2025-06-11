import React from 'react';
import styles from './app.module.css';
import { useState } from 'react';

const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const OPERATIONS = ['+', '-', '=', '*', '/', 'C'];

export const App = () => {
  const [operand1, setOperand1] = useState('');
  const [operator, setOperator] = useState('');
  const [operand2, setOperand2] = useState('');
  const [isResult, setIsResult] = useState(false);

  const handleNumberClick = (num) => {
    if (isResult) {
      setOperand1(num);
      setOperator('');
      setOperand2('');
      setIsResult(false);
    } else if (!operator) {
      setOperand1((prev) => prev + num);
    } else {
      setOperand2((prev) => prev + num);
    }
  };

  const handleOperationClick = (oper) => {
    if (oper === 'C') {
      setOperand1('');
      setOperator('');
      setOperand2('');
      setIsResult(false);
    } else if (oper === '=') {
      if (operand1 && operator && operand2) {
        const num1 = parseInt(operand1);
        const num2 = parseInt(operand2);
        let result = 0;

        if (operator === '+') result = num1 + num2;
        if (operator === '-') result = num1 - num2;
        if (operator === '*') result = num1 * num2;
        if (operator === '/') result = num1 / num2;

        setOperand1(result.toString());
        setOperator('');
        setOperand2('');
        setIsResult(true);
      }
    } else {
      if (operand1 && !operator) {
        setOperator(oper);
        setIsResult(false);
      }
    }
  };
  const displayValue = operand1 + (operator ? ` ${operator} ` : '') + operand2;

  return (
    <>
      <div className={styles.calculator}>
        <h1>Calculator</h1>
        <div className={`${styles.display} ${isResult ? styles.result : ''}`}>
          {displayValue || '0'}
        </div>
        <div className={styles.buttons}>
          {NUMS.map((num) => (
            <button key={num} onClick={() => handleNumberClick(num)}>
              {num}
            </button>
          ))}
          {OPERATIONS.map((operation) => (
            <button
              key={operation}
              onClick={() => handleOperationClick(operation)}
            >
              {operation}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
