import Piece from './Piece'
class cell {
  piece: Piece;
  selected: boolean;
  avaibleMove: boolean;
  constructor(piece: Piece) {
    piece = this.piece;
    this.selected = false;
    this.avaibleMove = false;
  }
  setSelected(selected: boolean) {
    this.selected = selected;
  }
  setPiece(piece: Piece) {
    this.piece = piece;
  }
  
  setavaibleMove(avaible: boolean) {
    this.avaibleMove = avaible;
  }
}

export default cell;