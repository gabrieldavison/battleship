import {Player} from './player'
import {populateBoard} from './populateBoard'

let player1 = new Player();
let player2 = new Player();
let computerTurn = false;

function takeTurn(e) {
  console.log(e.target)
  let index = 0;
  player2.gameboard.board[index].id === undefined ? 
    player2.gameboard.board[index].hit = 'o' :
    player2.gameboard.board[index].hit = 'x'
      
}
function newGame() {
  populateBoard(player1)
  populateBoard(player2)

}




export {newGame, player1, player2, takeTurn}