import World from "./World";

describe("Given the method initWorld in the class World", () => {
  describe("When it's called with 3 and false", () => {
    test("Then it should return an array with 3 arrays with 3 objects in it and the value false", () => {
      const expectedValue = 3;
      const isExpectedValue = false;

      const board = new World();
      const values = board.initWorld(expectedValue, isExpectedValue);

      expect(values.length).toBe(expectedValue);
      expect(values[0][0].isAlive).toBe(isExpectedValue);
    });
  });

  describe("When it's called with 8 and true", () => {
    test("Then it should return an array with 8 arrays with 8 objects in it and the value true", () => {
      const expectedValue = 8;
      const isExpectedValue = true;

      const board = new World();
      const values = board.initWorld(expectedValue, isExpectedValue);

      expect(values.length).toBe(expectedValue);
      expect(values[0][0].isAlive).toBe(isExpectedValue);
    });
  });
});

describe("Given the method countNeighbours in the class World", () => {
  describe("When it's called with 0 and 2", () => {
    test("Then it should return 1", () => {
      const length = 5;
      const isAlive = false;
      const neighbours = 1;

      const board = new World();
      board.initWorld(length, isAlive);
      board.cell[0][0].reborn();
      board.cell[1][2].reborn();
      board.cell[2][0].reborn();

      board.countNeighbours(0, 2);

      expect(board.cell[0][2].neighbours).toBe(neighbours);
    });
  });

  describe("When it's called with 2 and 6", () => {
    test("Then it should return 4", () => {
      const length = 3;
      const isAlive = false;
      const neighbours = 4;

      const board = new World();
      board.initWorld(length, isAlive);
      board.cell[1][2].reborn();
      board.cell[1][1].reborn();
      board.cell[2][0].reborn();
      board.cell[2][2].reborn();

      board.countNeighbours(2, 1);

      expect(board.cell[2][1].neighbours).toBe(neighbours);
    });
  });
});
