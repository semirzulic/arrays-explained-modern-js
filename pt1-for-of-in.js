const numbers = [10,20,30,40,50,60];

// If you need the Index USE for in loop
for(const index in numbers) {
    console.log(index);
    console.log(numbers[index])
}

// If you need the Value USE for of
for(const value of numbers) {
    if(value>20) {
        break
    }
    console.log(value)
}

// difference between for loop and forEach is 'break' statement, in forEach loop you can't use break statementand you can't break out of loop