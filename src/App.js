import "./index.css";
import Header from "./components/Header";
import { players, setPlayerStats } from "./components/Players";
import Teams from "./components/Teams";
import RunTournament from "./components/RunTournament";
import TournamentResult from "./components/TournamentResult";
import background from "./assets/rlcs-background.webp";
import { useState } from "react";

function App() {
  const TEAM_SIZE = 3;
  const [displayResult, setDisplayResult] = useState(false);
  const [teams, setTeams] = useState([]);
  const createTeams = () => {
    let usedPlayers = [];
    let teams = [];

    for (let i = 0; i < 4; i++) {
      let team = [];
      for (let j = 0; j < TEAM_SIZE; j++) {
        let randomPlayerIndex = Math.floor(Math.random() * players.length);

        while (usedPlayers.includes(players[randomPlayerIndex])) {
          randomPlayerIndex = Math.floor(Math.random() * players.length);
        }

        usedPlayers.push(players[randomPlayerIndex]);
        team.push(players[randomPlayerIndex]);
      }
      teams.push(team);
    }

    setTeams(teams);
  };
  const [results, setResult] = useState([]);
  const run = () => {
    let results = [];

    let randomIndex = Math.floor(Math.random() * teams.length);

    for (let i = 0; i < teams.length; i++) {
      while (results.includes(teams[randomIndex])) {
        randomIndex = Math.floor(Math.random() * teams.length);
      }

      results.push(teams[randomIndex]);
    }

    setResult(results);
    setDisplayResult(true);
  };

  

  setPlayerStats();

  return (
    <>
    {/* https://stackoverflow.com/questions/38428322/react-component-full-screen-with-height-100 */}
      <div
        style={{
          height: '100vh',
          // backgroundImage: `url(${background})`,
          // backgroundRepeat: 'no-repeat',
          // backgroundSize: 'cover',
        }}
      >
        <Header />
        <RunTournament createTeams={createTeams} />
        <Teams teams={teams}/>
        <TournamentResult
          run={run}
          results={results}
          displayResults={displayResult}
        />
      </div>
    </>
  );
}

export default App;
