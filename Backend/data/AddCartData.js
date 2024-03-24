const express = require('express')
const router = express.Router()
const Addcart = require('../schema/AddtoCart')
const fetchuser = require('../middleware/fetchuser')
//ROUTER 1 FOR ADDING DATA 
router.post('/carts', fetchuser, async (req, res) => {
    let success = false;
    try {
        let addcart = await Addcart.findOne({ item_id: req.body.element._id,user:req.user })
        if (addcart) {
            return res.status(400).json({ success: false });
        }
        const photobuffer = req.body.element.image
        // console.log(req.user)
        addcart = await Addcart.create({
            user: req.user,
            name: req.body.element.name,
            image: photobuffer,
            item_id: req.body.element._id,
            price: req.body.element.price,
            quantity: req.body.quantity
        });
        success = true;
        // console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        console.error("Error:", error); // Add this line for debugging
        res.status(500).json({ error }); // Send an error message as a string
    }
})
router.get('/getcart', fetchuser, async (req, res) => {
    let success = false
    try {
        const userid = req.user
        // console.log(userid)
        let getcart = await Addcart.find({ user: userid }).sort({ _id: -1 })
        success = true
        res.status(200).json({ getcart, success })
    } catch (error) {
        console.error(error)
        res.status(404).json(success)

    }
})
router.put('/updatecart/:id',fetchuser,async (req, res) => {
    console.log(req.params.id,'enter')
    const newUpdatecart = {}
    if (req.body.quantity) { newUpdatecart.quantity = req.body.quantity }
    let success = true
    let newCart = await Addcart.find({user:req.user,item_id:req.params.id})
    // let newCart = await Addcart.findOne({item_id:req.params.id,user:req.user })
    console.log(newCart,'enter')
    if (!newCart) {
        success = false
        return res.status(404).json({ success })
    }
    // if(newCart.user.toString()===req.user){
        newCart = await Addcart.findOneAndUpdate({user:req.user,item_id:req.params.id},{ $set: newUpdatecart }, { new: true })
        success = true
        res.json({ newCart, success })
    // }
    // newCart = await Addcart.findByIdAndUpdate(req.params.id, { $set: newUpdatecart }, { new: true })
})
module.exports = router