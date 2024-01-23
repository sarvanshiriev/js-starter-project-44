#!/usr/bin/env node
import checkEven from '../src/even.js';
import greetUser from '../src/cli.js';

const playerName = greetUser();
checkEven(playerName);
