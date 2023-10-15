class Cell {
  isAlive;
  neighbours;

  constructor(isAlive, neighbours) {
    this.isAlive = isAlive;
    this.neighbours = neighbours;
  }

  state() {
    return this.isAlive;
  }

  die() {
    this.isAlive = false;
  }

  reborn() {
    this.isAlive = true;
  }
}

export default Cell;
