import canvas from '../index.js'
import { randomInt } from 'node:crypto'

const generateRandomNumber = (min, max) => randomInt(min, max)

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  return progression
}

const generateRound = () => {
  const length = generateRandomNumber(5, 10)
  const start = generateRandomNumber(1, 50)
  const step = generateRandomNumber(1, 10)
  const progression = generateProgression(start, step, length)

  const hiddenIndex = generateRandomNumber(0, length - 1)
  const correctAnswer = progression[hiddenIndex].toString()

  const question = progression
    .map((num, index) => (index === hiddenIndex ? '..' : num.toString()))
    .join(' ')

  return [question, correctAnswer]
}

export default function runProgressionGame() {
  const description = 'What number is missing in the progression?'
  canvas(description, generateRound)
}
