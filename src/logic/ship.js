class Ship {
  constructor(length) {
    this.length = length;
    this.hits = []
    // adds placeholder values for hits array
    for (let i=0; i < this.length; i++) {
      this.hits.push('')
    }
    this.sunk = false
  }

  hit(index) {
    this.hits[index] = 'x'
  }

  //calculates whether ship has been sunk by checking if all elements in array are 'x'
  isSunk() {
    if(this.hits.every((val) => {
      return val === 'x';
    })) {
      this.sunk = true
    }
  }
}

export {Ship}