import {Player, randomCoord, isLegal} from './player'


const testPlayer1 = new Player();
const testPlayer2 = new Player();

test('player.taketurn attacks gameboard', () => {
  testPlayer1.takeTurn(55, testPlayer2.gameboard)
  expect(testPlayer2.gameboard.board[55].hit).toBe('o');
})

test('randomCoord generates random number between 0 and 9', () => {
  for(let i = 0; i < 20; i++) {
    expect((
      randomCoord() >= 0 
      && randomCoord() <= 99) 
      && Number.isInteger(randomCoord()))
    .toBe(true)
  }
})
describe('tests using randomTurn', () => {
  const mockRnd = jest.fn();

  
  test('randomTurn logs a random attack to board', () => {
    mockRnd.mockReturnValueOnce(3)
    testPlayer2.randomTurn(testPlayer1.gameboard, mockRnd)
    expect(testPlayer1.gameboard.board[3].hit).toBe('o');
  })
  
  test('randomTurn logs its coordinates in turns array', () => {
    expect(testPlayer2.turns[0]).toEqual(3)
  })

  test('isLegal returns false if space has already been attacked', () => {
    expect(isLegal(testPlayer1.gameboard, 3)).toBe(false)
  })

  test('randomTurn wont play the same coordinates twice', () => {
    mockRnd.mockReturnValueOnce(3).mockReturnValueOnce(3)
    .mockReturnValueOnce(4).mockReturnValueOnce(4)
    
    testPlayer2.randomTurn(testPlayer1.gameboard, mockRnd)
    expect(testPlayer2.turns[1]).toEqual(4)
  })
})

