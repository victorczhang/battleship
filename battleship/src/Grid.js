import React, { Component } from 'react'

class Grid extends Component {
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
        // ships: [
        //     Ship('Carrier', 5),
        //     Ship('Battleship', 4),
        //     Ship('Cruiser', 3),
        //     Ship('Submarine', 3),
        //     Ship('Destroyer', 2)
        //     ],
        }
    }

    handleClick = (e) => {
        const updatedBoard = this.state.board
        updatedBoard[e.target.parentElement.id][e.target.id] = 'O'
        this.setState = (
            {board: updatedBoard}
        )
    }

    // receiveAttack = (xcoord, ycoord) => {
    //     if (xcoord && ycoord) {
    //     Ship.hit()
    //     } else {
    //     board[xcoord].splice(ycoord, 0, 'X')
    //     console.log('Test')
    //     }
    // }

    render() {
        const board = this.state.board
        const grid = board.map((row, index) => {
            return (
                <tr 
                id={index} 
                key={index}>
                    {row.map((item, index) => {
                        return (
                            <td 
                            className='emptyCell' 
                            id={index} 
                            key={index} 
                            onClick={this.handleClick}>
                                {item}
                            </td>
                        )}
                    )}
                </tr>
            )
        })
        return (
            <table>
                <tbody>
                    {grid}
                </tbody>
            </table>
        )
    }
}

// const Ship = (name, length) => {
//     const getName = () => name
//     const getLength = () => length
//     // const hit = (position) => {
//     //   // hit at position
//     // const isSunk = (length) => {
//       // let length = length - 1
//       // if (length = 0) {
//         // console.log('Sunk!')
//       // }
//     // }
//     return {getName, getLength}
// }

export default Grid