const header = () => {
  return (
    <>
      <div className="text-center mb-5">
        <h1 className="text-5xl font-bold mt-0 mb-6">
          RLCS Tournament Simulator
        </h1>
        <ul class="list-none">
          <li>Select the tournament type and number of teams</li>
          <li>
            Click 'Create Teams' to randomly allocate players into teams
          </li>
          <li>
            Click 'Run Tournament' to run the tournament simulation and see
            the results
          </li>
        </ul>
      </div>
    </>
  );
};

export default header;
