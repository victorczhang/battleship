import React, { Component } from 'react';
// import './App.css';
// import Grid from './Grid';
// import OpponentGrid from './OpponentGrid';
// import Player from './Player'

class App extends Component {
 constructor() {
        super()
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
            rotate: false,
            active: false,
            allSunk: false,
        }
    }

    receiveAttack = (xcoord, ycoord) => {
        const updatedBoard = this.state.board.slice()

        if (updatedBoard[xcoord][ycoord] === 'Carrier') {
            this.state.ships[0].hit()
            updatedBoard[xcoord][ycoord] = 'HIT'
        }
        else if (updatedBoard[xcoord][ycoord] === 'Battleship') {
            this.state.ships[1].hit()
            updatedBoard[xcoord][ycoord] = 'HIT'
        }
        else if (updatedBoard[xcoord][ycoord] === 'Cruiser') {
            this.state.ships[2].hit()
            updatedBoard[xcoord][ycoord] = 'HIT'
        }
        else if (updatedBoard[xcoord][ycoord] === 'Submarine') {
            this.state.ships[3].hit()
            updatedBoard[xcoord][ycoord] = 'HIT'
        }
        else if (updatedBoard[xcoord][ycoord] === 'Destroyer') {
            this.state.ships[4].hit()
            updatedBoard[xcoord][ycoord] = 'HIT'
        } else if (updatedBoard[xcoord][ycoord] === 'HIT') {
            console.log('already hit this spot')
        } else {
            updatedBoard[xcoord][ycoord] = 'MISS'
        }

        this.setState(
            { board: updatedBoard }
        )
    }

    receiveOppAttack = (e) => {
      const updatedBoard = this.state.oppBoard.slice()

      if (updatedBoard[e.target.parentElement.id][e.target.id] === 'Carrier') {
          this.state.ships[0].hit()
          updatedBoard[e.target.parentElement.id][e.target.id] = 'HIT'
          this.randMove()
      }
      else if (updatedBoard[e.target.parentElement.id][e.target.id] === 'Battleship') {
          this.state.ships[1].hit()
          updatedBoard[e.target.parentElement.id][e.target.id] = 'HIT'
          this.randMove()
      }
      else if (updatedBoard[e.target.parentElement.id][e.target.id] === 'Cruiser') {
          this.state.ships[2].hit()
          updatedBoard[e.target.parentElement.id][e.target.id] = 'HIT'
          this.randMove()
      }
      else if (updatedBoard[e.target.parentElement.id][e.target.id] === 'Submarine') {
          this.state.ships[3].hit()
          updatedBoard[e.target.parentElement.id][e.target.id] = 'HIT'
          this.randMove()
      }
      else if (updatedBoard[e.target.parentElement.id][e.target.id] === 'Destroyer') {
          this.state.ships[4].hit()
          updatedBoard[e.target.parentElement.id][e.target.id] = 'HIT'
          this.randMove()
      } else if (updatedBoard[e.target.parentElement.id][e.target.id] === 'HIT') {
          console.log('already hit this spot')
      } else {
          updatedBoard[e.target.parentElement.id][e.target.id] = 'MISS'
          this.randMove()
      }

      this.setState(
          { oppBoard: updatedBoard }
      )
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
                const potentialBoat = [];
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
        for (a=0; a < this.state.ships.length; a++) {
            // console.log(a)
            let b
            for (b=0; b < this.state.ships[a].getLength(); b++) {
                // console.log(b)
                let xc = placedPosition[b][0]
                let yc = placedPosition[b][1]

                newBoard[xc][yc] =  this.state.ships[a].getName()
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

      const oppPlacedPosition = [];
      const oppBoard = this.state.oppBoard.slice();
      const oppValidatedPositionStrings = []; // <---- Create this array
      for (const ship of this.state.ships) {
          const thisShipLength = ship.getLength();
          tryShip:
          while (true) {
              const oppThisBoatPossiblePositionStrings = [];
              // Generate ship positions until valid
              const oppXcoord = Math.floor(Math.random() * 10);
              const oppYcoord = Math.floor(Math.random() * 10);
              const oppPotentialBoat = [];
              for (let j = 0; j < thisShipLength; j++) {
                  // Then check to see if the below position is already in it
                  const oppThisCoordinateString = `${oppXcoord}_${oppYcoord + j}`;
                  if (oppValidatedPositionStrings.includes(oppThisCoordinateString)) {
                      // Invalid
                      continue tryShip;
                  } 
                  else if (oppYcoord + j > 9) {
                      // Also invalid
                      continue tryShip
                  }
                  oppThisBoatPossiblePositionStrings.push(oppThisCoordinateString);

                  // If this point is reached, then this particular coordinate is valid
                  // do whatever you need to do:
                  const newOppCoords = [oppXcoord, oppYcoord + j];
                  oppPotentialBoat.push(newOppCoords);
              }
              // All positions for ship are valid
              // do something with potentialBoat here?
              // push positions to placedPosition?
              oppValidatedPositionStrings.push(...oppThisBoatPossiblePositionStrings);
              oppPlacedPosition.push(...oppPotentialBoat)
              break;
          }
      }
      let newOppBoard = this.state.oppBoard.slice()
      let a
      for (a=0; a < this.state.ships.length; a++) {
          // console.log(a)
          let b
          for (b=0; b < this.state.ships[a].getLength(); b++) {
              // console.log(b)
              let xc = oppPlacedPosition[b][0]
              let yc = oppPlacedPosition[b][1]

              newOppBoard[xc][yc] =  this.state.ships[a].getName()
          }
          oppPlacedPosition.splice(0, this.state.ships[a].getLength())
      }

      this.setState(
          { oppBoard: oppBoard }
      )
  }

    randMove = () => {
      const xcoord = Math.floor(Math.random() * 10);
      const ycoord = Math.floor(Math.random() * 10);
      this.receiveAttack(xcoord, ycoord)
      // this.handlePlayer()
      // console.log('Move made')
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
                  // onClick={this.receiveAttack}
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
                  // onClick={this.receiveAttack}
                  >
                    {/* // onClick = {this.placeShips} */}
                    {/* > */}
                    {item}
                  </td>
                )
              }
            })}
          </tr>
        )}
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
                  >
                    {/* // onClick = {this.placeShips} */}
                    {/* > */}
                    {/* {item} */}
                  </td>
                )
              } else {
                return (
                  <td
                    key={index}
                    id={index}
                    onClick={this.receiveOppAttack}
                  >
                    {/* // onClick = {this.placeShips} */}
                    {/* > */}
                    {item}
                  </td>
                )
              }
            })}
          </tr>
        )}
      )
      return (
        <div id='game'>
          <div>
            <table>
              <tbody>
                {grid}
              </tbody>
            </table>
            <h2>Your Board</h2>
          </div>
          <div>
            <table>
              <tbody>
                {oppGrid}
              </tbody>
            </table>
            <h2>Opponent Board</h2>
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
        console.log(health)
        if (health <= 0) {
            isSunk()
        }
    }
    const isSunk = () => {
        console.log('You sank a ' + getName())
    }
    return { getName, getLength, hit, isSunk }
}

export default App;
