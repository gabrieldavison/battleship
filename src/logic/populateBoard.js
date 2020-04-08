
function populateBoard(player) {
  player.gameboard.placeShip(5, 1, 1, 'v');
  player.gameboard.placeShip(4, 9, 0, 'v');
  player.gameboard.placeShip(3, 3, 2, 'h');
  player.gameboard.placeShip(3, 6, 3, 'v');
  player.gameboard.placeShip(2, 4, 8, 'h');
}

export {populateBoard}