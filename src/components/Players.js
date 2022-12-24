const players = [
  { name: "Aztral" },
  { name: "ApparentlyJack" },
  { name: "Joreuz" },
  { name: "Joyo" },
  { name: "Rise" },
  { name: "Vatira" },
  { name: "Jstn" },
  { name: "GarrettG" },
  { name: "Squishy" },
  { name: "Noly" },
  { name: "Chronic" },
  { name: "Archie" },
];

const setPlayerStats = () => {
  for (const player of players) {
    player["attack"] = Math.floor(Math.random() * 4 + 7);
    player["defence"] = Math.floor(Math.random() * 4 + 7);
  }
};

export { players, setPlayerStats };