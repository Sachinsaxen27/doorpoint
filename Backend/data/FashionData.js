const express = require('express')
const FashionSchema = require('../schema/FashoinSchema');
const footwearScehma=require('../schema/FootwearSchema');
const GroomingSchema=require("../schema/GroomingSchema");
const WatchesSchema=require("../schema/WatchesSchema")
const AccessoriesSchema=require('../schema/AccessoriesSchema');
const FootwearSchema = require('../schema/FootwearSchema');
const router = express.Router()
// RPUTER 1 ADD  CLOTHES
// http://localhost:5000/api/fashionadd/clothes
router.post('/clothes', async (req, res) => {
    let success = false;
    try {
        let fashion =await FashionSchema.findOne({itemid:req.body.itemid})
        if (fashion) {
            console.log("Already exist")
            return res.status(400).json({ success:false });
        }
        const photobuffer=req.body.image
        fashion = await FashionSchema.create({
            name: req.body.name,
            itemid: req.body.itemid,
            itemtype: req.body.itemtype,
            image: photobuffer,
            brand: req.body.brand,
            color: req.body.color,
            size: req.body.size,
            material: req.body.material,
            price: req.body.price,
            gender:req.body.gender,
            information:req.body.information,
            clothestype:req.body.clothestype
        });
        fashion.save()
        success = true;
        console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        console.error("Error:", error); // Add this line for debugging
        res.status(500).json({error}); // Send an error message as a string
    }
});
// RPUTER 1 ADD  FOOTWEAR
// http://localhost:5000/api/footwearadd/footwear
router.post('/footwear', async (req, res) => {
    let success = false;
    try {
        let footwear =await footwearScehma.findOne({itemid:req.body.itemid})
        if (footwear) {
            console.log("Already exist")
            return res.status(400).json({ success:false });
        }
        const photobuffer=req.body.image
        footwear = await footwearScehma.create({
            itemid: req.body.itemid,
            name: req.body.name,
            itemtype: req.body.itemtype,
            gender:req.body.gender,
            brand: req.body.brand,
            color: req.body.color,
            size: req.body.size,
            material: req.body.material,
            image: photobuffer,
            price: req.body.price,
            information:req.body.information,
            footweartype:req.body.footwear
        });
        footwear.save()
        success = true;
        console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        console.error("Error:", error); // Add this line for debugging
        res.status(500).json({error}); // Send an error message as a string
    }
});
// RPUTER 1 ADD  GROOMING
// http://localhost:5000/api/groomingadd/grooming
router.post('/grooming', async (req, res) => {
    let success = false;
    try {
        let grooming =await GroomingSchema.findOne({itemid:req.body.itemid})
        if (grooming) {
            console.log("Already exist")
            return res.status(400).json({ success:false });
        }
        const photobuffer=req.body.image
        grooming = await GroomingSchema.create({
            itemid: req.body.itemid,
            name: req.body.name,
            itemtype: req.body.itemtype,
            gender:req.body.gender,
            image: photobuffer,
            brand: req.body.brand,
            groomingtype: req.body.groomingtype,
            lifeshell: req.body.lifeshell,
            quantity: req.body.quantity,
            price: req.body.price,
            information:req.body.information
        });
        grooming.save()
        success = true;
        console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        console.error("Error:", error); // Add this line for debugging
        res.status(500).json({error}); // Send an error message as a string
    }
});
// RPUTER 1 ADD  WATCHES
// http://localhost:5000/api/watchesadd/watch
router.post('/watch', async (req, res) => {
    let success = false;
    try {
        let watches =await WatchesSchema.findOne({itemid:req.body.itemid})
        if (watches) {
            console.log("Already exist")
            return res.status(400).json({ success:false });
        }
        const photobuffer=req.body.image
        watches = await WatchesSchema.create({
            itemid: req.body.itemid,
            name: req.body.name,
            itemtype: req.body.itemtype,
            gender:req.body.gender,
            image: photobuffer,
            brand: req.body.brand,
            color:req.body.color,
            watchshape:req.body.watchshape,
            watchstrap:req.body.watchstrap,
            price: req.body.price,
            information:req.body.information,
            watchconsole:req.body.watchconsole
        });
        // grooming.save()
        success = true;
        console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        console.error("Error:", error); // Add this line for debugging
        res.status(500).json({error}); // Send an error message as a string
    }
});
// RPUTER 1 ADD  ACCESSORIES
// http://localhost:5000/api/watchesadd/watch
router.post('/accessories', async (req, res) => {
    let success = false;
    try {
        let access =await AccessoriesSchema.findOne({itemid:req.body.itemid})
        if (access) {
            console.log("Already exist")
            return res.status(400).json({ success:false });
        }
        const photobuffer=req.body.image
        access = await AccessoriesSchema.create({
            itemid: req.body.itemid,
            name: req.body.name,
            itemtype: req.body.itemtype,
            brand: req.body.brand,
            color:req.body.color,
            price: req.body.price,
            image: photobuffer,
            gender:req.body.gender,
            information:req.body.information,
            material:req.body.material,
            producttype:req.body.producttype,
            productarea:req.body.productarea,
            productpocket:req.body.productpocket,
            productcardslot:req.body.productcardslot,
            jewelltype:req.body.jewelltype,
            plating:req.body.plating,
            gemstone:req.body.gemstone
        });
        // grooming.save()
        success = true;
        console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        console.error("Error:", error); // Add this line for debugging
        res.status(500).json({error}); // Send an error message as a string
    }
});





// ROUTER 2 GET ALL CLOTHES LIST
router.get('/getclothes',async(req,res)=>{
    const fashionlist=await FashionSchema.find({},{itemid:1,name:1,itemtype:1,brand:1,color:1,size:1,material:1,price:1,image:1,gender:1,information:1,clothestype:1})
    res.status(200).json({fashionlist})
})
// ROUTER 2 GET ALL FOOTWEAR LIST
router.get('/getfootwear',async(req,res)=>{
    const footwearlist=await FootwearSchema.find({},{itemid:1,name:1,brand:1,color:1,size:1,material:1,price:1,image:1,gender:1,information:1,footweartype:1})
    res.status(200).json({footwearlist})
})
// ROUTER 2 GET ALL GROOMING ITEM LIST
router.get('/getgrooming',async(req,res)=>{
    const groominglist=await GroomingSchema.find({},{itemid:1,name:1,itemtype:1,brand:1,groomingtype:1,image:1,lifeshell:1,quantity:1,price:1,gender:1,information:1})
    res.status(200).json({groominglist})
})
// ROUTER 2 GET ALL WATCHES LIST
router.get('/getwatches',async(req,res)=>{
    const wathceslist=await WatchesSchema.find({},{itemid:1,name:1,itemtype:1,brand:1,color:1,watchshape:1,watchstrap:1,image:1,price:1,gender:1,information:1,watchconsole:1})
    res.status(200).json({wathceslist})
})
// ROUTER 2 GET ALL WATCHES LIST
router.get('/getaccessories',async(req,res)=>{
    const accessorieslist=await AccessoriesSchema.find({},{itemid:1,name:1,itemtype:1,brand:1,color:1,price:1,image:1,gender:1,information:1,material:1,producttype:1,productarea:1,productpocket:1,productcardslot:1})
    res.status(200).json({accessorieslist})
})
module.exports = router