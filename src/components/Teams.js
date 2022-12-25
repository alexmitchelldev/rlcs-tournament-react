const Teams = (props) => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8">Teams</h2>
      <div className="text-left">
        <ol>
          {props.teams.map((team, index) => {
            let teamString = "";
            team.forEach((player, index) => {
              index !== 2
                ? (teamString += `${player.name}, `)
                : (teamString += `${player.name}`);
            });
            return (
              <li key={index}>
                Team{index + 1}: {teamString}
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default Teams;
