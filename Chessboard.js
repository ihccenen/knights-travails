export default class Chessboard {
  #board;

  constructor() {
    this.#board = [];

    for (let i = 0; i < 8; i += 1) {
      this.#board[i] = [];
      for (let j = 0; j < 8; j += 1) {
        this.#board[i][j] = -1;
      }
    }
  }

  play(col, row) {
    this.#board[col][row] = 0;
  }

  get board() {
    return this.#board;
  }
}
