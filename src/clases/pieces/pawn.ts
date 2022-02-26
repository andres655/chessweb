import { PieceType, theme,color } from "../../type";
import cell from "../Cell";
import piece from "../Piece";

class pawn extends piece{
  constructor(color:color) {
  super(color,['♙','♟'],PieceType.Pawn)
  }
  avaibleMovements(position: [number, number], boardMatrix: cell[][]) {
    const [x, y] = position;
    for (let i = 1; i <=2; i += 1) {
    const CellpossibleMove = boardMatrix[x][this.color == color.dark ? y + i : y - i];
      if (CellpossibleMove.piece) break;
      CellpossibleMove.setavaibleMove(true);
    
  }
  }
}
export default pawn;