import React, { Component } from 'react';
// import './App.css';
// import Grid from './Grid';
// import OpponentGrid from './OpponentGrid';
// import Player from './Player'

class App extends Component {
  constructor() {
    super()
    // this.cellRef = React.createRef();
    this.state = {
      board: [
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
      ],
      oppBoard: [
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
      ],
      ships: [
        Ship('Carrier', 5),
        Ship('Battleship', 4),
        Ship('Cruiser', 3),
        Ship('Submarine', 3),
        Ship('Destroyer', 2)
      ],
      gameStart: false,
      allSunk: false,
      gameOver: false,
      winner: '',
    }
  }

  myHealth = 17
  oppHealth = 17
  randPlacedMove = []

  receiveAttack = (xcoord, ycoord) => {
    const updatedBoard = this.state.board.slice()

    if (updatedBoard[xcoord][ycoord] === 'Carrier') {
      this.state.ships[0].hit()
      updatedBoard[xcoord][ycoord] = 'HIT'
      this.myHealth--
      if (this.myHealth <= 0) {
        this.setState({
          gameOver: true,
          winner: 'You lost!'
        })
      }
    }
    else if (updatedBoard[xcoord][ycoord] === 'Battleship') {
      this.state.ships[1].hit()
      updatedBoard[xcoord][ycoord] = 'HIT'
      // maxHealth = maxHealth - 1
      this.myHealth--
      if (this.myHealth <= 0) {
        this.setState({
          gameOver: true,
          winner: 'You lost!'
        })
      }
    }
    else if (updatedBoard[xcoord][ycoord] === 'Cruiser') {
      this.state.ships[2].hit()
      updatedBoard[xcoord][ycoord] = 'HIT'
      // maxHealth = maxHealth - 1
      this.myHealth--
      if (this.myHealth <= 0) {
        this.setState({
          gameOver: true,
          winner: 'You lost!'
        })
      }
    }
    else if (updatedBoard[xcoord][ycoord] === 'Submarine') {
      this.state.ships[3].hit()
      updatedBoard[xcoord][ycoord] = 'HIT'
      // maxHealth = maxHealth - 1
      this.myHealth--
      if (this.myHealth <= 0) {
        this.setState({
          gameOver: true,
          winner: 'You lost!'
        })
      }
    }
    else if (updatedBoard[xcoord][ycoord] === 'Destroyer') {
      this.state.ships[4].hit()
      updatedBoard[xcoord][ycoord] = 'HIT'
      // maxHealth = maxHealth - 1
      this.myHealth--
      if (this.myHealth <= 0) {
        this.setState({
          gameOver: true,
          winner: 'You lost!'
        })
      }
    } else if (updatedBoard[xcoord][ycoord] === 'HIT') {
      // console.log('already hit this spot')
    } else if (updatedBoard[xcoord][ycoord] === 'x') {
      // console.log('already hit this spot')
    } else {
      updatedBoard[xcoord][ycoord] = 'x'
    }

    this.setState(
      { board: updatedBoard }
    )
    // console.log(maxHealth)
  }

  receiveOppAttack = (e) => {
    const updatedBoard = this.state.oppBoard.slice()

    if (updatedBoard[e.target.parentElement.id][e.target.id] === 'Carrier') {
      // console.log(e.target.parentElement.id)
      this.state.ships[0].hit()
      updatedBoard[e.target.parentElement.id][e.target.id] = 'HIT'
      this.oppHealth--
      if (this.oppHealth <= 0) {
        this.setState({
          gameOver: true,
          winner: 'You won!'
        })
      } else {
        this.randMove()
      }
    }
    else if (updatedBoard[e.target.parentElement.id][e.target.id] === 'Battleship') {
      this.state.ships[1].hit()
      updatedBoard[e.target.parentElement.id][e.target.id] = 'HIT'
      this.oppHealth--
      if (this.oppHealth <= 0) {
        this.setState({
          gameOver: true,
          winner: 'You won!'
        })
      } else {
        this.randMove()
      }
    }
    else if (updatedBoard[e.target.parentElement.id][e.target.id] === 'Cruiser') {
      this.state.ships[2].hit()
      updatedBoard[e.target.parentElement.id][e.target.id] = 'HIT'
      this.oppHealth--
      if (this.oppHealth <= 0) {
        this.setState({
          gameOver: true,
          winner: 'You won!'
        })
      } else {
        this.randMove()
      }
    }
    else if (updatedBoard[e.target.parentElement.id][e.target.id] === 'Submarine') {
      this.state.ships[3].hit()
      updatedBoard[e.target.parentElement.id][e.target.id] = 'HIT'
      this.oppHealth--
      if (this.oppHealth <= 0) {
        this.setState({
          gameOver: true,
          winner: 'You won!'
        })
      } else {
        this.randMove()
      }
    }
    else if (updatedBoard[e.target.parentElement.id][e.target.id] === 'Destroyer') {
      this.state.ships[4].hit()
      updatedBoard[e.target.parentElement.id][e.target.id] = 'HIT'
      this.oppHealth--
      if (this.oppHealth <= 0) {
        this.setState({
          gameOver: true,
          winner: 'You won!'
        })
      } else {
        this.randMove()
      }
    } else if (updatedBoard[e.target.parentElement.id][e.target.id] === 'HIT') {
      // console.log('already hit this spot')
    } else if (updatedBoard[e.target.parentElement.id][e.target.id] === 'x') {
      // console.log('already hit this spot')
    } else {
      updatedBoard[e.target.parentElement.id][e.target.id] = 'x'
      this.randMove()
    }

    this.setState(
      { oppBoard: updatedBoard }
    )
    // console.log(this.oppHealth)
  }

