import "../less/styles.less";
import Game from "./game";
import User from "./user";
import Computer from "./computer";
const rules = require("../img/rules.jpg");

const user = new User(),
  computer = new Computer(),
  game = new Game(user, computer);

document.getElementById("rock").onclick = () => {
  user.makeChoice("Rock");
  game.start();
};
document.getElementById("paper").onclick = () => {
  user.makeChoice("Paper");
  game.start();
};
document.getElementById("scissors").onclick = () => {
  user.makeChoice("Scissors");
  game.start();
};
document.getElementById("reset").onclick = () => {
  game.reset();
  document.getElementById("log").value = "";
  document.getElementById("score").textContent = "0 - 0";
};

document.getElementById("rules").src = rules;
