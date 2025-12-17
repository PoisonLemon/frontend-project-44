import { randomInt, } from 'node:crypto'

const isEven = (num,) => num % 2 === 0
const generateRandomNumber = () => randomInt(1, 101,)

export default function Even() {
  const number = generateRandomNumber()
  const question = number
  const correctAnswer = isEven(number,) ? 'yes' : 'no'
  return [question, correctAnswer,]
}
