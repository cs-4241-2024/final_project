import { tetris } from "./tetris";
const loginForm = document.getElementById('login-form') as HTMLFormElement;
const loginMessage = document.getElementById('login-message') as HTMLParagraphElement;
const gameContainer = document.getElementById('game-container') as HTMLElement;

// Handle form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    try {
        const response = await fetch('http://localhost:3000/login', {
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
            gameContainer.style.display = 'block'; // Show the game container
            // Start the game
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
            if (++curLoop % TIME === 0) {
                board.moveDown();
            }
        }
    }
}
