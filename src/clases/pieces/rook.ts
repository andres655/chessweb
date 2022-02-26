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
   const CellpossibleMove = boardMatrix[x][y+i];
     if (!CellpossibleMove) break;
     if (CellpossibleMove.piece) break;
     CellpossibleMove.setavaibleMove(true);
   
     }
      for (let i = 1; i <=8; i += 1) {
        const CellpossibleMove = boardMatrix[x][y-i];
        if (!CellpossibleMove) break;
        if (CellpossibleMove.piece) break;
       CellpossibleMove.setavaibleMove(true);
 
     }
      for (let i = 1; i <=8; i += 1) {
        const CellpossibleMove = boardMatrix[x+i][y];
        if (!CellpossibleMove) break;
        if (CellpossibleMove.piece) break;
        CellpossibleMove.setavaibleMove(true);
 
     }
          for (let i = 1; i <=8; i += 1) {
       const CellpossibleMove = boardMatrix[x-i][y];
       if (!CellpossibleMove) break;
       if (CellpossibleMove.piece) break;
       CellpossibleMove.setavaibleMove(true);
       
 
}
 }
}
export default rook;