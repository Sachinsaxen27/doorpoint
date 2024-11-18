const mongoose = require('mongoose')

const { Schema } = mongoose

const addcart=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userlogin"
    },
    name:{
        type:String
    },
    image:{
        type:Array
    },
    item_id:{
        type:String
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    },
    brand:{
        type:String
    }
})
module.exports=mongoose.model('addcart',addcart)