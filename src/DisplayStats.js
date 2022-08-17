// DisplayStats.js

function DisplayStats(props) {
    const stats = props.team[0].teamStats[0].splits[0].stat;
    const teamName = props.team[0].teamStats[0].splits[1].team.name;
    return(
            
        <section className="teamStats">
        <h2>{teamName} Stats:</h2>
            <div className="statsContainer">
                <h3>Team Stats:</h3>
                <ul>
                    <li>
                        <p>Games Played: {`${stats.wins}`}</p>
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
        </section>
    )
    // )
    
}

export default DisplayStats;