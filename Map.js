const map = new Map();
console.log(map.has(1));

map.set('keyName', {type: "object"});

console.log(map.has('keyName'))
console.log(map.get('keyName'))
map.set('keyName1', "Data");

console.log(map.size)

for( const [key, value] of map) {
    console.log({key, value})
}
