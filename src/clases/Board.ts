import Piece from './Piece';
import { theme } from'../type'
import piece from './Piece';
import cell from './Cell';
import Cell from './Cell';
class Board {
  WIDTH: number;
  HEIGHT: number;
  FILES: number;
  RANKS: number;
  theme: theme;
  CELL_WIDTH: number;
  CELL_HEIGHT: number;
  PIECE_OFFSET: number;
  boardMatrix: cell[][];
 // previousCell: Piece;
  flip: boolean;
  previousCell: Cell;
  selectedCells: cell[];
  $canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D ;//para admitir valores nulos

  constructor(WIDTH, HEIGHT, FILES, RANKS, theme) {
    this.WIDTH = WIDTH;
    this.HEIGHT = HEIGHT;
    this.FILES = FILES;
    this.RANKS = RANKS;
    this.theme = theme;

    this.flip = false;

    this.CELL_WIDTH = this.WIDTH / this.FILES;
    this.CELL_HEIGHT = this.WIDTH / this.RANKS;
    this.PIECE_OFFSET = this.CELL_HEIGHT * 0.1;

    this.previousCell = null;
    //this.previousCell = null;
    this.selectedCells = [];
    this.$canvas = document.createElement('canvas');
    this.ctx = this.$canvas.getContext('2d');
    //quitar error de nulo 
   /* if (!(this.ctx = this.$canvas.getContext("2d"))) {
      throw new Error(`2d context not supported or canvas already initialized`);
    }*/
    this.$canvas.width = this.WIDTH;
    this.$canvas.height = this.HEIGHT;

    document.body.appendChild(this.$canvas);

    document.body.style.display = 'grid';
    document.body.style.placeItems = 'center';
    document.body.style.height = '100%';
    //document.body.parentElement.style.height = '100%';
    document.body.style.backgroundColor = '#333333';

    // initialize Board
    this.boardMatrix = [];
    for (let x = 0; x < this.FILES; x += 1) {
      this.boardMatrix[x] = [];
      for (let y = 0; y < this.RANKS; y += 1) {
         this.boardMatrix[x][y] = new cell(null);//para quitar el null
      }
    }
    // bind metodo
    this.setMouseCell = this.setMouseCell.bind(this);
    this.setSelectCell = this.setSelectCell.bind(this);
    this.PickPiece = this.PickPiece.bind(this);
    this.dropPiece = this.dropPiece.bind(this);
    this.dragPiece = this.dragPiece.bind(this);
    //movimiento
    this.$canvas.addEventListener('mousedown', this.PickPiece);
    this.$canvas.addEventListener('mousemove', this.dragPiece);
    this.$canvas.addEventListener('mouseup', this.dropPiece );
  }
  clearSelection() {
    this.selectedCells.forEach((c) => c.setSelected(false));
    this.selectedCells = [];
    this.boardMatrix.forEach((File)=> {
      File.forEach((cell)=> {
        cell.setavaibleMove(false);
      });
    });
  }

  dragPiece(event:MouseEvent) {
    
  }
  PickPiece(event: MouseEvent) {
    this.clearSelection();
    if (this.previousCell) return;
    const { offsetX, offsetY } = event;
    const [file, rank] = this.MouseCoordinatesToCell(offsetX, offsetY);
    const selectedCell = this.boardMatrix[file][rank];


    if (!selectedCell.piece) return;
    selectedCell.piece.avaibleMovements([file, rank], this.boardMatrix);
    this.previousCell = selectedCell;
    this.selectedCells.push(selectedCell);
    selectedCell.setSelected(true);
    this.render();
  }
  dropPiece(event: MouseEvent) {
    console.log('hola');
    console.log({ drop:this.previousCell });
    if (!this.previousCell) return;
    const { offsetX, offsetY } = event;
    const [file, rank] = this.MouseCoordinatesToCell(offsetX, offsetY);
    const selectedCell = this.boardMatrix[file][rank];

    if (this.previousCell == selectedCell) {
      //console.log("Movimiento Valido");
      this.previousCell = null;
      this.clearSelection();
      this.render();
      return;
    }
    if (!selectedCell.avaibleMove) {
  //console.log("Movimiento Valido");
        this.previousCell = null;
        this.clearSelection();
        this.render();
        return;
}

    selectedCell.setPiece(this.previousCell.piece);
    this.selectedCells.push(selectedCell);

    this.previousCell.piece.moved = true;
    this.previousCell.setPiece(null);
    this.previousCell = null;
    selectedCell.setSelected(true);
    this.flip = !this.flip;
    this.render();
  }
      MouseCoordinatesToCell(x: number, y: number) {
        let file = Math.floor( x/ this.CELL_WIDTH);
        let rank = Math.floor(y / this.CELL_HEIGHT);
        if (this.flip) {
          file = this.FILES - 1 - file;
          rank = this.RANKS - 1 - rank;
        }
        return [file, rank];
  }
      setSelectCell(event: MouseEvent) {
        const { offsetX, offsetY } = event;
        const [file, rank] = this.MouseCoordinatesToCell(offsetX, offsetY);
        const selectedCell = this.boardMatrix[file][rank];
        selectedCell.setSelected(true);
         this.render();

  }
      setMouseCell(event: MouseEvent){
        const { offsetX, offsetY } = event;
        console.log({ offsetX, offsetY });
        const x = Math.floor( offsetX / this.CELL_WIDTH);
        const y = Math.floor( offsetY / this.CELL_HEIGHT);
        console.log({ CELL_WIDTH: this.CELL_WIDTH, CELL_HEIGHT: this.CELL_HEIGHT });
        
        console.log({ x, y });
      /*  const selectedCell = this.boardMatrix[x][y];
        selectedCell.setSelected(true);
        console.log(this.boardMatrix)
        this.render();*/

      }
      
      
       /*this.$canvas.addEventListener("mousedown", this.click, false);*/
        initPlacePiece(x, y, piece) {
          const cell = this.boardMatrix[x][y];
          cell.setPiece(piece);        
      }
      
