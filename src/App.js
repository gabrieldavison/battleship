import React from 'react';
import PlaceShip from './components/PlaceShip'
import Board from './components/board'
import {newGame, startGame} from './logic/game'
import {player1, player2, takeTurn, winner} from './logic/game'
import './App.css'
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
      newGame: true,
      start: true,
    }
    this.handleNewGame = this.handleNewGame.bind(this)
    this.handleTakeTurn = this.handleTakeTurn.bind(this)
    this.updateBoard = this.updateBoard.bind(this)
    this.handleStartGame = this.handleStartGame.bind(this)


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
      winner: undefined,
      message: '',
      placeShip: true,
      gameBoard: false,
      newGame: false,
      start: false
    })
  }

  handleStartGame() {
    startGame()
    this.setState({
      placeShip: false,
      gameBoard: true,
      newGame: true
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
     
    })
    if(winner === 'player1') {
      this.setState({message: 'You win!'})
    }
    if(winner === 'player2') {
      this.setState({message: 'You lose :('})
    }
  }

  

  render() {
    return (
      <div>
        <div className='new-game'>
          <h1>Battleship</h1>
          {this.state.start 
          ? <p>Battleship is a classic naval strategy game. First place your ships onto your grid and then take turns trying to sink your opponents. CLick new game to get started.</p> : null}
          {this.state.newGame ? <button className={'btn-new-game'} onClick={this.handleNewGame}>New Game</button> : null}
        </div>
        <div>
          
        </div>
        {this.state.placeShip 
        ? <PlaceShip board={this.state.board1} 
            updateBoard={this.updateBoard} 
            newGame={this.handleNewGame}
            startGame={this.handleStartGame}
          /> 
        : null}
        {this.state.gameBoard 
          ? <div className='game-boards'>
              <p>Click on your opponents board on the right to fire a shot. If you hit a ship the coordinate will be marked with an 'X' if you miss it will be marked with an 'O'. The winner is the first one to sink all of their opponents ships. Good luck!</p>
              <div className='boards'>
                  <Board board={this.state.board1}/>
                  <Board board={this.state.board2} player={'cpu'} takeTurn={this.handleTakeTurn}/>
              </div>
                  <p className='message'>{this.state.message}</p>
            </div>
          : null}
      </div>
    )
  }
}

export default App

