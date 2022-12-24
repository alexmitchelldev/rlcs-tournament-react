let players = [
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

const randomStat = () => {
  return Math.floor(Math.random() * 4 + 7);
}

players = players.map(player => {
  return {...player, attack: randomStat(), defence: randomStat()};
})

export { players };