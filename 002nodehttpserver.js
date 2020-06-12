var myhttp= require('http')

var nodeserver = myhttp.createServer(function(request, response){
                        console.log(request)    
                        //send response back to client browser!
                        //var temp = JSON.stringify(request)
                        response.writeHead(200, {'Content-Type':'text/html'})
                        response.write("<h1>Hello from node server</h1>")
                        //response.write(temp)
                        console.log(response)
                        response.end()
})

nodeserver.listen(1234)