  placeShips = () => {
    // Logic to place boats randomly below

    // Checks required before placing a boat:
    // 1. Does the boat go off the board
    // 2. Does the boat overlap another boat
    // 3. If checks above pass then place boat

    const placedPosition = [];
    const board = this.state.board.slice();
    const validatedPositionStrings = []; // <---- Create this array
    for (const ship of this.state.ships) {
      const thisShipLength = ship.getLength();
      tryShip:
      while (true) {
        const thisBoatPossiblePositionStrings = [];
        // Generate ship positions until valid
        const xcoord = Math.floor(Math.random() * 10);
        const ycoord = Math.floor(Math.random() * 10);

        const randOrientation = Math.floor(Math.random() * 2)
        const potentialBoat = [];

        if (randOrientation === 0) {
          for (let j = 0; j < thisShipLength; j++) {
            // Then check to see if the below position is already in it
            const thisCoordinateString = `${xcoord}_${ycoord + j}`;
            if (validatedPositionStrings.includes(thisCoordinateString)) {
              // Invalid
              continue tryShip;
            }
            else if (ycoord + j > 9) {
              // Also invalid
              continue tryShip
            }
            thisBoatPossiblePositionStrings.push(thisCoordinateString);

            // If this point is reached, then this particular coordinate is valid
            // do whatever you need to do:
            const newCoords = [xcoord, ycoord + j];
            potentialBoat.push(newCoords);
          }
        }
        else if (randOrientation === 1) {
          for (let j = 0; j < thisShipLength; j++) {
            // Then check to see if the below position is already in it
            const thisVertcalString = `${xcoord + j}_${ycoord}`;
            if (validatedPositionStrings.includes(thisVertcalString)) {
              // Invalid
              continue tryShip;
            }
            else if (xcoord + j > 9) {
              // Also invalid
              continue tryShip
            }
            thisBoatPossiblePositionStrings.push(thisVertcalString);

            // If this point is reached, then this particular coordinate is valid
            // do whatever you need to do:
            const newCoords = [xcoord + j, ycoord];
            potentialBoat.push(newCoords);
            // const newCoords = [xcoord, ycoord + j];
            // potentialBoat.push(newCoords);
          }
        }
        // for (let j = 0; j < thisShipLength; j++) {
        //   // Then check to see if the below position is already in it
        //   const thisCoordinateString = `${xcoord}_${ycoord + j}`;
        //   const thisVertcalString
        //   if (validatedPositionStrings.includes(thisCoordinateString)) {
        //     // Invalid
        //     continue tryShip;
        //   }
        //   else if (ycoord + j > 9) {
        //     // Also invalid
        //     continue tryShip
        //   }
        //   thisBoatPossiblePositionStrings.push(thisCoordinateString);

        //   // If this point is reached, then this particular coordinate is valid
        //   // do whatever you need to do:
        //   const newCoords = [xcoord, ycoord + j];
        //   potentialBoat.push(newCoords);
        // }
        // All positions for ship are valid
        // do something with potentialBoat here?
        // push positions to placedPosition?
        validatedPositionStrings.push(...thisBoatPossiblePositionStrings);
        placedPosition.push(...potentialBoat)
        break;
      }
    }
    let newBoard = this.state.board.slice()
    let a
    for (a = 0; a < this.state.ships.length; a++) {
      // console.log(a)
      let b
      for (b = 0; b < this.state.ships[a].getLength(); b++) {
        // console.log(b)
        let xc = placedPosition[b][0]
        let yc = placedPosition[b][1]

        newBoard[xc][yc] = this.state.ships[a].getName()
        // if (this.state.ships[a].getName() === 'Carrier') {
        //   this.setState({ 
        //     carrier: positions.push([xc, yc])
        //     })
        //   console.log(this.state.carrier)
        // }
      }
      placedPosition.splice(0, this.state.ships[a].getLength())
    }

    this.setState(
      { board: board }
    )
  }

