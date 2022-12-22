const RunTournament = (props) => {
    return (
        <>
            <label for="number-of_teams">Select number of teams:</label>
            <select name="number-of-teams"id="number-of-teams">
                <option value="4">4</option>
                {/* <option value="8">8</option> */}
                {/* <option value="16">16</option> */}
            </select>
            <button onClick={props.createTeams}>Create Teams</button>
            <br></br>
            {/* <button>
                Run tournament
            </button> */}
        </>
    )
};

export default RunTournament;