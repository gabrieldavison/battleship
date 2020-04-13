
function populateBoard(player) {
  player.gameboard.placeShip(5, 11, 'v');
  player.gameboard.placeShip(4, 9, 'v');
  player.gameboard.placeShip(3, 23, 'h');
  player.gameboard.placeShip(3, 36, 'v');
  player.gameboard.placeShip(2, 84, 'h');
}

export {populateBoard}