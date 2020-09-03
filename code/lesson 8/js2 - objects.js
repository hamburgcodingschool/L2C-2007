// let person1 = {
//     name: 'Helder',
//     city: 'Porto',
//     age: 39
// };

// let person2 = {
//     name: 'Andrew',
//     city: 'Waterloo, Iowa',
//     age: 31
// };

// let people = [person1, person2];

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
        name: 'Barbara',
        city: 'Porto',
        age: 20
    },
    {
        name: 'Joe',
        city: 'Waterloo, Iowa',
        age: 2
    },
    {
        name: 'Rita',
        city: 'Porto',
        age: 40
    },
    {
        name: 'Claudia',
        city: 'Waterloo, Iowa',
        age: 52
    }
];

// console.log(people.length);
// console.log(people[1].name);

// CREATE A LITERAL ARRAY WITH 5 PERSON OBJECTS AND PRINT THE NAME OF THE OLDEST PERSON

// console.log(people);

let highestAge = 0;
let oldestPerson;
let indexOldestPerson;

for (let i = 0; i < people.length; i++) {
    if (people[i].age > highestAge) {
        highestAge = people[i].age;
        oldestPerson = people[i];
        indexOldestPerson = i;
    }
}

console.log(oldestPerson.name);
console.log(people[indexOldestPerson].name);