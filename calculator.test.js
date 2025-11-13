const { add, subtract, multiply, divide } = require('./calculator');

test('adds 2 + 3 to equal 5', () => { expect(add(2, 3)).toBe(5); });
test('subtracts 5 - 2 to equal 3', () => { expect(subtract(5,2)).toBe(3); });
test('multiplies 2 * 4 to equal 8', () => { expect(multiply(2,4)).toBe(8); });
test('divides 10 / 2 to equal 5', () => { expect(divide(10,2)).toBe(5); });
test('throws error on divide by zero', () => { expect(() => divide(4,0)).toThrow('Division by zero'); });
