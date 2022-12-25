const header = () => {
    return (
      <>
      <div className="text-center">
      <h1 className="text-5xl font-bold mt-0 mb-6">RLCS Tournament Simulator</h1>
        <h2 className="text-3xl font-bold mb-8 text-left">How to use</h2>
        <ol className="list-decimal text-left">
            <li>Select the number of teams you would like to be in the tournament.</li>
            <li>Click 'Create Teams' to allocate the players into teams.</li>
            <li>Click 'Run Tournament' to run the tournament simulation and see the results.</li>
        </ol>
      </div>
        
      </>
    );
};

export default header;
