import { PieceType } from "../../type";
import piece from "../Piece";

class queen extends piece{
  constructor(color) {
  super(color,['♕','♛'],PieceType.Queen)
}
}
export default queen;