const Teams = (props) => {
  return (
    <>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      {props.teamSize === 1 ? 'Player #' : 'Team #'}
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      {props.teamSize === 1 ? 'Player' : 'Players'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.teams.map((team, index) => {
                    let players = team.map((player) => {
                      return (
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {player.name}
                        </td>
                      );
                    });

                    return (
                      <tr class="bg-gray-100 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        {players}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
