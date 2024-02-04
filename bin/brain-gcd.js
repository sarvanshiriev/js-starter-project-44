#!/usr/bin/env node
import gcd from '../src/games/gcd.js';
import greetUser from '../src/cli.js';

const playerName = greetUser();
gcd(playerName);
