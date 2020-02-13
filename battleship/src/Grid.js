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
            ['', '', 'X', '', '', '', '', '', '', ''],
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
        ]
        }
    }

    handleClick = (e) => {
        const board = this.state.board.slice()
        // if (board[e.target.parentElement.id][e.target.id] === 'X') {
        //     board[e.target.parentElement.id][e.target.id] = 'H'
        // } else {
        //     board[e.target.parentElement.id][e.target.id] = 'O'
        // }
        board[e.target.parentElement.id][e.target.id] = 'O'
        this.setState = ({
            board: board,
        })
        // console.log('Test')
        console.log(this.state.board)
        // console.log(e.target)
        // console.log(e.target.parentElement)
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
        let grid = this.state.board.map((row, index) => {
            return (
                <tr id={index} key={index}>
                    {row.map((item, index) => {
                        return (
                            <td className='emptyCell' id={index} key={index} onClick={this.handleClick}>{item}</td>
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

const Ship = (name, length) => {
    const getName = () => name
    const getLength = () => length
    // const hit = (position) => {
    //   // hit at position
    // const isSunk = (length) => {
      // let length = length - 1
      // if (length = 0) {
        // console.log('Sunk!')
      // }
    // }
    return {getName, getLength}
}

export default Grid