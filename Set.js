let mySet = new Set();

// Adding elements to the set
mySet.add('a');
mySet.add('b');
mySet.add('c');
mySet.add('a'); // Adding a duplicate value

// Checking size and values in the set
console.log(mySet.size); // Output: 3 (even though 'a' was added twice, it's considered once due to uniqueness)

// Checking for existence of a value
console.log(mySet.has('b')); 

// Deleting an element from the set
mySet.delete('b');
console.log(mySet.size);
