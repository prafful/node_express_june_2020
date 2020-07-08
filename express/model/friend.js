var mongoose = require('mongoose')

var mongooseSchema = mongoose.Schema

var friendSchema = new mongooseSchema({
                                        "name":{
                                           type: String,
                                           required:[true, 'name is mandatory'],
                                           match: [/^[a-zA-Z]+$/,' is invalid']
                                          },
                                        "level":String,
                                        "pursuingsince":Number,
                                        "experience":Number                   
                                      }, 
                                      {
                                         collection:'hobby'
                                      })

module.exports = mongoose.model('hobby', friendSchema)   