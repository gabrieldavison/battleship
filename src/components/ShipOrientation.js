import React from 'react';



class ShipOrientation extends React.Component {
  constructor(props) {
    super(props)

    this.renderShip = this.renderShip.bind(this)
    this.handleChangeOrientation = this.handleChangeOrientation.bind(this)

  }


  renderShip(length, orientation) {
    let shipRows =[]
    if(orientation === 'v') {
      for(let i = 0; i < length; i++) {
        shipRows.push(<td></td>)
      }
      return(shipRows.map(item => <tr>{item}</tr>))
    }
    if(orientation === 'h') {
      
      for(let i = 0; i < length; i++) {
        shipRows.push(<td></td>)
      }
      return(<tr>{shipRows.map(item => item)}</tr>)
    }
  }

  handleChangeOrientation() {
    this.props.orientation === 'v'
    ? this.props.changeOrientation('h')
    : this.props.changeOrientation('v')
  }


  render() {
    return(
      <div>
        <h1>ShipOrientation</h1>
        <table>
          <tbody>
          {this.renderShip(this.props.length, this.props.orientation)}
          </tbody>
        </table>
        <button onClick={this.handleChangeOrientation}>Flip</button>
      </div>
    )
  }
}

export default ShipOrientation