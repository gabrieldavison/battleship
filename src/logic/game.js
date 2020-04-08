import {Player} from './player'
import {populateBoard} from './populateBoard'
let player1
let player2

function game() {
   player1 = new Player()
   player2 = new Player()
  populateBoard(player1)
  populateBoard(player2)
   
}

export {game, player1, player2}