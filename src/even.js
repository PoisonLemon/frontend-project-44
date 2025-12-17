import readlineSync from 'readline-sync';

export default function runEvenGame() {
    console.log("brain-games\nWelcome to the Brain Games!");
    const name = readlineSync.question('May I have your name? ');
    const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
    console.log(`Hello, ${name}!
        \nAnswer "yes" if the number is even, otherwise answer "no".`)
    const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
    const number = generateRandomNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ')

    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
