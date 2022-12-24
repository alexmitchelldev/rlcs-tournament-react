const Teams = (props) => {
  return (
    <>
      <h2>Teams</h2>
      <ol>
        {props.teams.map((team, index) => {
          let teamString = "";
          team.forEach((player, index) => {
            index !== 2
              ? (teamString += `${player.name}, `)
              : (teamString += `${player.name}`);
          });
          return <li key={index}>{teamString}</li>;
        })}
      </ol>
    </>
  );
};

export default Teams;
