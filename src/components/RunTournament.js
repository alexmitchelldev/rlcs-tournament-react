import Button from "react-bootstrap/Button";

const RunTournament = (props) => {
  return (
    <>
      <label for="number-of_teams">Select number of teams:</label>
      <select name="number-of-teams" id="number-of-teams">
        <option value="4">4</option>
        {/* <option value="8">8</option> */}
        {/* <option value="16">16</option> */}
      </select>
      <button
        onClick={props.createTeams}
        className="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-500 hover:border-transparent"
      >
        Create Teams
      </button>
    </>
  );
};

export default RunTournament;
