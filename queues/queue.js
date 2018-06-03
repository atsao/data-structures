class Queue {
  constructor(props) {
    this.items = [];
  }

  enqueue(data) {
    this.items.push(data);
  }

  dequeue() {
    return this.items.shift();
  }
}

export default Queue;
