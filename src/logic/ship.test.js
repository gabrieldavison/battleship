import {Ship} from './ship.js'

test('returns a new object', () => {
  const newShip = new Ship();
  expect(typeof newShip).toBe('object')
})

test('returns ship length', () => {
  const newShip = new Ship(5);
  expect(newShip.length).toBe(5)
})

test('ship hits = 0', () => {
  const newShip = new Ship(5);
  expect(newShip.hits).toBe(0)
})

test('returns sunk as false', () => {
  const newShip = new Ship();
  expect(newShip.sunk).toBe(false)
})

test('hit() increments hit count', () => {
  const newShip = new Ship(5);
  newShip.hit();
  expect(newShip.hits).toBe(1);
})

test('isSunk() assigns ship.sunk hits = length', () => {
  const newShip = new Ship(3);
  newShip.hit(0);
  newShip.hit(1);
  newShip.hit(2);
  newShip.isSunk();
  expect(newShip.sunk).toBe(true)
})

test('isSunk() doesnt reassign ship.sunk if hits < length', () => {
  const newShip = new Ship(3);
  newShip.hit(0);
  newShip.hit(1);
  newShip.isSunk();
  expect(newShip.sunk).toBe(false)
})