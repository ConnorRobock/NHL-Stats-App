// DisplayStats.js

function DisplayStats(props) {
    const wins = props.team[0].teamStats[0].splits[0].stat.wins
    console.log(wins, "wins");

    return(
        <div>
            <h2>Team Stats:</h2>  
            <p>{wins}</p>
        </div>
    )
}

export default DisplayStats;