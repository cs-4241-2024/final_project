import { tetris } from './tetris'
const COLS = 10
const ROWS = 20
const SIZE = 25

const canvas = document.getElementById('tetris') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

ctx.canvas.width = COLS * SIZE
ctx.canvas.height = ROWS * SIZE

ctx.scale(SIZE, SIZE)

playTetris(ctx)

function playTetris(ctx: CanvasRenderingContext2D) {
    let board = new tetris(ctx)
    console.log(board)
}