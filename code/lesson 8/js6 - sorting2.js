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
        age: 31
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

people.sort(function(a, b) {
    if (a.age == b.age) {
        if (a.name == b.name) {
            return 0;
        }

        if (a.name > b.name) {
            return 1;
        }

        if (a.name < b.name) {
            return -1;
        }
    }

    if (a.age > b.age) {
        return 1;
    }

    if (a.age < b.age) {
        return -1;
    }
});

console.log(people);