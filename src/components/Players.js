let players = [
  { name: "Aztral" }, { name: "ApparentlyJack" }, { name: "Joreuz" },
  { name: "Joyo" }, { name: "rise." }, { name: "vatira." },
  { name: "jstn." }, { name: "GarrettG" }, { name: "SquishyMuffinz" },
  { name: "noly" }, { name: "Chronic" }, { name: "Archie" },
  { name: "caard" }, { name: "yanxnz" }, { name: "CaioTG1" },
  { name: "M0nkey M00n" }, { name: "Extra" }, { name: "Seikoo" },
  { name: "Chicago" }, { name: "Atomic" }, { name: "Jknaps" },
  { name: "Sypical" }, { name: "Firstkiller" }, { name: "AYYJAYY" },
  { name: "trk511" }, { name: "oKhaliD" }, { name: "Ahmad" },
  { name: "Deevo" }, { name: "crr" }, { name: "Deevo" },
  { name: "DORITO" }, { name: "ApparentlyJack" }, { name: "Daniel" },
  { name: "torment" }, { name: "comm" }, { name: "BeastMode" },
  { name: "Arsenal" }, { name: "Retals" }, { name: "Itachi" },
  { name: "Faith" }, { name: "ams" }, { name: "RelatingWave" },
  { name: "Zez0nix" }, { name: "M7sN" }, { name: "ExoTiiK" },
  { name: "shad" }, { name: "Rw9." }, { name: "ajg." },
  { name: "Metsanauris" }, { name: "Reysbull" }, { name: "LionBlaze" },
  { name: "Scrub Killa"} 
];

const randomStat = () => {
  return Math.floor(Math.random() * 4 + 7);
}

players = players.map(player => {
  return {...player, attack: randomStat(), defence: randomStat()};
})

export { players };