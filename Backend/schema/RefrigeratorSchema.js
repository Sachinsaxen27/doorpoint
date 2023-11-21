const mongoose=require("mongoose")
const {Schema}=mongoose
const RefrigeratorSchema=new Schema({
    applianceid:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    appliancetype:{
        type:String,
        required:true
    },
    appliancecate:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    refrigeratortype:{
        type:String,
        required:true
    },
    defrostingtype:{
        type:String,
        required:true
    },
    compressortype:{
        type:String,
        required:true
    } ,
    capacity:{
        type:Number
    },
    numberdoor:{
        type:Number,required:true
    },
    coolpad:{
        type:String
    },
    toughenedglass:{
        type:String
    },
    stabilizer:{
        type:String
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },  
    details:{
        type:String
    },
    color:{
        type:String
    },
    wieght:{
        type:Number
    }
})


module.exports = mongoose.model('refriadd',RefrigeratorSchema)