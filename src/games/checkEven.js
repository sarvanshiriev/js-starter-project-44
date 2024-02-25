import readlineSync from 'readline-sync';
import getRandomInt from '../random.js';

export default function checkEven(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const randomNumber = getRandomInt(0, 100);
    console.log(`Question: ${randomNumber}`);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
    Let's try again,${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
