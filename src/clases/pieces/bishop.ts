import { PieceType } from "../../type";
import cell from "../Cell";
import piece from "../Piece";

class bishop extends piece{
  constructor(color) {
  super(color,['♗','♝'],PieceType.Bishop)
  }

      avaibleMovements(position: [number, number], boardMatrix: cell[][]) {
        const [x, y] = position;
        
        for (let i = 1; i <=8; i += 1) {
          const CellpossibleMove = this.getCellFromCoord([x + i, y + i], boardMatrix);
        if (!CellpossibleMove) break;
        if (CellpossibleMove.piece && CellpossibleMove.piece.color==this.color) break;
       CellpossibleMove.setavaibleMove(true);
        if (CellpossibleMove.piece) break;
     }
      for (let i = 1; i <=8; i += 1) {
        const CellpossibleMove = this.getCellFromCoord([x+i,y-i],boardMatrix)
        if (!CellpossibleMove) break;
        if (CellpossibleMove.piece && CellpossibleMove.piece.color==this.color) break;
        CellpossibleMove.setavaibleMove(true);
         if (CellpossibleMove.piece) break;
 
     }
        for (let i = 1; i <= 8; i += 1) {
          const CellpossibleMove = this.getCellFromCoord([x-i,y+i],boardMatrix)
          if (!CellpossibleMove) break;
          if (CellpossibleMove.piece && CellpossibleMove.piece.color==this.color) break;
          CellpossibleMove.setavaibleMove(true);
           if (CellpossibleMove.piece) break;
        }
        for (let i = 1; i <= 8; i += 1) {
          const CellpossibleMove = this.getCellFromCoord([x-i,y-i],boardMatrix)
          if (!CellpossibleMove) break;
          if (CellpossibleMove.piece && CellpossibleMove.piece.color==this.color) break;
          CellpossibleMove.setavaibleMove(true);
          if (CellpossibleMove.piece) break;
}
 
}
}
export default bishop;