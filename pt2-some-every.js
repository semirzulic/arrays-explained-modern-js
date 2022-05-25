const numbers = [10, -20, 30, -40, 50];

console.log(numbers.includes(10));

console.log(numbers.some((number) => number > 0));

console.log(numbers.every((number) => number > 0));