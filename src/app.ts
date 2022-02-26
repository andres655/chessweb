/*import { showAlert } from './messages';
//import './style.css';
document.getElementById('btn-alert')
    .addEventListener('click', showAlert);*/

    import Board from "./clases/Board";
import Piece from "./clases/Piece";
import bishop from "./clases/pieces/bishop";
import king from "./clases/pieces/king";
import knight from "./clases/pieces/knight";
import pawn from "./clases/pieces/pawn";
import queen from "./clases/pieces/queen";
import rook from "./clases/pieces/rook";
import { color } from "./type";

const WIDTH = 800;
const HEIGHT = 800;
const FILES = 8;
const RANKS = 8;
const CELL_WIDTH = WIDTH / FILES;
const CELL_HEIGHT = WIDTH / RANKS;
const PIECE_OFFSET = CELL_HEIGHT*0.1;
const theme = {
    light: '#eeeed2',
    dark:'#769656'  
}

const pieceTheme = {
    light: '#FFFFFF',
    dark:'#000000'
}
const board = new Board(WIDTH,HEIGHT,FILES,RANKS,theme);
const pieces = {
    King: ['♔','♚'],
    Queen: ['♕','♛'], 
    Rook: ['♖','♜'],
    Bishop: ['♗','♝'],
    Knight: ['♘','♞'],
    Pawn:['♙','♟']
}
//c/* onst $canvas = document.createElement('canvas'); */
//c/* onst ctx = $canvas.getContext('2d'); */
//$/* canvas.width = WIDTH; */
//$/* canvas.height = HEIGHT; */

//d/* ocument.body.appendChild($canvas); */

//d/* ocument.body.style.display = 'grid'; */
//d/* ocument.body.style.placeItems = 'center'; */
//d/* ocument.body.style.height = '100%'; */
//d/* ocument.body.parentElement.style.height = '100%' */
//d/* ocument.body.style.backgroundColor='#333333' */



 /* //ctx.font="bold italic 36px arial"; */
//$/* canvas.style.backgroundColor = '#FFFFFF'; */
//d/* ocument.body.appendChild($canvas); */

/* const renderBoard = () => { */
/*     for (let x = 0; x < FILES; x += 1) { */
/*          */
/*         for (let y = 0; y < RANKS; y += 1) { */
/*              */
/*             let rectColor = theme.light; */
/*             let textColor = theme.dark; */
/*             if ((x + y) % 2) { */
/*                 rectColor = theme.dark; */
/*                 textColor = theme.light; */
/*              */
/*  */
/*             } */
/*             else { */
/*                 rectColor = theme.light; */
/*                 textColor = theme.dark; */
/*              */
/*             } */
/*  */
/*              */
/*             ctx.fillStyle = rectColor; */
/*             ctx.fillRect(x * CELL_WIDTH, y * CELL_HEIGHT,
/*             */
/*             //Draw the Position */
/*             ctx.fillStyle = textColor; */
/*             ctx.font = '8px arial'; */
/*             ctx.textBaseline = 'top'; */
/*             ctx.textAlign = 'star'; */
/*             ctx.fillText(`[${x};${y}]`, x * CELL_WIDTH + 
/*             */
/*             //Draw the Pieces */
/*             const piece = boardMatrix[x][y]; */
/*             if (piece) { */
/*                 ctx.fillStyle = piece.color; */
/*                 ctx.font = '72px arial'; */
/*                 ctx.textBaseline = 'middle'; */
/*                 ctx.textAlign = 'center'; */
/*  */
/*                 ctx.fillText(boardMatrix[x][y].type[1], x
/*                 ctx.fillStyle = pieceTheme.dark; */
/*                  ctx.fillText(boardMatrix[x][y].type[0], 
/*                 2, y * CELL_HEIGHT + CELL_HEIGHT / 2+PIEC
/*             } */
/*         } */
/*     } */
/* } */
/*  */
// initialize Board
/* const boardMatrix = []; */
/* for (let x = 0; x < FILES; x += 1) { */
/*     boardMatrix[x] = []; */
/*     for (let y = 0; y < RANKS; y += 1) { */
/*         boardMatrix[x][y] = null; */
/*     } */
/* } */
//ubicar las piezas
for (let i = 0; i < RANKS; i += 1){
    board.initPlacePiece(i,1, new pawn( color.dark)) /*= {
    type:pieces.Pawn,
    color:pieceTheme.dark*/
}

for (let i = 0; i < RANKS; i += 1){
    board.initPlacePiece(i,6,new pawn(color.light))
   
}

board.initPlacePiece(0,0,new rook( color.dark))
   
board.initPlacePiece(0, 7, new rook( color.light))

board.initPlacePiece(7,0,new rook(color.dark))

board.initPlacePiece(7,7,new rook(color.light)) 
   
board.initPlacePiece(1,0,new knight(color.dark)) 
    
board.initPlacePiece(1,7,new knight(color.light)) 
   
board.initPlacePiece(6,0,new knight(color.dark))
   
board.initPlacePiece(6,7,new knight(color.light)) 
    
board.initPlacePiece(2,0,new bishop(color.dark)) 
   
board.initPlacePiece(2, 7, new bishop(color.light)) 

board.initPlacePiece(5,0,new bishop(color.dark)) 
    
board.initPlacePiece(5,7,new bishop(color.light)) 
   
board.initPlacePiece(3,0,new queen(color.dark))
    
board.initPlacePiece(3,7,new queen(color.light)) 

board.initPlacePiece(4,0,new king(color.dark)) 
    
board.initPlacePiece(4,7,new king(color.light)) 
    

board.render();