import React from 'react';
import './ShipDisplay.css'


class ShipDisplay extends React.Component {

  constructor(props){
    super(props)

    this.handleChangeLength = this.handleChangeLength.bind(this) 
  }

  handleChangeLength(e) {
   
    this.props.changeLength(Number.parseInt(e.target.parentNode.dataset.length))

  }
  
  render() {
    return(
      <div className='ship-display'>

        <table >
          <tbody>
          
            <tr onClick={this.handleChangeLength} data-length='5' className={this.props.boat5Placed} >
              <th>Carrier</th>
              <td ></td>
              <td ></td>
              <td ></td>
              <td ></td>
              <td ></td>
            </tr>
            <tr className={this.props.boat4Placed} onClick={this.handleChangeLength} data-length='4'>
              <th>Battleship</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className={this.props.boat3Placed1} onClick={this.handleChangeLength} data-length='3'>
              <th>Cruiser</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className={this.props.boat3Placed2} onClick={this.handleChangeLength} data-length='3'>
              <th>Submarine</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className={this.props.boat2Placed} onClick={this.handleChangeLength} data-length='2'>
              <th>Destroyer</th>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ShipDisplay