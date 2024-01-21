const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    },
    lost_pets:{
        type: [String]
    },
    found_pets:{
        type: [String]
    }
})

module.exports = mongoose.model('User', userSchema);