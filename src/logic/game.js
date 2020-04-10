import {Player} from './player'
import {populateBoard} from './populateBoard'

let player1 = new Player();
let player2 = new Player();
let computerTurn = false;

function takeTurn(index) {
  player1.takeTurn(index, player2.gameboard)
}

function newGame() {
  populateBoard(player1)
  populateBoard(player2)

}




export {newGame, player1, player2, takeTurn}