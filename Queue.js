export default class Queue {
  constructor(item) {
    this.queue = [];

    if (item != null) this.queue.push(item);
  }

  enqueue(obj) {
    this.queue.push(obj);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}
