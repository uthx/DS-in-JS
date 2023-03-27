// Implement a queue using an array.

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    return this.items.push(item);
  }
  dequeue(item) {
    return this.items.shift(item);
  }
  size() {
    return this.items.length;
  }
  peek() {
    if (!this.isEmpty()) return this.items[0];
    return null;
  }
  isEmpty() {
    return this.size() ? false : true;
  }
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();

// Optimized queue implementation using Objects
class QueueOptimized {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }
  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }
  dequeue() {
    if (this.isEmpty()) return "Queue is empty.";
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.rear - this.front === 0 ? true : false;
  }
  peek() {
    if (!this.front) return "Queue is empty.";
    return this.items[this.front];
  }
  size() {
    if (this.isEmpty()) return 0;
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
  printPointers() {
    console.log({'rear' : this.rear, 'front' : this.front})
  }
}

const objectQueue = new QueueOptimized();

objectQueue.enqueue(1);
objectQueue.enqueue(2)
objectQueue.enqueue(3)
objectQueue.dequeue()
objectQueue.dequeue()
objectQueue.dequeue()
console.log("size",objectQueue.size());
objectQueue.print()
objectQueue.printPointers()

console.log(objectQueue.size());
console.log(objectQueue.isEmpty())

