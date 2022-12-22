const TournamentResult = () => {
  const displayResult = false;
  return (
    <>
      {displayResult ? (
        <ul>
          <li>1st - </li>
          <li>2nd - </li>
          <li>3rd/4th - </li>
          <li>5-8th - </li>
          <li>9-16th - </li>
        </ul>
      ) : null}
    </>
  );
};

export default TournamentResult;
