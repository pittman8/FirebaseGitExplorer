// Immediately invoked Ecmascript6 function
(() => {
    const mathResult = (4 + 6) * 12;
    console.log('Mathresult = ' + mathResult);
})();

// Immediately invoked function to display an array
((members) => {
    members.forEach(function (member) {
        console.log(member);
    })
})([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);

// Arrays and for...of
const primeNumbers = (numbers) => {
    for(let number of numbers) {
        console.log(number);
    }
};

primeNumbers([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);

// Property Enumeration using for...in
const charlie = {
    firstName: 'Charlie',
    lastName: 'Calvert',
    address: '3000 Landerholm Cir SE',
    city: 'Bellevue',
    state: 'Washington',
    zip: '98007'
}

const address = (charlie) => {
    for(let property in charlie) {
        if(charlie.hasOwnProperty(property)) {
            console.log(property + ": " + charlie[property]);
        }
    }
};

address(charlie);

// ES6 Class
class Calculator {

    add(operanda, operandb) {
        return operanda + operandb;
    }

    subtract(operanda, operandb) {
        return operanda - operandb;
    }

    multiply(operanda, operandb) {
        return operanda * operandb;
    }

    divide(operanda, operandb) {
        return operanda / operandb;
    }
}

const calculator = new Calculator();
console.log(calculator.add(2, 3));
console.log(calculator.subtract(5, 2));
console.log(calculator.multiply(3, 5));
console.log(calculator.divide(15, 3));