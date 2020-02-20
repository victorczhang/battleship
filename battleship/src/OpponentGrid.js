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

    shipCheck = (placedPosition, potentialBoat, newCoords, ships, xcoord, ycoord, iteration) => {
        let j
        for (j = 0; j < ships[iteration].getLength(); j++) {
            newCoords = [xcoord, ycoord + j]
            potentialBoat.push(newCoords)

            // console.log(placedPosition)
            // console.log(potentialBoat)

            // If statement checks if potential coord violates an existing coord
            if (this.isArrayInArray(placedPosition, potentialBoat[j])) {
                console.log('coords overlap :(')
                this.shipCheck(placedPosition, potentialBoat, newCoords, ships, xcoord, ycoord, iteration)
            }
        }
    }

    placeShips = () => {
        // Logic to place boats randomly below

        // Checks required before placing a boat:
        // 1. Does the boat go off the board
        // 2. Does the boat overlap another boat
        // 3. If checks above pass then place boat


        // let placedPosition = []
        // let board = this.state.board.slice()
        // let i
        // for (i = 0; i < this.state.ships.length; i++) {
        //     // First randomly select coordinates for where the boat will start
        //     let xcoord = Math.floor(Math.random() * 10)
        //     let ycoord = Math.floor(Math.random() * 10)

        //     // Get positions in array where a boat will be
        //     let potentialBoat = []
        //     let newCoords

        //     // FIND A WAY TO RESTART THE LOOP HERE IF THE BOAT COORDS FAIL THE IF STATEMENT

        //     let j
        //     for (j = 0; j < this.state.ships[i].getLength(); j++) {
        //         newCoords = [xcoord, ycoord + j]
        //         potentialBoat.push(newCoords)

        //         // console.log(placedPosition)
        //         // console.log(potentialBoat)
        //         // if (this.isArrayInArray(placedPosition, potentialBoat[j])) {
        //         //     console.log('coords overlap :(')
        //         //     // this.placeShips()
        //         // } 
        //         // board[xcoord][ycoord + j] = this.state.ships[i].getName()
        //     }
            
        //     // Use .every() to see if every item in the potentialBoat array does NOT equal an item in the placedPosition
            
        //     // This is probably where I print out a boat after it is checked and passes
        //     // console.log(potentialBoat)
        // }

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
                    // Check if it goes off the board:

                    // HERE

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
        
        // console.log(placedPosition)
        // console.log(placedPosition[0])
        
        let test = this.state.board.slice()

        // let b
        // for (b = 0; b < this.state.ships[0].getLength(); b++) {
        //     console.log(b)
        //     let xc = placedPosition[b][0]
        //     let yc = placedPosition[b][1]

        //     test[xc][yc] = this.state.ships[0].getName()
        // }


        let a
        for (a=0; a < this.state.ships.length; a++) {
            console.log(a)
            let b
            for (b=0; b < this.state.ships[a].getLength(); b++) {
                console.log(b)
                let xc = placedPosition[b][0]
                let yc = placedPosition[b][1]

                test[xc][yc] =  this.state.ships[a].getName()
            }
            placedPosition.splice(0, this.state.ships[a].getLength())
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