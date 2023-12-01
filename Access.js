let person = {
    name: 'Alice',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'New York'
    }
  };
  
  console.log(person.name); // Accessing 'name' property using dot notation: Output: 'Alice'
  console.log(person['age']); // Accessing 'age' property using bracket notation: Output: 30
  
  let propertyName = 'address';
  console.log(person[propertyName].city); // Accessing nested 'city' property: Output: 'New York'
  