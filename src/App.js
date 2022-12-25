import "./index.css";
import Header from "./components/Header";
import { players } from "./components/Players";
import Teams from "./components/Teams";
import SetupTournament from "./components/SetupTournament";
import TournamentResult from "./components/TournamentResult";
import { useState } from "react";

function App() {
  const TEAM_SIZE = 3;
  const [tournamentComplete, setTournamentComplete] = useState(false);
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
    setTournamentComplete(false);
  };
  const [results, setResults] = useState([]);
  const run = () => {
    if (tournamentComplete) {
      alert("Create new set of teams to run another tournament!");
      return;
    }

    let results = [];

    let randomIndex = Math.floor(Math.random() * teams.length);

    for (let i = 0; i < teams.length; i++) {
      while (results.includes(teams[randomIndex])) {
        randomIndex = Math.floor(Math.random() * teams.length);
      }

      results.push(teams[randomIndex]);
    }

    setResults(results);
    setTournamentComplete(true);

    if (teams.length > 0) {
      setDisplayResult(true);
    }
  };

  return (
    <>
    {/* https://daily-dev-tips.com/posts/center-elements-with-tailwind-css/ */}
      <div style={{width: "500px", margin: "0 auto"}} className="text-center">
        <Header />
        <SetupTournament createTeams={createTeams} />
        {/* <br></br> */}
        <Teams teams={teams} />
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
