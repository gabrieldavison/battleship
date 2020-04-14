/* eslint-disable default-case */
import React from 'react';
import SelectShip from './SelectShip.js'
import SetupBoard from './SetupBoard'
import {player1} from '../logic/game'
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

    }
    this.changeOrientation = this.changeOrientation.bind(this); 
    this.changeLength = this.changeLength.bind(this); 
    this.placeShip = this.placeShip.bind(this);
  }
  placeShip(index) {
    if(player1.gameboard.placeShip(this.state.shipLength, index, this.state.shipOrientation) === false) { 
      this.props.updateBoard();
      return
    }
    // player1.gameboard.placeShip(this.state.shipLength, index, this.state.shipOrientation)

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
  render() {
    return(
      <div>
        <h1>PlaceShip</h1>
        <SelectShip 
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
        <SetupBoard board={this.props.board} placeShip={this.placeShip} />
      </div>
    )
  }
}

export default PlaceShip