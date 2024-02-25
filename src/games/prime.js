import readlineSync from 'readline-sync';
import getRandomInt from '../random.js';
import isPrime from '../isPrime.js';

export default function getPrime(name) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const randomNumber = getRandomInt(0, 100);
    const correctAnswer = isPrime(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // eslint-disable-next-line eqeqeq
    if (userAnswer == correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`Question: ${randomNumber}\n
      Your answer: ${userAnswer}\n
      '${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'
    Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
