import { PieceType } from "../../type";
import piece from "../Piece";

class knight extends piece{
  constructor(color) {
  super(color,['♘','♞'],PieceType.Knight)
}
}
export default knight;