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
    password : "imbatman"
}

let user2 = {
    name : "ramanjeet",
    age : 32,
    password : "erereeerrr"
}

islegel(user1.name, user1.age)
islegel(user2.name, user2.age)