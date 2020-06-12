var myhttp = require('http')
var myurl = require('url')

var server  = myhttp.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write(req.url + "<br>")
    var urlquery = req.url

    var queryparamobject = myurl.parse(urlquery, true).query
    console.log(queryparamobject)

    var q1 = queryparamobject.name
    var q2 = queryparamobject.location
    var q3 = queryparamobject.country

    res.write("Name: " + q1 + "<br>")  
    res.write("Location: " + q2 + "<br>")  
    res.write("Country: " + q3 + "<br>")  
    res.write(JSON.stringify(queryparamobject))
    res.end()
}).listen(1234)