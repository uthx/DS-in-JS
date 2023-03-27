const mySet = new Set([1,2,3,4]);
mySet.add(1)
mySet.add(2)
mySet.add(2);
let o = {name: "rahul"};
mySet.add(o);
mySet.add({name: "rahul"})
console.log("has", mySet.has(1))
mySet.delete(2)
console.log("key log",mySet.values())
// mySet.clear()
console.log("size",mySet.size)
for(const item of mySet) {
    console.log(item)
}

console.log(" ======= Set Operations =========")

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3, 5]);
const setC = new Set([3, 4, 5, 6]);

const isSuperSet = (setA, setB) => {
    for(const el of setB) {
        if(!setA.has(el)) return false
    }
    return true
}
console.log("isSuperSet",isSuperSet(setA, setB))

const union = (setA, setB) => {
    const _union = new Set(setA)
    for( const item of setB) {
        _union.add(item)
    }
    console.log(_union)
}
union(setA, setB)

const intersection = (setA, setB) => {
    const newSet = new Set();
    for( const item of setA) {
        if(setB.has(item)) newSet.add(item)
    }
    return newSet
}

console.log(intersection(setA, setB))

const symmetricDifference = (setA, setB) => {
    const newSet = new Set();
    for( const item of setA) {
        if(!setB.has(item)) newSet.add(item)
    }
    return newSet
}

console.log(symmetricDifference(setA, setB))


const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

const uniqueArray = [... new Set(numbers)];
console.log(uniqueArray)