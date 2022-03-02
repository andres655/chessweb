import { PieceType } from "../../type";
import cell from "../Cell";
import piece from "../Piece";

class bishop extends piece{
  constructor(color) {
  super(color,['♗','♝'],PieceType.Bishop)
  }

  checkDiagonal(position,movement,boardMatrix) {
     const [x, y] = position;
    const [xMov, yMov] = movement;
    for (let i = 1; i <= 8; i += 1) {
      const CellpossibleMove = this.getCellFromCoord([x + (i*xMov), y + (i*yMov)], boardMatrix);
      if (!CellpossibleMove) break;
      if (CellpossibleMove.piece && CellpossibleMove.piece.color == this.color) break;
      CellpossibleMove.setavaibleMove(true);
      if (CellpossibleMove.piece) break;
    }
    
  }

      avaibleMovements(position: [number, number], boardMatrix: cell[][]) {
        const [x, y] = position;
        
        this.checkDiagonal(position, [1, 1], boardMatrix);
        this.checkDiagonal(position, [1, -1], boardMatrix);
        this.checkDiagonal(position, [-1, 1], boardMatrix);
        this.checkDiagonal(position, [-1, -1], boardMatrix);
 
}
}
export default bishop;