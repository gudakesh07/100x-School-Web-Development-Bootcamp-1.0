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

console.log(users[0].name)

islegel(users[0])
islegel(users[1])