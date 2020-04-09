import React from 'react'
import './board.css'
import { takeTurn } from '../logic/game';
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.createTable = this.createTable.bind(this)
  }
 
  createTable() {
    let table =[]
    let boardI = 0
    for(let i = 0; i <10; i+=1) {
      let row = this.props.board.slice(boardI, boardI+10)
      console.log(row)
      boardI+=10
      table.push(row.map((item, index) => {
        return <td key={row.indexOf(item)}
                  data-index={item.index}>
                  {this.props.player === 'cpu' ? 
                    item.hit : item.id}
                   
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