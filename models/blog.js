const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    image:{
        type: String,
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref:"user",
    }
},
{
   timestamps: true
})

const blogs = mongoose.model('blog',blogSchema);
module.exports = blogs