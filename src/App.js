import React from 'react';
import PlaceShip from './components/PlaceShip'
import Board from './components/board'
import {newGame, startGame} from './logic/game'
import {player1, player2, takeTurn, winner} from './logic/game'
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board1: [],
      board2: [],
      winner: undefined,
      message: '',
      placeShip: false,
      gameBoard: false,
    }
    this.handleNewGame = this.handleNewGame.bind(this)
    this.handleTakeTurn = this.handleTakeTurn.bind(this)
    this.updateBoard = this.updateBoard.bind(this)

  }
  updateBoard() {
    this.setState({
      board1: player1.gameboard.board,
      board2: player2.gameboard.board,
    })
  }
  handleNewGame() {
    newGame()   
    this.setState({
      board1: player1.gameboard.board,
      board2: player2.gameboard.board,
      placeShip: true
    })
  }
  handleStartGame() {
    this.setState({
      placeShip: false,
      gameBoard: true
    })
  }

  handleTakeTurn(e) {
    if(winner !== undefined){
      return
    }
    takeTurn(e.target.dataset.index)
    this.setState({
      board1: player1.gameboard.board,
      board2: player2.gameboard.board,
      winner: winner,
      display: 'none'
    })
    if(winner !== undefined) {
      this.setState({message: `${winner} is the winner`})
    }
  }

  

  render() {
    return (
      <div>
      <button onClick={this.handleNewGame}>New Game</button>
      {this.state.placeShip 
      ? <PlaceShip board={this.state.board1} 
          updateBoard={this.updateBoard} 
          newGame={this.handleNewGame}
        /> 
      : null}
      {this.state.gameBoard 
        ? <div>
            <Board board={this.state.board1}/>
            <Board board={this.state.board2} player={'cpu'} takeTurn={this.handleTakeTurn}/>
            <p>{this.state.message}</p>
          </div>
        : null}
      </div>
    )
  }
}

export default App

