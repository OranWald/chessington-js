import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        const queenArray = [];
        for (let i = 1; i <= 7; i++){
            if (i !== -1 && currentSquare.row + i <= 7 && currentSquare.row + i >= 0 && currentSquare.col - i >= 0 && currentSquare.col -i <= 7){
                queenArray.push(Square.at(currentSquare.row + i, currentSquare.col - i))
            }
            if (i !== -1 && currentSquare.row - i >= 0 && currentSquare.row - i <= 7 && currentSquare.col + i >= 0 && currentSquare.col + i <= 7){
                queenArray.push(Square.at(currentSquare.row - i, currentSquare.col + i))
            }
            if (i !== -1 && currentSquare.row + i >= 0 && currentSquare.row + i <= 7 && currentSquare.col + i >= 0 && currentSquare.col + i <= 7){
                queenArray.push(Square.at(currentSquare.row + i, currentSquare.col + i))
            }
            if (i !== -1 && currentSquare.row - i >= 0 && currentSquare.row - i <= 7 && currentSquare.col - i >= 0 && currentSquare.col -i <= 7){
                queenArray.push(Square.at(currentSquare.row - i, currentSquare.col - i))
            }
        }
        for (let i = -7; i <= 7; i++){
            if (i !== 0 && currentSquare.row + i <= 7 && currentSquare.row + i >= 0){
                queenArray.push(Square.at(currentSquare.row + i, currentSquare.col ))

            }
            if (i !== 0 && currentSquare.col + i >= 0 && currentSquare.col + i <= 7){
                queenArray.push(Square.at(currentSquare.row, currentSquare.col + i))
            }

        }
        return queenArray;
    }
}
