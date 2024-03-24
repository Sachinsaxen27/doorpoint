const express = require('express')
const FashionSchema = require('../schema/FashoinSchema');
const footwearScehma = require('../schema/FootwearSchema');
const GroomingSchema = require("../schema/GroomingSchema");
const WatchesSchema = require("../schema/WatchesSchema")
const AccessoriesSchema = require('../schema/AccessoriesSchema');
const router = express.Router()
// RPUTER 1 ADD  CLOTHES
// http://localhost:5000/api/fashionadd/clothes
router.post('/clothes', async (req, res) => {
    let success = false;
    try {
        let fashion = await FashionSchema.findOne({ itemid: req.body.itemid })
        if (fashion) {
            console.log(fashion)
            return res.status(400).json({ success: false });
        }
        const ratings = req.body.rating || 2
        const photobuffer = req.body.image
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
            gender: req.body.gender,
            information: req.body.information,
            clothestype: req.body.clothestype,
            forwho: req.body.forwho,
            clotheCategory: req.body.clotheCategory,
            pattern: req.body.pattern,
            rating: ratings,
            fieldsection: req.body.fieldsection,
            sarilength: req.body.sarilength,
            weight: req.body.weight,
            neck: req.body.neck,
            sleeve: req.body.sleeve,
            bottomtype: req.body.bottomtype,
            inthebox: req.body.inthebox,
            fit: req.body.fit
        });
        fashion.save()
        success = true;
        // console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        console.error("Error:", error); // Add this line for debugging
        res.status(500).json({ error }); // Send an error message as a string
    }
});
// RPUTER 2 ADD  FOOTWEAR
// http://localhost:5000/api/footwearadd/footwear
router.post('/footwear', async (req, res) => {
    let success = false;
    try {
        let footwear = await footwearScehma.findOne({ itemid: req.body.itemid })
        if (footwear) {
            return res.status(400).json({ success: false });
        }
        const photobuffer = req.body.image
        const ratings = req.body.rating || 2
        footwear = await footwearScehma.create({
            itemid: req.body.itemid,
            name: req.body.name,
            itemtype: req.body.itemtype,
            gender: req.body.gender,
            brand: req.body.brand,
            color: req.body.color,
            size: req.body.size,
            material: req.body.material,
            image: photobuffer,
            price: req.body.price,
            information: req.body.information,
            footweartype: req.body.footwear,
            rating: ratings,
            fieldsection: req.body.fieldsection
        });
        footwear.save()
        success = true;
        // console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        // console.error("Error:", error); // Add this line for debugging
        res.status(500).json({ error }); // Send an error message as a string
    }
});
// RPUTER 3 ADD  GROOMING
// http://localhost:5000/api/groomingadd/grooming
router.post('/grooming', async (req, res) => {
    let success = false;
    try {
        let grooming = await GroomingSchema.findOne({ itemid: req.body.itemid })
        if (grooming) {
            return res.status(400).json({ success: false });
        }
        const photobuffer = req.body.image
        const ratings = req.body.rating || 2
        // console.log(photobuffer)
        grooming = await GroomingSchema.create({
            itemid: req.body.itemid,
            name: req.body.name,
            itemtype: req.body.itemtype,
            gender: req.body.gender,
            image: photobuffer,
            brand: req.body.brand,
            groomingtype: req.body.groomingtype,
            lifeshell: req.body.lifeshell,
            quantity: req.body.quantity,
            price: req.body.price,
            information: req.body.information,
            idealfor: req.body.idealfor,
            ptype: req.body.ptype,
            skintype: req.body.skintype,
            appiledfor: req.body.appiledfor,
            rating: ratings,
            fieldsection: req.body.fieldsection
        });
        grooming.save()
        success = true;
        // console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        console.error("Error:", error); // Add this line for debugging
        res.status(500).json({ error }); // Send an error message as a string
    }
});
// RPUTER 4 ADD  WATCHES
// http://localhost:5000/api/watchesadd/watch
router.post('/watch', async (req, res) => {
    let success = false;
    try {
        let watches = await WatchesSchema.findOne({ itemid: req.body.itemid })
        if (watches) {
            return res.status(400).json({ success: false });
        }
        const ratings = req.body.rating || 2
        const photobuffer = req.body.image
        watches = await WatchesSchema.create({
            itemid: req.body.itemid,
            name: req.body.name,
            itemtype: req.body.itemtype,
            gender: req.body.gender,
            image: photobuffer,
            brand: req.body.brand,
            color: req.body.color,
            watchshape: req.body.watchshape,
            watchstrap: req.body.watchstrap,
            price: req.body.price,
            information: req.body.information,
            watchconsole: req.body.watchconsole,
            rating: ratings,
            fieldsection: req.body.fieldsection
        });
        // grooming.save()
        success = true;
        // console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        // console.error("Error:", error); // Add this line for debugging
        res.status(500).json({ error }); // Send an error message as a string
    }
});
// RPUTER 5 ADD  ACCESSORIES
// http://localhost:5000/api/watchesadd/watch
router.post('/accessories', async (req, res) => {
    let success = false;
    try {
        let access = await AccessoriesSchema.findOne({ itemid: req.body.itemid })
        if (access) {
            return res.status(400).json({ success: false });
        }
        const photobuffer = req.body.image
        const ratings = req.body.rating || 2
        access = await AccessoriesSchema.create({
            itemid: req.body.itemid,
            name: req.body.name,
            itemtype: req.body.itemtype,
            brand: req.body.brand,
            color: req.body.color,
            price: req.body.price,
            image: photobuffer,
            gender: req.body.gender,
            information: req.body.information,
            material: req.body.material,
            producttype: req.body.producttype,
            productarea: req.body.productarea,
            productpocket: req.body.productpocket,
            productcardslot: req.body.productcardslot,
            jewelltype: req.body.jewelltype,
            plating: req.body.plating,
            gemstone: req.body.gemstone,
            bagtype: req.body.bagtype,
            rating: ratings,
            fieldsection: req.body.fieldsection
        });
        // grooming.save()
        success = true;
        // console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        // console.error("Error:", error); // Add this line for debugging
        res.status(500).json({ error }); // Send an error message as a string
    }
});
//ROUTER 6 FOR ALL LIST ITEMS
router.get('/allitemlist', async (req, res) => {
    const fashionlist = await FashionSchema.find({}, { name: 1, itemtype: 1, brand: 1, color: 1, size: 1, material: 1, price: 1, image: 1, gender: 1, clothestype: 1, information: 1, forwho: 1, clotheCategory: 1, pattern: 1, rating: 1, fieldsection: 1, sarilength: 1, weight: 1, neck: 1, sleeve: 1, bottomtype: 1, inthebox: 1, fit: 1 })
    const footwearlist = await footwearScehma.find({}, { name: 1, itemtype: 1, brand: 1, color: 1, size: 1, material: 1, price: 1, image: 1, gender: 1, information: 1, rating: 1, fieldsection: 1, sarilength: 1, weight: 1 })
    const groominglist = await GroomingSchema.find({}, { name: 1, itemtype: 1, brand: 1, lifeshell: 1, groomingtype: 1, quantity: 1, price: 1, image: 1, gender: 1, rating: 1, fieldsection: 1, sarilength: 1, weight: 1 })
    const watchlist = await WatchesSchema.find({}, { name: 1, itemtype: 1, brand: 1, color: 1, watchshape: 1, watchstrap: 1, price: 1, image: 1, gender: 1, information: 1, watchconsole: 1, rating: 1, fieldsection: 1, sarilength: 1, weight: 1 })
    const jewellerylist = await AccessoriesSchema.findOne({}, { name: 1, itemtype: 1, brand: 1, color: 1, price: 1, image: 1, gender: 1, information: 1, material: 1, producttype: 1, productarea: 1, jewelltype: 1, gemstone: 1, bagtype: 1, rating: 1, fieldsection: 1, sarilength: 1, weight: 1 })
    let newarr = fashionlist.concat(footwearlist, groominglist, watchlist, jewellerylist)
    res.status(200).json({ newarr })
})
// ROUTER 7 GET ALL WOMEN CLOTHES LIST
router.get('/getfilterclotheswomen', async (req, res) => {
    const gender = req.query.gender
    const clothing = req.query.clothing
    console.log(gender, clothing)
    const fashionlist = await FashionSchema.find({ forwho: gender, clotheCategory: clothing }, { itemid: 1, name: 1, itemtype: 1, brand: 1, color: 1, size: 1, material: 1, price: 1, image: 1, gender: 1, information: 1, clothestype: 1, forwho: 1, clotheCategory: 1, pattern: 1, rating: 1, fieldsection: 1, sarilength: 1, weight: 1, neck: 1, sleeve: 1, bottomtype: 1, inthebox: 1, fit: 1 })
    console.log("Exit")
    res.status(200).json(fashionlist)
})
// ROUTER 8 GET ALL FOOTWEAR LIST
router.get('/getfootwear', async (req, res) => {
    const footwearlist = await footwearScehma.find({}, { itemid: 1, name: 1, brand: 1, color: 1, size: 1, material: 1, price: 1, image: 1, gender: 1, information: 1, footweartype: 1, rating: 1, fieldsection: 1, sarilength: 1, weight: 1 })
    res.status(200).json({ footwearlist })
})
// ROUTER 9 GET ALL GROOMING ITEM LIST
router.get('/getgrooming', async (req, res) => {
    const groominglist = await GroomingSchema.find({}, { itemid: 1, name: 1, itemtype: 1, brand: 1, groomingtype: 1, image: 1, lifeshell: 1, quantity: 1, price: 1, gender: 1, information: 1, skintype: 1, appiledfor: 1, ptype: 1, idealfor: 1, rating: 1, fieldsection: 1, sarilength: 1, weight: 1 })
    res.status(200).json({ groominglist })
})
// ROUTER 10 GET ALL WATCHES LIST
router.get('/getwatches', async (req, res) => {
    const wathceslist = await WatchesSchema.find({}, { itemid: 1, name: 1, itemtype: 1, brand: 1, color: 1, watchshape: 1, watchstrap: 1, image: 1, price: 1, gender: 1, information: 1, watchconsole: 1, rating: 1, fieldsection: 1, sarilength: 1, weight: 1 })
    res.status(200).json({ wathceslist })
})
// ROUTER 11 GET ALL WATCHES LIST
router.get('/getwomenbag', async (req, res) => {
    const accessorieslist = await AccessoriesSchema.find({ gender: 'female' }, { itemid: 1, name: 1, itemtype: 1, brand: 1, color: 1, price: 1, image: 1, gender: 1, information: 1, material: 1, S: 1, productarea: 1, productpocket: 1, productcardslot: 1, plating: 1, gemstone: 1, bagtype: 1, producttype: 1, rating: 1, fieldsection: 1, sarilength: 1, weight: 1 })
    res.status(200).json({ accessorieslist })
})
// ROUTER 12 GET ALL CLOTHES LIST
router.get('/onlyclothes', async (req, res) => {
    const fashionlist = await FashionSchema.find({}, { itemid: 1, name: 1, itemtype: 1, brand: 1, color: 1, size: 1, material: 1, price: 1, image: 1, gender: 1, information: 1, clothestype: 1, forwho: 1, clotheCategory: 1, pattern: 1, rating: 1, fieldsection: 1, sarilength: 1, weight: 1, neck: 1, sleeve: 1, bottomtype: 1, inthebox: 1, fit: 1 })
    res.status(200).json(fashionlist)
})
// ROUTER 13 FOR UPDATE CLOTHES
router.put('/editClothes/:id', async (req, res) => {
    const { name, itemid, itemtype, image, brand, color, size, material, price, gender, information, clothestype, forwho, clotheCategory, pattern, rating, neck, sleeve, bottomtype, inthebox } = req.body
    const newfashion = {}
    if (image) { newfashion.image = image }
    if (rating) { newfashion.rating = rating }
    newfashion.name = name,
        newfashion.itemid = itemid,
        newfashion.itemtype = itemtype,
        newfashion.brand = brand,
        newfashion.color = color,
        newfashion.size = size,
        newfashion.material = material,
        newfashion.price = price,
        newfashion.gender = gender,
        newfashion.information = information,
        newfashion.clothestype = clothestype,
        newfashion.forwho = forwho,
        newfashion.clotheCategory = clotheCategory,
        newfashion.pattern = pattern,
        newfashion.neck = neck
    newfashion.sleeve = sleeve
    newfashion.bottomtype = bottomtype
    newfashion.inthebox = inthebox
    let success = true
    let fashion = await FashionSchema.findById(req.params.id)

    if (!fashion) {
        success = false
        return res.status(404).json({ success })
    }
    // if (blog.user.toString() !== req.user) { return res.status(401).send("Not ALlowed") }
    fashion = await FashionSchema.findByIdAndUpdate(req.params.id, { $set: newfashion }, { new: true })
    success = true
    res.json({ fashion, success })
})
// ROUTER 14 FOR UPDATE ACCESSORIES
router.put('/editaccessories/:id', async (req, res) => {
    const { name, itemid, itemtype, image, brand, color, productpocket, material, price, gender, information, bagtype, productcardslot, jewelltype, gemstone, productarea, producttype, plating, rating } = req.body
    const newaccessories = {}
    if (image.length != 0) { newaccessories.image = image }
    if (rating) { newaccessories.rating = rating }
    newaccessories.name = name,
        newaccessories.itemid = itemid,
        newaccessories.itemtype = itemtype,
        newaccessories.brand = brand,
        newaccessories.color = color,
        newaccessories.material = material,
        newaccessories.price = price,
        newaccessories.gender = gender,
        newaccessories.information = information,
        newaccessories.productpocket = productpocket
    newaccessories.bagtype = bagtype
    newaccessories.jewelltype = jewelltype
    newaccessories.productcardslot = productcardslot
    newaccessories.producttype = producttype
    newaccessories.productarea = productarea
    newaccessories.plating = plating
    newaccessories.gemstone = gemstone
    let success = true
    let accessorie = await AccessoriesSchema.findById(req.params.id)
    if (!accessorie) {
        success = false
        return res.status(404).json({ success })
    }
    // if (blog.user.toString() !== req.user) { return res.status(401).send("Not ALlowed") }
    accessorie = await AccessoriesSchema.findByIdAndUpdate(req.params.id, { $set: newaccessories }, { new: true })
    success = true
    res.json({ accessorie, success })
})
router.put('/editgrooming/:id', async (req, res) => {
    try {
        const { itemid, name, image, brand, grooming, lifeshell, quantity, price, information, idealfor, ptype, skintype, appiledfor, gender, itemtype, rating } = req.body
        const newgrooming = {}
        if (image.length != 0) { newgrooming.image = image }
        if (rating) { newgrooming.rating = rating }
        newgrooming.itemid = itemid,
            newgrooming.name = name,
            newgrooming.brand = brand,
            newgrooming.grooming = grooming,
            newgrooming.lifeshell = lifeshell,
            newgrooming.quantity = quantity,
            newgrooming.price = price,
            newgrooming.information = information,
            newgrooming.idealfor = idealfor,
            newgrooming.ptype = ptype,
            newgrooming.skintype = skintype,
            newgrooming.appiledfor = appiledfor,
            newgrooming.gender = gender,
            newgrooming.itemtype = itemtype
        let success = false
        let groom = await GroomingSchema.findByIdAndUpdate(req.params.id, { $set: newgrooming }, { new: true })
        success = true
        res.json({ groom, success })
    } catch (error) {
        res.status(404).json({ error })
    }


})
module.exports = router