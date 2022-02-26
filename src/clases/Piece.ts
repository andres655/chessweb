import { color, PieceType, theme } from "../type";
import cell from "./Cell";

class piece{
  color: color;
  miau: string[];
  type: PieceType;
  
  constructor(color, miau,type) {
    this.color = color;
    this.miau = miau;
    this.type = type;
    
  
  }
  avaibleMovements(position:[number,number],boardMatrix: cell[][]) {
    throw new Error('missing');
    
    
  }
}
export default piece;