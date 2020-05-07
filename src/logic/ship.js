class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0
    this.sunk = false
  }

  hit() {
    this.hits +=1
  }

  //calculates whether ship has been sunk by checking if all elements in array are 'x'
  isSunk() {
    if(this.hits === this.length) {
      this.sunk = true
    }
    
  }
}

export {Ship}