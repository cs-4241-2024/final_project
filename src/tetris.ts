export class tetris {
    COLS: number
    ROWS: number
    SIZE: number
    ctx: CanvasRenderingContext2D
    board: number[][]


    constructor(ctx: CanvasRenderingContext2D) {
        this.COLS = 10
        this.ROWS = 20
        this.SIZE = 25
        this.ctx = ctx
        this.ctx.canvas.width = this.COLS * this.SIZE
        this.ctx.canvas.height = this.ROWS * this.SIZE
        this.ctx.scale(this.SIZE, this.SIZE)
        this.board = this.emptyBoard()
    }

    emptyBoard(){
        let tempBoard: number[][] = []
        for (let y = 0; y < this.ROWS; y++) {
            tempBoard[y] = []
            for (let x = 0; x < this.COLS; x++) {
                tempBoard[y][x] = 0
            }
        }
        return tempBoard
    }
}