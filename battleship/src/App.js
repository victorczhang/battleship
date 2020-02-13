import React, { Component } from 'react';
// import './App.css';
import Grid from './Grid';
// import OpponentGrid from './OpponentGrid'

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
        <Grid />
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
