import React from 'react';
import ShipDisplay from './ShipDisplay';
import ShipOrientation from './ShipOrientation';


class SelectShip extends React.Component {

  render() {
    return(
      <div>
        <h1>SelectShip</h1>
        <ShipDisplay 
          changeLength={this.props.changeLength} 
          boat5Placed={this.props.boat5Placed}
          boat4Placed={this.props.boat4Placed}
          boat3Placed1={this.props.boat3Placed1}
          boat3Placed2={this.props.boat3Placed2}
          boat2Placed={this.props.boat2Placed}
        />
        <ShipOrientation 
          length={this.props.length} 
          orientation={this.props.orientation} 
          changeOrientation={this.props.changeOrientation}
        />
      </div>
    )
  }
}

export default SelectShip