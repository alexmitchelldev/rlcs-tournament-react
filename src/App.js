import "./index.css";
import Header from "./components/Header";
import RunTournament from "./components/RunTournament";
import Teams from "./components/Teams";
import TournamentResult from "./components/TournamentResult";

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
  const teams = [];
  return (
    <>
      <div>
        <Header />
        <RunTournament />
        <Teams />
        <TournamentResult />
      </div>
    </>
  );
}

export default App;
