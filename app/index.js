import Cell from "./Cell/Cell.js";
import World from "./World/World.js";

const cellLength = 3;

const cell = new Cell(false);
const grid = new World(cell);

grid.initWorld(cellLength, false);

console.log(grid);
console.log(cell);
