const mongoose = require('mongoose')
const { Schema } = mongoose
const BooksSchema = new Schema({
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
    producttype:{
        type:String
    },
    publishdate: {
        type:Number,
        required: true,
    },
    publisher:{
        type:String
    },  
    binding: {
        type:String,
        required: true
    },
    nopage: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    information:{
        type:String,
        required:true
    },
    languages:{
        type:String
    },
    edition:{
        type:String
    },
    author:{
        type:String
    },
    availablelanguages:{
        type:String
    }
})
module.exports = mongoose.model('booksadd', BooksSchema)