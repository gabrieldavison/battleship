import React from 'react';
import ShipDisplay from './ShipDisplay';
import ShipOrientation from './ShipOrientation';


class SelectShip extends React.Component {

  render() {
    return(
      <div className='select-ship'>
        <h3>Ships</h3>
        <ShipOrientation 
          length={this.props.length} 
          orientation={this.props.orientation} 
          changeOrientation={this.props.changeOrientation}
        />
        <ShipDisplay 
          changeLength={this.props.changeLength} 
          boat5Placed={this.props.boat5Placed}
          boat4Placed={this.props.boat4Placed}
          boat3Placed1={this.props.boat3Placed1}
          boat3Placed2={this.props.boat3Placed2}
          boat2Placed={this.props.boat2Placed}
        />
      
      </div>
    )
  }
}

export default SelectShip