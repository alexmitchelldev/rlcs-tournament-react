class Player{
  constructor(name) {
    this.name = name;
    this.attack = this.getRandomStat();
    this.defence = this.getRandomStat();
    this.score = this.calculatePlayerScore();
  }

  getRandomStat () {
    return Math.floor(Math.random() * 4 + 7);
  }

  calculatePlayerScore () {
    return (this.attack + this.defence) / 2; 
  }
}