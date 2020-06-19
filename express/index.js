var  express = require('express')
var bodyparser  = require('body-parser')
var mongoose = require('mongoose')
var fm = require('./model/friend')

var app = express()
app.use(bodyparser.json())

//use mongoose to conenct to database
mongoose.connect("mongodb://localhost:27017/friend")
var db = mongoose.connection

db.on('error', function(){
  console.log("Error in connecting to database - friend")
})

db.once('open', function(){
  console.log("Connected to database - friend!!!!")
})

console.log("####")
console.log(fm)
console.log("####")

app.get('/', function(req, res){
    res.send("Hello from Express!!!!")
})

app.get('/all', function(req, res){
  fm.find({}, function(err, data){
    if(err)
      throw err
    
    console.log(data)  
    res.json(data)
      
  })
})

app.get("/all/:mylevel", (req, res)=>{
  console.log(req.params.mylevel)
  fm.find({level: req.params.mylevel}, (err, data)=>{
    if(err)
      throw err
    console.log(data)
    res.json(data)

  })

  
})

app.post('/add', (req, res)=>{
  console.log(req.body)
  //res.send(req.body.name + " " + req.body.level)
  var newfriend = new fm()
  newfriend.name = req.body.name
  newfriend.level = req.body.level
  newfriend.pursuingsince = req.body.pursuingsince
  newfriend.experience = req.body.experience

  console.log(newfriend)
  newfriend.save((err)=>{
    if(err)
      throw err
    res.json({message:'success'})  
  })

})

app.post('/', function(req, res){
  console.log(req)  
  console.log(req.body)
  res.send (req.body)
  

  //res.send("Hello from Express POST!!!!")
})

app.listen(1234)