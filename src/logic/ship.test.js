import {Ship} from './ship.js'

test('returns a new object', () => {
  const newShip = new Ship();
  expect(typeof newShip).toBe('object')
})

test('returns ship length', () => {
  const newShip = new Ship(5);
  expect(newShip.length).toBe(5)
})

test('returns empty hits array with array.length equal to ship.length', () => {
  const newShip = new Ship(5);
  expect(newShip.hits.length).toBe(newShip.length)
})

test('returns sunk as false', () => {
  const newShip = new Ship();
  expect(newShip.sunk).toBe(false)
})

test('hit() marks corresponding array item with x', () => {
  const newShip = new Ship(5);
  newShip.hit(2);
  expect(newShip.hits[2]).toBe('x');
})

test('isSunk() assigns ship.sunk to true if all hits are x', () => {
  const newShip = new Ship(3);
  newShip.hit(0);
  newShip.hit(1);
  newShip.hit(2);
  newShip.isSunk();
  expect(newShip.sunk).toBe(true)
})

test('isSunk() doesnt reassign ship.sunk if not all hits are x', () => {
  const newShip = new Ship(3);
  newShip.hit(0);
  newShip.hit(1);
  newShip.isSunk();
  expect(newShip.sunk).toBe(false)
})