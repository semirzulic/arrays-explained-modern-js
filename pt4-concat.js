const first = [10, 20];
const second = [30, 40, 50];

console.log(first.concat(second));

console.log(first.concat(second).map(v => v * 10));

console.log([
    ...first,
    ...second
].map(v => v * 10))