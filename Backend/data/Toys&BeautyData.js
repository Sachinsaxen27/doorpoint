const express=require('express')
const router=express.Router()
const Toys=require("../schema/ToysSchema")
const Books=require('../schema/BooksSchema')
// ROUTER 1 FOR ADDING TOYS
router.post('/addtoys',async(req,res)=>{
    try{
        let success=false
        let toys=await Toys.findOne({itemid:req.body.itemid})
        if(toys){
            return res.status(208).json({success,msg:"Already Exis"})
        }
        const photobuffer=req.body.image
        toys=await Toys.create({
            itemid:req.body.itemid,
            name:req.body.name,
            category:req.body.category,
            producttype:req.body.producttype,
            age:req.body.age,
            image:photobuffer,
            brand:req.body.brand,
            material:req.body.material,
            color:req.body.color,
            dimensions:req.body.dimensions,
            price:req.body.price,
            recommandplayer:req.body.recommandplayer,
            information:req.body.information,
            features:req.body.features,
            includeaccess:req.body.includeaccess,
            notes:req.body.notes,
            rechargeable:req.body.rechargeable,
        })
        // toys.save()
        success = true;
        console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    }catch(error){
        res.status(500).json({msg:'Internal Server Error',error})
    }
})
// ROUTER 2 FOR ADDING BOOKS
router.post('/addbooks',async(req,res)=>{
    try{
        let success=false
        let books=await Books.findOne({itemid:req.body.itemid})
        if(books){
            return res.status(208).json({success,msg:"Already Exis"})
        }
        const photobuffer=req.body.image
        books=await Books.create({
            itemid:req.body.itemid,
            name:req.body.name,
            itemtype:req.body.itemtype,
            producttype:req.body.producttype,
            publishdate:req.body.publishdate,
            publisher:req.body.publisher,
            binding:req.body.binding,
            nopage:req.body.nopage,
            price:req.body.price,
            image:photobuffer,
            information:req.body.information,
            languages:req.body.languages,
            edition:req.body.edition,
            author:req.body.author,
            availablelanguages:req.body.availablelanguages
        })
        // toys.save()
        success = true;
        console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    }catch(error){
        res.status(500).json({msg:'Internal Server Error',error})
    }
})
// ROUTER 3 FOR GET ALL TOYS LIST
router.get('/getlist',async(req,res)=>{
    const toyslist=await Toys.find({},{itemid:1,name:1,category:1,producttype:1,age:1,image:1,brand:1, material:1,color:1,dimensions:1,price:1,recommandplayer:1,information:1,features:1,includeaccess:1,notes:1,rechargeable:1})
    res.status(200).json(toyslist)
})
// ROUTER 3 FOR GET ALL BOOKS LIST
router.get('/getbook',async(req,res)=>{
    const booklist=await Books.find({},{itemid:1,name:1,itemtype:1,producttype:1,publishdate:1,publisher:1,binding:1,nopage:1,price:1,image:1,information:1,languages:1,edition:1,author:1,availablelanguages:1})
    res.status(200).json(booklist)
})
module.exports=router