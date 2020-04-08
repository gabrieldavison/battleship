import {Ship} from './ship'

//converts xy coordinates to correspondinh index in gameboard array
function coordToIndex(x,y) {
  let numStr = y.toString() + x.toString();
  return parseInt(numStr)
}
class Gameboard {
  constructor() {
      this.board = []
      for(let i = 0; i < 100; i++) {
        this.board.push({id: undefined, hits: ''})
      }
      this.ships = [];
  }

  placeShip(length, x, y, orientation) {
    let newShip = new Ship(length) 

    // returns error message if ship is too big to be placed on board
    if (
        (orientation === 'h' && (coordToIndex(x,y)- y*10) + newShip.length > 9) 
        || (orientation === 'v' && (coordToIndex(x,y) + newShip.length*10 > 99 ))
      ){
      return 'ship too big'
    }

    //adds new ship to ship array
    this.ships.push(newShip)
    //populates board array with ship value if placed horizontally
    if(orientation === 'h') {
      for (let i=0; i < newShip.length; i++) {
        this.board[coordToIndex(x, y) + i] = {id: this.ships.indexOf(newShip), hit: ''}
      }
    }
    //populates board array with ship value if placed vertically
    if (orientation === 'v') {
      let increment = 0
      for (let i=0; i < newShip.length; i+=1) {
        this.board[coordToIndex(x, y) + increment] = {id: this.ships.indexOf(newShip), hit: ''}
        increment += 10
      }
    }
    
  }
  
  recieveAttack(x,y) {
    let boardIndex = coordToIndex(x,y);

    if(this.board[boardIndex].id === undefined) {
      this.board[boardIndex].hits ='o'
    }else if(!(this.board[boardIndex].id === undefined)) {
      this.board[boardIndex].hits = 'x'
      this.ships[this.board[boardIndex].id].hit();
      this.ships[this.board[boardIndex].id].isSunk();
    } 
  }
  allSunk() {
     return this.ships.every(val => val.sunk === true)
  }
}

export {Gameboard, coordToIndex}