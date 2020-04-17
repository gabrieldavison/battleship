/* eslint-disable default-case */
import React from 'react';
import SelectShip from './SelectShip.js'
import SetupBoard from './SetupBoard'
import {player1} from '../logic/game'
import './PlaceShip.css'
class PlaceShip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shipLength: 5,
      shipOrientation: 'v',
      boat5Placed: 'notPlaced',
      boat4Placed: 'notPlaced',
      boat3Placed1: 'notPlaced',
      boat3Placed2: 'notPlaced',
      boat2Placed: 'notPlaced',
      selected: 'carrier'

    }
    this.changeOrientation = this.changeOrientation.bind(this); 
    this.changeLength = this.changeLength.bind(this); 
    this.placeShip = this.placeShip.bind(this);
    this.handleResetBoard = this.handleResetBoard.bind(this)
  }
  placeShip(index) {
    //returns statement if ship cant be placed to stop ship state being changed to placed
    if(player1.gameboard.placeShip(this.state.shipLength, index, this.state.shipOrientation) === false) { 
      this.props.updateBoard();
      return
    }

    // sets individual ships to placed 
    switch (this.state.shipLength) {
      case 5:
        this.setState({boat5Placed: 'placed'})
        break;
      case 4:
        this.setState({boat4Placed: 'placed'})
        break;
      case 3:
        this.state.boat3Placed1 === 'notPlaced' 
        ? this.setState({boat3Placed1: 'placed'})
        : this.setState({boat3Placed2: 'placed'})
        break;
      case 2:
        this.setState({boat2Placed: 'placed'})
        break;
    }
    this.props.updateBoard();

  }
  changeLength(length) {
    this.setState({shipLength: length})
  }
  changeOrientation(orientation) {
    this.setState({shipOrientation: orientation})
  }

  handleResetBoard() {
    this.setState({
      shipLength: 5,
      shipOrientation: 'v',
      boat5Placed: 'notPlaced',
      boat4Placed: 'notPlaced',
      boat3Placed1: 'notPlaced',
      boat3Placed2: 'notPlaced',
      boat2Placed: 'notPlaced',
    })
    this.props.newGame()
  }
  render() {
    return(
      <div className='place-ship'>
        <p>Select your ship and orientation from the options on the left and then click on the grid to place it. Once you placed all five ships you can start the game.</p>
          <div className='place-container'>
            <SelectShip className='select-ship'
              length={this.state.shipLength} 
              orientation={this.state.shipOrientation} 
              changeOrientation={this.changeOrientation}
              changeLength={this.changeLength}
              boat5Placed={this.state.boat5Placed}
              boat4Placed={this.state.boat4Placed}
              boat3Placed1={this.state.boat3Placed1}
              boat3Placed2={this.state.boat3Placed2}
              boat2Placed={this.state.boat2Placed}
            />
            <SetupBoard className='setup-board'
              board={this.props.board} 
              placeShip={this.placeShip} 
              resetBoard={this.handleResetBoard}
              boat5Placed={this.state.boat5Placed}
              boat4Placed={this.state.boat4Placed}
              boat3Placed1={this.state.boat3Placed1}
              boat3Placed2={this.state.boat3Placed2}
              boat2Placed={this.state.boat2Placed}
              startGame={this.props.startGame}
            />
          </div>
      </div>
    )
  }
}

export default PlaceShip