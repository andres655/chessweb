/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\n/*import { showAlert } from './messages';\r\n//import './style.css';\r\ndocument.getElementById('btn-alert')\r\n    .addEventListener('click', showAlert);*/\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Board_1 = __importDefault(__webpack_require__(/*! ./clases/Board */ \"./src/clases/Board.ts\"));\r\nconst bishop_1 = __importDefault(__webpack_require__(/*! ./clases/pieces/bishop */ \"./src/clases/pieces/bishop.ts\"));\r\nconst king_1 = __importDefault(__webpack_require__(/*! ./clases/pieces/king */ \"./src/clases/pieces/king.ts\"));\r\nconst knight_1 = __importDefault(__webpack_require__(/*! ./clases/pieces/knight */ \"./src/clases/pieces/knight.ts\"));\r\nconst pawn_1 = __importDefault(__webpack_require__(/*! ./clases/pieces/pawn */ \"./src/clases/pieces/pawn.ts\"));\r\nconst queen_1 = __importDefault(__webpack_require__(/*! ./clases/pieces/queen */ \"./src/clases/pieces/queen.ts\"));\r\nconst rook_1 = __importDefault(__webpack_require__(/*! ./clases/pieces/rook */ \"./src/clases/pieces/rook.ts\"));\r\nconst type_1 = __webpack_require__(/*! ./type */ \"./src/type.ts\");\r\nconst WIDTH = 800;\r\nconst HEIGHT = 800;\r\nconst FILES = 8;\r\nconst RANKS = 8;\r\nconst CELL_WIDTH = WIDTH / FILES;\r\nconst CELL_HEIGHT = WIDTH / RANKS;\r\nconst PIECE_OFFSET = CELL_HEIGHT * 0.1;\r\nconst theme = {\r\n    light: '#eeeed2',\r\n    dark: '#769656'\r\n};\r\nconst pieceTheme = {\r\n    light: '#FFFFFF',\r\n    dark: '#000000'\r\n};\r\nconst board = new Board_1.default(WIDTH, HEIGHT, FILES, RANKS, theme);\r\nconst pieces = {\r\n    King: ['♔', '♚'],\r\n    Queen: ['♕', '♛'],\r\n    Rook: ['♖', '♜'],\r\n    Bishop: ['♗', '♝'],\r\n    Knight: ['♘', '♞'],\r\n    Pawn: ['♙', '♟']\r\n};\r\n//c/* onst $canvas = document.createElement('canvas'); */\r\n//c/* onst ctx = $canvas.getContext('2d'); */\r\n//$/* canvas.width = WIDTH; */\r\n//$/* canvas.height = HEIGHT; */\r\n//d/* ocument.body.appendChild($canvas); */\r\n//d/* ocument.body.style.display = 'grid'; */\r\n//d/* ocument.body.style.placeItems = 'center'; */\r\n//d/* ocument.body.style.height = '100%'; */\r\n//d/* ocument.body.parentElement.style.height = '100%' */\r\n//d/* ocument.body.style.backgroundColor='#333333' */\r\n/* //ctx.font=\"bold italic 36px arial\"; */\r\n//$/* canvas.style.backgroundColor = '#FFFFFF'; */\r\n//d/* ocument.body.appendChild($canvas); */\r\n/* const renderBoard = () => { */\r\n/*     for (let x = 0; x < FILES; x += 1) { */\r\n/*          */\r\n/*         for (let y = 0; y < RANKS; y += 1) { */\r\n/*              */\r\n/*             let rectColor = theme.light; */\r\n/*             let textColor = theme.dark; */\r\n/*             if ((x + y) % 2) { */\r\n/*                 rectColor = theme.dark; */\r\n/*                 textColor = theme.light; */\r\n/*              */\r\n/*  */\r\n/*             } */\r\n/*             else { */\r\n/*                 rectColor = theme.light; */\r\n/*                 textColor = theme.dark; */\r\n/*              */\r\n/*             } */\r\n/*  */\r\n/*              */\r\n/*             ctx.fillStyle = rectColor; */\r\n/*             ctx.fillRect(x * CELL_WIDTH, y * CELL_HEIGHT,\r\n/*             */\r\n/*             //Draw the Position */\r\n/*             ctx.fillStyle = textColor; */\r\n/*             ctx.font = '8px arial'; */\r\n/*             ctx.textBaseline = 'top'; */\r\n/*             ctx.textAlign = 'star'; */\r\n/*             ctx.fillText(`[${x};${y}]`, x * CELL_WIDTH +\r\n/*             */\r\n/*             //Draw the Pieces */\r\n/*             const piece = boardMatrix[x][y]; */\r\n/*             if (piece) { */\r\n/*                 ctx.fillStyle = piece.color; */\r\n/*                 ctx.font = '72px arial'; */\r\n/*                 ctx.textBaseline = 'middle'; */\r\n/*                 ctx.textAlign = 'center'; */\r\n/*  */\r\n/*                 ctx.fillText(boardMatrix[x][y].type[1], x\r\n/*                 ctx.fillStyle = pieceTheme.dark; */\r\n/*                  ctx.fillText(boardMatrix[x][y].type[0],\r\n/*                 2, y * CELL_HEIGHT + CELL_HEIGHT / 2+PIEC\r\n/*             } */\r\n/*         } */\r\n/*     } */\r\n/* } */\r\n/*  */\r\n// initialize Board\r\n/* const boardMatrix = []; */\r\n/* for (let x = 0; x < FILES; x += 1) { */\r\n/*     boardMatrix[x] = []; */\r\n/*     for (let y = 0; y < RANKS; y += 1) { */\r\n/*         boardMatrix[x][y] = null; */\r\n/*     } */\r\n/* } */\r\n//ubicar las piezas\r\nfor (let i = 0; i < RANKS; i += 1) {\r\n    board.initPlacePiece(i, 1, new pawn_1.default(type_1.color.dark)); /*= {\r\n    type:pieces.Pawn,\r\n    color:pieceTheme.dark*/\r\n}\r\nfor (let i = 0; i < RANKS; i += 1) {\r\n    board.initPlacePiece(i, 6, new pawn_1.default(type_1.color.light));\r\n}\r\nboard.initPlacePiece(0, 0, new rook_1.default(type_1.color.dark));\r\nboard.initPlacePiece(0, 7, new rook_1.default(type_1.color.light));\r\nboard.initPlacePiece(7, 0, new rook_1.default(type_1.color.dark));\r\nboard.initPlacePiece(7, 7, new rook_1.default(type_1.color.light));\r\nboard.initPlacePiece(1, 0, new knight_1.default(type_1.color.dark));\r\nboard.initPlacePiece(1, 7, new knight_1.default(type_1.color.light));\r\nboard.initPlacePiece(6, 0, new knight_1.default(type_1.color.dark));\r\nboard.initPlacePiece(6, 7, new knight_1.default(type_1.color.light));\r\nboard.initPlacePiece(2, 0, new bishop_1.default(type_1.color.dark));\r\nboard.initPlacePiece(2, 7, new bishop_1.default(type_1.color.light));\r\nboard.initPlacePiece(5, 0, new bishop_1.default(type_1.color.dark));\r\nboard.initPlacePiece(5, 7, new bishop_1.default(type_1.color.light));\r\nboard.initPlacePiece(3, 0, new queen_1.default(type_1.color.dark));\r\nboard.initPlacePiece(3, 7, new queen_1.default(type_1.color.light));\r\nboard.initPlacePiece(4, 0, new king_1.default(type_1.color.dark));\r\nboard.initPlacePiece(4, 7, new king_1.default(type_1.color.light));\r\nboard.render();\r\n\n\n//# sourceURL=webpack://chessweb/./src/app.ts?");

/***/ }),

