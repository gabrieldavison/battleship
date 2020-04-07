import {Ship} from './ship'

class Gameboard {
  constructor() {
      this.board = []
      for(let i = 0; i < 100; i++) {
        this.board.push('')
      }
      this.ships = [];
  }

  placeShip(length, orientation, x, y) {
    let newShip = new Ship(length)
    this.ships.push(newShip)
  }
}

export {Gameboard}