class Team {
  constructor(name, players) {
    this.name = name;
    this.players = players;
    this.playerNames = this.getPlayerNames();
    this.score = this.calculateTeamScore();
  }

  calculateTeamScore() {
    return this.players.reduce((teamScore, player) => {
      return teamScore + player.score;
    }, 0);
  }

  getPlayerNames() {
    return this.players.map((player) => {
      return player.name;
    });
  }
}

const Teams = (props) => {
  return (
    <>
      {props.displayTeamsTable ? (
        // https://www.tailwindcsscomponent.com/fixed-height-scrollable-table
        <div
          className="flex flex-col overflow-y-scroll w-full text-center mt-4"
          style={{ height: "25vh" }}
        >
          <table className="min-w-full">
            <thead className="bg-white border-b">
              <th className="text-sm font-medium text-gray-900 px-6 py-4">
                {props.teamSize === 1 ? "Player #" : "Team #"}
              </th>
              <th
                className="text-sm font-medium text-gray-900 px-6 py-4"
                colSpan={props.teamSize}
              >
                {props.teamSize === 1 ? "Player" : "Players"}
              </th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4">
                Score
              </th>
            </thead>
            <tbody class="bg-grey-light">
              {props.teams.map((team, index) => {
                const players = team.playerNames.map((playerName) => {
                  return (
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {playerName}
                    </td>
                  );
                });

                let backgroundColor =
                  index % 2 === 0
                    ? "bg-gray-100 border-b"
                    : "bg-white border-b";
                let rowClass = `justify-between w-full mb-4 ${backgroundColor}`;

                return (
                  <tr className={rowClass}>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    {players}
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {team.score}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
};

export { Teams, Team };
