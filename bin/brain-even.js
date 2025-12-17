#!/usr/bin/env node
import runGame from '../src/index.js';
import generateEvenRound from '../src/even.js';

runGame('Answer "yes" if the number is even, otherwise answer "no".', generateEvenRound);
