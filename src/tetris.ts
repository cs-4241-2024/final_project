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
        this.board.forEach((row, y) => {
            row.forEach((value, x) => {
                this.ctx.fillStyle = this.colors[value]
                this.ctx.fillRect(x, y, 1, 1)
                this.ctx.lineWidth = 0.02
                this.ctx.strokeStyle = 'black'
                this.ctx.strokeRect(x, y, 1, 1)
            })
        })
        if (!this.tetromino) {
            this.tetromino = this.randomTetromino()
        }
        this.drawTetromino()
    }

    drawTetromino() {
        if (this.tetromino) {
            this.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    this.ctx.fillStyle = this.colors[value]
                    this.ctx.fillRect(x + this.column, y + this.row, 1, 1)
                    this.ctx.lineWidth = 0.02
                    this.ctx.strokeStyle = 'black'
                    this.ctx.strokeRect(x + this.column, y + this.row, 1, 1)
                })
            })
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
            this.row = 0
            this.column = 4
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
    }

    randomTetromino() {
        const keys = Object.keys(tetrominos) as Array<keyof typeof tetrominos>;
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        this.tetromino = tetrominos[randomKey];
        this.row = 0
        this.column = 4
        return this.tetromino
    }
}