const mongoose = require('mongoose')

const { Schema } = mongoose

const Cameraschema = new Schema({
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
    display: {
        type: String
    },
    lensmount: {
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
    sensorsize:{
        type:String,
        required:true
    },
    cameratype:{
        type:String,
        required:true
    },
    effectivelens:{
        type:String,
        required:true
    },
    cameracolor:{
        type:String,
        required:true
    },
    sensortype:{
        type:String,
        required:true
    },
    inbox:{
        type:String
    },
    rating:{
        type:Number
    },
    fieldsection:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('cameraadd', Cameraschema)