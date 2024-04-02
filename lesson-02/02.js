let sumFactorial = 0;

function factorial(n) {
    debugger;
    if (n === 0 || n === 1) {
        return 1;
    } else {
        sumFactorial += n * factorial(n - 1);
        return sumFactorial;
    }
}

console.log(factorial(5));