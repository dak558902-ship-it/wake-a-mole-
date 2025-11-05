const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const hitSound = document.getElementById('hitSound');

let score = 0;
let time = 30;
let gameInterval;
let moleTimer;

function startGame() {
  score = 0;
  time = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;
  startBtn.disabled = true;

  gameInterval = setInterval(() => {
    time--;
    timeDisplay.textContent = time;
    if (time === 0) {
      clearInterval(gameInterval);
      clearInterval(moleTimer);
      removeMoles();
      startBtn.disabled = false;
      alert(`Game Over! 🎯 Your score is ${score}`);
    }
  }, 1000);

  moleTimer = setInterval(showRandomMole, 700);
}

function showRandomMole() {
  removeMoles();
  const index = Math.floor(Math.random() * holes.length);
  const mole = holes[index];
  mole.classList.add('active');
  mole.onclick = () => {
    if (mole.classList.contains('active')) {
      hitSound.currentTime = 0;
      hitSound.play();
      score++;
      scoreDisplay.textContent = score;
      mole.classList.remove('active');
    }
  };
}

function removeMoles() {
  holes.forEach(hole => {
    hole.classList.remove('active');
    hole.onclick = null;
  });
}

startBtn.addEventListener('click', startGame);
function startGame() {
  document.getElementById('gameOverScreen').classList.add('hidden');
  score = 0;
  time = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;
  startBtn.disabled = true;

  gameInterval = setInterval(() => {
    time--;
    timeDisplay.textContent = time;
    if (time === 0) {
      clearInterval(gameInterval);
      clearInterval(moleTimer);
      removeMoles();
      startBtn.disabled = false;
      showGameOverScreen();
    }
  }, 1000);

  moleTimer = setInterval(showRandomMole, 700);
}

function showGameOverScreen() {
  document.getElementById('finalScore').textContent = score;
  document.getElementById('gameOverScreen').classList.remove('hidden');
}

function closeGameOver() {
  document.getElementById('gameOverScreen').classList.add('hidden');
  startGame();
}

