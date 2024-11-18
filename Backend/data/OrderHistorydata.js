const express = require('express')
const router = express.Router()
const Orderhistory = require('../schema/OrderHistory')
const fetchuser = require('../middleware/fetchuser')

// ROUTER 1 FOR STORING ORDER IN YOUR HISTORY
router.post('/order_store', fetchuser, async (req, res) => {
    let success = false;
    let date = new Date
    const dayname = ['Mon', 'Tue', 'Wed', "Thu", "Fri", 'Sat', 'Sun']
    const Monthname = ['Jan', 'Feb', 'Mar', "Apr", "May", 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', "Nov", 'Dec']
    let orderdate = dayname[date.getDay() - 1] + "/" + Monthname[date.getMonth()] + '/' + date.getDate()
    try {
        console.log(req.body.element, 'hiih')
        let order = await Orderhistory.findOne({ item_id: req.body.element._id, user: req.user })
        if (order) {
            return res.status(400).json({ success: false });
        }
        // console.log(req.user)
        if (Array.isArray(req.body.element) &&req.body.element.length > 1) {
            order = req.body.element.map(item => ({
                user: req.user,
                name: item.name,
                image: item.image,
                item_id: item.item_id,
                delivrystatus:"Yet to be delivered",
                price: item.price,
                date:orderdate
            }))
            await Orderhistory.insertMany(order)
        } else {
            order = await Orderhistory.create({
                user: req.user,
                name: req.body.element.name,
                image: req.body.element.image,
                item_id: req.body.element._id,
                price: req.body.element.price,
                delivrystatus: "Yet to be delivered",
                date: orderdate
            });
        }
        success = true;
        // console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        console.error("Error:", error); // Add this line for debugging
        res.status(500).json({ error }); // Send an error message as a string
    }
})
// ROUTER 2 FOR RETREVING THE ORDER LIST
router.get('/Get_Order_list', fetchuser, async (req, res) => {
    let success = false
    try {
        const userid = req.user
        // console.log(userid)
        let order = await Orderhistory.find({ user: userid }).sort({ _id: -1, })
        success = true
        res.status(200).json({ order, success })
    } catch (error) {
        console.error(error)
        res.status(404).json(success)

    }
})
module.exports = router