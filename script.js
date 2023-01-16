import Queue from './Queue.js';
import Graph from './Graph.js';
import Chessboard from './Chessboard.js';
import Knight from './Knight.js';

function shortestPath(list, start, end) {
  const queue = new Queue();
  const visited = new Set();
  let shortest = null;

  queue.enqueue([start, [start]]);
  visited.add(start);

  while (!queue.isEmpty()) {
    const [curr, path] = queue.dequeue();
    const neighbors = Array.from(list.get(curr));

    visited.add(curr);

    if (curr === end) {
      shortest = path;

      break;
    }

    for (let i = 0; i < neighbors.length; i += 1) {
      if (!visited.has(neighbors[i])) {
        queue.enqueue([neighbors[i], [...path, neighbors[i]]]);
      }
    }
  }

  return shortest;
}

function knightMoves(start, end) {
  if (start == null || end == null) return 'Invalid move';

  const board = new Chessboard();
  const knight = new Knight();
  const g = new Graph();
  const queue = new Queue();

  queue.enqueue(start);

  while (!queue.isEmpty()) {
    const curr = queue.dequeue();
    const [col, row] = curr;

    for (let i = 0; i < knight.moves.length; i += 1) {
      const nextCol = col + knight.moves[i][0];
      const nextRow = row + knight.moves[i][1];
      const next = [nextCol, nextRow];

      if (board.board[nextCol] != null && board.board[nextCol][nextRow] != null) {
        queue.enqueue(next);
        g.addEdge(curr.join(', '), next.join(', '));
      }

      if (g.size === 8 * 8) break;
    }
  }

  const { adjacentList } = g;
  const path = shortestPath(adjacentList, start.join(', '), end.join(', '));

  return `=> You made it in ${path.length - 1} moves!  Here's your path:\n${path.join('').replace(/(\d{1},\s\d{1})/g, '[$1]\n')}`;
}

console.log(knightMoves([3, 3], [4, 3]));
