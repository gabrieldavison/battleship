import {Player} from './player'
import {populateBoard} from './populateBoard'

let player1 = new Player();
let player2 = new Player();
let isWon = false
let computerTurn = false;

function takeTurn(index) {
  player1.takeTurn(index, player2.gameboard)
  if(player2.gameboard.allSunk()) {
    isWon = true
  }
  player2.randomTurn(player1.gameboard)
  if(player2.gameboard.allSunk()) {
    isWon = true
  }
  console.log(isWon)
}

function newGame() {
  populateBoard(player1)
  populateBoard(player2)

}




export {newGame, player1, player2, takeTurn}