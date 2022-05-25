// good --- For Loop is good for creation of data
const arrayOfNumbers = [];
for(let value=10; value<=50; value++) {
    arrayOfNumbers.push(value);
}

// bad --- For Loop is bad for itterating trough data, that's a big NO NO

for(let index=0; index<arrayOfNumbers.length; index++) {
    console.log(arrayOfNumbers[index]);
}