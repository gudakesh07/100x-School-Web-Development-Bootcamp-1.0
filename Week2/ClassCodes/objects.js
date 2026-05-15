function islegel(name, age){
    if (age >= 18){
        console.log(name + " is allowed")
    } else{
        console.log(name + " is not allowed")
    }
}


let user1 = {
    name: "harkirat",
    age : 17,
    password : "imbatman",
    gender : "male"
}

let user2 = {
    name : "ramanjeet",
    age : 32,
    password : "erereeerrr",
    gender : "male"
}

let user3 = {
    name : "Preeti",
    age : 29,
    password : "akgsclakj",
    gender : "female"
}

islegel(user1.name, user1.age)
islegel(user2.name, user2.age)

// - Assignment #1
    
    // Write a function that takes a `user` as an input and greets them with their name and age


function greeting(user){
    console.log(`Hello ${user.name} and your age is ${user.age}`)
}

let user4 = {
    name : "Azooba",
    age : "23",
    gender : "Binary"
}

greeting(user3)

// - Assignment #2
    
//     Write a function that takes a new object as input which has `name` , `age`  and `gender` and 
//     greets the user with their gender (Hi `Mr/Mrs/Others` harkirat, your age is 21)

function yoyo(user){
    if (user.gender === "male"){
        console.log(`Hi Mr. ${user.name}, your age is ${user.age}`)
    }
    else if(user.gender === "female"){
        console.log(`Hi Mrs. ${user.name}, your age is ${user.age}`)
    } else{
        console.log(`Hi Others ${user.name}, your age is ${user.age}`)
    }
}


yoyo(user1)
yoyo(user2)
yoyo(user3)
yoyo(user4)

// Assignment #3
//  Also tell the user if they are legal to vote or not


function islegell(name, age){
    if (age >= 18){
        console.log(name + " is allowed")
    } else{
        console.log(name + " is not allowed")
    }
}

