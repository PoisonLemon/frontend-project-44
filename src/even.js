
const isEven = (num) => num % 2 === 0;
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export default  function Even() {
  const number = generateRandomNumber();
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};
