import { PieceType, theme,color } from "../../type";
import cell from "../Cell";
import piece from "../Piece";

class pawn extends piece{
  constructor(color:color) {
  super(color,['♙','♟'],PieceType.Pawn)
  }
  avaibleMovements(position: [number, number], boardMatrix: cell[][]) {
    const yDirection = this.color == color.dark ? 1 : -1;
    const [x, y] = position;
    for (let i = 1; i <= (this.moved ? 1 : 2); i += 1) {
    const CellpossibleMove =  this.getCellFromCoord([x,y +(i*yDirection)],boardMatrix, );
    //const CellpossibleMove = boardMatrix[x][this.color == color.dark ? y + i : y - i];
      if (CellpossibleMove.piece) break;
      CellpossibleMove.setavaibleMove(true);
    
    }

    for (let i = 0; i < 2; i++) {
      const takeCell = this.getCellFromCoord([x + (i ? 1: -1), y + (1 * yDirection)], boardMatrix);
      if (takeCell.piece && takeCell.piece.color != this.color)
        takeCell.setavaibleMove(true);
    }
   
   
  }
}
export default pawn;