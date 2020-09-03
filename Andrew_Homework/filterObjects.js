// Create an array of person objects
// Remoge all the people who are below 18 years of age
// Then solve using the "filter" function as a callback

let people = [
    {
        name: 'Helder',
        city: 'Porto',
        age: 39
    },
    {
        name: 'Andrew',
        city: 'Waterloo, Iowa',
        age: 31
    },
    {
        name: 'John',
        city: 'Berlin',
        age: 5
    },
    {
        name: 'Alex',
        city: 'Hamburg',
        age: 21
    },
    {
        name: 'Martin',
        city: 'New York',
        age: 13
    },
    {
        name: 'Connor',
        city: 'Chicago',
        age: 17
    },
    {
        name: 'Vega',
        city: 'Paris',
        age: 18
    },
    {
        name: 'Jose',
        city: 'Madrid',
        age: 56
    }
]

// OPTION I
let peopleOver18 = [];

for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
        peopleOver18.push(people[i])
    }
}

console.log(peopleOver18);

// OPTION II WITH FILTER
let over18 = people.filter(function(person) { 
    return person.age >= 18;
});

console.log(over18);
