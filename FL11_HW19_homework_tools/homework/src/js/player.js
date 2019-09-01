export class Player {
  constructor() {
    this.point = 0;
    this.choice = null;
  }
  addPoint() {
    this.point++;
  }
  hasWon() {
    return this.point === 3;
  }
  reset() {
    this.point = 0;
    this.choice = null;
  }
}
