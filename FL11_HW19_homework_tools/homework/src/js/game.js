export class Game {
  constructor(user, computer) {
    this.user = user;
    this.computer = computer;
    this.round = 0;
    this.clear = false;
  }

  reset() {
    this.user.reset();
    this.computer.reset();
    this.round = 0;
    this.clear = true;
  }

  start() {
    if (this.clear) {
      document.getElementById("log").value = "";
      this.clear = false;
    }

    this.computer.makeChoice();

    this.round++;
    let res = `Round ${this.round}, ${this.user.choice} vs. ${this.computer.choice}. `;

    if (this.computer.choice === this.user.choice) {
      battleLog(res + "It's a DRAW!  ");
      document.getElementById("score").textContent =
        this.user.point + " - " + this.computer.point;
      return;
    }

    if (
      (this.user.choice === "Rock" && this.computer.choice === "Scissors") ||
      (this.user.choice === "Paper" && this.computer.choice === "Rock") ||
      (this.user.choice === "Scissors" && this.computer.choice === "Paper")
    ) {
      battleLog(res + "You've WON!");
      this.user.addPoint();
    } else {
      battleLog(res + "You've LOST!");
      this.computer.addPoint();
    }

    document.getElementById("score").textContent =
      this.user.point + " - " + this.computer.point;

    if (this.computer.hasWon()) {
      battleLog("Game over! You've LOST!");
      this.reset();
    }
    if (this.user.hasWon()) {
      battleLog("Game over! You've WON!");
      this.reset();
    }
  }
}
function battleLog(text) {
  let log = document.getElementById("log");
  log.value += text + "\n";
}
