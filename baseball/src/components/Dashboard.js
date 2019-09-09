import React from 'react';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({ count: this.state.count + 1 })} > Strike</button>
                <button onClick={() => this.setState({ count: this.state.count + 1 })} > Ball</button>
                <button onClick={() => this.setState({ count: this.state.count + 1 })} > Foul</button>
                <button onClick={() => this.setState({ count: this.state.count + 1 })} >Hit</button>
            </div>
        )
    }
}
export default Dashboard;