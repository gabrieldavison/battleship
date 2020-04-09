import React from 'react';
import Board from './components/board'
import {newGame} from './logic/game'
import {player1, player2, takeTurn} from './logic/game'
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board1: [],
      board2: [],
    }
    this.handleNewGame = this.handleNewGame.bind(this)
  }
  handleNewGame() {
    newGame()
    this.setState({
      board1: player1.gameboard.board ,
      board2: player2.gameboard.board,
    })
    console.log(this.state.board1)
  }
  

  render() {
    return (
      <div>
      <button onClick={this.handleNewGame}>New Game</button>

      <Board board={this.state.board1}/>
      <Board board={this.state.board2} player={'cpu'} takeTurn ={takeTurn}/>
      </div>
    )
  }
}

export default App

