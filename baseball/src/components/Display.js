import React from 'react';
import Dashboard from './Dashboard';

class Display extends React.Component {
    constructor() {
        super();
        this.state = {
            hits: this.props.count,
            strike: 0,
            ball: 0,
            foul: 0
        }

        let strike = () => {
            if (hits >= 3) {
                this.setState(strike = 0);
            } else {
                this.setState(strike + 1);
            }

        }
        const ball = (props) => {
            if (hits >= 4) {
                this.setState(ball = 0);
            } else {
                this.setState(ball + 1);
            }
            const foul = (count) => {
                if (hits === 2) {
                    this.setState(foul = 2)
                } else if (hits === 1) {
                    this.setState(foul + 1)
                } else {
                    this.setState(foul + 1)
                }

            }
        }
    }
    render() {
        return (


            <div>
                <Display
                    hitStrikes={this.state.strike}
                    hitBalls={this.state.ball} />
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