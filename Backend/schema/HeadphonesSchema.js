const mongoose = require('mongoose')

const { Schema } = mongoose

const HeadphoneSchema = new Schema({
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
    headtype:{
        type:String,
        required:true
    },
    connectivity:{
        type:String,
        required:true
    },
    playtime:{
        type:String,
        required:true
    },
    image: {
        type: Array,
        required: true
    },
    price: {
        type:Number,
        required: true
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
    rating:{
        type:Number
    },
    fieldsection:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('headphonesadd', HeadphoneSchema)