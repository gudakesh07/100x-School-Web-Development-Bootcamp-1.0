// create a map function that takes 2 inputs an array, and a transformation callback/fn and transforms the array into a new one using the transformation function!!

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newnums = []

function transform (nums, callback){
    for(let i = 0; i < nums.length; i++){
    newnums.push(callback(nums[i]))
    }
    return newnums
}

const ans = transform(myNums, (num) => num * 2)

console.log(ans)