  placeOppShips = () => {
    // Logic to place boats randomly below

    // Checks required before placing a boat:
    // 1. Does the boat go off the board
    // 2. Does the boat overlap another boat
    // 3. If checks above pass then place boat

    // Logic to place boats randomly below

    // Checks required before placing a boat:
    // 1. Does the boat go off the board
    // 2. Does the boat overlap another boat
    // 3. If checks above pass then place boat

    const placedPosition = [];
    const oppBoard = this.state.oppBoard.slice();
    const validatedPositionStrings = []; // <---- Create this array
    for (const ship of this.state.ships) {
      const thisShipLength = ship.getLength();
      tryShip:
      while (true) {
        const thisBoatPossiblePositionStrings = [];
        // Generate ship positions until valid
        const xcoord = Math.floor(Math.random() * 10);
        const ycoord = Math.floor(Math.random() * 10);

        const randOrientation = Math.floor(Math.random() * 2)
        const potentialBoat = [];

        if (randOrientation === 0) {
          for (let j = 0; j < thisShipLength; j++) {
            // Then check to see if the below position is already in it
            const thisCoordinateString = `${xcoord}_${ycoord + j}`;
            if (validatedPositionStrings.includes(thisCoordinateString)) {
              // Invalid
              continue tryShip;
            }
            else if (ycoord + j > 9) {
              // Also invalid
              continue tryShip
            }
            thisBoatPossiblePositionStrings.push(thisCoordinateString);

            // If this point is reached, then this particular coordinate is valid
            // do whatever you need to do:
            const newCoords = [xcoord, ycoord + j];
            potentialBoat.push(newCoords);
          }
        }
        else if (randOrientation === 1) {
          for (let j = 0; j < thisShipLength; j++) {
            // Then check to see if the below position is already in it
            const thisVertcalString = `${xcoord + j}_${ycoord}`;
            if (validatedPositionStrings.includes(thisVertcalString)) {
              // Invalid
              continue tryShip;
            }
            else if (xcoord + j > 9) {
              // Also invalid
              continue tryShip
            }
            thisBoatPossiblePositionStrings.push(thisVertcalString);

            // If this point is reached, then this particular coordinate is valid
            // do whatever you need to do:
            const newCoords = [xcoord + j, ycoord];
            potentialBoat.push(newCoords);
            // const newCoords = [xcoord, ycoord + j];
            // potentialBoat.push(newCoords);
          }
        }
        // for (let j = 0; j < thisShipLength; j++) {
        //   // Then check to see if the below position is already in it
        //   const thisCoordinateString = `${xcoord}_${ycoord + j}`;
        //   const thisVertcalString
        //   if (validatedPositionStrings.includes(thisCoordinateString)) {
        //     // Invalid
        //     continue tryShip;
        //   }
        //   else if (ycoord + j > 9) {
        //     // Also invalid
        //     continue tryShip
        //   }
        //   thisBoatPossiblePositionStrings.push(thisCoordinateString);

        //   // If this point is reached, then this particular coordinate is valid
        //   // do whatever you need to do:
        //   const newCoords = [xcoord, ycoord + j];
        //   potentialBoat.push(newCoords);
        // }
        // All positions for ship are valid
        // do something with potentialBoat here?
        // push positions to placedPosition?
        validatedPositionStrings.push(...thisBoatPossiblePositionStrings);
        placedPosition.push(...potentialBoat)
        break;
      }
    }
    let newBoard = this.state.oppBoard.slice()
    let a
    for (a = 0; a < this.state.ships.length; a++) {
      // console.log(a)
      let b
      for (b = 0; b < this.state.ships[a].getLength(); b++) {
        // console.log(b)
        let xc = placedPosition[b][0]
        let yc = placedPosition[b][1]

        newBoard[xc][yc] = this.state.ships[a].getName()
        // if (this.state.ships[a].getName() === 'Carrier') {
        //   this.setState({ 
        //     carrier: positions.push([xc, yc])
        //     })
        //   console.log(this.state.carrier)
        // }
      }
      placedPosition.splice(0, this.state.ships[a].getLength())
    }

    this.setState(
      { oppBoard: oppBoard }
    )
  }

