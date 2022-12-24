const TournamentResult = (props) => {
  const indexMap = {
    0: "1st: ",
    1: "2nd: ",
    2: "3rd/4th: ",
    3: "3rd/4th: ",
    4: "5th-8th: ",
    5: "5th-8th: ",
    6: "5th-8th: ",
    7: "5th-8th: ",
    8: "9th-16th: ",
    9: "9th-16th: ",
    10: "9th-16th: ",
    11: "9th-16th: ",
    12: "9th-16th: ",
    13: "9th-16th: ",
    14: "9th-16th: ",
    15: "9th-16th: ", 
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
