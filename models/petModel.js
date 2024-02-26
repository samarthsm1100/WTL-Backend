const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petSchema = new Schema({
    species:{
        type: String,
        required: true
    },
    breed:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    image_url:{
        type: String,
        required: false,
        default:""
    },
    image_name:{
        type: String,
        default:""
    },
    address:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: false,
        default:"active"
    },
    description:{
        type: String,
        requierd: true
    },
    reportedBy:{
        type: String,
        required: true
    },
    owner:{
        type: String
    }
})

module.exports = mongoose.model('Pet', petSchema);