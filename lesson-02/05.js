let passport = {
    name: "Petr",
    surname: "Petrov",
};

const person = {};

for (let key in passport) {
    person[key] = passport[key];
}

person.name = 'Ivan';

console.log(passport.name);
console.log(person.name);