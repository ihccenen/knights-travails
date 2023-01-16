export default class Graph {
  #vertices = new Set();

  #adjacentList = new Map();

  addVertex(vertex) {
    if (this.#vertices.has(vertex) || vertex == null) return;

    this.#vertices.add(vertex);
    this.#adjacentList.set(vertex, new Set());
  }

  addEdge(vertexA, vertexB) {
    this.addVertex(vertexA);
    this.addVertex(vertexB);

    this.#adjacentList.get(vertexA).add(vertexB);
    this.#adjacentList.get(vertexB).add(vertexA);
  }

  get vertices() {
    return Array.from(this.#vertices);
  }

  get adjacentList() {
    return this.#adjacentList;
  }

  get size() {
    return this.#vertices.size;
  }
}
