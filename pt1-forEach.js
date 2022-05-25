const numbers = [10,20,30,40,50,60];

numbers.forEach((value, index) => {
    console.log(value)
    console.log(index)
})

// When we use forEach we can't break out of the loop, and it has problems with async functions