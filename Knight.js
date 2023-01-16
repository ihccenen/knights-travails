export default class Knight {
  #moves;

  constructor() {
    this.#moves = [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
    ];
  }

  get moves() {
    return this.#moves;
  }
}
