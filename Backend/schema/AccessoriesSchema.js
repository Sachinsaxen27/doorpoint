const mongoose = require('mongoose')

const { Schema } = mongoose

const AccessoriesSchema = new Schema({
    itemid: {
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
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    information: {
        type: String,
        required: true
    },
    material: {
        type: String
    },
    producttype:{
        type:String
    },
    productarea:{
        type:String
    },
    productpocket:{
        type:String
    },
    productcardslot:{
        type:String
    },
    jewelltype:{
        type:String
    },
    plating:{
        type:String
    },
    gemstone:{
        type:String
    }
})
module.exports = mongoose.model('accessoriesadd', AccessoriesSchema)