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
      <div>
        <h1>ShipDisplay</h1>
        <table className='shipDisplay'>
          <tbody>
            <tr onClick={this.handleChangeLength} data-length='5' className={this.props.boat5Placed} >
              <td ></td>
              <td ></td>
              <td ></td>
              <td ></td>
              <td ></td>
            </tr>
            <tr className={this.props.boat4Placed} onClick={this.handleChangeLength} data-length='4'>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className={this.props.boat3Placed1} onClick={this.handleChangeLength} data-length='3'>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className={this.props.boat3Placed2} onClick={this.handleChangeLength} data-length='3'>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className={this.props.boat2Placed} onClick={this.handleChangeLength} data-length='2'>
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