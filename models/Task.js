const mongoose = require('mongoose')
const Schema=mongoose.Schema
const TaskSchema = new Schema({
    
    name: {
        type: String,
        required:true   
    },
    date: {
        type: Date,
        default:Date.now
    }
})



// module.exports = mongoose.model('Task', TaskSchema)
module.exports = Task = mongoose.model('Task', TaskSchema)