/***/ "./src/clases/Board.ts":
/*!*****************************!*\
  !*** ./src/clases/Board.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Cell_1 = __importDefault(__webpack_require__(/*! ./Cell */ \"./src/clases/Cell.ts\"));\r\nclass Board {\r\n    constructor(WIDTH, HEIGHT, FILES, RANKS, theme) {\r\n        this.WIDTH = WIDTH;\r\n        this.HEIGHT = HEIGHT;\r\n        this.FILES = FILES;\r\n        this.RANKS = RANKS;\r\n        this.theme = theme;\r\n        this.flip = false;\r\n        this.CELL_WIDTH = this.WIDTH / this.FILES;\r\n        this.CELL_HEIGHT = this.WIDTH / this.RANKS;\r\n        this.PIECE_OFFSET = this.CELL_HEIGHT * 0.1;\r\n        this.previousCell = null;\r\n        //this.previousCell = null;\r\n        this.selectedCells = [];\r\n        this.$canvas = document.createElement('canvas');\r\n        this.ctx = this.$canvas.getContext('2d');\r\n        //quitar error de nulo \r\n        /* if (!(this.ctx = this.$canvas.getContext(\"2d\"))) {\r\n           throw new Error(`2d context not supported or canvas already initialized`);\r\n         }*/\r\n        this.$canvas.width = this.WIDTH;\r\n        this.$canvas.height = this.HEIGHT;\r\n        document.body.appendChild(this.$canvas);\r\n        document.body.style.display = 'grid';\r\n        document.body.style.placeItems = 'center';\r\n        document.body.style.height = '100%';\r\n        //document.body.parentElement.style.height = '100%';\r\n        document.body.style.backgroundColor = '#333333';\r\n        // initialize Board\r\n        this.boardMatrix = [];\r\n        for (let x = 0; x < this.FILES; x += 1) {\r\n            this.boardMatrix[x] = [];\r\n            for (let y = 0; y < this.RANKS; y += 1) {\r\n                this.boardMatrix[x][y] = new Cell_1.default(null); //para quitar el null\r\n            }\r\n        }\r\n        // bind metodo\r\n        this.setMouseCell = this.setMouseCell.bind(this);\r\n        this.setSelectCell = this.setSelectCell.bind(this);\r\n        this.PickPiece = this.PickPiece.bind(this);\r\n        this.dropPiece = this.dropPiece.bind(this);\r\n        this.dragPiece = this.dragPiece.bind(this);\r\n        //movimiento\r\n        this.$canvas.addEventListener('mousedown', this.PickPiece);\r\n        this.$canvas.addEventListener('mousemove', this.dragPiece);\r\n        this.$canvas.addEventListener('mouseup', this.dropPiece);\r\n    }\r\n    clearSelection() {\r\n        this.selectedCells.forEach((c) => c.setSelected(false));\r\n        this.selectedCells = [];\r\n        this.boardMatrix.forEach((File) => {\r\n            File.forEach((cell) => {\r\n                cell.setavaibleMove(false);\r\n            });\r\n        });\r\n    }\r\n    dragPiece(event) {\r\n    }\r\n    PickPiece(event) {\r\n        this.clearSelection();\r\n        if (this.previousCell)\r\n            return;\r\n        const { offsetX, offsetY } = event;\r\n        const [file, rank] = this.MouseCoordinatesToCell(offsetX, offsetY);\r\n        const selectedCell = this.boardMatrix[file][rank];\r\n        if (!selectedCell.piece)\r\n            return;\r\n        selectedCell.piece.avaibleMovements([file, rank], this.boardMatrix);\r\n        this.previousCell = selectedCell;\r\n        this.selectedCells.push(selectedCell);\r\n        selectedCell.setSelected(true);\r\n        this.render();\r\n    }\r\n    dropPiece(event) {\r\n        console.log('hola');\r\n        console.log({ drop: this.previousCell });\r\n        if (!this.previousCell)\r\n            return;\r\n        const { offsetX, offsetY } = event;\r\n        const [file, rank] = this.MouseCoordinatesToCell(offsetX, offsetY);\r\n        const selectedCell = this.boardMatrix[file][rank];\r\n        if (this.previousCell == selectedCell) {\r\n            //console.log(\"Movimiento Valido\");\r\n            this.previousCell = null;\r\n            this.clearSelection();\r\n            this.render();\r\n            return;\r\n        }\r\n        if (!selectedCell.avaibleMove) {\r\n            //console.log(\"Movimiento Valido\");\r\n            this.previousCell = null;\r\n            this.clearSelection();\r\n            this.render();\r\n            return;\r\n        }\r\n        selectedCell.setPiece(this.previousCell.piece);\r\n        this.selectedCells.push(selectedCell);\r\n        this.previousCell.setPiece(null);\r\n        this.previousCell = null;\r\n        selectedCell.setSelected(true);\r\n        this.flip = !this.flip;\r\n        this.render();\r\n    }\r\n    MouseCoordinatesToCell(x, y) {\r\n        let file = Math.floor(x / this.CELL_WIDTH);\r\n        let rank = Math.floor(y / this.CELL_HEIGHT);\r\n        if (this.flip) {\r\n            file = this.FILES - 1 - file;\r\n            rank = this.RANKS - 1 - rank;\r\n        }\r\n        return [file, rank];\r\n    }\r\n    setSelectCell(event) {\r\n        const { offsetX, offsetY } = event;\r\n        const [file, rank] = this.MouseCoordinatesToCell(offsetX, offsetY);\r\n        const selectedCell = this.boardMatrix[file][rank];\r\n        selectedCell.setSelected(true);\r\n        this.render();\r\n    }\r\n    setMouseCell(event) {\r\n        const { offsetX, offsetY } = event;\r\n        console.log({ offsetX, offsetY });\r\n        const x = Math.floor(offsetX / this.CELL_WIDTH);\r\n        const y = Math.floor(offsetY / this.CELL_HEIGHT);\r\n        console.log({ CELL_WIDTH: this.CELL_WIDTH, CELL_HEIGHT: this.CELL_HEIGHT });\r\n        console.log({ x, y });\r\n        /*  const selectedCell = this.boardMatrix[x][y];\r\n          selectedCell.setSelected(true);\r\n          console.log(this.boardMatrix)\r\n          this.render();*/\r\n    }\r\n    /*this.$canvas.addEventListener(\"mousedown\", this.click, false);*/\r\n    initPlacePiece(x, y, piece) {\r\n        const cell = this.boardMatrix[x][y];\r\n        cell.setPiece(piece);\r\n    }\r\n    render() {\r\n        for (let x = 0; x < this.FILES; x += 1) {\r\n            for (let y = 0; y < this.RANKS; y += 1) {\r\n                let drawX = x;\r\n                let drawY = y;\r\n                if (this.flip) {\r\n                    drawX = this.RANKS - 1 - drawX;\r\n                    drawY = this.FILES - 1 - drawY;\r\n                }\r\n                let rectColor = this.theme.light;\r\n                let textColor = this.theme.dark;\r\n                if ((drawX + drawY) % 2) {\r\n                    rectColor = this.theme.dark;\r\n                    textColor = this.theme.light;\r\n                }\r\n                //Draw Cell\r\n                this.ctx.fillStyle = rectColor;\r\n                this.ctx.fillRect(drawX * this.CELL_WIDTH, drawY * this.CELL_HEIGHT, this.CELL_WIDTH, this.CELL_HEIGHT);\r\n                //Draw the Position\r\n                this.ctx.fillStyle = rectColor;\r\n                this.ctx.font = '8px arial';\r\n                this.ctx.textBaseline = 'top';\r\n                this.ctx.textAlign = 'start';\r\n                this.ctx.fillText(`[${x};${y}]`, drawX * this.CELL_WIDTH + 10, drawY * this.CELL_HEIGHT +\r\n                    this.CELL_WIDTH, this.CELL_HEIGHT);\r\n                //Draw the Pieces\r\n                const cell = this.boardMatrix[x][y];\r\n                if (cell.selected) {\r\n                    this.ctx.fillStyle = '#FFD800';\r\n                    this.ctx.lineWidth = 8;\r\n                    this.ctx.lineJoin = 'bevel';\r\n                    this.ctx.strokeRect(drawX * this.CELL_WIDTH, drawY * this.CELL_HEIGHT, this.CELL_WIDTH, this.CELL_HEIGHT);\r\n                }\r\n                if (cell.avaibleMove) {\r\n                    //draw the possible move\r\n                    console.log('este movimiento es posible');\r\n                    this.ctx.fillStyle = '#000000';\r\n                    this.ctx.globalAlpha = 0.3;\r\n                    this.ctx.beginPath();\r\n                    this.ctx.arc(drawX * this.CELL_WIDTH + this.CELL_WIDTH / 2, drawY * this.CELL_HEIGHT + this.CELL_HEIGHT / 2, 16, 0, 2 * Math.PI);\r\n                    this.ctx.fill();\r\n                    this.ctx.globalAlpha = 1;\r\n                    /*this.ctx.strokeRect(drawX * this.CELL_WIDTH,\r\n                          drawY * this.CELL_HEIGHT,\r\n                         this.CELL_WIDTH, this.CELL_HEIGHT);*/\r\n                }\r\n                const piece = cell === null || cell === void 0 ? void 0 : cell.piece;\r\n                if (piece) {\r\n                    this.ctx.fillStyle = this.theme[piece.color];\r\n                    this.ctx.font = '72px arial';\r\n                    this.ctx.textBaseline = 'middle';\r\n                    this.ctx.textAlign = 'center';\r\n                    this.ctx.fillStyle = this.theme[piece.color];\r\n                    this.ctx.fillText(piece.miau[1], drawX * this.CELL_WIDTH + this.CELL_WIDTH / 2, drawY * this.CELL_HEIGHT + this.CELL_HEIGHT / 2 + this.PIECE_OFFSET);\r\n                    this.ctx.fillStyle = '#000000';\r\n                    this.ctx.fillText(piece.miau[0], drawX * this.CELL_WIDTH + this.CELL_WIDTH / 2, drawY * this.CELL_HEIGHT + this.CELL_HEIGHT / 2 + this.PIECE_OFFSET);\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\nexports[\"default\"] = Board;\r\n\n\n//# sourceURL=webpack://chessweb/./src/clases/Board.ts?");

