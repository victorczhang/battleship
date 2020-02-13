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
        }
    }

    handleClick = (e) => {
        const newBoard = this.state.board.slice()

        if (newBoard[e.target.parentElement.id][e.target.id] === 'X') {
            alert('Hit!')
        } else {
            newBoard[e.target.parentElement.id].splice(e.target.id, 1, 'O')
            this.setState({
                board: newBoard,
            })
        }
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    randomBoats = () => {
        const newBoard = this.state.board.slice()
        const boats = [['X', 'X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'X', 'X'], ['X', 'X', 'X'], ['X', 'X']]

        let i;
        for (i = 0; i < boats.length; i++) {
            let randomRow = this.getRandomInt(10)
            let randomIndex = Math.abs(boats[i].length - this.getRandomInt(10))

            if (newBoard[randomRow][randomIndex] !== 'X') {
                newBoard[randomRow].splice(randomIndex, boats[i].length, ...boats[i])
                newBoard[randomRow].length = 10;
            }

            this.setState({
                board: newBoard,
            })
        }
    }

    componentDidMount() {
        this.randomBoats()
    }

    handleClick = (e) => {
        const newBoard = this.state.board.slice()

        if (newBoard[e.target.parentElement.id][e.target.id] === 'X') {
            alert('Hit!')
            newBoard[e.target.parentElement.id].splice(e.target.id, 1, 'H')
            this.setState({
                board: newBoard,
            })
        } else {
            newBoard[e.target.parentElement.id].splice(e.target.id, 1, 'O')
            this.setState({
                board: newBoard,
            })
        }
    }

    render() {
        // console.log(this.state.board)
        const grid = this.state.board.map((row, index) => {
            return (
                <tr id={index} key={index}>
                    {row.map((item, index) => {
                        return (
                            <td className='emptyCell' id={index} key={index} onClick={this.handleClick}></td>
                        )
                    }
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

export default OpponentGrid