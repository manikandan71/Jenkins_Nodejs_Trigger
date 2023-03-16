const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'please enter the user name']
    },
    email:{
        type:String,
        required:[true, 'please enter email address'],
        unique:[true, 'email already exist']
    },
    password:{
        type:String,
        required:[true, 'password is required'],
        minlength: 6
    },
    blogs:
    [{
        type:mongoose.Types.ObjectId,
        ref:'blog',
    }]
},
 {
    timestamps: true
 }
)

const user = mongoose.model('user',userSchema)

module.exports = user;