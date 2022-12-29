const RunTournament = (props) => {
  return (
    <div className="mt-4">
      {props.displayRunTournament ? (
        <form>
          <button
            className="shadow bg-white hover:bg-blue-400 hover:text-white border border-blue-500 focus:shadow-outline focus:outline-none text-blue-500 font-bold py-2 px-4 rounded w-full"
            form="run-tournament"
            value="Submit"
          >
            Run Tournament
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default RunTournament;
