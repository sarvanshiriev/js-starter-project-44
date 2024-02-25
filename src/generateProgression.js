import getRandomInt from './random.js';

export default function generateProgression(length, start, diff) {
  const progression = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    progression.push(start + i * diff);
  }
  const hiddenIndex = getRandomInt(0, progression.length - 1);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return { progression, hiddenValue };
}
