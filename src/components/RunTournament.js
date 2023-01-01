import { useState } from "react";

const RunTournament = (props) => {
  const [results, setResults] = useState([]);
  

  const runTournament = () => {
    if (props.tournamentComplete) {
      alert("Create new set of teams to run another tournament!");
      return;
    }

    let tournamentResults = [];

    for (let i = 0; i < props.teams.length; i++) {
      let randomIndex = Math.floor(Math.random() * props.teams.length);

      while (tournamentResults.includes(props.teams[randomIndex])) {
        randomIndex = Math.floor(Math.random() * props.teams.length);
      }

      tournamentResults.push(props.teams[randomIndex]);
    }

    setResults(tournamentResults);
    props.setTournamentComplete(true);
  };

  return (
    <>
        {props.displayRunTournament ? (
          <><div className="mt-4">
          <form
            onSubmit={(e) => {
              //prevent page refresh
              e.preventDefault();
              runTournament();
              props.setTournamentComplete(true);
            } }
            id="run-tournament"
          >
            <button
              className="shadow bg-white hover:bg-blue-400 hover:text-white border border-blue-500 focus:shadow-outline focus:outline-none text-blue-500 font-bold py-2 px-4 rounded w-full"
              form="run-tournament"
              value="Submit"
            >
              Run Tournament
            </button>
          </form>
        </div><div
          className="flex flex-col overflow-y-scroll w-full text-center mt-4"
          style={{ height: "25vh" }}
        >
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <th className="text-sm font-medium text-gray-900 px-6 py-4">
                  Position
                </th>
                <th
                  className="text-sm font-medium text-gray-900 px-6 py-4"
                  colSpan={props.teamSize}
                >
                  {props.teamSize === 1 ? "Player" : "Team"}
                </th>
                <th className="text-sm font-medium text-gray-900 px-6 py-4">
                  Matches
                </th>
              </thead>
              <tbody class="bg-grey-light">
                {results.map((team, index) => {
                  const players = team.playerNames.map((playerName) => {
                    return (
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {playerName}
                      </td>
                    );
                  });

                  const goldSilverBronzeBackgroundMap = {
                    0: "bg-yellow-300",
                    1: "bg-zinc-200",
                    2: "bg-orange-400",
                  };

                  let backgroundColor = "bg-white";

                  if (index > -1 && index < 3) {
                    backgroundColor = goldSilverBronzeBackgroundMap[index];
                  }

                  const getPosition = (index) => {
                    let position = null;


                    if ([0].indexOf(index) > -1) {
                      position = "1st";
                    } else if ([1].indexOf(index) > -1) {
                      position = "2nd";
                    } else if ([2, 3].indexOf(index) > -1) {
                      position = "3rd/4th";
                    } else if ([4, 5, 6, 7].indexOf(index) > -1) {
                      position = "5-8th";
                    } else if ([8, 9, 10, 11, 12, 13, 14, 15].indexOf(index) > -1) {
                      position = "9-16th";
                    }

                    return position;
                  };

                  let rowClass = `justify-between w-full mb-4 border-b ${backgroundColor}`;

                  return (
                    <tr className={rowClass}>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {getPosition(index)}
                      </td>
                      {players}
                      <td></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div></>
        ) : null}
    </>
  );
};

export default RunTournament;
