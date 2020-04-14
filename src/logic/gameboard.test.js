import {Gameboard, coordToIndex} from './gameboard.js'
import {Ship} from './ship.js'


const newBoard = new Gameboard();
test('New gameboard returns an object', () => {  

  expect(typeof newBoard).toBe('object')
})

test('new gameboard.board.length = 100', () => {
  
  expect(newBoard.board.length).toBe(100)
})


describe('tests placeship', () => {
  
  newBoard.placeShip(3, 54 , 'h');
  test('gameboard.placeShip adds a new ship to ships array', () => {
    expect(newBoard.ships[0]).toEqual(new Ship(3))
  })

  test('gameboard.placeShip adds ship to board array with starting coordinates x,y', () => {
    expect(newBoard.board[54]).toEqual({id: 0, hit: '', index: 54})
  })

  test('gameboard.placeShip populates board array with correct ship length when placed horizontally', () => {
    expect(newBoard.board[54]).toEqual({id: 0, hit: '', index: 54})
  })

  test('gameboard.placeShip populates board array with correct ship length when placed vertically', () => {
    newBoard.placeShip(5, 18, 'v')
    expect(newBoard.board[18]).toEqual({id: 1, hit: '', index: 18})
  })

  test('fails if invalid coordinates given', () => {
    expect(newBoard.placeShip(5, 18, 'h')).toEqual('ship too big')
    expect(newBoard.placeShip(5, 79, 'v')).toEqual('ship too big')
  })

})

describe('tests recieveAttack', () => {
  
  test('revieveAttack records missed attack onto board array', () => {
    newBoard.recieveAttack(44)
    expect(newBoard.board[44].hit).toBe('o')
  })

  test('revieveAttack records successful attack onto board array', () => {
    newBoard.placeShip(3, 54 , 'h');
    newBoard.recieveAttack(55)
    expect(newBoard.board[55].hit).toBe('x')
  })

  test('revieveAttack adds hit on ship in ship array', () => {
    newBoard.placeShip(4, 54 , 'h');
    newBoard.recieveAttack(55)
    expect(newBoard.ships[newBoard.board[55].id].hits).toBe(1)
  })

  test('revieveAttack marks ship as sunk if enough hits are recorded', () => {
    newBoard.placeShip(3, 54 , 'h');
    newBoard.recieveAttack(54)
    newBoard.recieveAttack(55)
    newBoard.recieveAttack(56)
    expect(newBoard.ships[newBoard.board[55].id].sunk).toBe(true)
  })



  test('allSunk returns false if not all ships on board are sunk', () => {
    newBoard.placeShip(3, 54 , 'h');
    newBoard.recieveAttack(5,5)
    newBoard.recieveAttack(6,5)
    expect(newBoard.allSunk()).toBe(false)
  })



})



