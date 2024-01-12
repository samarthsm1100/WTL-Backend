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
        required: true
    },
    location:{

    },
    status:{
        type: String,
        required: true
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