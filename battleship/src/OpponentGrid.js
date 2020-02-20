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

    // shipCheck = () => {
    //     let potentialBoat = []
    //     let newCoords
    //     let j
    //     for (j = 0; j < this.state.ships[i].getLength(); j++) {
    //         newCoords = [xcoord, ycoord + j]
    //         potentialBoat.push(newCoords)

    //         // console.log(placedPosition)
    //         // console.log(potentialBoat)

    //         if (this.isArrayInArray(placedPosition, potentialBoat[j])) {
    //             console.log('coords overlap :(')
    //             this.shipCheck()
    //         } else {
    //             placedPosition.push(newCoords)
    //             board[xcoord][ycoord + j] = this.state.ships[i].getName()
    //         }
    //     }
    // }

    placeShips = () => {
        // Logic to place boats randomly below

        // Checks required before placing a boat:
        // 1. Does the boat go off the board
        // 2. Does the boat overlap another boat
        // 3. If checks above pass then place boat
        

        let placedPosition = []
        let board = this.state.board.slice()
        let i
        for (i = 0; i < this.state.ships.length; i++) {
            // First randomly select coordinates for where the boat will start
            let xcoord = Math.floor(Math.random() * 10)
            let ycoord = Math.floor(Math.random() * 10)


            // FIND A WAY TO RESTART THE LOOP HERE IF THE BOAT COORDS FAIL THE IF STATEMENT

            // Get positions in array where boats will be

            let potentialBoat = []
            let newCoords
            let j
            for (j = 0; j < this.state.ships[i].getLength(); j++) {
                newCoords = [xcoord, ycoord + j]
                potentialBoat.push(newCoords)

                // console.log(placedPosition)
                // console.log(potentialBoat)

                // If statement checks if potential coord violates an existing coord
                if (this.isArrayInArray(placedPosition, potentialBoat[j])) {
                    console.log('coords overlap :(')
                    this.placeShips()
                }
            }
            placedPosition.push(potentialBoat)
            console.log(placedPosition)
        }
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