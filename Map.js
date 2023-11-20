let myMap = new Map();

// Adding elements to the map
myMap.set('key1', 'value1');
myMap.set(2, 'value2');
let objKey = { id: 3 };
myMap.set(objKey, 'value3');

// Getting elements from the map
console.log(myMap.get('key1')); // Output: 'value1'
console.log(myMap.get(2)); // Output: 'value2'
console.log(myMap.get(objKey)); // Output: 'value3'

// Checking for existence of a key
console.log(myMap.has('key1')); // Output: true

// Size of the map
console.log(myMap.size); // Output: 3

// Deleting an element from the map
myMap.delete('key1');
console.log(myMap.size); // Output: 2
