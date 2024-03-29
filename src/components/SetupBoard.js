import React from 'react';
import './board.css'
class SetupBoard extends React.Component {
  constructor(props) {
    super(props);
    this.createTable = this.createTable.bind(this)
    this.handlePlaceShip = this.handlePlaceShip.bind(this)
  }

  handlePlaceShip(e) {
    this.props.placeShip(e.target.dataset.index)
  }

  createTable() {
    let table =[]
    let boardI = 0
    for(let i = 0; i <10; i+=1) {
      //slices row of columns into a new array
      let row = this.props.board.slice(boardI, boardI+10)
      boardI+=10
      //maps each row into a <tr> element
      table.push(row.map((item, index) => {
        return <td 
                  key={row.indexOf(item)}
                  data-index={item.index}
                  //handle turn only works on cpu board
                  onClick={this.handlePlaceShip}
                  //outlines player ships in red
                  className={(this.props.player !== 'cpu' && item.id !== undefined) ? 'ship' : ''}
                >
                  {item.hit} 
                </td>})) 
    }
    return table.map((row, index) => <tr key={index}>{row}</tr>)
   }

   startButton() {
     if (
       this.props.boat5Placed === 'placed'
       && this.props.boat4Placed === 'placed'
       && this.props.boat3Placed1 === 'placed'
       && this.props.boat3Placed2 === 'placed'
       && this.props.boat2Placed === 'placed'
     ) return true
   }
  render() {
    return(
      <div className='setup-board'>
        <h3>Grid</h3>
        <table>
          <tbody>
            {this.createTable()}
          </tbody>
        </table>
        <button onClick={this.props.resetBoard}>Reset Board</button>

        {this.startButton() 
          ? <button onClick={this.props.startGame}>Start Game</button>
          : null}
      </div>
    )
  }
}

export default SetupBoard