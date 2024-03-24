const mongoose = require('mongoose')

const { Schema } = mongoose

const footwearSchema = new Schema({
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
    footweartype:{
        type:String,
        required:true
    },
    rating:{
        type:Number
    },
    fieldsection:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('footwearadd', footwearSchema)