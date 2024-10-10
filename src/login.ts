import { tetris } from "./tetris";
const loginForm = document.getElementById('login-form') as HTMLFormElement;
const loginMessage = document.getElementById('login-message') as HTMLParagraphElement;
const registerForm = document.getElementById('register-form') as HTMLFormElement;
const registerMessage = document.getElementById('register-message') as HTMLParagraphElement;
const gameContainer = document.getElementById('game-container') as HTMLElement;
const leaderboardButton = document.getElementById('leaderboard-button') as HTMLButtonElement;

// Handle form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token); // Store the token
            loginMessage.textContent = '';
            loginForm.reset();
            loginForm.style.display = 'none'; // Hide the login form
            registerForm.style.display = 'none'; // Hide the register form
            gameContainer.style.display = 'block'; // Show the game container
            // Start the game
            const score_container = document.getElementById('score-container') as HTMLElement;
            score_container.style.display = 'block';
            startGame();
        } else {
            const error = await response.text();
            loginMessage.textContent = error; // Show error message
        }
    } catch (error) {
        loginMessage.textContent = 'An error occurred during login';
        console.error('Login error:', error);
    }
});

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = (document.getElementById('new-username') as HTMLInputElement).value;
    const password = (document.getElementById('new-password') as HTMLInputElement).value;

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            registerMessage.textContent = '';
            registerForm.reset();
        } else {
            const error = await response.text();
            registerMessage.textContent = error; // Show error message
        }
    } catch (error) {
        registerMessage.textContent = 'An error occurred during registering';
        console.error('Registering error:', error);
    }
});

// Handle leaderboard button click
leaderboardButton.addEventListener('click', async () => {
    try {
        const response = await fetch('/leaderboard.html');
        if (response.ok) {
            window.location.href = '/leaderboard.html';
            console.log('ok')
        } else {
            const error = await response.text();
            console.error('Leaderboard error:', error);
        }
    } catch (error) {
        console.error('Leaderboard error:', error);
    }
});

// Start the game after a successful login
function startGame() {
    const COLS = 10;
    const ROWS = 20;
    const SIZE = 25;
    const TIME = 40;

    const canvas = document.getElementById('tetris') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    ctx.canvas.width = COLS * SIZE;
    ctx.canvas.height = ROWS * SIZE;

    ctx.scale(SIZE, SIZE);

    let board = new tetris(ctx);
    playTetris(board);

    document.addEventListener('keydown', (e) => {
        if (board.gameOver) {
            return
        }
        if (e.key === 'ArrowRight') {
            board.moveRight();
        }
        if (e.key === 'ArrowLeft') {
            board.moveLeft();
        }
        if (e.key === 'ArrowDown') {
            board.moveDown();
        }
        if (e.key === 'ArrowUp') {
            board.rotate();
        }
    });

    function playTetris(board: tetris) {
        board.drawBoard();

        let curLoop = 0;
        loop();

        function loop() {
            board.drawBoard();
            requestAnimationFrame(loop);
            if (board.gameOver) {
                return
            }
            if (++curLoop % TIME === 0) {
                board.moveDown();
            }
        }
    }
}
