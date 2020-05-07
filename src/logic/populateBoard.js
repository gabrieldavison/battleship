import { player2 } from "./game"

function populateBoard() {
  player2.gameboard.placeRandom(5)
  player2.gameboard.placeRandom(4)
  player2.gameboard.placeRandom(3)
  player2.gameboard.placeRandom(3)
  player2.gameboard.placeRandom(2)

}

export {populateBoard}