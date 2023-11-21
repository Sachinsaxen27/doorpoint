const mongoose=require('mongoose')

const {Schema}=mongoose

const Userschema= new Schema({
    name: {
        type: String,
        required:true
    },
    code:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true
    },
    mobile:{
        type:Number,
        required:true
    },
    address:{
        type: String,
        // required:true
    }
    // image:{
    //     type:String,
    //     required:true
    // }
})
module.exports=mongoose.model('userlogin',Userschema)