import "./index.css";
import Header from "./components/Header";
import RunTournament from "./components/RunTournament";
import TournamentResult from "./components/TournamentResult";
import { useState } from "react";

function App() {
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
        for (let j = 0; j < 3; j++) {
            let randomIndex = Math.floor(Math.random() * players.length);

            while (usedPlayers.includes(players[randomIndex])) {
                randomIndex = Math.floor(Math.random() * players.length);
            }

            usedPlayers.push(players[randomIndex]);
            team.push(players[randomIndex]);
        }
        teams.push(team);
    }

    setTeams(teams);
    // console.log(teams);
  };

  return (
    <>
      <div>
        <Header />
        <RunTournament createTeams={createTeams}/>
        <Teams />
        <TournamentResult />
      </div>
    </>
  );
}

export default App;
