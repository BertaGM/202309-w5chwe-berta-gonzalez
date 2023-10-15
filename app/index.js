import World from "./World/World.js";

const cellLength = 3;

const grid = new World();

grid.initWorld(cellLength, false);

grid.cell[1][1].reborn();
grid.cell[2][0].reborn();
grid.cell[2][1].reborn();

grid.countNeighbours(1, 1);
