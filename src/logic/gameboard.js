import {Ship} from './ship'


class Gameboard {
  constructor() {
      this.board = []
      for(let i = 0; i < 100; i++) {
        this.board.push({id: undefined, hit: '', index: i})
      }
      this.ships = [];
  }

  placeShip(length, index, orientation) {
    let newShip = new Ship(length) 
    let y = Number.parseInt(index.toString()[0])
    index = Number.parseInt(index)
    // returns error message if ship is too big to be placed on board
    if (
        ((orientation === 'h' && (index- y*10) + newShip.length > 10) || (orientation === 'h' && index <= 9 && index + newShip.length > 10) ) 
        || (orientation === 'v' && (index + newShip.length*10 > 99 ))
      ){
        console.log('too many ships')
      return false
    }

    if (
        ((newShip.length === 4 
        || newShip.length === 5
        || newShip.length === 2)
        && this.ships.filter(item => item.length === newShip.length).length > 0)
        || (newShip.length === 3 && this.ships.filter(item => item.length === newShip.length).length > 1)
      ) {
        console.log('too many ships')
        return false
      }
    
    //adds new ship to ship array
    this.ships.push(newShip)
    //populates board array with ship value if placed horizontally

    if(orientation === 'h') {
      for (let i = 0; i < newShip.length; i++) {
        this.board[index + i].id = this.ships.indexOf(newShip)
        this.board[index + i].hit = ''
      }
    }
    //populates board array with ship value if placed vertically
    if (orientation === 'v') {
      let increment = 0
      for (let i=0; i < newShip.length; i+=1) {

        this.board[index + increment].id = this.ships.indexOf(newShip)
        this.board[index + increment].hit = ''
        increment += 10
      }
    }
    
  }
  
  recieveAttack(boardIndex) {

    if(this.board[boardIndex].id === undefined) {
      this.board[boardIndex].hit ='o'
    }else if(!(this.board[boardIndex].id === undefined)) {
      this.board[boardIndex].hit = 'x'
      this.ships[this.board[boardIndex].id].hit();
      this.ships[this.board[boardIndex].id].isSunk();
    } 
  }
  allSunk() {
     return this.ships.every(val => val.sunk === true)
  }
}

export {Gameboard}