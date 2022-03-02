import { PieceType,theme,color  } from "../../type";
import Cell from "../Cell";
import cell from "../Cell";
import piece from "../Piece";

class knight extends piece {
  constructor(color) {
    super(color, ['♘', '♞'], PieceType.Knight)
  }
  
  avaibleMovements(position: [number, number], boardMatrix: cell[][]) {
    const [x, y] = position;
    
    const possibleMovements: [number, number][] = [
      [x - 1, y - 2],
      [x - 1, y + 2],
      [x + 1, y - 2],
      [x + 1, y + 2],
      [x - 2, y - 1],
      [x - 2, y + 1],
      [x + 2, y - 1],
      [x + 2, y + 1],
      
    ];
    possibleMovements.forEach(pm => {
     const cell = this.getCellFromCoord(pm,
        boardMatrix);
      if (cell && !(cell.piece && cell.piece.color == this.color) ) {
        cell.setavaibleMove(true);
      }
     
    });
  }
}
export default knight;