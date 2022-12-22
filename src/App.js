import './index.css';
import Header from './components/Header';
import RunTournament  from './components/RunTournament';
import TournamentResult from './components/TournamentResult';

function App() {
  return (
    <>
      <div>
        <Header />
        <RunTournament />
        <TournamentResult />
      </div>
    </>
  );
}

export default App;
