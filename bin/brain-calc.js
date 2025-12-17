#!/usr/bin/env node
import runGame from '../src/index.js'
import generateCalcRound from '../src/games/calc.js'

runGame('What is the result of the expression?', generateCalcRound,)
