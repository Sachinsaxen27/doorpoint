const mongoose = require('mongoose')

const { Schema } = mongoose

const Productschema = new Schema({
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
    ram: {
        type: String
    },
    internal: {
        type: String
    },
    display: {
        type: String
    },
    camera: {
        type: String
    },
    processor: {
        type: String
    },
    battery:{
        type:String
    },
    category:{
        type:String,
        required:true
    },
    information:{
        type:String,
        required:true
    },
    operatingsystem:{
        type:String
    },
    graphiccard:{
        type:String
    },
    hddstorage:{
        type:String
    },
    storagetype:{
        type:String
    }
})
module.exports = mongoose.model('productadd', Productschema)