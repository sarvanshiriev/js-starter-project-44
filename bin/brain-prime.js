#!/usr/bin/env node
import getPrime from '../src/games/prime.js';
import greetUser from '../src/cli.js';

const playerName = greetUser();
getPrime(playerName);
