document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const scoreValue = document.getElementById('score-value');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');
    const gridSize = 20;
    const boardSize = 400;
    const snakeSpeed = 100;
    let snake = [{ x: 10, y: 10 }];
    let food = { x: 15, y: 15 };
    let dx = 0;
    let dy = 0;
    let score = 0;
    let gameOver = false;

    function drawSnake() {
        gameBoard.innerHTML = '';
        snake.forEach(segment => {
            const snakeElement = document.createElement('div');
            snakeElement.style.gridRowStart = segment.y;
            snakeElement.style.gridColumnStart = segment.x;
            snakeElement.classList.add('snake');
            gameBoard.appendChild(snakeElement);
        });
    }

    function drawFood() {
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
    }

    function moveSnake() {
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };
        snake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
            score++;
            scoreValue.textContent = score;
            generateFood();
        } else {
            snake.pop();
        }
    }

    function generateFood() {
        food = {
            x: Math.floor(Math.random() * gridSize) + 1,
            y: Math.floor(Math.random() * gridSize) + 1
        };
    }

    function checkCollision() {
        if (
            snake[0].x < 1 || snake[0].x > gridSize ||
            snake[0].y < 1 || snake[0].y > gridSize ||
            snake.slice(1).some(segment => segment.x === snake[0].x && segment.y === snake[0].y)
        ) {
            gameOver = true;
        }
    }

    function gameLoop() {
        if (gameOver) {
            alert(`Game Over! Your score is ${score}`);
            return;
        }

        moveSnake();
        checkCollision();
        drawSnake();
        drawFood();
        setTimeout(gameLoop, snakeSpeed);
    }

    generateFood();
    gameLoop();

    upButton.addEventListener('click', () => {
        if (dy === 0) {
            dx = 0;
            dy = -1;
        }
    });

    downButton.addEventListener('click', () => {
        if (dy === 0) {
            dx = 0;
            dy = 1;
        }
    });

    leftButton.addEventListener('click', () => {
        if (dx === 0) {
            dx = -1;
            dy = 0;
        }
    });

    rightButton.addEventListener('click', () => {
        if (dx === 0) {
            dx = 1;
            dy = 0;
        }
    });
});
