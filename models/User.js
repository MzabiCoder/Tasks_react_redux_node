const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    user: {
    type: mongoose.Schema.Types.ObjectId,
      ref:'users'  
    },
    message: {
        type: String,
        required:true
    },
    attention: {
        type:Boolean
    }
})



module.exports=mongoose.model('User',UserSchema)