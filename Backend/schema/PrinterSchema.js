const mongoose = require('mongoose')

const { Schema } = mongoose

const Printerschema = new Schema({
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
    connectivity:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    paperSize:{
        type:String,
        required:true
    },
    pageminutes:{
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
module.exports = mongoose.model('printeradd', Printerschema)