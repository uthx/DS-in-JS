class CircularQueue {
    constructor(capacity) {
        this.items = Array(capacity);
        this.front = -1;
        this.rear = -1;
        this.size = 0;
        this.capacity = capacity;
    }
    enqueue(item) {
        if(this.isFull()){
            console.log("Can't enqueue, Queue is already full");
            return ;
        }
        this.size = this.size + 1;
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = item;
        if(this.front === -1) {
            this.front = this.front + 1;
        }
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log("Can't dequeue, Queue is already empty");
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.size -= 1;
        if(this.isEmpty()){
            this.front = -1;
            this.rear =  -1;
        }
        return item
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }
    print() {
        let i;
        let str = '';
        for(i = this.front; i !== this.rear; i = (i + 1) % this.capacity){
            str += this.items[i]
        }
        str += this.items[i];
        console.log(str)
    }
    peek(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return;
        }
        return this.items[this.front];
    }
}
const circularQueue = new CircularQueue(5);
circularQueue.enqueue(1)
circularQueue.enqueue(2)
circularQueue.enqueue(3)
circularQueue.enqueue(4)
circularQueue.enqueue(5)
circularQueue.dequeue()
circularQueue.dequeue()
circularQueue.enqueue(5)
circularQueue.dequeue()
circularQueue.dequeue()
circularQueue.dequeue()
circularQueue.dequeue()
circularQueue.enqueue(6)
circularQueue.enqueue(6)
circularQueue.enqueue(6)
circularQueue.enqueue(6)
circularQueue.enqueue(6)
console.log(circularQueue.peek())
console.log("isFull", circularQueue.isFull())
console.log("isEmpty", circularQueue.isEmpty())
console.log("size", circularQueue.size)
circularQueue.print()
console.log("Front", circularQueue.front);
console.log("rear", circularQueue.rear);
