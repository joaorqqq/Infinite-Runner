const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
let score = 0;
let gameInterval;

canvas.width = 800;
canvas.height = 600;

function startGame() {
    fetch('/data.json')
        .then(response => response.json())
        .then(data => {
            score = data.initialScore;
            scoreElement.innerText = `Score: ${score}`;
        });

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameInterval = setInterval(updateGame, 20);
}

function updateGame() {
    score++;
    scoreElement.innerText = `Score: ${score}`;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(50, canvas.height - 50, 50, 50);
}

document.getElementById('startButton').addEventListener('click', startGame);
