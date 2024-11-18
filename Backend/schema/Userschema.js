const { type } = require('@testing-library/user-event/dist/type')
const mongoose = require('mongoose')

const { Schema } = mongoose

const addressSchema = new Schema({
    name:{type:String},
    mobileno:{type:Number},
    house_number: {type: String,required: true},
    area:{ type:String,required:true},
    city:{type:String,required:true},
    state: {type:String,required:true},
    landmark: {type:String,required:true},
    postal_code: {type:Number,required:true},
    addresstype:{type:String},
    secondmobile:{type:Number}
})
const Userschema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true
    },
    mobile: {
        type: Number,
        required: true
    },
    address:[addressSchema],
    panNumber:{type:String},
    panimage:{type:String}
   
})
module.exports = mongoose.model('userlogin', Userschema)