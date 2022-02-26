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
        const CellpossibleMove = boardMatrix[x+i][y-i];
        if (!CellpossibleMove) break;
        if (CellpossibleMove.piece) break;
       CellpossibleMove.setavaibleMove(true);
 
     }
      for (let i = 1; i <=8; i += 1) {
        const CellpossibleMove = boardMatrix[x+i][y+i];
        if (!CellpossibleMove) break;
        if (CellpossibleMove.piece) break;
        CellpossibleMove.setavaibleMove(true);
 
     }
        for (let i = 1; i <= 8; i += 1) {
          const CellpossibleMove = boardMatrix[x - i][y-i];
          if (!CellpossibleMove) break;
          if (CellpossibleMove.piece) break;
          CellpossibleMove.setavaibleMove(true);
        }
        for (let i = 1; i <= 8; i += 1) {
          const CellpossibleMove = boardMatrix[x - i][y+i];
          if (!CellpossibleMove) break;
          if (CellpossibleMove.piece) break;
         CellpossibleMove.setavaibleMove(true);
}
 
}
}
export default bishop;