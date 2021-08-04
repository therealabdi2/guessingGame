'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent =
        'Plz enter a valid number';
    } else if (guess > 20 || guess < 1) {
      document.querySelector('.message').textContent =
        'Please enter a number b/w 1 and 20';
    } else if (guess > secretNumber) {
      score--;
      document.querySelector('.message').textContent = 'Too High';
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
    } else {
      document.querySelector('.check').disabled = true;
      document.querySelector('.number').textContent = guess;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.message').textContent = 'You got it 🎉';
      if (score > highScore) {
        highScore = score;
      }
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    document.querySelector('.message').textContent = 'You lose bruh';
    document.querySelector('body').style.backgroundColor = 'red';
    score = 0;
  }
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  console.log(secretNumber);

  document.querySelector('.check').disabled = false;
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
