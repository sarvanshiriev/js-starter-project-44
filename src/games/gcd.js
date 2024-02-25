import readlineSync from 'readline-sync';
import getRandomInt from '../random.js';
import getGcd from '../getGcd.js';

export default function gcd(name) {
  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const randomNumberOne = getRandomInt(0, 100);
    const randomNumberTwo = getRandomInt(0, 100);

    console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
    const correctAnswer = getGcd(randomNumberOne, randomNumberTwo);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer == correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`Question: ${randomNumberOne} ${randomNumberTwo}\n
      Your answer: ${userAnswer}\n
      '${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n
    Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
