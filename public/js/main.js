var COLS = 10;
var ROWS = 20;
var SIZE = 25;
var canvas = document.getElementById('tetris');
var ctx = canvas.getContext('2d');
ctx.canvas.width = COLS * SIZE;
ctx.canvas.height = ROWS * SIZE;
ctx.scale(SIZE, SIZE);
