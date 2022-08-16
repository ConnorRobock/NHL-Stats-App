import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayStats from './DisplayStats';

function App() {

const [nhlTeams, setNhlTeams] = useState([]);
const [userChoice, setUserChoice] = useState('placeholder');
const [selectedTeam, setSelectedTeam] = useState([]);

useEffect(() => {
    axios({
      // Sample of stats URL "https://statsapi.web.nhl.com/api/v1/people/8478483/stats?stats=statsSingleSeason&season=20212022"
      // sample of all teams URL "https://statsapi.web.nhl.com/api/v1/teams"
      // sample of all teams w/stats url "https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats"
      // sample of all teams w/roster url "https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster&season=20192022"
      
      url: "https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats",
      method: "GET",
      dataResponse: "json"

    }).then((res) => {
      // console.log(res.data.teams);
      setNhlTeams(res.data.teams)
    });
  }, [])

  const handleUserChoice = (e) => {
    setUserChoice(e.target.value);
  }

  // gets individual team name and corresponding array
  const getTeam = (e) => {
    e.preventDefault();
    const team = nhlTeams.filter(team => team.name === userChoice);
    setSelectedTeam(team)
    console.log(team)
  }

  return (
    <div className="App">
        <h1>NHL Stats</h1>
        <section>
          <h2>Pick an Nhl Team</h2>
          <form onSubmit={(e) => getTeam(e)}>
            <select 
            onChange={handleUserChoice} 
            value={userChoice}>
                <option value="placeholder">Pick a Team:</option>
              {
                nhlTeams.map(team => {
                  return(
                    <option key={team.id} value={team.name}>{team.name}</option>
                  )
                })
              }
            </select>
            <button type='submit'>Show Teams Stats</button>
          </form>
          {/* <DisplayStats team={selectedTeam.length !== 0 ? selectedTeam : }/> */}
          {
            selectedTeam.length !== 0 ? <DisplayStats team={selectedTeam} /> : <p>Please Select a Team</p>
          }
          
        </section>
    </div>
  );
}

export default App;
