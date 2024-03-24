const mongoose = require('mongoose')

const { Schema } = mongoose

const fashionschema = new Schema({
    itemid:{
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    itemtype: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type:String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image:{
        type: Array,
        required: true
    },
    gender:{
        type:String,
        required:true
    },
    information:{
        type:String,
        required:true
    },
    clothestype:{
        type:String,
        required:true
    },
    forwho:{
        type:String
    },
    clotheCategory:{
        type:String
    },
    pattern:{
        type:String
    },
    rating:{
        type:Number
    },
    fieldsection:{
        type:String
    },
    sarilength:{
        type:Number
    },
    weight:{
        type:Number
    },
    neck:{
        type:String
    },
    sleeve:{
        type:String
    },
    bottomtype:{
        type:String
    },
    inthebox:{
        type:String
    },
    fit:{
        type:String
    }
})
module.exports = mongoose.model('fashionadd', fashionschema)