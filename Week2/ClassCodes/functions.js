// Function declaration
function greet(name) {
    return "Hello, " + name;
}

// Function call
let message = greet("John"); // "Hello, John"

// Assignment 1

    // Write a function sum that finds the sum of two numbers. 
    // Side quest - Try passing in a string instead of a number and see what happens?

function addition(a , b){
    console.log(a + b)
}

let marks = addition(50, 43)

// Assignment 2
    // Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age){
    if(age >= 18){
        return true
    } else{
        return false
    }
}

let raj = canVote(18)
console.log(raj)