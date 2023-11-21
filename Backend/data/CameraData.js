const express = require('express')
const Cameraschema = require('../schema/CameraSchema')
const Printerschema = require('../schema/PrinterSchema')
const HeadphoneSchema = require('../schema/HeadphonesSchema')
const Trimmerschema = require('../schema/TrimmerSchema')
const Smartwatchschema = require('../schema/Smartwatcheschema')
const router = express.Router()

// ROUTER 1 ADD FOR CAMERA  
// http://localhost:5000/api/addproduct/mobile
router.post('/camera', async (req, res) => {
    let success = false;
    try {
        let Cameras = await Cameraschema.findOne({ mmodel: req.body.mmodel })

        if (Cameras) {
            return res.status(400).json({ success: false });
        }
        const photobuffer = req.body.image
        Cameras = await Cameraschema.create({
            company: req.body.company,
            mmodel: req.body.mmodel,
            name: req.body.name,
            image: photobuffer,
            display: req.body.display,
            lensmount: req.body.lensmount,
            battery: req.body.battery,
            price: req.body.price,
            category: req.body.category,
            information: req.body.information,
            sensorsize: req.body.sensorsize,
            cameratype: req.body.cameratype,
            effectivelens: req.body.effectivelens,
            cameracolor: req.body.cameracolor,
            sensortype: req.body.sensortype,
            inbox: req.body.inbox
            // rating:req.body.rating
        });
        Cameras.save()
        success = true;
        // console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        console.error("Error:", error); // Add this line for debugging
        res.status(500).json({ error }); // Send an error message as a string
    }
});
// ROUTER 1 ADD FOR PRINTER  
// http://localhost:5000/api/addproduct/mobile
router.post('/printer', async (req, res) => {
    let success = false;
    try {
        let printer = await Printerschema.findOne({ mmodel: req.body.mmodel })
        if (printer) {
            return res.status(400).json({ success: false });
        }
        const photobuffer = req.body.image
        printer = await Printerschema.create({
            company: req.body.company,
            mmodel: req.body.mmodel,
            name: req.body.name,
            image: photobuffer,
            price: req.body.price,
            category: req.body.category,
            information: req.body.information,
            connectivity: req.body.connectivity,
            pageminutes: req.body.pageminutes,
            color: req.body.color,
            paperSize: req.body.paperSize
        });
        printer.save()
        success = true;
        // console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        console.error("Error:", error); // Add this line for debugging
        res.status(500).json({ error }); // Send an error message as a string
    }
});
// ROUTER 1 ADD FOR HEADPHONES  
// http://localhost:5000/api/addproduct/mobile
router.post('/headphone', async (req, res) => {
    let success = false;
    try {
        let headphone = await HeadphoneSchema.findOne({ mmodel: req.body.mmodel })
        if (headphone) {
            return res.status(400).json({ success: false });
        }
        const photobuffer = req.body.image
        headphone = await HeadphoneSchema.create({
            name: req.body.name,
            company: req.body.company,
            mmodel: req.body.mmodel,
            headtype: req.body.headtype,
            image: photobuffer,
            price: req.body.price,
            battery: req.body.battery,
            category: req.body.category,
            information: req.body.information,
            connectivity: req.body.connectivity,
            playtime: req.body.playtime
        });
        headphone.save()
        success = true;
        // console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        // console.error("Error:", error); // Add this line for debugging
        res.status(500).json({ error }); // Send an error message as a string
    }
});
// ROUTER 1 ADD FOR TRIMMER  
router.post('/trimmer', async (req, res) => {
    let success = false;
    try {
        let trimmer = await Trimmerschema.findOne({ mmodel: req.body.mmodel })
        if (trimmer) {
            return res.status(400).json({ success: false });
        }
        const photobuffer = req.body.image
        trimmer = await Trimmerschema.create({
            name: req.body.name,
            company: req.body.company,
            mmodel: req.body.mmodel,
            category: req.body.category,
            image: photobuffer,
            price: req.body.price,
            information: req.body.information,
            waterResistant: req.body.waterResistant,
            color: req.body.color,
            range: req.body.range,
            chargingtime: req.body.chargingtime,
            battery: req.body.battery,
            bladetype: req.body.bladetype,
            bodytype: req.body.bodytype

        });
        trimmer.save()
        success = true;
        // console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        // console.error("Error:", error); // Add this line for debugging
        res.status(500).json({ error }); // Send an error message as a string
    }
});
// ROUTER 1 ADD FOR SMARTWATCHES  
router.post('/smartwatch', async (req, res) => {
    let success = false;
    try {
        let watch = await Smartwatchschema.findOne({ mmodel: req.body.mmodel })
        if (watch) {
            return res.status(400).json({ success: false });
        }
        const photobuffer = req.body.image
        watch = await Smartwatchschema.create({
            name: req.body.name,
            company: req.body.company,
            mmodel: req.body.mmodel,
            category: req.body.category,
            image: photobuffer,
            price: req.body.price,
            information: req.body.information,
            color: req.body.color,
            sensor: req.body.sensor,
            display: req.body.display,
            battery: req.body.battery,
            operatingsystem: req.body.operatingsystem,
            shape: req.body.shape,
            notification: req.body.notification,
        });
        watch.save()
        success = true;
        // console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        // console.error("Error:", error); // Add this line for debugging
        res.status(500).json({ error }); // Send an error message as a string
    }
});



