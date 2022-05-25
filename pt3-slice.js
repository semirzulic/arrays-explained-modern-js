const numbers = [10, 20, 30, 40, 50];

const middleThree = numbers.filter((_, i) => i > 0 && i < 4);
middleThree;

const easierMiddleThree = numbers.slice(1, 4);
easierMiddleThree;

console.log(numbers.slice());
console.log(numbers.slice(1));
console.log(numbers.slice(-1));
console.log(numbers.slice(-2));