import { Player } from "./player";
export class User extends Player {
  constructor() {
    super();
  }
  makeChoice(choice) {
    this.choice = choice;
  }
}