/***/ }),

/***/ "./src/clases/Cell.ts":
/*!****************************!*\
  !*** ./src/clases/Cell.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass cell {\r\n    constructor(piece) {\r\n        piece = this.piece;\r\n        this.selected = false;\r\n        this.avaibleMove = false;\r\n    }\r\n    setSelected(selected) {\r\n        this.selected = selected;\r\n    }\r\n    setPiece(piece) {\r\n        this.piece = piece;\r\n    }\r\n    setavaibleMove(avaible) {\r\n        this.avaibleMove = avaible;\r\n    }\r\n}\r\nexports[\"default\"] = cell;\r\n\n\n//# sourceURL=webpack://chessweb/./src/clases/Cell.ts?");

/***/ }),

/***/ "./src/clases/Piece.ts":
/*!*****************************!*\
  !*** ./src/clases/Piece.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass piece {\r\n    constructor(color, miau, type) {\r\n        this.color = color;\r\n        this.miau = miau;\r\n        this.type = type;\r\n    }\r\n    avaibleMovements(position, boardMatrix) {\r\n        throw new Error('missing');\r\n    }\r\n}\r\nexports[\"default\"] = piece;\r\n\n\n//# sourceURL=webpack://chessweb/./src/clases/Piece.ts?");

/***/ }),

