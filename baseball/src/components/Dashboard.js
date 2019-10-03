import React from 'react';

function Dashboard(props) {

    return (
        <div>

            <button onClick={() => props.strikesHandler()}>Strikes</button>
            <button onClick={() => props.ballsHandler()}> Balls</button>
            <button onClick={() => props.foulsHandler()}> Fouls</button>
            <button onClick={() => props.hitsHandler()}>Hits</button>
        </div>
    )
}

export default Dashboard;