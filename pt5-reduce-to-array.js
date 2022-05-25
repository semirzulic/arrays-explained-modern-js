const numbers = [10, 20, 30, 40, 50];

let arr = [];
for(const number of numbers) {
    arr = [...arr, number];
};

arr;

const numsReduced = numbers.reduce((arr, number) => [
    ...arr, number
], []);

numsReduced;

const numsReducedRight = numbers.reduceRight((arr, number) => [
    ...arr, number
], []);

numsReducedRight;

const groups = [
    [3, 2],
    [2, 5],
    [3, 7],
];

// we want to get [2,2,2,5,5,7,7,7]

const groupsReduced = groups.reduce((arr, [count, value]) => {
    for(let index = 0; index < count; index++) {
        arr.push(value);
    }
    return arr;
}, [])

groupsReduced;

console.log(Array(3));
console.log(Array(3).fill(2));

const groupsReducedNewWay = groups.reduce((arr, [count, value]) => [
    ...arr,
    ...Array(count).fill(value)
], []);
groupsReducedNewWay;