import { PieceType } from "../../type";
import piece from "../Piece";

class king  extends piece{
  constructor(color) {
  super(color,['♔','♚'],PieceType.King)
}
}
export default king;