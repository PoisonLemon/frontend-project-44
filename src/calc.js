import { randomInt } from 'node:crypto';

const generateRandomNumber = () => randomInt(1, 101);

const OPERATIONS = ['+', '-', '*'];
const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
};

export default function Calc() {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const operation = OPERATIONS[randomInt(0, OPERATIONS.length)];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operation));
  return [question, correctAnswer];
};
