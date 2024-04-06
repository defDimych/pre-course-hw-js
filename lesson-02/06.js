let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

const clone = {};

for (let prop in passportWithAddress) {
    if (typeof passportWithAddress[prop] === 'object') {
        clone[prop] = {};

        for (let key in passportWithAddress[prop]) {
            clone[prop][key] = passportWithAddress[prop][key];
        }
    } else {
        clone[prop] = passportWithAddress[prop];
    }
}

clone.address.city = 'Bobryisk';

console.log(passportWithAddress.address.city);
console.log(clone.address.city);