const mongoose = require('mongoose')
const { Schema } = mongoose
const GroomingSchema = new Schema({
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
    groomingtype: {
        type: String,
        required: true
    },
    lifeshell: {
        type:String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    gender:{
        type:String,
        required:true
    },
    information:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('groomingadd', GroomingSchema)