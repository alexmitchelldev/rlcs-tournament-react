import { useEffect, useState } from "react";
import RunTournament from "./RunTournament";
import { Teams, Team } from "./Teams";

const SetupTournament = (props) => {
  const [players, setPlayers] = useState([]);

  // Fetch all players from DB
  useEffect(() => {
    fetch("http://localhost:8001/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  });

  const [teams, setTeams] = useState([]);
  const [teamSize, setTeamSize] = useState(3);
  const [numberOfTeams, setNumberOfTeams] = useState(16);

  const [results, setResults] = useState([]);
  const [tournamentComplete, setTournamentComplete] = useState(false);
  const [displayTeamsTable, setDisplayTeamsTable] = useState(false);
  const [displayRunTournament, setDisplayRunTournament] = useState(false);
  
  const createTeams = () => {
    let usedPlayers = [];
    let teams = [];

    for (let i = 0; i < numberOfTeams; i++) {
      let teamPlayers = [];

      for (let j = 0; j < teamSize; j++) {
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
    });

    setTeams(teams);
    setDisplayTeamsTable(true);
    setDisplayRunTournament(true);
    setTournamentComplete(false);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          //prevent page refresh
          e.preventDefault();

          createTeams();
        }}
        id="setup-tournament"
      >
        <div className="flex flex-wrap -mx-3 mb-2 text-center">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Tournament Type
            </label>
            <div className="relative">
              <select
                onChange={(e) => {
                  let newTeamSize = Number(e.target.value);
                  setTeamSize(newTeamSize);
                  setDisplayTeamsTable(false);
                  setDisplayRunTournament(false);
                }}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option value="3">3 v 3</option>
                <option value="2">2 v 2</option>
                <option value="1">1 v 1</option>
              </select>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Number of teams
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) => {
                  let newNumberOfTeams = Number(e.target.value);
                  setNumberOfTeams(newNumberOfTeams);
                  setDisplayTeamsTable(false);
                  setDisplayRunTournament(false);
                }}
              >
                <option value="16">16</option>
                <option value="8">8</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
        </div>
        <button
          className="shadow bg-white hover:bg-blue-400 hover:text-white border border-blue-500 focus:shadow-outline focus:outline-none text-blue-500 font-bold py-2 px-4 rounded w-full"
          form="setup-tournament"
          value="Submit"
        >
          Create Teams
        </button>
      </form>
      <Teams teams={teams} teamSize={teamSize} numberOfTeams={numberOfTeams} displayTeamsTable={displayTeamsTable}/>
      <RunTournament teams={teams} displayRunTournament={displayRunTournament} setTournamentComplete={setTournamentComplete} tournamentComplete={tournamentComplete}/>
    </>
  );
};

export default SetupTournament;
