import "./index.css";
import Header from "./components/Header";
import { players } from "./components/Players";
import Teams from "./components/Teams";
import SetupTournament from "./components/SetupTournament";
import TournamentResult from "./components/TournamentResult";
import { useState } from "react";

function App() {
  const [TEAM_SIZE, setTeamSize] = useState(3);
  const [NUMBER_OF_TEAMS, setNumberOfTeams] = useState(16);
  const [tournamentComplete, setTournamentComplete] = useState(false);
  const [displayResult, setDisplayResult] = useState(false);
  const [teams, setTeams] = useState([]);
  const createTeams = () => {
    let usedPlayers = [];
    let teams = [];

    for (let i = 0; i < NUMBER_OF_TEAMS; i++) {
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
    <Header />
      <div style={{width: "550px"}} className="text-center ml-10">
        
        <SetupTournament setTeamSize={setTeamSize} setNumberOfTeams={setNumberOfTeams} createTeams={createTeams} />
        {/* <br></br> */}
        <Teams teams={teams} teamSize={TEAM_SIZE}/>
        {/* <TournamentResult
          run={run}
          results={results}
          displayResults={displayResult}
        /> */}
      </div>
    </>
  );
}

export default App;
