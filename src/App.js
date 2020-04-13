import React from 'react';
import PlaceShip from './components/PlaceShip'
import Board from './components/board'
import {newGame} from './logic/game'
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
    }
    this.handleNewGame = this.handleNewGame.bind(this)
    this.handleTakeTurn = this.handleTakeTurn.bind(this)
  }
  handleNewGame() {
    console.log(this.state.board1)
    newGame()
    
    this.setState({
      board1: player1.gameboard.board ,
      board2: player2.gameboard.board,
      placeShip: true
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
      ? <PlaceShip board={this.state.board1} /> 
      : null}
        {!this.state.placeShip 
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

