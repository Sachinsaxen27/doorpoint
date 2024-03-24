const mongoose = require('mongoose')

const { Schema } = mongoose

const Trimmerschema = new Schema({
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
        type: Array,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    category:{
        type:String,
        required:true
    },
    information:{
        type:String,
        required:true
    },
    waterResistant:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    range:{
        type:String,
        required:true
    },
    chargingtime:{
        type:String,
        required:true
    },
    battery:{
        type:String,
        required:true
    },
    bladetype:{
        type:String,
        required:true
    },
    bodytype:{
        type:String,
        required:true
    },
    rating:{
        type:String
    },
    fieldsection:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('trimmeradd', Trimmerschema)