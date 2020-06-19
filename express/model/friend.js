var mongoose = require('mongoose')

var mongooseSchema = mongoose.Schema

var freindSchema = new mongooseSchema({
                                        "name":String,
                                        "level":String,
                                        "pursuingsince":Number,
                                        "experience":Number                   
                                      }, 
                                      {
                                         collection:'hobby'
                                      })

module.exports = mongoose.model('hobby', freindSchema)   