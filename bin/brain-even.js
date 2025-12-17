#!/usr/bin/env node
import runGame from '../src/index.js'
import generateEvenRound from '../src/games/even.js'

runGame('Answer "yes" if the number is even, otherwise answer "no".', generateEvenRound)
