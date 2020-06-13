var file = require('fs')

//console.log(file)

file.readFile("myfile.txt","utf8", function(err, data){
    if(err){
        throw err
    }
    console.log(data)
})