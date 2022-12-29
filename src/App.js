import "./index.css";
import Header from "./components/Header";
import { players } from "./components/Player";
import { Teams, Team } from "./components/Teams";
import SetupTournament from "./components/SetupTournament";
import RunTournament from "./components/RunTournament";
import { useState } from "react";

function App() {
  const [TEAM_SIZE, setTeamSize] = useState(3);
  const [NUMBER_OF_TEAMS, setNumberOfTeams] = useState(16);
  const [tournamentComplete, setTournamentComplete] = useState(false);
  const [displayTeamsTable, setDisplayTeamsTable] = useState(false);
  const [displayRunTournament, setDisplayRunTournament] = useState(false);
  const [displayResult, setDisplayResult] = useState(false);
  const [teams, setTeams] = useState([]);
  const createTeams = () => {
    let usedPlayers = [];
    let teams = [];

    for (let i = 0; i < NUMBER_OF_TEAMS; i++) {
      let teamPlayers = [];

      for (let j = 0; j < TEAM_SIZE; j++) {
        let randomPlayerIndex = Math.floor(Math.random() * players.length);

        while (usedPlayers.includes(players[randomPlayerIndex])) {
          randomPlayerIndex = Math.floor(Math.random() * players.length);
        }

        usedPlayers.push(players[randomPlayerIndex]);
        teamPlayers.push(players[randomPlayerIndex]);
      }

      const teamNumber = `${i + 1}`;
      let team = new Team(teamNumber, teamPlayers);

      teams.push(team);
    }

    teams.sort((a, b) => {
      return b.score - a.score;
    })

    setTeams(teams);
    setDisplayTeamsTable(true);
    setDisplayRunTournament(true);
    setTournamentComplete(false);
  };
  const [results, setResults] = useState([]);

  const runTournament = () => {
    if (tournamentComplete) {
      alert("Create new set of teams to run another tournament!");
      return;
    }

    let tournamentResults = [];

    for (let i = 0; i < teams.length; i++) {
      let randomIndex = Math.floor(Math.random() * teams.length);

      while(tournamentResults.includes(teams[randomIndex])) {
        randomIndex = Math.floor(Math.random() * teams.length);
      }

      tournamentResults.push(teams[randomIndex]);
    }

    setResults(tournamentResults);
    console.log(tournamentResults);
    setTournamentComplete(true);
  }

  return (
    <>
      <div style={{ width: "60%", margin: "0 auto", height: "97vh", marginTop: "10px", padding: "15px", backgroundColor: "white", borderRadius: "10px"}}>
        <Header />
        <SetupTournament
          setTeamSize={setTeamSize}
          setNumberOfTeams={setNumberOfTeams}
          createTeams={createTeams}
          setDisplayTeamsTable={setDisplayTeamsTable}
          setDisplayRunTournament={setDisplayRunTournament}
          setResults={setResults}
        />
        <Teams
          teams={teams}
          teamSize={TEAM_SIZE}
          displayTeamsTable={displayTeamsTable}
        />
        <RunTournament displayRunTournament={displayRunTournament} runTournament={runTournament} results={results} teamSize={TEAM_SIZE}/>
      </div>
    </>
  );
}

export default App;
