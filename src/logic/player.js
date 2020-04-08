import {Gameboard, coordToIndex} from './gameboard'

function randomCoord() {
  return Math.floor(Math.random() * (9 +1))
}
let random = randomCoord

function isLegal(board, coord) {
  if (
    board.board[coordToIndex(coord[0],coord[1])].hits === 'o'
    || board.board[coordToIndex(coord[0],coord[1])].hits === 'x'
   ) {return false}
  return true
}

class Player {
  constructor() {
    this.gameboard = new Gameboard()
    this.turns = []
  }

  takeTurn(x,y, board) {
    board.recieveAttack(x,y);
  }
  // takes function to return random coord as a parameter
  randomTurn(board, depRandomCoord = random) {
    let coord = [depRandomCoord(), depRandomCoord()]
    // wont play the same coord twice
    while(!isLegal(board, coord)) {
      coord = [depRandomCoord(), depRandomCoord()]
    }
    this.turns.push(coord)
    board.recieveAttack(coord[0], coord[1])
  }
}





export{Player, randomCoord, isLegal}