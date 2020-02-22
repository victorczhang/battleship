import React, { Component } from 'react'
import Grid from './Grid';
import OpponentGrid from './OpponentGrid';

class Player extends Component {
    constructor() {
        super()
        this.state = {
            rotate: false,
            active: false,
            player: 0,
            // player2: false,
            winner: false,
        }
    }

    // handlePlayer = () => {
    //     this.setState(
    //         {
    //             player1: !this.state.player1,
    //         }
    //     )
    //     console.log('handle player testing')
    // }

    playGame = () => {
        // let k
        while (this.state.winner === false) {
            if (this.state.player === 0) {
                console.log('player 0')
                this.setState(
                    {
                        player: 1,
                        winner: true
                    }
                )
            }
            else if (this.state.player === 1) {
                console.log('player 1')
                this.setState(
                    {player: 0}
                )
            }
            console.log('hoho')
        }
        console.log('Test')
    }

    // componentDidMount() {
    //     this.playGame()
    // }

    handleWinner = () => {
        this.setState(
            {
                winner: true
            }
        )
    }

    render() {
        return (
            <div>
                <div>
                    <Grid
                        player1={this.state.player1}
                        player2={this.state.player2}
                        handlePlayer={this.handlePlayer}
                        winner={this.state.winner} />
                    <h2>Your Board</h2>
                </div>
                <div>
                    <OpponentGrid
                        player1={this.state.player1}
                        player2={this.state.player2}
                        handlePlayer={this.handlePlayer}
                        winner={this.state.winner} />
                    <h2>Opponent Board</h2>
                </div>
                <div>
                    <button onClick={this.playGame}>PLAY THE GAME</button>
                </div>
            </div>
        )
    }
}

export default Player