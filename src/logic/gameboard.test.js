import {Gameboard} from './gameboard.js'
import {Ship} from './ship.js'

const newBoard = new Gameboard();
test('New gameboard returns an object', () => {  

  expect(typeof newBoard).toBe('object')
})

test('new gameboard.board.length = 100', () => {
  
  expect(newBoard.board.length).toBe(100)
})


describe('tests placeship', () => {
  
  newBoard.placeShip(3);
  test('gameboard.placeShip adds a new ship to ships array', () => {
    expect(newBoard.ships[0]).toEqual(new Ship(3))
  })
  
  test('gameboard.placeShip adds a new ship to ships array', () => {

    expect(newBoard.ships[0]).toEqual(new Ship(3))
  })
})



