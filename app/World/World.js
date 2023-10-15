import Cell from "../Cell/Cell.js";

class World {
  cell;

  constructor() {
    this.cell = [];
  }

  initWorld(length, isAlive) {
    for (let indexRow = 0; indexRow < length; indexRow++) {
      this.cell[indexRow] = [];
      for (let indexColumn = 0; indexColumn < length; indexColumn++) {
        this.cell[indexRow][indexColumn] = new Cell(isAlive);
      }
    }

    return this.cell;
  }

  countNeighbours(indexRow, indexColumn) {
    let counter = 0;
    const length = 3;

    const myCell = this.cell[indexRow][indexColumn];
    const leftRow = indexRow - 1 === -1 ? 0 : indexRow - 1;
    const rightRow = indexRow + 1 > length - 1 ? length - 1 : indexRow + 1;
    const leftColumn = indexColumn - 1 === -1 ? 0 : indexColumn - 1;
    const rightColumn =
      indexColumn + 1 > length - 1 ? length - 1 : indexColumn + 1;

    for (let xIndex = leftRow; xIndex <= rightRow; xIndex++) {
      for (let yIndex = leftColumn; yIndex <= rightColumn; yIndex++) {
        if (this.cell[xIndex][yIndex].state()) {
          counter += 1;
        }
      }
    }

    if (myCell.state()) {
      counter -= 1;
    }

    myCell.neighbours = counter;
  }
}

export default World;
