const numbers = [10, 20, 30, 40, 50];

const numbersTimes10 = numbers.map(
    (v) => v * 10
)

numbersTimes10;

const numbersTimes10Obj = numbers.map(
    (v) => ({ value: v * 10 })
)

numbersTimes10Obj;

const numbersWithNegatives = [-10, 20, 30, -40, -50];

const positiveBy10 = 
    numbersWithNegatives.filter(v => v > 10)
    .map(v => v * 10)

    
positiveBy10;

const people = [
    { firstName: 'Jane', lastName: 'Smith', address: { city: 'Oakland' }},
    { firstName: 'Sally', lastName: 'Joe', address: { city: 'Foster City' }}
]

const cheapClone = (obj) => JSON.parse(JSON.stringify(obj))

const fullNames = people.map((p) => cheapClone({
    ...p,
    fullName: `${p.firstName} ${p.lastName}`
}))

fullNames;

fullNames[0].firstName = 'Penny';
fullNames[0].address.city = 'San Jose';
fullNames;
people;