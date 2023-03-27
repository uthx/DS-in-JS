class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.size = 0;
        this.front = -1;
        this.rear = -1;
        this.capacity = capacity
    }
    isFull() {
        return this.size === this.capacity;
    }
    isEmpty() {
        return this.size === 0;
    }
    enqueue(element) {
        if(this.isFull()) {
            console.log("it's full");
            return null;
        }
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = element;
        this.size += 1;
        if(this.front === -1) {
            this.front = this.rear
        }
    }
    dequeue() {
        if(this.isEmpty()) {
            console.log("Can't dequeue")
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.size -= 1;
        if(this.isEmpty()) {
            this.rear = -1;
            this.front = -1;
        }
        return item
    }
    peek() {
        if(this.isEmpty()) {
            console.log("cannot peek");
            return null;
        }
        return this.items[this.front];
    }
    print() {
        if(this.isEmpty()){
            console.log('')
        }
        let str = '';
        let i = this.front;
        for(i; i !== this.rear; i = (i+1) % this.capacity){

            str += this.items[i]
        }
        str += this.items[i]
        console.log(str)
    }
}
const queue = new CircularQueue(5);
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.print()

queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.print()
