const mongoose = require('mongoose')

const userScema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required:true
    }
})

const user= mongoose.model('user', userScema)
module.exports = user