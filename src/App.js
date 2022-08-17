import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayStats from './DisplayStats';
import Header from './Header';
import Footer from './Footer';

function App() {

const [nhlTeams, setNhlTeams] = useState([]);
const [userChoice, setUserChoice] = useState('placeholder');
const [selectedTeam, setSelectedTeam] = useState([]);

useEffect(() => {
// API call from statsapi using axios. Get Teams Array, includes stats
    axios({
      url: "https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats",
      method: "GET",
      dataResponse: "json"

    }).then((res) => {
      setNhlTeams(res.data.teams)
    });
  }, [])

  // Sets users selection from the dropdown menu
  const handleUserChoice = (e) => {
    setUserChoice(e.target.value);
  }

  // gets individual team name and corresponding array
  const getTeam = (e) => {
    e.preventDefault();
    const team = nhlTeams.filter(team => team.name === userChoice);
    setSelectedTeam(team)
    console.log(selectedTeam, "nhlteams");
  }

  return (
    <div className="App">
        <Header />
        <section className='statsSection'>
          <div className='wrapper'>
            <h2 className='statsHeader'>Pick an Nhl Team</h2>
            <form onSubmit={(e) => getTeam(e)}>
              <select 
              id="dropdown"
              onChange={handleUserChoice} 
              value={userChoice}>
                  <option value="placeholder" disabled>Pick a Team:</option>
                { 
                  nhlTeams.map(team => {
                    return(
                      <option key={team.id} value={team.name}>
                        {team.name}
                      </option>
                    )
                  })
                }
              </select>
              <button type='submit'>Show Teams Stats</button>
            </form>
            {
              selectedTeam.length !== 0 ? <DisplayStats team={selectedTeam} /> : <p>Please Select a Team</p>
            }
          </div>
        </section>
        <Footer />
    </div>
  );
}

export default App;
