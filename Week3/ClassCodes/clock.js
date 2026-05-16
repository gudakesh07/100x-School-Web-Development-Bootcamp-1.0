const a = 1
const b = 2
console.log(a)
console.log(b)
function callback(){
    console.log(a + b)
}

setTimeout(callback, 1000)