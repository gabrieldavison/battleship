/* eslint-disable default-case */
import {Gameboard} from './gameboard'

function randomCoord() {
  return Math.floor(Math.random() * (99 +1))
}
let random = randomCoord

//checks to see if a coordinate is a legal move
function isLegal(board, coord) {
  if(coord < 0 || coord > 99) {
    return false
  }
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
    this.seeking = false
    this.lastHit = 0
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
    // If the last hit was successful the cpu will start seeking adjacent squares 
    if(this.turns.length > 1 && board.board[this.turns[this.turns.length - 1]].hit === 'x') {
      this.seeking = true;
      this.lastHit = this.turns[this.turns.length - 1];
    }
    if(this.seeking === true) {
      if(isLegal(board, (this.lastHit - 10))) {
        this.turns.push(this.lastHit-10)
        board.recieveAttack(this.lastHit-10)
        // checks if move is legal and  whether move will wrap to the other side of board
      } else if(isLegal(board, (this.lastHit + 1)) && ((this.lastHit % 10) + 1) < 9) {
        this.turns.push(this.lastHit + 1)
        board.recieveAttack(this.lastHit + 1)
      } else if(isLegal(board, (this.lastHit + 10))) {
        this.turns.push(this.lastHit + 10)
        board.recieveAttack(this.lastHit + 10)
        // checks if move is legal and  whether move will wrap to the other side of board
      } else if(isLegal(board, (this.lastHit - 1))&& ((this.lastHit % 10) - 1) > 0) {
        this.turns.push(this.lastHit - 1)
        board.recieveAttack(this.lastHit - 1)
        this.seeking = false
      }else {
        this.seeking = false
        let coord = depRandomCoord()
        // wont play the same coord twice
        while(!isLegal(board, coord)) {
          coord = depRandomCoord()
        }
        this.turns.push(coord)
        board.recieveAttack(coord)
      }
    } else {
      let coord = depRandomCoord()
      // wont play the same coord twice
      while(!isLegal(board, coord)) {
        coord = depRandomCoord()
      }
      this.turns.push(coord)
      board.recieveAttack(coord)
  
    }
  }
}





export{Player, randomCoord, isLegal}