// ROUTER 2 GET ALL CAMERA LIST
router.get('/getcamera/:camera', async (req, res) => {
    try {
        const data = req.params.camera
        if (data === "None") {
            const cameralist = await Cameraschema.find({}, { name: 1, company: 1, mmodel: 1, image: 1, price: 1, display: 1, lensmount: 1, battery: 1, category: 1, information: 1, sensorsize: 1, cameratype: 1, effectivelens: 1, cameracolor: 1, sensortype: 1 })
            res.status(200).json(cameralist)
        } else {
            const cameralist = await Cameraschema.find({ cameratype: data }, { name: 1, company: 1, mmodel: 1, image: 1, price: 1, display: 1, lensmount: 1, battery: 1, category: 1, information: 1, sensorsize: 1, cameratype: 1, effectivelens: 1, cameracolor: 1, sensortype: 1 })
            res.status(200).json(cameralist)
        }
    } catch (error) {
        res.status(400).send("Error")
    }
})
// ROUTER 2 GET ALL PRINTER LIST
router.get('/filtercategory/:filter', async (req, res) => {
    const data=req.params.filter
    if(data==="Printer"){
        const printerlist = await Printerschema.find({}, { name: 1, company: 1, mmodel: 1, image: 1, category: 1, price: 1, information: 1, connectivity: 1, color: 1, paperSize: 1, pageminutes: 1 })
        res.status(200).json(printerlist)
    }
    else if(data==='Headphones'){
        const headphonelist = await HeadphoneSchema.find({}, { name: 1, company: 1, mmodel: 1, headtype: 1, connectivity: 1, playtime: 1, image: 1, price: 1, battery: 1, category: 1, information: 1 })
        res.status(200).json(headphonelist)
    }
    else if(data==='Trimmer'){   
        const trimmerlist = await Trimmerschema.find({}, { name: 1, company: 1, mmodel: 1, image: 1, price: 1, category: 1, information: 1, waterResistant: 1, color: 1, range: 1, chargingtime: 1, battery: 1, bladetype: 1, bodytype: 1 })
        res.status(200).json(trimmerlist)
    }
    else if(data==='Smartwatches'){
        const smartwatchlist = await Smartwatchschema.find({}, { name: 1, company: 1, mmodel: 1, image: 1, price: 1, sensor: 1, notification: 1, display: 1, battery: 1, category: 1, information: 1, operatingsystem: 1, shape: 1, color: 1 })
        res.status(200).json(smartwatchlist)
    }
})


// ROUTER 3 GET CAMERA ACCORDING TO FILTER
// router.get('/filtercamera/:camera', async (req, res) => {
//     try {
//         const data = req.params.camera
//         const cameradata = await Cameraschema.find({ cameratype: data }, { name: 1, company: 1, mmodel: 1, image: 1, price: 1, display: 1, lensmount: 1, battery: 1, category: 1, information: 1, sensorsize: 1, cameratype: 1, effectivelens: 1, cameracolor: 1, sensortype: 1 })
//         res.json(cameradata)

//     } catch (error) {
//         res.status(400).send("Error")
//     }
// })



module.exports = router