      render()
      {
        for (let x = 0; x < this.FILES; x += 1) {
        
          for (let y = 0; y < this.RANKS; y += 1) {
            
            let drawX = x;
            let drawY = y;

            if (this.flip) {
               drawX = this.RANKS - 1 - drawX;
               drawY = this.FILES - 1 - drawY;
            }
            let rectColor = this.theme.light;
            let textColor = this.theme.dark;
            if ((drawX + drawY) % 2) {
              rectColor = this.theme.dark;
              textColor = this.theme.light;
            }
            //Draw Cell
            this.ctx.fillStyle = rectColor;
            this.ctx.fillRect(drawX * this.CELL_WIDTH, drawY * this.CELL_HEIGHT, this.CELL_WIDTH, this.CELL_HEIGHT);
            
            //Draw the Position
            this.ctx.fillStyle = rectColor;
            this.ctx.font = '8px arial';
            this.ctx.textBaseline = 'top';
            this.ctx.textAlign = 'start';
            this.ctx.fillText(`[${x};${y}]`, drawX * this.CELL_WIDTH + 10,
                                             drawY * this.CELL_HEIGHT +
                                            this.CELL_WIDTH, this.CELL_HEIGHT);
            
            //Draw the Pieces
            const cell = this.boardMatrix[x][y];
           
            
            if (cell.selected) {
              this.ctx.fillStyle = '#FFD800';
              this.ctx.lineWidth = 8;
              this.ctx.lineJoin = 'bevel';
              this.ctx.strokeRect(drawX * this.CELL_WIDTH,
                                  drawY * this.CELL_HEIGHT,
                                 this.CELL_WIDTH, this.CELL_HEIGHT);
            }

            
            if (cell.avaibleMove) {
              //draw the possible move
              console.log('este movimiento es posible')
              this.ctx.fillStyle = '#000000';
              this.ctx.globalAlpha = 0.3;
              this.ctx.beginPath();
              this.ctx.arc(drawX * this.CELL_WIDTH+this.CELL_WIDTH/2,
                drawY * this.CELL_HEIGHT+this.CELL_HEIGHT/2,
                16, 0, 2 * Math.PI);
              this.ctx.fill();
              this.ctx.globalAlpha = 1;
              /*this.ctx.strokeRect(drawX * this.CELL_WIDTH,
                    drawY * this.CELL_HEIGHT,
                   this.CELL_WIDTH, this.CELL_HEIGHT);*/
            }
          const piece = cell?.piece;

            if (piece) {
              this.ctx.fillStyle = this.theme[piece.color];
              this.ctx.font = '72px arial';
              this.ctx.textBaseline = 'middle';
              this.ctx.textAlign = 'center';
              this.ctx.fillStyle = this.theme[piece.color];

              this.ctx.fillText(piece.miau[1], drawX * this.CELL_WIDTH + this.CELL_WIDTH / 2, drawY * this.CELL_HEIGHT + this.CELL_HEIGHT / 2 + this.PIECE_OFFSET);
              this.ctx.fillStyle ='#000000';
              this.ctx.fillText(piece.miau[0], drawX * this.CELL_WIDTH + this.CELL_WIDTH / 2, drawY * this.CELL_HEIGHT + this.CELL_HEIGHT / 2 + this.PIECE_OFFSET);
            }
          }
        }
      
      }
    }
  


      export default Board;



