import React, { Component } from 'react'

class OpponentGrid extends Component {
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

    receiveAttack = (e) => {
        const updatedBoard = this.state.board.slice()

        if (updatedBoard[e.target.parentElement.id][e.target.id] === 'Carrier') {
            this.state.ships[0].hit()
            updatedBoard[e.target.parentElement.id][e.target.id] = 'HIT'
        }
        else if (updatedBoard[e.target.parentElement.id][e.target.id] === 'Battleship') {
            this.state.ships[1].hit()
            updatedBoard[e.target.parentElement.id][e.target.id] = 'HIT'
        }
        else if (updatedBoard[e.target.parentElement.id][e.target.id] === 'Cruiser') {
            this.state.ships[2].hit()
            updatedBoard[e.target.parentElement.id][e.target.id] = 'HIT'
        }
        else if (updatedBoard[e.target.parentElement.id][e.target.id] === 'Submarine') {
            this.state.ships[3].hit()
            updatedBoard[e.target.parentElement.id][e.target.id] = 'HIT'
        }
        else if (updatedBoard[e.target.parentElement.id][e.target.id] === 'Destroyer') {
            this.state.ships[4].hit()
            updatedBoard[e.target.parentElement.id][e.target.id] = 'HIT'
        }
        else {
            updatedBoard[e.target.parentElement.id][e.target.id] = 'MISS'
        }

        this.setState(
            { board: updatedBoard }
        )
    }

    isArrayInArray = (source, search) => {
        for (var i = 0, len = source.length; i < len; i++) {
            if (source[i][0] === search[0] && source[i][1] === search[1]) {
                return true;
            }
        }
        return false;
    }

    placeShips = () => {
        // Logic to place boats randomly below

        // Checks required before placing a boat:
        // 1. Does the boat go off the board
        // 2. Does the boat overlap another boat
        // 3. If checks above pass then place boat

        let board = this.state.board.slice()
        let placedPosition = []
        // let nextPosition = []
        let i
        for (i = 0; i < this.state.ships.length; i++) {
            // First randomly select coordinates for where the boat will start
            let xcoord = Math.floor(Math.random() * 10)
            let ycoord = Math.floor(Math.random() * 10)

            // Get positiions in array where boats will be
            // let placedPosition = []
            let j
            for (j = 0; j < this.state.ships[i].getLength(); j++) {
                placedPosition.push([xcoord, ycoord + j])
                // nextPosition.splice(0, 1, (xcoord, ycoord + j))
            
                // let newX = placedPosition[i][0]
                // let newY = placedPosition[i][1] 
                // if (placedPosition[i][0] === placedPosition[0][0] && placedPosition[i][1] === placedPosition[0][1]) {
                //     console.log('True')
                // }
                // let k
                // for (k=1; k < this.state.ships[i].getLength(); k++) {

                // console.log(this.isArrayInArray(placedPosition, [xcoord, ycoord + j + 1]))
                // console.log(`${i} pass: ` + placedPosition)    

                if (this.isArrayInArray(placedPosition, [xcoord, ycoord + j + 1])) {
                    console.log('No boats placed, something broke')
                    let xcoord = Math.floor(Math.random() * 10)
                    let ycoord = Math.floor(Math.random() * 10)

                    // Get positiions in array where boats will be
                    // let placedPosition = []
                    let j
                    for (j = 0; j < this.state.ships[i].getLength(); j++) {
                        placedPosition.push([xcoord, ycoord + j])
                    }
                } else {
                    board[xcoord][ycoord + j] = this.state.ships[i].getName()
                }
                console.log(`${i} pass: ` + placedPosition)
                console.log(this.isArrayInArray(placedPosition, [xcoord, ycoord + j + 1]))
            }

            // console.log(this.isArrayInArray(placedPosition, nextPosition))
            // console.log(nextPosition)

            // console.log(`${i} pass: ` + placedPosition)
            // console.log(placedPosition)

            // Place boats below
            // let k
            // for (k=0; k < this.state.ships[i].getLength(); k++) {
            //     board[xcoord][ycoord + k] = this.state.ships[i].getName()
            // }

            // console.log(arrayPosition)

            // let randomRotate = Math.floor(Math.random() * 2)

            // if (randomRotate === 0) {
            //     let xcoord = Math.abs(Math.floor(Math.random() * 10))
            //     let ycoord = Math.abs(Math.floor(Math.random() * 10))

            //     while (ycoord + this.state.ships[h].getLength() > 9) {
            //         ycoord = Math.abs(Math.floor(Math.random() * 10))
            //     }

            //     let chosenArray = []
            //     let i

            //     for (i = 0; i < this.state.ships[h].getLength(); i++) {
            //         chosenArray.push(board[xcoord][ycoord + i])
            //         console.log(chosenArray)
            //     }

            //     if (chosenArray.includes('X')) {
            //         console.log('Boat is already here')
            //         while (chosenArray.includes('X')) {
            //             let xcoord = Math.floor(Math.random() * 10)
            //             // console.log(xcoord)
            //             let ycoord = Math.abs(Math.floor(Math.random() * 10) - this.state.ships[h].getLength())

            //             let j;
            //             for (j = 0; j < this.state.ships[h].getLength(); j++) {
            //                 board[xcoord].splice(ycoord + j, 1, this.state.ships[h].getName())
            //             }
            //         }
            //     } else {
            //         let j;
            //         for (j = 0; j < this.state.ships[h].getLength(); j++) {
            //             board[xcoord].splice(ycoord + j, 1, this.state.ships[h].getName())
            //         }
            //     }
            // }
            // //   Rotated Boats below
            // else {
            //     let xcoord = Math.abs(Math.floor(Math.random() * 10) - this.state.ships[h].getLength())
            //     let ycoord = Math.abs(Math.floor(Math.random() * 10))

            //     let chosenArray = []
            //     let i
            //     for (i = 0; i < this.state.ships[h].getLength(); i++) {
            //         chosenArray.push(board[(xcoord + i)][ycoord])
            //     }

            //     if (chosenArray.includes('X')) {
            //         console.log('Boat is already here - Rotation is offending')
            //         while (chosenArray.includes('X')) {
            //             let xcoord = Math.abs(Math.floor(Math.random() * 10) - this.state.ships[h].getLength())
            //             let ycoord = Math.abs(Math.floor(Math.random() * 10))

            //             let j;
            //             for (j = 0; j < this.state.ships[h].getLength(); j++) {
            //                 board[(xcoord + j)].splice(ycoord, 1, this.state.ships[h].getName())
            //             }
            //         }
            //     } else {
            //         let j;
            //         for (j = 0; j < this.state.ships[h].getLength(); j++) {
            //             board[(xcoord + j)].splice(ycoord, 1, this.state.ships[h].getName())
            //         }
            //     }
            // }
        }
        // console.log(placedPosition)
        this.setState(
            { board: board }
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
                        if (item === 'Carrier' || item === 'Battleship' || item === 'Cruiser' || item === 'Submarine' || item === 'Destroyer') {
                            return (
                                <td
                                    key={index}
                                    id={index}
                                    onClick={this.receiveAttack}>
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
                                    onClick={this.receiveAttack}>
                                    {/* // onClick = {this.placeShips} */}
                                    {/* > */}
                                    {item}
                                </td>
                            )
                        }
                        //   return (
                        //     <td 
                        //     key={index}
                        //     id={index}
                        //     onClick={this.receiveAttack}>
                        //         {item}
                        //     </td>
                        //   )
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


export default OpponentGrid;