/***/ "./src/clases/pieces/bishop.ts":
/*!*************************************!*\
  !*** ./src/clases/pieces/bishop.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst type_1 = __webpack_require__(/*! ../../type */ \"./src/type.ts\");\r\nconst Piece_1 = __importDefault(__webpack_require__(/*! ../Piece */ \"./src/clases/Piece.ts\"));\r\nclass bishop extends Piece_1.default {\r\n    constructor(color) {\r\n        super(color, ['♗', '♝'], type_1.PieceType.Bishop);\r\n    }\r\n    avaibleMovements(position, boardMatrix) {\r\n        const [x, y] = position;\r\n        for (let i = 1; i <= 8; i += 1) {\r\n            const CellpossibleMove = boardMatrix[x + i][y - i];\r\n            if (!CellpossibleMove)\r\n                break;\r\n            if (CellpossibleMove.piece)\r\n                break;\r\n            CellpossibleMove.setavaibleMove(true);\r\n        }\r\n        for (let i = 1; i <= 8; i += 1) {\r\n            const CellpossibleMove = boardMatrix[x + i][y + i];\r\n            if (!CellpossibleMove)\r\n                break;\r\n            if (CellpossibleMove.piece)\r\n                break;\r\n            CellpossibleMove.setavaibleMove(true);\r\n        }\r\n        for (let i = 1; i <= 8; i += 1) {\r\n            const CellpossibleMove = boardMatrix[x - i][y - i];\r\n            if (!CellpossibleMove)\r\n                break;\r\n            if (CellpossibleMove.piece)\r\n                break;\r\n            CellpossibleMove.setavaibleMove(true);\r\n        }\r\n        for (let i = 1; i <= 8; i += 1) {\r\n            const CellpossibleMove = boardMatrix[x - i][y + i];\r\n            if (!CellpossibleMove)\r\n                break;\r\n            if (CellpossibleMove.piece)\r\n                break;\r\n            CellpossibleMove.setavaibleMove(true);\r\n        }\r\n    }\r\n}\r\nexports[\"default\"] = bishop;\r\n\n\n//# sourceURL=webpack://chessweb/./src/clases/pieces/bishop.ts?");

