const SetupTournament = (props) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          //prevent page refresh
          e.preventDefault();
          
          props.createTeams();
        }}
        id="setup-tournament"
      >
        <div className="flex flex-wrap -mx-3 mb-2">
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
                  let teamSize = Number(e.target.value);
                  props.setTeamSize(teamSize);
                }}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option value="3">3 v 3</option>
                <option value="2">2 v 2</option>
                <option value="1">1 v 1</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
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
                  let numberOfteams = Number(e.target.value);

                  props.setNumberOfTeams(numberOfteams);
                }}
              >
                <option value="16">16</option>
                <option value="8">8</option>
                <option value="4">4</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="md:items-center">
          <div className="w-full"></div>
          <div className="w-full">
            <button
              className="shadow bg-white hover:bg-blue-400 hover:text-white border border-blue-500 focus:shadow-outline focus:outline-none text-blue-500 font-bold py-2 px-4 rounded w-full"
              form="setup-tournament"
              value="Submit"
            >
              Create Teams
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SetupTournament;
