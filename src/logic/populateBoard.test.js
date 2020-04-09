import {Player} from './player'
import { populateBoard } from './populateBoard'

const testPlayer = new Player()
populateBoard(testPlayer)
test('populates board array with ships', () => {
  expect(testPlayer.gameboard.board[31].id).toBe(0);
  expect(testPlayer.gameboard.board[29].id).toBe(1);
  expect(testPlayer.gameboard.board[24].id).toBe(2);
  expect(testPlayer.gameboard.board[56].id).toBe(3);
  expect(testPlayer.gameboard.board[84].id).toBe(4);
})