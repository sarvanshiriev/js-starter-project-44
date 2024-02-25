import readlineSync from 'readline-sync';
import getRandomInt from '../random.js';
import randomItem from '../operation.js';

export default function calculator(name) {
  console.log('What is the result of the expression?');
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const randomNumberOne = getRandomInt(0, 100);
    const randomNumberTwo = getRandomInt(0, 100);
    const randomOperation = randomItem();
    console.log(`Question: ${randomNumberOne} ${randomOperation} ${randomNumberTwo}`);
    const expression = `${randomNumberOne} ${randomOperation} ${randomNumberTwo}`;
    // eslint-disable-next-line no-eval
    const correctAnswer = eval(expression);
    const userAnswer = readlineSync.question('Your answer: ');
    // eslint-disable-next-line eqeqeq
    if (userAnswer == correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`Question: ${randomNumberOne}${randomOperation}${randomNumberTwo}\n
      Your answer: ${userAnswer}\n
      '${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'
    Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
