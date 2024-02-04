#!/usr/bin/env node
import getProgression from '../src/games/progression.js';
import greetUser from '../src/cli.js';

const playerName = greetUser();
getProgression(playerName);
