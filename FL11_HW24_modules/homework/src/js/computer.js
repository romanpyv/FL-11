import Player from "./player";
export default class Computer extends Player {
  constructor() {
    super();
  }
  makeChoice() {
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
      case 0:
        this.choice = "Rock";
        break;
      case 1:
        this.choice = "Paper";
        break;
      case 2:
        this.choice = "Scissors";
        break;
    }
  }
}
