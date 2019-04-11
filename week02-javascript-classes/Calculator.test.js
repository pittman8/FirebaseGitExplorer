const Calculator = require('./Calculator');
const calculator = new Calculator.Calculator();

test('proves that multiply returns 24 if passed 2 and 12', () => {
    expect(calculator.multiply(12, 2)).toBe(24);
});

test('proves that add returns 14 if passed 2 and 12', () => {
    expect(calculator.add(12, 2)).toBe(14);
});

test('proves that subtract returns -10 if passed 2 and 12', () => {
    expect(calculator.subtract(12, 2)).toBe(-10);
});
