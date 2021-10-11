import Piece from './piece';
import Square from "../square.js"
import Player from "../player.js"

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        if (this.player === Player.WHITE){
            if (currentSquare.row === 1){
                return [Square.at(currentSquare.row + 2, currentSquare.col), Square.at(currentSquare.row + 1, currentSquare.col)];
            }
            else{
                return [Square.at(currentSquare.row + 1, currentSquare.col)];
            }
        }
        if (this.player === Player.BLACK){
            if (currentSquare.row === 6){
                return [Square.at(currentSquare.row - 2, currentSquare.col), Square.at(currentSquare.row - 1, currentSquare.col)];
            }
            else{
                return [Square.at(currentSquare.row - 1, currentSquare.col)];
            }
        }
        return new Array(0);
    }
}
