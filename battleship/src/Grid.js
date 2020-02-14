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
          active: false,
        }
      }

      handleClick = (e) => {
        const updatedBoard = this.state.board.slice()
        if (updatedBoard[e.target.parentElement.id][e.target.id] === 'X') {
            updatedBoard[e.target.parentElement.id][e.target.id] = 'H'
        } else {
            updatedBoard[e.target.parentElement.id][e.target.id] = 'X'
        }
        this.setState(
            { board: updatedBoard }
        )
      }

      placeShips = (ship, xcoord, ycoord) => {
        //   ship.getLength
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
                    onClick={this.handleClick}>
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

export default Grid;