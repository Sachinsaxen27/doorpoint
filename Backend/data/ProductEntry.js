const express = require('express')
const ProductSchema = require('../schema/ProductSchema');
const router = express.Router()
// RPUTER 1 ADD FOR MOBILE
// http://localhost:5000/api/addproduct/mobile
router.post('/mobile', async (req, res) => {
    let success = false;
    try {
        let model = req.body.mmodel
        let product = await ProductSchema.findOne({ mmodel: req.body.mmodel })
        if (product) {
            return res.status(400).json({ success: false });
        }
        const photobuffer = req.body.image
        product = await ProductSchema.create({
            company: req.body.company,
            mmodel: req.body.mmodel,
            name: req.body.name,
            image: photobuffer,
            ram: req.body.ram,
            internal: req.body.internal,
            display: req.body.display,
            camera: req.body.camera,
            processor: req.body.processor,
            battery: req.body.battery,
            price: req.body.price,
            category: req.body.category,
            information: req.body.information,
            operatingsystem: req.body.operatingsystem,
            graphiccard: req.body.graphiccard,
            storagetype: req.body.storagetype,
            hddstorage: req.body.hddstorage,
            fieldsection:req.body.fieldsection
        });
        product.save()
        success = true;
        // console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        // console.error("Error:", error); // Add this line for debugging
        res.status(500).json({ error }); // Send an error message as a string
    }
});
// ROUTER 2 GET ALL MOBILE LIST
router.get('/getmobile/:mobile', async (req, res) => {
    try {
        const data = req.params.mobile
        if (data === "None") {
           const mobilelist= await ProductSchema.find({}, { company: 1, mmodel: 1, name: 1, image: 1, ram: 1, internal: 1, display: 1, camera: 1, processor: 1, information: 1, price: 1, category: 1 ,fieldsection:1})
            res.status(200).json(mobilelist )
        } else {
            const mobilelist=await ProductSchema.find({ category: data }, { company: 1, mmodel: 1, name: 1, image: 1, ram: 1, internal: 1, display: 1, camera: 1, processor: 1, information: 1, price: 1, category: 1,fieldsection:1 })        
            res.status(200).json(mobilelist)
        }
    } catch (error) {
        res.status(400).send("Error")
    }
})
module.exports = router
