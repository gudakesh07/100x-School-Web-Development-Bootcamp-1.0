let users = ["harkirat", "raman", "kirat"]


console.log(users[1])

for(let i = 0; i < 3; i++){
    console.log(users[i])
}

// Assignment  
//    Write a function that takes an array of numbers as input, and returns a new array with only
//    even values. Read about `filter` in JS

function even(numbers){
    let evennumbers = numbers.filter(num => num % 2 === 0)
    console.log(evennumbers)
}

even([2,4,5,6,79,88])