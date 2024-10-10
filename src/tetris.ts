import { tetrominos } from './tetrominos'
export class tetris {
    COLS: number
    ROWS: number
    SIZE: number
    ctx: CanvasRenderingContext2D
    board: number[][]
    tetromino: number[][] | null
    row: number
    column: number
    colors: string[]
    gameOver: boolean


    constructor(ctx: CanvasRenderingContext2D) {
        this.COLS = 10
        this.ROWS = 20
        this.SIZE = 25
        this.ctx = ctx
        this.ctx.canvas.width = this.COLS * this.SIZE
        this.ctx.canvas.height = this.ROWS * this.SIZE
        this.ctx.scale(this.SIZE, this.SIZE)
        this.tetromino = null
        this.row = 0
        this.column = 0
        this.board = this.emptyBoard()
        this.colors = ['white', 'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'cyan']
        this.gameOver = false
    }

    emptyBoard() {
        let tempBoard: number[][] = []
        for (let y = 0; y < this.ROWS; y++) {
            tempBoard[y] = []
            for (let x = 0; x < this.COLS; x++) {
                tempBoard[y][x] = 0
            }
        }
        return tempBoard
    }

    drawBoard() {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                this.ctx.fillStyle = this.colors[this.board[i][j]]
                this.ctx.fillRect(j, i, 1, 1)
                this.ctx.lineWidth = 0.02
                this.ctx.strokeStyle = 'black'
                this.ctx.strokeRect(j, i, 1, 1)
            }
        }
        if (!this.tetromino) {
            this.tetromino = this.randomTetromino()
        }
        this.drawTetromino()
    }

    drawTetromino() {
        if (this.tetromino) {
            for (let i = 0; i < this.tetromino.length; i++) {
                for (let j = 0; j < this.tetromino[i].length; j++) {
                    if (this.tetromino[i][j] === 0) {
                        continue
                    }
                    this.ctx.fillStyle = this.colors[this.tetromino[i][j]]
                    this.ctx.fillRect(j + this.column, i + this.row, 1, 1)
                    this.ctx.lineWidth = 0.02
                    this.ctx.strokeStyle = 'black'
                    this.ctx.strokeRect(j + this.column, i + this.row, 1, 1)
                }
            }
        }
    }

    moveRight() {
        this.column++
        if (this.collision()) {
            this.column--
        }
    }

    moveLeft() {
        this.column--
        if (this.collision()) {
            this.column++
        }
    }

    moveDown() {
        this.row++
        if (this.collision()) {
            this.row--
            this.placeTetromino()
            this.tetromino = this.randomTetromino()
            if (this.checkGameOver()) {
                this.gameOver = true
                this.showGameOver()
            }
            this.row = 0
            this.column = 4
        }
    }

    rotate() {
        if (!this.tetromino) {
            return
        }
        let tempTetromino: number[][] = []
        for (let i = 0; i < this.tetromino[0].length; i++) {
            tempTetromino[i] = []
            for (let j = 0; j < this.tetromino.length; j++) {
                tempTetromino[i][j] = this.tetromino[this.tetromino.length - 1 - j][i]
            }
        }
        let oldTetromino = this.tetromino
        this.tetromino = tempTetromino
        if (this.collision()) {
            this.tetromino = oldTetromino
        }
    }

    collision() {
        if (this.tetromino) {
            for (let y = 0; y < this.tetromino.length; y++) {
                for (let x = 0; x < this.tetromino[y].length; x++) {
                    if (this.tetromino[y][x] != 0) {
                        //Check if going too low, then check if going too far right/left, then check if piece overlap
                        if (y + this.row === this.ROWS || x + this.column === this.COLS || x + this.column < 0 || this.board[y + this.row][x + this.column] !== 0) {
                            return true
                        }
                    }
                }
            }
        }
        return false
    }

    placeTetromino() {
        if (this.tetromino) {
            for (let y = 0; y < this.tetromino.length; y++) {
                for (let x = 0; x < this.tetromino[y].length; x++) {
                    if (this.tetromino[y][x] !== 0) {
                        console.log(this.tetromino[y][x])
                        console.log(this.board[y + this.row][x + this.column])
                        this.board[y + this.row][x + this.column] = this.tetromino[y][x]
                    }
                }
            }
        }
        this.checkRows()
    }

    checkRows() {
        for (let i = 0; i < this.ROWS; i++) {
            for (let j = 0; j < this.COLS; j++) {
                if (this.board[i][j] === 0) {
                    break
                }
                if (j === this.COLS - 1) {
                    this.board.splice(i, 1)
                    this.board.unshift(Array(this.COLS).fill(0))
                }
            }
        }
    }

    checkGameOver() {
        if (this.tetromino) {
            for (let i = 0; i < this.tetromino.length; i++) {
                for (let j = 0; j < this.tetromino[i].length; j++) {
                    if (this.tetromino[i][j] !== 0 && this.board[i][j + this.column] !== 0) {
                        return true
                    }
                }
            }
        }
        return false
    }

    randomTetromino() {
        const keys = Object.keys(tetrominos) as Array<keyof typeof tetrominos>;
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        this.tetromino = tetrominos[randomKey];
        this.row = 0
        this.column = 4
        return this.tetromino
    }

    showGameOver() {
        this.ctx.fillText('Game Over', 1, 3)
        const restartButton = document.createElement('button')
        restartButton.innerText = 'Restart'
        restartButton.style.position = 'relative'
        restartButton.style.marginTop = '20px'
        document.body.appendChild(restartButton)

        restartButton.addEventListener('click', () => {
            document.body.removeChild(restartButton)
            this.resetGame()
            restartButton.remove()
        })
    }

    resetGame() {
        this.board = this.emptyBoard()
        this.tetromino = this.randomTetromino()
        this.row = 0
        this.column = 4
        this.gameOver = false
    }
}