  checkIfDuplicateExists = (w) => {
    return new Set(w).size !== w.length 
}

  randMove = () => {
    while (true) {
      const xcoord = Math.floor(Math.random() * 10);
      const ycoord = Math.floor(Math.random() * 10);

      // currentMove.push(`${xcoord}_${ycoord}`)

      if (this.randPlacedMove.includes(`${xcoord}_${ycoord}`)) {
        continue
      }
      this.randPlacedMove.push(`${xcoord}_${ycoord}`)
      this.receiveAttack(xcoord, ycoord)
      console.log(this.checkIfDuplicateExists(this.randPlacedMove))
      break
    }
  }

  componentDidMount() {
    this.placeShips()
    this.placeOppShips()
  }

  render() {
    const board = this.state.board
    const grid = board.map((row, index) => {
      return (
        <tr id={index} key={index}>
          {row.map((item, index) => {
            if (item === 'Carrier' || item === 'Battleship' || item === 'Cruiser' || item === 'Submarine' || item === 'Destroyer') {
              return (
                <td
                  key={index}
                  id={index}
                  className='myBoats'
                  // style={this.state.hit ? { backgroundColor: 'red' } : { backgroundColor: 'green' }}
                  // ref={item}
                  // onClick={this.receiveAttack}
                >
                  {/* // onClick = {this.placeShips} */}
                  {/* > */}
                  {item.charAt(0)}
                  {item.charAt(1)}
                  {/* Boat */}
                </td>
              )
            } 
            else if (item === 'HIT') {
              return (
                <td
                  key={index}
                  id={index}
                  // onClick={this.receiveOppAttack}
                  className='hitCell'
                >
                  {/* // onClick = {this.placeShips} */}
                  {/* > */}
                  {item}
                </td>
              )} else {
              return (
                <td
                  key={index}
                  id={index}
                  className='emptyCell'
                  ref='empty'
                >
                  {/* // onClick = {this.placeShips} */}
                  {/* > */}
                  {item}
                </td>
              )
            }
          })}
        </tr>
      )
    }
    )

    const oppBoard = this.state.oppBoard
    const oppGrid = oppBoard.map((row, index) => {
      return (
        <tr id={index} key={index}>
          {row.map((item, index) => {
            if (item === 'Carrier' || item === 'Battleship' || item === 'Cruiser' || item === 'Submarine' || item === 'Destroyer') {
              return (
                <td
                  key={index}
                  id={index}
                  onClick={this.receiveOppAttack}
                  className='oppBoats'
                >
                  {/* // onClick = {this.placeShips} */}
                  {/* > */}
                  {/* {item} */}
                </td>
              )
            } 
            else if (item === 'HIT') {
              return (
                <td
                  key={index}
                  id={index}
                  onClick={this.receiveOppAttack}
                  className='hitCell'
                >
                  {/* // onClick = {this.placeShips} */}
                  {/* > */}
                  {item}
                </td>
                )
              } else {
              return (
                <td
                  key={index}
                  id={index}
                  onClick={this.receiveOppAttack}
                  // style={{backgroundColor: 'orange'}}
                  className='emptyCell'
                >
                  {/* // onClick = {this.placeShips} */}
                  {/* > */}
                  {item}
                </td>
              )
            }
          })}
        </tr>
      )
    }
    )
    return (
      <div>
        <div className='heading'>
          <h1>Battleship</h1>
          <h3>{this.state.gameOver ? 'Game Over' : 'No Winner Yet'}</h3>
          <h3>{this.state.winner}</h3>
        </div>
        <div id='game'>
          {/* <div>
            <h1>Your Boats Sunk</h1>
            <p></p>
          </div> */}
          <div id='yourBoard'>
            <table className='disabled'>
              <tbody>
                {grid}
              </tbody>
            </table>
            <h4>Your Board</h4>
          </div>
          <div id='oppBoard'>
            <table className={this.state.gameOver ? 'disabled' : 'enabled'}>
              <tbody>
                {oppGrid}
              </tbody>
            </table>
            <h4 id='oppBoardHeading'>Opponent Board</h4>
          </div>
          {/* <div>
            <h1>Their Boats Sunk</h1>
          </div> */}
        </div>
      </div>
    );
  }
}

const Ship = (name, length) => {
  const getName = () => name
  const getLength = () => length
  let health = getLength()
  const hit = () => {
    health--
    // console.log(health)
    if (health <= 0) {
      isSunk()
    }
  }
  const isSunk = () => {
    console.log('A ' + getName() + ' was sunk.')
  }
  return { getName, getLength, hit, isSunk }
}

export default App;
