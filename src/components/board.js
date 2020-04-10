import React from 'react'
import './board.css'
import { takeTurn } from '../logic/game';
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.createTable = this.createTable.bind(this)
    this.handleTakeTurn = this.handleTakeTurn.bind(this)

  }

  handleTakeTurn(e) {
    this.props.takeTurn(e);
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
                  onClick={ this.props.player === 'cpu'
                    ? this.handleTakeTurn
                    : ''
                  }
                  //outlines player ships in red
                  className={(this.props.player !== 'cpu' && item.id !== undefined) ? 'ship' : ''}
                >
                  {item.hit} 
                </td>})) 
    }
    return table.map((row, index) => <tr key={index}>{row}</tr>)
   }

  render() {
      
    return (
      <div>
       <h1>Board</h1>
       <table>
        <tbody>
          {this.createTable()}
        </tbody>
       </table>
      </div>
    )
  }
}

export default Board