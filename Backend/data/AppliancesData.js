const express=require("express")
const router=express.Router()
const Television=require('../schema/TelevisionSchema')
const MachineSchema=require('../schema/WashingMacSchema')
const RefrigeratorSchema=require("../schema/RefrigeratorSchema")
// ROUTER 1 FOR ADDING TELEVISION
// http://localhost:5000/api/televisionadd/addtelevision

router.post('/addtelevision',async(req,res)=>{
    let success = false;
    try {
        let tv = await Television.findOne({ applianceid: req.body.applianceid })
        if (tv) {
            return res.status(400).json({ success: false });
        }
        const photobuffer = req.body.image
        // console.log("photobuffer",photobuffer)
        // console.log("photobuffer",req.body.bluetooth)
        // console.log("photobuffer",req.body.smartTV)
        console.log("photobuffer",req.body.price)
        
        tv = await Television.create({
            applianceid:req.body.applianceid,
            name:req.body.name,
            appliancetype:req.body.appliancetype,
            appliancecate:req.body.appliancecate,
            image:photobuffer,
            company:req.body.company,
            screensize:req.body.screensize,
            resolution:req.body.resolution,
            smartTV:req.body.smartTV,
            panelType:req.body.panelType,
            supportapp:req.body.supportapp,
            nospeaker:req.body.nospeaker,
            speakerType:req.body.speakerType,
            soundTechnology:req.body.soundTechnology,
            ram:req.body.ram,
            internal:req.body.internal,
            bluetooth:req.body.bluetooth,
            hdmi:req.body.hdmi,
            usb:req.body.usb,
            dimension:req.body.dimension,
            wieght:req.body.wieght,
            details:req.body.details,
            price:req.body.price,
            power:req.body.power
        });
        success = true;
        // console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    } catch (error) {
        console.error("Error:", error); // Add this line for debugging
        res.status(500).json({ error }); // Send an error message as a string
    }
})
// ROUTER 2 FOR ADDING WASHING MACHINES
// http://localhost:5000/api/machineadd/addmachine
router.post('/addmachine',async(req,res)=>{
    let success=true
    try{
        let machine=await MachineSchema.findOne({applianceid:req.body.applianceid})
        if(machine){
            return res.status(400).json({ success: false });
        }
        const photobuffer = req.body.image
        machine=await MachineSchema.create({
            applianceid:req.body.applianceid,
            appliancecate:req.body.appliancecate,
            appliancetype:req.body.appliancetype,
            name:req.body.name,
            image:photobuffer,
            company:req.body.company,
            wieght:req.body.wieght,
            washingmethod:req.body.washingmethod,
            spinspeed:req.body.spinspeed,
            dryercapcity:req.body.dryercapcity,
            dryertype:req.body.dryertype,
            waterlevel:req.body.waterlevel,
            color:req.body.color,
            heater:req.body.heater,
            inverter:req.body.inverter,
            washcycletime:req.body.washcycletime,
            spincycletime:req.body.spincycletime,
            price:req.body.price,
            details:req.body.details
        })
        success = true;
        // console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    }catch(error){
        console.log(error)
    }
})

// ROUTER 3 FOR ADDING REFRIGERATOR
// http://localhost:5000/api/refriadd/addtelevision
router.post('/addrefri',async(req,res)=>{
    let success=true
    try{
        let refri=await RefrigeratorSchema.findOne({applianceid:req.body.applianceid})
        if(refri){
            return res.status(400).json({ success: false });
        }
        console.log("SS")
        const photobuffer = req.body.image
        refri=await RefrigeratorSchema.create({
            applianceid:req.body.applianceid,
            appliancecate:req.body.appliancecate,
            appliancetype:req.body.appliancetype,
            name:req.body.name,
            image:photobuffer,
            company:req.body.company,
            refrigeratortype:req.body.refrigeratortype,
            defrostingtype:req.body.defrostingtype,
            compressortype:req.body.compressortype,
            capacity:req.body.capacity,
            numberdoor:req.body.numberdoor,
            coolpad:req.body.coolpad,
            toughenedglass:req.body.toughenedglass,
            stabilizer:req.body.stabilizer,
            price:req.body.price,  
            details:req.body.details,
            color:req.body.color,
            wieght:req.body.wieght
        })
        success = true;
        // console.log("Success:", success); // Add this line for debugging
        res.json({ success }); // Send a JSON response
    }catch(error){
        console.log(error)
    }
})



//ROUTER 4 FOR GET ALL TELEVISION LIST  
router.get('/gettelevision',async(req,res)=>{
    const televisionlist=await Television.find({},{applianceid:1,name:1,appliancetype:1,appliancecate:1,image:1,company:1,screensize:1,resolution:1,smartTV:1,panelType:1,supportapp:1,nospeaker:1,speakerType:1,soundTechnology:1,ram:1,internal:1,bluetooth:1,hdmi:1,usb:1,dimension:1,wieght:1,details:1,price:1,power:1})
    res.status(200).json({ televisionlist })
})
//ROUTER 5 FOR GET ALL WASHING MACHINE LIST
router.get('/getmachine',async(req,res)=>{
    const machinelist=await MachineSchema.find({},{applianceid:1,appliancecate:1,appliancetype:1,name:1,company:1,wieght:1,washingmethod:1,spinspeed:1,dryercapcity:1,dryertype:1,waterlevel:1,color:1,heater:1,inverter:1,washcycletime:1,spincycletime:1,price:1,details:1,image:1})
    res.status(200).json({ machinelist })
})
//ROUTER 5 FOR GET ALL REFRIGERATOR LIST
router.get('/getrefri',async(req,res)=>{
    const refrilist=await RefrigeratorSchema.find({},{applianceid:1,name:2,appliancetype:1,appliancecate:1,company:1,refrigeratortype:1,defrostingtype:1,compressortype:1,capacity:1,numberdoor:1,coolpad:1,toughenedglass:1,stabilizer:1,image:1,price:1,details:1,color:1,wieght:1})
    res.status(200).json({ refrilist })
})

module.exports = router
