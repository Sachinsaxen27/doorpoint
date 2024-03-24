const mongoose=require('mongoose')

const {Schema}=mongoose

const ToysSchema=new Schema({
    itemid:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    category:{
        type:String
    },
    producttype:{
        type:String
    },
    age:{
        type:String
    },
    image:{
        type:String
    },
    brand:{
        type:String
    },
    material:{
        type:String
    },
    color:{
        type:String
    },
    dimensions:{
        type:String
    },
    price:{
        type:String
    },
    recommandplayer:{
        type:String
    },
    information:{
        type:String
    },
    features:{
        type:String
    },
    includeaccess:{
        type:String
    },
    notes:{
        type:String
    },
    rechargeable:{
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
module.exports = mongoose.model('toysadd', ToysSchema)