const mongoose = require('mongoose')

const { Schema } = mongoose

const WatchesSchema = new Schema({
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
    watchshape: {
        type:String,
        required: true
    },
    watchstrap: {
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
    },
    watchconsole:{
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
module.exports = mongoose.model('watcheadd', WatchesSchema)