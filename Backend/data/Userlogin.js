const express = require('express')
const User = require('../schema/Userschema')
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator')

// ROUTE 1 FOR USER CREATION
router.post('/usersignup', [
    body('name').isLength({ min: 3, max: 15 }),
    body("email").isEmail(),
    body('password').isLength({ min: 6 }),
    body('mobile').isLength({ min: 10, max: 12 })], async (req, res) => {
        let success = false
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            //  .log(errors)
            return res.status(400).json({ success, errors: errors.array() });
        }
        try {
            let user = await User.findOne({ name: req.body.name })
            if (user) {
                return res.status(400).json({ success, errors: errors.array() });
            }

            const salt = await bcrypt.genSalt(10)
            const secpass = await bcrypt.hash(req.body.password, salt)
            user = await User.create({
                name: req.body.name,
                mobile: req.body.mobile,
                email: req.body.email,
                code: req.body.code,
                password: secpass,
            })
            const data = {
                user: {
                    id: user.id
                }
            }
            const jwt_Sign = "SachinSAXENA"
            const jwttoken = jwt.sign(data, jwt_Sign)
            success = true
            res.json({ success, jwttoken })
        } catch (error) {
            res.status(500).send(error, "Some Error Occurred")
        }
    })
// ROUTER 2 FOR USER LOGIN
router.post("/ulogin", [
    body('email').isEmail(),
    body('password').exists()
], async (req, res) => {
    // For Checking the error or not in your send data
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }); }
    // Defactoring the password or email from the database as password or email
    const { password, email } = req.body
    let success = false
    // console.log(password, email)
    try {
        // finding the email
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(500).json({ success, error: "Incorrect information" })
        }
        // Comparing the given password and database password
        // console.log(user.password)
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(500).json({ error: "Incorrect information" })
        }
        const payload = {
            user: {
                id: user.id
            }
        }
        const jwt_Sign = "SachinSAXENA"
        const authtoken = jwt.sign(payload, jwt_Sign)
        res.json({ success: true, authtoken })
    } catch (error) {
        console.log(error)
        console.log('enter')
        res.status(500).json(error)
    }
})
// ROUTER 3 GET USER DATA
router.get('/getuserdata', fetchuser, async (req, res) => {
    try {
        const userId = req.user;
        console.log(req.user, 'ds')
        const user = await User.findById(userId).select('-password -__v')
        // console.log(user)
        res.json(user)
    } catch (error) {
        res.status(500).send("Some Error Occurred")
    }
})
// ROUTE 4 SHOW USERLIST
router.get('/showuser', async (req, res) => {
    const result = await User.find({}, { name: 1, mobile: 1, email: 1, address: 1 }).select('-_id')
    res.json(result)

})
router.put('/updateuseraddress/:id', async (req, res) => {
    console.log('enter')
    try {
        const addressvalue = {
            name: req.body.name,
            mobileno: req.body.mobileno,
            house_number: req.body.house_number,
            city: req.body.city,
            state: req.body.state,
            landmark: req.body.landmark,
            postal_code: req.body.pincode,
            addresstype: req.body.addresstype,
            area: req.body.area,
            secondmobile: req.body.secondmobile
        }
        let user = await User.findById(req.params.id)
        user.address.push(addressvalue);
        await user.save();
        user = await User.findById(req.params.id).select('-password -__v')
        console.log(user)
        res.json({ user,success: true });
    } catch (error) {
        console.log('success',error)
        res.status(500).json({ success: false, message: 'Server error' });
    }
})
router.put('/updatepan/:id',async(req,res)=>{
    try{
        const{panNumber,panimage}=req.body
        const newpan={}
        if(panNumber){newpan.panNumber=panNumber}
        if(panimage){newpan.panimage=panimage}
        console.log('enter')
        let success=false
        let user=await User.findByIdAndUpdate(req.params.id,{$set:newpan},{new:true})
        success=true
        console.log(user)
        res.status(200).json(success)
    }catch(error){
        res.status(400).json(error)
    }
})
module.exports = router
