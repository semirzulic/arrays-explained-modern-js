const numbers = [12, 15, 12, 2, 6, 6, 2, 12];

const lookup = {};

for(const number of numbers) {
    lookup[number] = (lookup[number] ?? 0) + 1
}

console.log(numbers.reduce((lookup, value) => ({
    ...lookup,
    [value]: (lookup[value] ?? 0) + 1
}), {}));