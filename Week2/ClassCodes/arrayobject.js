function islegel(users){
    if (users.age >= 18){
        console.log(users.name + " is allowed")
    } else{
        console.log(users.name + " is not allowed")
    }
}

let users = [{
    name : "harkirat",
    age : 33,
    password : "fkufhjbsakb"
} , {
    name : "raj",
    age : 21,
    password : "jfakjwg"
}]

// console.log(users[0].name)

// islegel(users[0])
// islegel(users[1])

// Assignment
    
//     Write a function that takes an array of users as inputs and returns only the users who
//     are more than 18 years old

function pioneer(user){
    let allowedusers = []
    for(let i = 0; i < user.length; i++){
        if(user[i].age > 18){
            allowedusers.push(user[i].name)
        }
    }
    return allowedusers
}

console.log(pioneer(users))



// - Assignment

//     Create a function that takes an array of objects as input,
//     and returns the users whose age > 18 and are male

let students = [{
    name: "harkirat",
    age : 17,
    password : "imbatman",
    gender : "male"
},{
    name : "ramanjeet",
    age : 32,
    password : "erereeerrr",
    gender : "male"
}, {
    name : "Preeti",
    age : 29,
    password : "akgsclakj",
    gender : "female"
}, {
    name : "Azooba",
    age : "23",
    gender : "male"
}]

function clean(users){
    
    let allowed = []
    for(let i = 0; i < users.length; i++){
        if(users[i].age > 18 && users[i].gender === "male"){
            allowed.push(users[i].name)
        }
    }

    return allowed
}


console.log(clean(students))