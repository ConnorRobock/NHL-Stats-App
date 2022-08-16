// DisplayStats.js

function DisplayStats(props) {
    const stats = props.team[0].teamStats[0].splits[0].stat;
    const teamName = props.team[0].teamStats[0].splits[1].team.name;
    console.log(props);    
    return(
        <div>
            <h2>{teamName} Stats:</h2>  
            <ul>
                <li>
                    <p>Games Played: {`${stats.gamesPlayed}`}</p>
                </li>
                <li>
                    <p>Wins: {`${stats.wins}`}</p>
                </li>
                <li>
                    <p>Losses: {`${stats.losses}`}</p>
                </li>
                <li>
                    <p>OT Losses: {`${stats.ot}`}</p>
                </li>
                <li>
                    <p>Points: {`${stats.pts}`}</p>
                </li>
                <li>
                    <p>Power Play %: {`${stats.powerPlayPercentage}`}%</p>
                </li>
                <li>
                    <p>Penalty Kill %: {`${stats.penaltyKillPercentage}`}%</p>
                </li>

            </ul>
        </div>
    )
    // )
    
}

export default DisplayStats;