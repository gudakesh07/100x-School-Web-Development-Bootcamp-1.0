// given an array, guve me back a new array in which every value is multiplied by 2.
let marks = [23, 45 ,64, 80]

let newmarks =[]

for(let i = 0; i < marks.length; i++){
    newmarks.push(marks[i] * 2)
}


console.log(newmarks)

// other solution

function transform(i){
    return i * 2;
}

const finalmarks = marks.map(transform)

console.log(finalmarks)

// const finalmarks = marks.map(function(i){
//     return i * 2;
// })


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = myNums.map( (num) => {
//     return num * 10;
// })


const newnums = myNums.map((num) => num * 10 )
.map( (num) => num + 1)
.filter((num) => num > 50)

console.log(newnums)

