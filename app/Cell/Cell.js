class Cell {
  isAlive;
  neighbours;

  constructor(isAlive) {
    this.isAlive = isAlive;
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
