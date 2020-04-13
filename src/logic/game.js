import {Player} from './player'
import {populateBoard} from './populateBoard'

let player1 
let player2 
let winner = undefined


function takeTurn(index) {
  if(player1.takeTurn(index, player2.gameboard) === false) {
    return
  }
  player1.takeTurn(index, player2.gameboard)
  if(player2.gameboard.allSunk()) {
    winner = 'player1'
  }
  player2.randomTurn(player1.gameboard)
  if(player1.gameboard.allSunk()) {
    winner = 'player2'
  }
 
}

function newGame() {
  player1 = new Player();
  player2 = new Player();
  // populateBoard(player1)
  // populateBoard(player2)

}




export {newGame, player1, player2, takeTurn, winner}