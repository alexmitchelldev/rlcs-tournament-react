import "./index.css";
import Header from "./components/Header";
import RunTournament from "./components/RunTournament";
import TournamentResult from "./components/TournamentResult";
import { useState } from "react";

function App() {
  const TEAM_SIZE = 3;

  const players = [
    { name: "Aztral" },
    { name: "ApparentlyJack" },
    { name: "Joreuz" },
    { name: "Joyo" },
    { name: "Rise" },
    { name: "Vatira" },
    { name: "Jstn" },
    { name: "GarrettG" },
    { name: "Squishy" },
    { name: "Noly" },
    { name: "Chronic" },
    { name: "Archie" },
  ];
  const [teams, setTeams] = useState([
    
  ]);

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

  return (
    <>
      <div>
        <Header />
        <RunTournament createTeams={createTeams}/>
        <h2>Teams</h2>
        <ol>
          {teams.map((team, index) => {
            let teamString = '';
            team.forEach((player, index) => {
              index !== 2 ? teamString += `${player.name}, ` : teamString+= `${player.name}`; 
            })
            return (<li key={index} >{teamString}</li>)
          })}
        </ol>
        <TournamentResult />
      </div>
    </>
  );
}

export default App;
