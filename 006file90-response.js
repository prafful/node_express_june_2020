var file =  require('fs')
var myhttp = require('http')
var url = require('url')

myhttp.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html; charset=utf8'})
    res.write("<h3>Read file from server and render in browser</h3>")
    var myurl = req.url
    console.log(myurl)
    var filenameobject = url.parse(myurl, true).query
    console.log("File name: " + JSON.stringify(filenameobject))
    var filename = filenameobject.fileparam
    console.log("13: " + filename)
    console.log(typeof(filename))
    file.readFile(filename,'utf8', function(err, data){
        if(err){
            throw err
        }
            

        res.write(data)    
        res.end()
        
    })

    //res.end()

}).listen(1234)