class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  prepend(element) {
    // Adds an element at start of the linked list
    const node = new Node(element);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  print() {
    // prints all the elements present in the linked list separated by space.
    if (this.isEmpty()) {
      console.log("cannot print, it's empty");
    } else {
      let curr = this.head;
      let value = "";
      while (curr) {
        value += `${curr.value} `;
        curr = curr.next;
      }
      console.log(value);
    }
  }
  append(element) {
    // adds an elements at the end of the list
    const node = new Node(element);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }
  insert(index, element) {
    // inserts an element at a valid index in the list
    // validate index
    // index = 0;
    // regular case, insert at the provided index
    if(index > this.size || index < 0){
      console.log('Invalid Index');
      return
    }
    if(this.isEmpty()){
      this.prepend(element)
    };
    const node = new Node(element);
    let prevNode = this.head;
    for(let i=0; i < index - 1; i++) {
      prevNode = prevNode.next;
    };
    node.next = prevNode.next;
    prevNode.next = node;
    this.size++
  }
  remove(index) {
    // removes an element present in list at a particular index.
    // is index valid => index >= size
    // removal from start => check if index == 0
    // removal from middle or end => regular case
    if(list.isEmpty()){
      console.log("Can't remove, list is already empty.");
      return;
    }
    if(index >= this.size){
      console.log(`Invalid index : ${index}, it should be less than ${this.size}`);
      return;
    }
    let prevHead = this.head;    
    if(index === 0){
      this.head = this.head.next;
      prevHead.next = null;
      this.size --;
      return prevHead.value;
    } 
    let currentHead = prevHead.next;
    for(let i=0; i < index - 1 ; i++) {
      prevHead = prevHead.next;
      currentHead = currentHead.next;
    }
    console.log({
      prevHead: prevHead.value,
      currentHead: currentHead.value
    })
    prevHead.next = currentHead.next;
    currentHead.next = null
    this.size --;
    return currentHead.value;
  }
  removeByValue(element) {
    // removes an element by searching based on the element value
    /*
    A: Best Case
    1- 
    B: Worst Case
    1- List could be `empty => empty check
    2- Element not present in list 
    */
    if(list.isEmpty()){
      console.log("Can't remove, list is already empty.");
      return null;
    }
    if(element === this.head.value) {
      console.log("head value check")
      const deleteNode = this.head;
      this.head = this.head.next;
      deleteNode.next = null
      this.size--;
      return deleteNode.value;
    }
    let prevHead = this.head;
    while(prevHead?.next && prevHead?.next?.value !== element){
      prevHead = prevHead.next;
    }
    if(prevHead?.next){
      let currHead = prevHead.next;
      prevHead.next = currHead.next;
      this.size--;
      return element;
    }
    console.log(`Element: ${element} is invalid and not present in list`)
    return null;
  }
  search(element) {
    // Will return index if element is present else -1
    /*
    Takes in elements and returns index if present else -1;
    List is empty
    Element not present
    Element present at head    
    */
   if(this.isEmpty()) {
    return -1;
   }
   let i = 0;
   let curr = this.head;
   while(curr) {
    if(curr.value == element) {
      return i;
    }
    curr = curr.next;
    i++;
   }
   return -1;
  }
  reverse() {
    // reverses the linked list
    if(this.isEmpty()) {
      console.log('List is empty.');
      return;
    }
    let curr = this.head;
    let prev = null;
    while(curr) {
     let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    return;
  }
}

const list = new LinkedList();
list.append('A')
list.append('B')
list.append('C')
list.append('D')
list.append('E')
list.print();

console.log("======");
console.log('search: ', list.search('F'));
list.print();
list.reverse();
list.print();