/***/ }),

/***/ "./src/clases/pieces/king.ts":
/*!***********************************!*\
  !*** ./src/clases/pieces/king.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst type_1 = __webpack_require__(/*! ../../type */ \"./src/type.ts\");\r\nconst Piece_1 = __importDefault(__webpack_require__(/*! ../Piece */ \"./src/clases/Piece.ts\"));\r\nclass king extends Piece_1.default {\r\n    constructor(color) {\r\n        super(color, ['♔', '♚'], type_1.PieceType.King);\r\n    }\r\n}\r\nexports[\"default\"] = king;\r\n\n\n//# sourceURL=webpack://chessweb/./src/clases/pieces/king.ts?");

/***/ }),

/***/ "./src/clases/pieces/knight.ts":
/*!*************************************!*\
  !*** ./src/clases/pieces/knight.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst type_1 = __webpack_require__(/*! ../../type */ \"./src/type.ts\");\r\nconst Piece_1 = __importDefault(__webpack_require__(/*! ../Piece */ \"./src/clases/Piece.ts\"));\r\nclass knight extends Piece_1.default {\r\n    constructor(color) {\r\n        super(color, ['♘', '♞'], type_1.PieceType.Knight);\r\n    }\r\n}\r\nexports[\"default\"] = knight;\r\n\n\n//# sourceURL=webpack://chessweb/./src/clases/pieces/knight.ts?");

