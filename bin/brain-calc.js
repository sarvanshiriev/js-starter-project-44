#!/usr/bin/env node
import calculator from '../src/games/calculator.js';
import greetUser from '../src/cli.js';

const playerName = greetUser();
calculator(playerName);
