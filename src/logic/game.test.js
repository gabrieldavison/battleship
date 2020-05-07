import {newGame, player1, player2} from './game'

test('newGame creates 2 new players', () => {
  newGame()
  expect(typeof player1).toBe('object')
  expect(typeof player2).toBe('object')
})


