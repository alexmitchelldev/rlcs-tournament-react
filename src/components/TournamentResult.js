const TournamentResult = (props) => {
  const indexMap = {
    0: "1st: ",
    1: "2nd: ",
    2: "3rd/4th: ",
    3: "3rd/4th: ",
  };
  return (
    <>
      <button onClick={props.run}>Run Tournament</button>
      {props.displayResults ? (
        <>
        <h3>RESULTS!!</h3>
        <ul>
          {props.results.map((team, index) => {
            let resultString = "";
            team.forEach((player, index) => {
              index !== 2
                ? (resultString += `${player.name}, `)
                : (resultString += `${player.name}`);
            });
            return (
              <li key={index}>
                {indexMap[index]} {resultString}
              </li>
            );
          })}
        </ul>
        </>
      ) : null}
    </>
  );
};

export default TournamentResult;
