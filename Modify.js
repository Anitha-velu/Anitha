let person = {
    name: 'Alice',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'New York'
    }
  };  
person.name = 'Bob'; // Modifying 'name' property using dot notation
person['address']['city'] = 'San Francisco'; // Modifying nested 'city' property

person.job = 'Engineer'; // Adding a new 'job' property

console.log(person);