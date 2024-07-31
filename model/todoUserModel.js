const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true,
        trim:true
    },
    Content:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comments'
    }
},{timestamps:true})

const todoModel = mongoose.model('Todo',todoSchema)

module.exports = todoModel
