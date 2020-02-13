import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';
import OpponentGrid from './OpponentGrid'

class App extends Component {
  constructor() {
    super()
    this.state = {
      rotate: false,
      active: false,
    }
    // this.handleClick = this.handleClick.bind(this)
  }

  handleChange = () => {
    this.setState (
      {
        rotate: !this.state.rotate
      }
    )
  }

  render() {
    return (
      <div>
        <div id='homescreen' className={this.state.active ? 'hidden' : 'show'}>
          <div id='boats'>
            <h1>Boats</h1>
            <input
              type='checkbox'
              onChange={this.handleChange} /> Rotate
            <br />
            <button onClick={() => this.setState({ carrier: !this.state.carrier })}>Carrier (length: 5)</button>
            <br />
            <button onClick={() => this.setState({ battleship: !this.state.battleship })}>Battleship (length: 4)</button>
            <br />
            <button onClick={() => this.setState({ cruiser: !this.state.cruiser })}>Cruiser (length: 3)</button>
            <br />
            <button onClick={() => this.setState({ submarine: !this.state.submarine })}>Submarine (length: 3)</button>
            <br />
            <button onClick={() => this.setState({ destroyer: !this.state.destroyer })}>Destroyer (length: 2)</button>
            <br />
            <button id='play' onClick={() => this.setState({ active: true })}>Play!</button>
          </div>
          <div>
            <Grid />
            <p>Your Board</p>
          </div>
        </div>
        <div id='battleground' className={this.state.active ? 'show' : 'hidden'}>
          <div>
            <Grid />
            <p>Your Ships</p>
          </div>
          <div>
            <OpponentGrid />
            <p>Opponent Grid</p>
          </div>
        </div>
      </div>
    );
  }
}

// const Gameboard = () => {
//   const placeShip = (board, xcoord, ycoord) => {
//     board[xcoord].splice(ycoord, ship.getLength, 'B')
//   }
//   const receiveAttack = (xcoord, ycoord) => {
//     if (xcoord && ycoord) {
//       Ship.hit()
//     } else {
//       // board[xcoord].splice(ycoord, 0, 'X')
//       console.log('Test')
//     }
//   }
//   return {placeShip, receiveAttack}
//   }
// }

export default App;
