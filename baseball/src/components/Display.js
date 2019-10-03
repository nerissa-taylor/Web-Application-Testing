import React from 'react';
import Dashboard from './Dashboard';

class Display extends React.Component {



    state = {
        strikes: 0,
        balls: 0,
        fouls: 0
    }
    strikesHandler = () => {
        const strikes = this.state.strikes;
        if (strikes < 2) {
            this.setState({ strikes: this.state.strikes + 1 })
        } else {
            this.setState({ strikes: 0 })
        }
    };

    ballsHandler = () => {
        const balls = this.state.balls;
        if (balls < 3) {
            this.setState({ balls: this.state.balls + 1 })
        } else {
            this.setState({ balls: 0 });
        }
    };
    hitsHandler = () => {
        this.setState({ balls: 0, strikes: 0 })

    }
    foulHandler = () => {
        const fouls = this.state.fouls;
        if (fouls < 2) {
            this.setState({ strikes: 2 })
        } else if (fouls == 1) {
            this.setState({ strikes: this.state.strikes + 1 })
        } else {
            this.setState({ fouls: this.state.fouls + 1 })
        }

    }


    render() {
        return (


            <div>
                <Dashboard ballsHandler={this.ballsHandler}
                    strikesHandler={this.strokeHandler}
                    foulHandler={this.foulHandler}
                />

            </div>
        )

        //             balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
        // balls and strikes reset to 0 when a hit is recorded.
        // a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.
        // Display
        // display the count of balls and strikes for the at-bat

    }
}
export default Display;