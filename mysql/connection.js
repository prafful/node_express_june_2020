var mysqldb = require('mysql')

console.log(mysqldb)

var connnectionObject = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'friend'

})

connnectionObject.connect(function(err){
    if(err)
        throw err
    
    console.log("Connected to MySQL Server and Friend Database!!!!")    
    /* console.log("Create Database....")
    connnectionObject.query("create database friend", function(err, succ){
        if(err)
            throw err
        console.log("Database -  fromnode1  - created!!!!")    
    }) */

    var sql =  "insert into personal (id, name, location) values ?"
    var multipleinserts = [
        [1, 'obb', 'chennai'],
        [2, 'owioh', 'japan']
    ]

    connnectionObject.query(sql, [multipleinserts], function(error){
        if(error)
            throw error

        console.log("Row insert success!!!!")    
    })



})