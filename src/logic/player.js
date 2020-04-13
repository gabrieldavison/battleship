import {Gameboard} from './gameboard'

function randomCoord() {
  return Math.floor(Math.random() * (99 +1))
}
let random = randomCoord

function isLegal(board, coord) {
  if (
    board.board[coord].hit === 'o'
    || board.board[coord].hit === 'x'
   ) {return false}
  return true
}

class Player {
  constructor() {
    this.gameboard = new Gameboard()
    this.turns = []
  }

  takeTurn(index, board) {
    if(!isLegal(board, index)) {
      return false
    }
    this.turns.push(index)
    board.recieveAttack(index);
  }
  // takes function to return random coord as a parameter
  randomTurn(board, depRandomCoord = random) {
    let coord = depRandomCoord()
 
    // wont play the same coord twice
    while(!isLegal(board, coord)) {
      coord = depRandomCoord()
    }
    this.turns.push(coord)
    board.recieveAttack(coord)
  }
}





export{Player, randomCoord, isLegal}