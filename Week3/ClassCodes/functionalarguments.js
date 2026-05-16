function sum(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

function doarithmetic(a , b, dosomething){
    let ans = dosomething(a,b)
    return ans
}

let ans1 = doarithmetic(23, 45, sum)

console.log(ans1)


let ans2 = doarithmetic(34,32, divide)

console.log(ans2)