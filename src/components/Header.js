const header = () => {
    return (
      <>
        <h1 className="text-5xl font-bold mt-0 mb-6">RLCS Tournament Simulator</h1>
        <h3 className="text-3xl font-bold mb-8">How to use</h3>
        <ol className="list-decimal text-left">
            <li>Select the number of teams you would like to be in the tournament.</li>
            <li>Click 'Create Teams' to allocate the players into teams.</li>
            <li>Click 'Run Tournament' to run the tournament simulation and see the results.</li>
        </ol>
        <p></p>
        <br></br>
      </>
    );
};

export default header;
