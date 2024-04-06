let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarried2 = {};

for (let prop in passportMarried) {
    if (typeof passportMarried[prop] === 'object') {
        passportMarried2[prop] = {};

        for (let key in passportMarried[prop]) {
            passportMarried2[prop][key] = passportMarried[prop][key];
        }
    } else {
        passportMarried2[prop] = passportMarried[prop];
    }
}

passportMarried2.married = true;

console.log(passportMarried);
console.log(passportMarried2);