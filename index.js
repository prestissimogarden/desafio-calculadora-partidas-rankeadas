const Ranks = {
  FERRO: "Ferro",
  BRONZE: "Bronze",
  PRATA: "Prata",
  OURO: "Ouro",
  DIAMANTE: "Diamante",
  LENDARIO: "Lendário",
  IMORTAL: "Imortal"
};

function evaluateRank(wins, losses){
  wins_losses_balance = wins - losses;

  switch (true) {
    case wins_losses_balance <= 10:
      return Ranks.FERRO;
    case wins_losses_balance <= 20:
      return Ranks.BRONZE;
    case wins_losses_balance <= 50:
      return Ranks.PRATA;
    case wins_losses_balance <= 80:
      return Ranks.OURO;
    case wins_losses_balance <= 90:
      return Ranks.DIAMANTE;
    case wins_losses_balance <= 100:
      return Ranks.ASCENDENTE;
    default:
      return Ranks.IMORTAL;
  }
}

class Fighter {
  constructor(wins, losses) {
    this.wins = wins;
    this.losses = losses;
    this.balance = wins - losses;
    this.rank = evaluateRank(wins, losses);
  }
}

const player1 = new Fighter(15, 8);
const player2 = new Fighter(100, 50);
const player3 = new Fighter(250, 100);

console.log("O herói tem o saldo de", player1.balance, "vitórias, e está no nível", player1.rank);
console.log("O herói tem o saldo de", player2.balance, "vitórias, e está no nível", player2.rank);
console.log("O herói tem o saldo de", player3.balance, "vitórias, e está no nível", player3.rank);