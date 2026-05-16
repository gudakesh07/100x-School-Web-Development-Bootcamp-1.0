const fs = require("fs")
function filereadcallback(err, content){
    if(content){
        console.log(content)
    } else{
        console.log(err)
    }
}
fs.readFile("a.txt", "utf-8", filereadcallback)