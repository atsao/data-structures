class Stack {
  constructor() {
    this._size = 0;
    this._storage = {};
  }

  push(data) {
    let size = ++this._size;
    this._storage[size] = data;
  }

  pop() {
    let size = this._size;
    let removed = this._storage[size];

    if (size) {
      delete this._storage[size];
      this._size--;
    }

    return removed;
  }
}

export default Stack;