/***/ }),

/***/ "./src/clases/pieces/pawn.ts":
/*!***********************************!*\
  !*** ./src/clases/pieces/pawn.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst type_1 = __webpack_require__(/*! ../../type */ \"./src/type.ts\");\r\nconst Piece_1 = __importDefault(__webpack_require__(/*! ../Piece */ \"./src/clases/Piece.ts\"));\r\nclass pawn extends Piece_1.default {\r\n    constructor(color) {\r\n        super(color, ['♙', '♟'], type_1.PieceType.Pawn);\r\n    }\r\n    avaibleMovements(position, boardMatrix) {\r\n        const [x, y] = position;\r\n        for (let i = 1; i <= 2; i += 1) {\r\n            const CellpossibleMove = boardMatrix[x][this.color == type_1.color.dark ? y + i : y - i];\r\n            if (CellpossibleMove.piece)\r\n                break;\r\n            CellpossibleMove.setavaibleMove(true);\r\n        }\r\n    }\r\n}\r\nexports[\"default\"] = pawn;\r\n\n\n//# sourceURL=webpack://chessweb/./src/clases/pieces/pawn.ts?");

/***/ }),

/***/ "./src/clases/pieces/queen.ts":
/*!************************************!*\
  !*** ./src/clases/pieces/queen.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst type_1 = __webpack_require__(/*! ../../type */ \"./src/type.ts\");\r\nconst Piece_1 = __importDefault(__webpack_require__(/*! ../Piece */ \"./src/clases/Piece.ts\"));\r\nclass queen extends Piece_1.default {\r\n    constructor(color) {\r\n        super(color, ['♕', '♛'], type_1.PieceType.Queen);\r\n    }\r\n}\r\nexports[\"default\"] = queen;\r\n\n\n//# sourceURL=webpack://chessweb/./src/clases/pieces/queen.ts?");

