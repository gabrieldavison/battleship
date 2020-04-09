import {game, player1, player2} from './game'

xtest('game creates 2 new players', () => {
  game()
  expect(typeof player1).toBe('object')
  expect(typeof player2).toBe('object')
})

