const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    lat: String,
    long: String
})

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
    location:{
        type: locationSchema,
    },
    lost_pets:{
        type: [String]
    },
    found_pets:{
        type: [String]
    }
})

module.exports = mongoose.model('User', userSchema);