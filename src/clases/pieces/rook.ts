import { color, PieceType } from "../../type";
import cell from "../Cell";
import piece from "../Piece";

class rook extends piece{
  constructor(color) {
  super(color,['♖','♜'],PieceType.Rook)
  }
   avaibleMovements(position: [number, number], boardMatrix: cell[][]) {
   const [x, y] = position;
   for (let i = 1; i <=8; i += 1) {
   const CellpossibleMove = this.getCellFromCoord([x,y+i],boardMatrix);
     if (!CellpossibleMove) break;
     if (CellpossibleMove.piece && CellpossibleMove.piece.color==this.color) break;
     CellpossibleMove.setavaibleMove(true);
     if (CellpossibleMove.piece) break;
     }
      for (let i = 1; i <=8; i += 1) {
        const CellpossibleMove = this.getCellFromCoord([x,y-i],boardMatrix)
        if (!CellpossibleMove) break;
        if (CellpossibleMove.piece && CellpossibleMove.piece.color==this.color) break;
       CellpossibleMove.setavaibleMove(true);
        if (CellpossibleMove.piece) break;
     }
      for (let i = 1; i <=8; i += 1) {
        const CellpossibleMove = this.getCellFromCoord([x+i,y],boardMatrix)
        if (!CellpossibleMove) break;
        if (CellpossibleMove.piece && CellpossibleMove.piece.color==this.color) break;
        CellpossibleMove.setavaibleMove(true);
        if (CellpossibleMove.piece) break;
     }
          for (let i = 1; i <=8; i += 1) {
       const CellpossibleMove = this.getCellFromCoord([x-i,y],boardMatrix)
        if (!CellpossibleMove) break;
        if (CellpossibleMove.piece && CellpossibleMove.piece.color==this.color) break;
       CellpossibleMove.setavaibleMove(true);
        if (CellpossibleMove.piece) break;
 
}
 }
}
export default rook;