import canvas from '../index.js'
import { randomInt, } from 'node:crypto'

const gcd = (a, b,) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const generateRandomNumber = () => randomInt(1, 101,)

const generateRound = () => {
  const num1 = generateRandomNumber()
  const num2 = generateRandomNumber()
  const question = `${num1} ${num2}`
  const correctAnswer = gcd(num1, num2,).toString()
  return [question, correctAnswer,]
}

export default function runGcdGame() {
  const description = 'Find the greatest common divisor of given numbers.'
  canvas(description, generateRound,)
}
