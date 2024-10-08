import { tetris } from './tetris'

const COLS = 10
const ROWS = 20
const SIZE = 25
const TIME = 40

const canvas = document.getElementById('tetris') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

ctx.canvas.width = COLS * SIZE
ctx.canvas.height = ROWS * SIZE

ctx.scale(SIZE, SIZE)

let board = new tetris(ctx)

playTetris(board)

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        board.moveRight()
    }
    if (e.key === 'ArrowLeft') {
        board.moveLeft()
    }
    if (e.key === 'ArrowDown') {
        console.log('down')
    }
    if (e.key === 'ArrowUp') {
        console.log('up')
    }
})

function playTetris(board: tetris) {
    console.log(board)

    board.drawBoard()

    let curLoop = 0
    loop()

    function loop() {
        board.drawBoard()
        requestAnimationFrame(loop)
        console.log('loop')
        if (++curLoop % TIME == 0) {
            console.log('tick')
            board.moveDown()
        }
    }

}

