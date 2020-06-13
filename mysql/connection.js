var mysqldb = require('mysql')

console.log(mysqldb)

var connnectionObject = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306

})

connnectionObject.connect(function(err){
    if(err)
        throw err
    
    console.log("Connected to MySQl Server!!!!")    
    console.log("Create Database....")
    connnectionObject.query("create database fromnode1", function(err, succ){
        if(err)
            throw err
        console.log("Database -  fromnode1  - created!!!!")    
    })
})