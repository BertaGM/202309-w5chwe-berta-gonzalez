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
