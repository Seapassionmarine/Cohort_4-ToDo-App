const { required } = require('@hapi/joi/lib/base')
const mongoose = require('mongoose')
 
const userSchema = new mongoose.Schema({
    FullName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    isVerfied:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    todo:[{
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Todo'  
    }]
},{timestamps:true})

const userModel = mongoose.model('user',userSchema)
module.exports = userModel