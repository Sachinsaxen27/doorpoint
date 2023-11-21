const mongoose = require('mongoose')

const { Schema } = mongoose

const Smartwatchschema = new Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    mmodel: {
        type: String,
        required: true,
        unique:true,
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    sensor: {
        type: String
    },
    notification: {
        type: String
    },
    display: {
        type: String
    },
    battery:{
        type:String
    },
    category:{
        type:String
    },
    information:{
        type:String,
        required:true
    },
    operatingsystem:{
        type:String
    },
    shape:{
        type:String
    },
    color:{
        type:String
    }
})
module.exports = mongoose.model('watchesadd', Smartwatchschema)