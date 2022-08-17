// DisplayStats.js

function DisplayStats(props) {
    const stats = props.team[0].teamStats[0].splits[0].stat;
    const teamName = props.team[0].teamStats[0].splits[1].team.name;
    const rank = props.team[0].teamStats[0].splits[1].stat;

    return(
            
        <section className="teamStats">
        <h2>{teamName} Stats:</h2>
            <div className="flexContainer">
                <div className="statsContainer">
                    <h3>Team Stats:</h3>
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
                <div className="statsContainer">
                    <h3>League Rank:</h3>
                    <ul>
                        <li>
                            <p>Games Played: n/a</p>
                        </li>
                        <li>
                            <p>Wins: {`${rank.wins}`}</p>
                        </li>
                        <li>
                            <p>Losses: {`${rank.losses}`}</p>
                        </li>
                        <li>
                            <p>OT Losses: {`${rank.ot}`}</p>
                        </li>
                        <li>
                            <p>Points: {`${rank.pts}`}</p>
                        </li>
                        <li>
                            <p>Power Play %: {`${rank.powerPlayPercentage}`}</p>
                        </li>
                        <li>
                            <p>Penalty Kill %: {`${rank.penaltyKillPercentage}`}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
    // )
    
}

export default DisplayStats;