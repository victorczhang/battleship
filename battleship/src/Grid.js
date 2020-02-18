import React, {Component} from 'react'

class Grid extends Component {
    constructor() {
        super()
        this.state = {
          board: [
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
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
        }
      }

      receiveAttack = (e, ship) => {
        // let x = Ship('Carrier', 5)

        const updatedBoard = this.state.board.slice()
        if (updatedBoard[e.target.parentElement.id][e.target.id] === 'X') {
            updatedBoard[e.target.parentElement.id][e.target.id] = 'HIT'
            console.log(this.state.ships[0].hit(e.target.id))
        } else if (updatedBoard[e.target.parentElement.id][e.target.id] === '') {
            updatedBoard[e.target.parentElement.id][e.target.id] = 'MISS'
        }
        this.setState(
            { board: updatedBoard }
        )
      }

      placeShips = () => {
        let board = this.state.board.slice()

        // Logic to place boats randomly below

        let h;
        for (h=0; h < this.state.ships.length; h++) {
          // let ycoord = Math.floor(Math.random() * 10)
          let randomRotate = Math.floor(Math.random() * 2)

          if (randomRotate === 0) {
            let xcoord = Math.floor(Math.random() * 10)
            let ycoord = Math.abs(Math.floor(Math.random() * 10) - this.state.ships[h].getLength())

            let chosenArray = []
            let i
            for (i=0; i < this.state.ships[h].getLength(); i++) {
             chosenArray.push(board[xcoord][ycoord + i])
            }

            if (chosenArray.includes('X')) {
              // console.log('Boat is already here')

              let xcoord = Math.floor(Math.random() * 10)
              let ycoord = Math.abs(Math.floor(Math.random() * 10) - this.state.ships[h].getLength())

              let j;
              for (j=0; j < this.state.ships[h].getLength(); j++) {
                board[xcoord].splice(ycoord + j, 1, 'X')
              }
            } else {
              let j;
              for (j=0; j < this.state.ships[h].getLength(); j++) {
                board[xcoord].splice(ycoord + j, 1, 'X')
              }
            }
          }
          else {
            let xcoord = Math.abs(Math.floor(Math.random() * 10) - this.state.ships[h].getLength())
            let ycoord = Math.abs(Math.floor(Math.random() * 10))

            let chosenArray = []
            let i
            for (i=0; i < this.state.ships[h].getLength(); i++) {
             chosenArray.push(board[(xcoord + i)][ycoord])
            }

            if (chosenArray.includes('X')) {
              // console.log('Boat is already here')

              let xcoord = Math.abs(Math.floor(Math.random() * 10) - this.state.ships[h].getLength())
              let ycoord = Math.abs(Math.floor(Math.random() * 10))

              let j;
              for (j=0; j < this.state.ships[h].getLength(); j++) {
                board[(xcoord + j)].splice(ycoord, 1, 'X')
              }
            } else {
              let j;
              for (j=0; j < this.state.ships[h].getLength(); j++) {
                board[(xcoord + j)].splice(ycoord, 1, 'X')
              }
            }
          }
        }
        this.setState(
          {board: board}
        )
      }

      componentDidMount() {
        this.placeShips()
      }
    
      render() {
        const board = this.state.board
        const grid = board.map((row, index) => {
            return (
              <tr id={index} key={index}>
                {row.map((item, index) => {
                  return (
                    <td 
                    key={index}
                    id={index}
                    // onClick={this.handleClick}>
                    // onClick = {this.placeShips}
                    >
                        {item}
                    </td>
                  )
                })}
              </tr>
            )
          }  
        )
        return (
          <div>
            <table>
              <tbody>
                {grid}
              </tbody>
            </table>
          </div>
        );
    }
}

const Ship = (name, length) => {
  const getName = () => name
  const getLength = () => length
  const hit = (position) => {
    console.log('hit')
    isSunk();
  }
  const isSunk = () => {
    console.log('Down')
  }
  return { getName, getLength, hit, isSunk }
}


export default Grid;