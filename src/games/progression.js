import readlineSync from 'readline-sync';
import getRandomInt from '../random.js';
import generateProgression from '../generateProgression.js';

export default function getProgression(name) {
  console.log('What number is missing in the progression?');
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const start = getRandomInt(0, 100);
    const diff = getRandomInt(1, 10);
    const length = getRandomInt(5, 10);
    const { progression, hiddenValue } = generateProgression(length, start, diff);

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer == hiddenValue) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`Question: ${progression.join(' ')}\n
      Your answer: ${userAnswer}\n
      '${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'
    Let's try again,${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
}
