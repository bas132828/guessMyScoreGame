'use strict';
/*document.querySelector('.message').textContent = 'Correct number!🍤';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem) +

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let scoreNumber = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // if there is no input

  if (!guess) {
    if (scoreNumber > 0) {
      document.querySelector('.message').textContent = 'No number here! 🥒';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER! 💨';
    }

    //if user wins
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'Correct number! 🌭';

    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = randomNumber;

    //if it is higher
  } else if (guess > randomNumber) {
    if (scoreNumber > 0) {
      document.querySelector('.message').textContent = '⤵ Lower! ⤵';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER! 💨';
    }

    //if it is lower
  } else if (guess < randomNumber) {
    if (scoreNumber > 0) {
      document.querySelector('.message').textContent = '⬆ Higher!⬆ ';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER! 💨';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  scoreNumber = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing again... ';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = scoreNumber;
  document.querySelector('body').style.backgroundColor = '#222';
});
