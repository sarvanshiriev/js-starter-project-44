#!/usr/bin/env node
import checkEven from '../src/games/checkEven.js';
import greetUser from '../src/cli.js';

const playerName = greetUser();
checkEven(playerName);
