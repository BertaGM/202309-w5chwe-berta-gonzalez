import Cell from "../Cell/Cell.js";

class World {
  cell;

  constructor() {
    this.cell = [];
  }

  initWorld(length, ...element) {
    for (let indexRow = 0; indexRow < length; indexRow++) {
      this.cell[indexRow] = element;
      for (let indexColumn = 0; indexColumn < length; indexColumn++) {
        this.cell[indexRow][indexColumn] = new Cell();
      }
    }

    return this.cell;
  }
}

export default World;