/***/ }),

/***/ "./src/clases/pieces/rook.ts":
/*!***********************************!*\
  !*** ./src/clases/pieces/rook.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst type_1 = __webpack_require__(/*! ../../type */ \"./src/type.ts\");\r\nconst Piece_1 = __importDefault(__webpack_require__(/*! ../Piece */ \"./src/clases/Piece.ts\"));\r\nclass rook extends Piece_1.default {\r\n    constructor(color) {\r\n        super(color, ['♖', '♜'], type_1.PieceType.Rook);\r\n    }\r\n    avaibleMovements(position, boardMatrix) {\r\n        const [x, y] = position;\r\n        for (let i = 1; i <= 8; i += 1) {\r\n            const CellpossibleMove = boardMatrix[x][y + i];\r\n            if (!CellpossibleMove)\r\n                break;\r\n            if (CellpossibleMove.piece)\r\n                break;\r\n            CellpossibleMove.setavaibleMove(true);\r\n        }\r\n        for (let i = 1; i <= 8; i += 1) {\r\n            const CellpossibleMove = boardMatrix[x][y - i];\r\n            if (!CellpossibleMove)\r\n                break;\r\n            if (CellpossibleMove.piece)\r\n                break;\r\n            CellpossibleMove.setavaibleMove(true);\r\n        }\r\n        for (let i = 1; i <= 8; i += 1) {\r\n            const CellpossibleMove = boardMatrix[x + i][y];\r\n            if (!CellpossibleMove)\r\n                break;\r\n            if (CellpossibleMove.piece)\r\n                break;\r\n            CellpossibleMove.setavaibleMove(true);\r\n        }\r\n        /*   for (let i = 1; i <=8; i += 1) {\r\n        const CellpossibleMove = boardMatrix[x-i][y];\r\n        if (!CellpossibleMove) break;\r\n        if (CellpossibleMove.piece) break;\r\n        CellpossibleMove.setavaibleMove(true);\r\n        \r\n  \r\n }*/\r\n    }\r\n}\r\nexports[\"default\"] = rook;\r\n\n\n//# sourceURL=webpack://chessweb/./src/clases/pieces/rook.ts?");

/***/ }),

/***/ "./src/type.ts":
/*!*********************!*\
  !*** ./src/type.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.PieceType = exports.color = void 0;\r\nvar color;\r\n(function (color) {\r\n    color[\"light\"] = \"light\";\r\n    color[\"dark\"] = \"dark\";\r\n})(color = exports.color || (exports.color = {}));\r\nvar PieceType;\r\n(function (PieceType) {\r\n    PieceType[\"King\"] = \"K\";\r\n    PieceType[\"Queen\"] = \"Q\";\r\n    PieceType[\"Rook\"] = \"R\";\r\n    PieceType[\"Bishop\"] = \"B\";\r\n    PieceType[\"Knight\"] = \"N\";\r\n    PieceType[\"Pawn\"] = \"\";\r\n})(PieceType = exports.PieceType || (exports.PieceType = {}));\r\n\n\n//# sourceURL=webpack://chessweb/./src/type.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;