import Player from "./player";
export default class User extends Player {
  constructor() {
    super();
  }
  makeChoice(choice) {
    this.choice = choice;
  }
}
