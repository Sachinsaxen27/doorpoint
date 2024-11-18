const mongoose = require('mongoose')

const { Schema } = mongoose

const orderhistory=new Schema({
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
    delivrystatus:{
        type:String
    },
    date:{
        type:Date
    }
})
module.exports=mongoose.model('orderhistory',orderhistory)