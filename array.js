let arr = [1, 2, 3, "rauhl"];

arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();
// console.log(arr);

// map
const mapArr = arr.map((el) => typeof el);
// console.log({ mapArr });

// filter
const filterArr = arr.filter((el) => typeof el === "number");
// console.log({ filterArr });

// reduce

const reduceArr = arr.reduce((prev, curr) => {
  prev.push(curr);
  return prev;
}, []);

// console.log({ reduceArr });
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattendArray = nestedArray.reduce((acc, curr) => {
//   console.log({
//     acc,
//     curr,
//   });
  return acc.concat(curr);
}, []);
// console.log({ flattendArray });

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "Dave", age: 25 },
];

// expected result
const groupedArray = people.reduce((acc, curr) => {
//   console.log({
//     acc,
//     curr,
//   });
  if (acc[curr.age]) {
    acc[curr.age].push(curr);
  } else {
    acc[curr.age] = [curr];
  }
  return acc;
}, {});
// console.log(groupedArray)
/*

{
  25: [
    { name: 'Alice', age: 25 },
    { name: 'Dave', age: 25 }
  ],
  30: [
    { name: 'Bob', age: 30 }
  ],
  35: [
    { name: 'Charlie', age: 35 }
  ]
}

*/

// concat

const concatenatedArr = arr.concat(["newElement"]);
// console.log(concatenatedArr)

// slice

// console.log(arr)
// console.log(arr.reverse())


let newArr = [[1,2,3],[1,2,3]];

newArr.forEach(el => {
    el.forEach(innerEl => {
        console.log(innerEl)
    })
})

