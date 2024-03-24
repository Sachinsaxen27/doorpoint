import React, { useState, useContext, useEffect } from 'react'
import { Divider, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DoorPointApi from '../../ComponentAPI/DoorPointAPI';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import "./Formstyle.css"


const steps = ['Basic Info', 'Specifaction', 'Details'];

function Appliances() {
    const context = useContext(DoorPointApi)
    const { showAlert } = context
    const [THieght, setMyTHieght] = useState("")
    const handleThieght = (event) => {
        setMyTHieght(event.target.value)
    }
    const [TWidth, setMyTWidth] = useState("")
    const handleTwidth = (event) => {
        setMyTWidth(event.target.value)
    }
    const [TDepth, setMyTDepth] = useState("")
    const handleTdepth = (event) => {
        setMyTDepth(event.target.value)
    }
    const [OHieght, setMyOHieght] = useState("")
    const handleOhieght = (event) => {
        setMyOHieght(event.target.value)
    }
    const [OWidth, setMyOWidth] = useState("")
    const handleOwidth = (event) => {
        setMyOWidth(event.target.value)
    }
    const [ODepth, setMyODepth] = useState("")
    const handleOdepth = (event) => {
        setMyODepth(event.target.value)
    }
    const [dimension, setMyDimension] = useState("")
    const[Outdimension,setMyOutDimension]=useState('')
    useEffect(() => {
        setMyDimension(THieght + ' X ' + TWidth + " X " + TDepth)
        setMyOutDimension(OHieght+"X"+OWidth+"X"+ODepth)
        // eslint-disable-next-line
    }, [THieght, TWidth, TDepth,OHieght,OWidth,ODepth])
    const handleOpenApplianceslist = (List_Id) => {
        const Appliancelist = document.getElementById(List_Id)
        if (Appliancelist.style.display === 'none') {
            Appliancelist.style.display = 'block'
        }
        setTimeout(() => {
            Appliancelist.style.display = 'none'
        }, 10000)

    }
    const handleCloseApplianceslist = (List_Id) => {
        const Appliancelist = document.getElementById(List_Id)
        if (Appliancelist.style.display === 'block') {
            Appliancelist.style.display = 'none'
        }
    }
    const [ApplianceCate, setMyApplianceCate] = useState("None")
    const handleAppliancetype = (selectedtype) => {
        setMyApplianceCate(selectedtype)
    }
    // IMAGE TO STRING CONVERSION CODE
    const [image, setImage] = useState("")
    const convertobase64 = (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImage(reader.result)
        }
        reader.onerror = error => {
            console.error("Error", error)
            //   showAlert('Image Upload is Declined', "error")
        }
    }
    const [SmartTv, setMySmartTV] = useState("")
    const handleSmartTV = (selectedinput) => {
        setMySmartTV(selectedinput)
    }
    const [Heater, setMyheater] = useState("")
    const handleheater = (selectedinput) => {
        setMyheater(selectedinput)
    }
    const [inverter, setMyinverter] = useState("")
    const handleInverter = (selectedinput) => {
        setMyinverter(selectedinput)
    }
    const [waterlevel, setMywaterlevel] = useState("")
    const handlelevel = (selectedinput) => {
        setMywaterlevel(selectedinput)
    }
    const [Toughenedglass, setMyToughenedglass] = useState("")
    const handleglass = (selectedinput) => {
        setMyToughenedglass(selectedinput)
    }
    const [Dehumidification,setMyDehumidification]=useState('')
    const handledehumdi=(selectedinput)=>{
        setMyDehumidification(selectedinput)
    }
    const [Stabilizer, setMystabilizer] = useState("")
    const handlestabliizer = (selectedinput) => {
        setMystabilizer(selectedinput)
    }
    const [AntibacteriaFilter, setMyantibacteriaFilter] = useState("")
    const handlebacteriaFilter = (selectedinput) => {
        setMyantibacteriaFilter(selectedinput)
    }
    const [DustFilter, setMydustFilter] = useState("")
    const handledustFilter = (selectedinput) => {
        setMydustFilter(selectedinput)
    }
    const [Appliancesdetails, setMyAppliancesdetails] = useState({ applianceid: "", name: "", screensize: "", resolution: "", panelType: "", supportapp: "", nospeaker: "", speakerType: "", soundTechnology: "", ram: "", internal: "", bluetooth: "", hdmi: "", usb: "", wieght: "", appliancetype: "", company: "", details: "", power: "", price: "" })
    const [Machine, setMymachine] = useState({ washingmethod: "", spinspeed: "", dryercapcity: "", dryertype: "", color: "", washcycletime: "", spincycletime: "" })
    const [Refriger, setMyRefriger] = useState({ refrigeratortype: "", defrostingtype: "", compressortype: "", capacity: "", numberdoor: "", coolpad: "" })
    const [airconditioner, setMyAirconditioner] = useState({
        starRating: '', capacityTons: '', coolingcapacity: "", compressor: '', features: "", indoorwieght: "", outwieght: '', powerRequirement: "", annualElectricityConsumption: "", batterytype: '', airflow: ""})
    const handleAppliances = (event) => {
        setMyAppliancesdetails({ ...Appliancesdetails, [event.target.name]: event.target.value })
        setMymachine({ ...Machine, [event.target.name]: event.target.value })
        setMyRefriger({ ...Refriger, [event.target.name]: event.target.value })
        setMyAirconditioner({ ...airconditioner, [event.target.name]: event.target.value })
    }
    const handleAppliancesubmit = async (e) => {
        e.preventDefault()
        if (ApplianceCate === 'Television') {
            const response = await fetch('http://localhost:5000/api/televisionadd/addtelevision', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    image: image, appliancecate: ApplianceCate, applianceid: Appliancesdetails.applianceid, name: Appliancesdetails.name, screensize: Appliancesdetails.screensize, resolution: Appliancesdetails.resolution, panelType: Appliancesdetails.panelType, supportapp: Appliancesdetails.supportapp, nospeaker: Appliancesdetails.nospeaker, speakerType: Appliancesdetails.speakerType, soundTechnology: Appliancesdetails.soundTechnology, ram: Appliancesdetails.ram, internal: Appliancesdetails.internal, bluetooth: Appliancesdetails.bluetooth, hdmi: Appliancesdetails.hdmi, usb: Appliancesdetails.usb, wieght: Appliancesdetails.wieght, appliancetype: Appliancesdetails.appliancetype, company: Appliancesdetails.company, details: Appliancesdetails.details, power: Appliancesdetails.power, dimension: dimension, smartTV: SmartTv, price: Appliancesdetails.price
                })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(` Add Successfully`, "success")
                // pagedirection("/signin")
            } else {
                showAlert(`Already Exis`, "danger")
            }
        }
        else if (ApplianceCate === 'Washing Machine') {
            const response = await fetch('http://localhost:5000/api/machineadd/addmachine', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    applianceid: Appliancesdetails.applianceid, appliancecate: ApplianceCate, appliancetype: Appliancesdetails.appliancetype, name: Appliancesdetails.name, image: image, company: Appliancesdetails.company, wieght: Appliancesdetails.wieght, washingmethod: Machine.washingmethod, spinspeed: Machine.spinspeed, dryercapcity: Machine.dryercapcity, dryertype: Machine.dryertype, waterlevel: waterlevel, color: Machine.color, heater: Heater, inverter: inverter, washcycletime: Machine.washcycletime, spincycletime: Machine.spincycletime, details: Appliancesdetails.details, price: Appliancesdetails.price
                })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(` Add Successfully`, "success")
                // pagedirection("/signin")
            } else {
                showAlert(`Already Exis`, "danger")
            }
        }
        else if (ApplianceCate === 'Refrigerators') {
            const response = await fetch('http://localhost:5000/api/refriadd/addrefri', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    applianceid: Appliancesdetails.applianceid, appliancecate: ApplianceCate, appliancetype: Appliancesdetails.appliancetype, name: Appliancesdetails.name, refrigeratortype: Refriger.refrigeratortype, defrostingtype: Refriger.defrostingtype, compressortype: Refriger.compressortype, capacity: Refriger.capacity, numberdoor: Refriger.numberdoor, coolpad: Refriger.coolpad, image: image, toughenedglass: Toughenedglass, stabilizer: Stabilizer, company: Appliancesdetails.company, wieght: Appliancesdetails.wieght, color: Machine.color, details: Appliancesdetails.details, price: Appliancesdetails.price
                })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(` Add Successfully`, "success")
                // pagedirection("/signin")
            } else {
                showAlert(`Already Exis`, "danger")
            }
        }
        else if (ApplianceCate === 'Air Conditioners') {
            const response = await fetch('http://localhost:5000/api/airconditioners/addaircond', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({applianceid:Appliancesdetails.applianceid,name:Appliancesdetails.name,appliancetype:Appliancesdetails.appliancetype,appliancecate:ApplianceCate,company:Appliancesdetails.company,starRating:airconditioner.starRating,capacityTons:airconditioner.capacityTons,color:Machine.color,coolingcapacity:airconditioner.coolingcapacity,compressor:airconditioner.compressor,dehumidification:Dehumidification,remoteControl:Stabilizer,antibacteriaFilter:AntibacteriaFilter,dustFilter:DustFilter,features:airconditioner.features,indoordimension:dimension,indoorwieght:airconditioner.indoorwieght,outdimension:Outdimension,outwieght:airconditioner.outwieght,details:Appliancesdetails.details,price:Appliancesdetails.price,image:image,powerRequirement:airconditioner.powerRequirement,annualElectricityConsumption:airconditioner.annualElectricityConsumption,batterytype:airconditioner.batterytype,airflow:airconditioner.airflow
                })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(` Add Successfully`, "success")
                // pagedirection("/signin")
            } else {
                showAlert(`Already Exis`, "danger")
            }
        }
        // http://localhost:5000/api/refriadd/addrefri

    }
    // Pagination Code Starting
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const handleNext = () => {
        let newSkipped = skipped;
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        setActiveStep(0);
        setMyRefriger({ refrigeratortype: "", defrostingtype: "", compressortype: "", capacity: "", numberdoor: "", coolpad: "" })
        setMymachine({ washingmethod: "", spinspeed: "", dryercapcity: "", dryertype: "", color: "", washcycletime: "", spincycletime: "" })
        setMyAppliancesdetails({ applianceid: "", name: "", screensize: "", resolution: "", panelType: "", supportapp: "", nospeaker: "", speakerType: "", soundTechnology: "", ram: "", internal: "", bluetooth: "", hdmi: "", usb: "", wieght: "", appliancetype: "", company: "", details: "", power: "", price: "" })
        setMyAirconditioner({starRating: '', capacityTons: '', coolingcapacity: "", compressor: '', features: "", indoorwieght: "", outwieght: '', powerRequirement: "", annualElectricityConsumption: "", batterytype: '', airflow: ""})
        setMystabilizer("")
        setMyApplianceCate("None")
        setMyToughenedglass("")
    };
    return (
        <>
            <div>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment >
                        {activeStep === 0 &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' >
                                        <h6>Appliance ID <strong>:</strong></h6>
                                        <input type="text" name="applianceid" id="applianceid" value={Appliancesdetails.applianceid} onChange={handleAppliances} required />
                                    </div>
                                    <div className='my-3' >
                                        <h6>Name <strong>:</strong></h6>
                                        <input type="text" name='name' id='name' onChange={handleAppliances} value={Appliancesdetails.name} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' >
                                        <h6>Appliance Category:</h6>
                                        <div className='mx-3 productlist' onClick={() => { handleOpenApplianceslist('Appliancelist_1') }} style={{ position: 'relative', right: '1rem' }} >
                                            <div className="col">
                                                {ApplianceCate}
                                            </div>
                                            <div className='col' style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '4rem', justifyContent: 'center' }}> <ArrowDropDownIcon />
                                            </div>
                                        </div>
                                        <ul id='Appliancelist_1' style={{ listStyle: 'none', width: '11rem', backgroundColor: '#fff', overflowY: 'hidden', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', left: '20px', top: "15.7   rem", zIndex: '10000' }} onMouseLeave={() => { handleCloseApplianceslist('Appliancelist_1') }} required >
                                            <li>
                                                <MenuItem onClick={() => handleAppliancetype('Washing Machine')} name='Washing Machine' value={'Washing Machine'}>Washing Machine</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleAppliancetype('Television')} name='Television' value={'Television'}>Television</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleAppliancetype('Air Conditioners')} name='Air Conditioners' value={'Air Conditioners'}>Air Conditioners</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleAppliancetype('Refrigerators')} name='Refrigerators' value={'Refrigerators'}>Refrigerators</MenuItem>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='my-3' >
                                        <h6>Appliance Type:</h6>
                                        <input type="text" name="appliancetype" id="appliancetype" value={Appliancesdetails.appliancetype} onChange={handleAppliances} required />
                                    </div>
                                </div>
                            </Typography>
                        }
                        {(activeStep === 1 && ApplianceCate === "Television") &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6 >Image:</h6>
                                        <input type="file" name="toysbeautyimage" onChange={convertobase64} id="toysbeautyimage" required />
                                    </div>
                                    <div className='my-3' >
                                        <h6>Company:</h6>
                                        <input type="text" name="company" id="company" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.company} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Screen Size:</h6>
                                        <input type="text" name="screensize" id="screensize" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.screensize} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>Resolution:</h6>
                                        <input type="text" name="resolution" id="resolution" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.resolution} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Smart TV:</h6>
                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                                            <FormControlLabel value='Yes' name='Yes' control={<Radio />} onClick={() => handleSmartTV('Yes')} label="Yes" />
                                            <FormControlLabel value="No" onClick={() => handleSmartTV('No')} name='No' control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </div>
                                    <div className='my-3'>
                                        <h6>Panel Type:</h6>
                                        <input type="text" name="panelType" id="panelType" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.panelType} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Support Application:</h6>
                                        <input type="text" name="supportapp" id="supportapp" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.supportapp} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>soundTechnology:</h6>
                                        <input type="text" name="soundTechnology" id="soundTechnology" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.soundTechnology} style={{ position: 'relative', right: '15px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Number Of Speaker:</h6>
                                        <input type="number" name="nospeaker" id="nospeaker" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.nospeaker} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>Speaker Type:</h6>
                                        <input type="text" name="speakerType" id="speakerType" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.speakerType} style={{ position: 'relative', right: '15px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Power:</h6>
                                        <input type="text" name="power" id="power" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.power} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>Ram:</h6>
                                        <input type="number" name="ram" id="ram" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.ram} style={{ position: 'relative', right: '15px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Internal Storage:</h6>
                                        <input type="number" name="internal" id="internal" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.internal} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>Bluetooth:</h6>
                                        <input type="text" name="bluetooth" id="bluetooth" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.bluetooth} style={{ position: 'relative', right: '15px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>HDMI:</h6>
                                        <input type="number" name="hdmi" id="hdmi" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.hdmi} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>USB:</h6>
                                        <input type="number" name="usb" id="usb" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.usb} style={{ position: 'relative', right: '15px' }} required />
                                    </div>
                                </div>
                            </Typography>
                        }
                        {(activeStep === 1 && ApplianceCate === 'Washing Machine') &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6 >Image:</h6>
                                        <input type="file" name="toysbeautyimage" onChange={convertobase64} id="toysbeautyimage" required />
                                    </div>
                                    <div className='my-3' >
                                        <h6>Company:</h6>
                                        <input type="text" name="company" id="company" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.company} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Washing Method:</h6>
                                        <input type="text" name="washingmethod" id="washingmethod" className='mx-3' onChange={handleAppliances} value={Machine.washingmethod} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>Spin Speed:</h6>
                                        <input type="number" name="spinspeed" id="spinspeed" className='mx-3' onChange={handleAppliances} value={Machine.spinspeed} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Heater:</h6>
                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                                            <FormControlLabel value='Yes' name='Yes' control={<Radio />} onClick={() => handleheater('Yes')} label="Yes" />
                                            <FormControlLabel value="No" onClick={() => handleheater('No')} name='No' control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </div>
                                    <div className='my-3'>
                                        <h6>Inverter:</h6>
                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                                            <FormControlLabel value='Yes' name='Yes' control={<Radio />} onClick={() => handleInverter('Yes')} label="Yes" />
                                            <FormControlLabel value="No" onClick={() => handleInverter('No')} name='No' control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Dryer type :</h6>
                                        <input type="text" name="dryertype" id="dryertype" className='mx-3' onChange={handleAppliances} value={Machine.dryertype} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>Dryer Capacity:</h6>
                                        <input type="number" name="dryercapcity" id="dryercapcity" className='mx-3' onChange={handleAppliances} value={Machine.dryercapcity} style={{ position: 'relative', right: '15px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Water Level Selector:</h6>
                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                                            <FormControlLabel value='Yes' name='Yes' control={<Radio />} onClick={() => handlelevel('Yes')} label="Yes" />
                                            <FormControlLabel value="No" onClick={() => handlelevel('No')} name='No' control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </div>
                                    <div className='my-3'>
                                        <h6>Color:</h6>
                                        <input type="text" name="color" id="color" className='mx-3' onChange={handleAppliances} value={Machine.color} style={{ position: 'relative', right: '15px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Wash Cycle Time:</h6>
                                        <input type="number" name="washcycletime" id="washcycletime" className='mx-3' onChange={handleAppliances} value={Machine.washcycletime} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>Spin-Cycle Time:</h6>
                                        <input type="number" name="spincycletime" id="spincycletime" className='mx-3' onChange={handleAppliances} value={Machine.spincycletime} style={{ position: 'relative', right: '15px' }} required />
                                    </div>
                                </div>
                            </Typography>
                        }
                        {/* Refrigerators */}
                        {(activeStep === 1 && ApplianceCate === 'Refrigerators') &&
                            <Typography sx={{ mt: 2, mb: 1 }}>SS
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6 >Image:</h6>
                                        <input type="file" name="toysbeautyimage" onChange={convertobase64} id="toysbeautyimage" required />
                                    </div>
                                    <div className='my-3' >
                                        <h6>Company:</h6>
                                        <input type="text" name="company" id="company" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.company} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Refrigerator Type:</h6>
                                        <input type="text" name="refrigeratortype" id="refrigeratortype" className='mx-3' onChange={handleAppliances} value={Refriger.refrigeratortype} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>Defrosting Type:</h6>
                                        <input type="text" name="defrostingtype" id="defrostingtype" className='mx-3' onChange={handleAppliances} value={Refriger.defrostingtype} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Compressor Type:</h6>
                                        <input type="text" name="compressortype" id="compressortype" className='mx-3' onChange={handleAppliances} value={Refriger.compressortype} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3' style={{ position: 'relative', right: '32px' }}>
                                        <h6>Capacity:</h6>
                                        <input type="number" name="capacity" id="capacity" onChange={handleAppliances} value={Refriger.capacity} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Number of Doors :</h6>
                                        <input type="text" name="numberdoor" id="numberdoor" className='mx-3' onChange={handleAppliances} value={Refriger.numberdoor} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>Coolpad:</h6>
                                        <input type="text" name="coolpad" id="coolpad" className='mx-3' onChange={handleAppliances} value={Refriger.coolpad} style={{ position: 'relative', right: '16px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Toughened Glass:</h6>
                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                                            <FormControlLabel value='Yes' name='Yes' control={<Radio />} onClick={() => handleglass('Yes')} label="Yes" />
                                            <FormControlLabel value="No" onClick={() => handleglass('No')} name='No' control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </div>
                                    <div className='my-3' style={{ position: 'relative', right: '90px' }}>
                                        <h6>Stabilizer:</h6>
                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                                            <FormControlLabel value='Yes' name='Yes' control={<Radio />} onClick={() => handlestabliizer('Yes')} label="Yes" />
                                            <FormControlLabel value="No" onClick={() => handlestabliizer('No')} name='No' control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Color:</h6>
                                        <input type="text" name="color" id="color" className='mx-3' onChange={handleAppliances} value={Machine.color} style={{ position: 'relative', right: '15px' }} required />
                                    </div>

                                </div>
                            </Typography>
                        }
                        {(activeStep === 1 && ApplianceCate === 'Air Conditioners') &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6 >Image:</h6>
                                        <input type="file" name="toysbeautyimage" onChange={convertobase64} id="toysbeautyimage" required />
                                    </div>
                                    <div className='my-3' >
                                        <h6>Company:</h6>
                                        <input type="text" name="company" id="company" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.company} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Color:</h6>
                                        <input type="text" name="color" id="color" className='mx-3' onChange={handleAppliances} value={Machine.color} style={{ position: 'relative', right: '15px' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>Compressor:</h6>
                                        <input type="text" name="compressor" id="compressor" className='mx-3' onChange={handleAppliances} value={airconditioner.compressor} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Cooling Capacity:</h6>
                                        <input type="number" name="coolingcapacity" id="coolingcapacity" className='mx-3' onChange={handleAppliances} value={airconditioner.coolingcapacity} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3' style={{ position: 'relative', right: '32px' }}>
                                        <h6>Air Flow Direction:</h6>
                                        <input type="text" name="airflow" id="airflow" onChange={handleAppliances} value={airconditioner.airflow} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Capacity Tons:</h6>
                                        <input type="number" name="capacityTons" id="capacityTons" className='mx-3' onChange={handleAppliances} value={airconditioner.capacityTons} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>Star Rating:</h6>
                                        <input type="text" name="starRating" id="starRating" className='mx-3' onChange={handleAppliances} value={airconditioner.starRating} style={{ position: 'relative', right: '16px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Dehumidification:</h6>
                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                                            <FormControlLabel value='Yes' name='Yes' control={<Radio />} onClick={() => handledehumdi('Yes')} label="Yes" />
                                            <FormControlLabel value="No" onClick={() => handledehumdi('No')} name='No' control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </div>
                                    <div className='my-3' style={{ position: 'relative', right: '90px' }}>
                                        <h6>Remote Control:</h6>
                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                                            <FormControlLabel value='Yes' name='Yes' control={<Radio />} onClick={() => handlestabliizer('Yes')} label="Yes" />
                                            <FormControlLabel value="No" onClick={() => handlestabliizer('No')} name='No' control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Anti-bacteria Filter:</h6>
                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                                            <FormControlLabel value='Yes' name='Yes' control={<Radio />} onClick={() => handlebacteriaFilter('Yes')} label="Yes" />
                                            <FormControlLabel value="No" onClick={() => handlebacteriaFilter('No')} name='No' control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </div>
                                    <div className='my-3' style={{ position: 'relative', right: '90px' }}>
                                        <h6>Dust Filter:</h6>
                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                                            <FormControlLabel value='Yes' name='Yes' control={<Radio />} onClick={() => handledustFilter('Yes')} label="Yes" />
                                            <FormControlLabel value="No" onClick={() => handledustFilter('No')} name='No' control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Features:</h6>
                                        <input type="text" name="features" id="features" className='mx-3' onChange={handleAppliances} value={airconditioner.features} style={{ position: 'relative', right: '15px' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>Battery Type:</h6>
                                        <input type="text" name="batterytype" id="batterytype" className='mx-3' onChange={handleAppliances} value={airconditioner.batterytype} style={{ position: 'relative', right: '15px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Power Requirement:</h6>
                                        <input type="text" name="powerRequirement" id="powerRequirement" className='mx-3' onChange={handleAppliances} value={airconditioner.powerRequirement} style={{ position: 'relative', right: '15px' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>Electricity Consumption:</h6>
                                        <input type="number" name="annualElectricityConsumption" id="annualElectricityConsumption" className='mx-3' onChange={handleAppliances} value={airconditioner.annualElectricityConsumption} style={{ position: 'relative', right: '15px' }} required />
                                    </div>
                                </div>
                            </Typography>
                        }
                        {activeStep === 2 &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Price:</h6>
                                        <input type="number" name="price" id="price" className='mx-3' onChange={handleAppliances} value={Appliancesdetails.price} style={{ position: 'relative', right: '1rem', width: "13.3rem" }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>Details:</h6>
                                        <textarea name="details" id="details" cols="30" rows="2" onChange={handleAppliances} value={Appliancesdetails.details} required style={{ width: '12.4rem' }}></textarea>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    {ApplianceCate === "Television" && <div className='my-3'>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Dimension:</h6>
                                        <div className="d-grid">
                                            Hieght: <input type="number" className='my-1' name="THieght" id="THieght" style={{ width: '3rem' }} onChange={handleThieght} value={THieght} />
                                            &nbsp; Width: <input type="number" name="TWidth" id="TWidth" style={{ width: '3rem' }} onChange={handleTwidth} value={TWidth} /> <br />
                                            Depth: <input type="number" className='my-1' name="TDepth" id="TDepth" style={{ width: '3rem', position: "relative", left: '5px' }} onChange={handleTdepth} value={TDepth} />
                                        </div>
                                    </div>}
                                    {ApplianceCate !== 'Air Conditioners' && <div className='my-3'>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>Wieght:</h6>
                                        <input type='number' name="wieght" id="wieght" onChange={handleAppliances} value={Appliancesdetails.wieght} required />
                                    </div>}
                                </div>
                                {ApplianceCate === 'Air Conditioners' &&
                                    <div className="d-flex justify-content-between">
                                        <div className='my-3'>
                                            <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>Indoor Wieght:</h6>
                                            <input type='number' name="indoorwieght" id="indoorwieght" onChange={handleAppliances} value={airconditioner.indoorwieght} required />
                                        </div>
                                        <div className='my-3'>
                                            <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>Outdoor Wieght:</h6>
                                            <input type='number' name="outwieght" id="outwieght" onChange={handleAppliances} value={airconditioner.outwieght} required />
                                        </div>
                                    </div>
                                }
                                {ApplianceCate === 'Air Conditioners' &&
                                    <div className="d-flex justify-content-between">
                                        <div className='my-3'>
                                            <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Indoor Dimension:</h6>
                                            <div className="d-grid">
                                                Hieght: <input type="number" className='my-1' name="THieght" id="THieght" style={{ width: '3rem' }} onChange={handleThieght} value={THieght} />
                                                &nbsp; Width: <input type="number" name="TWidth" id="TWidth" style={{ width: '3rem' }} onChange={handleTwidth} value={TWidth} /> <br />
                                                Depth: <input type="number" className='my-1' name="TDepth" id="TDepth" style={{ width: '3rem', position: "relative", left: '5px' }} onChange={handleTdepth} value={TDepth} />
                                            </div>
                                        </div>
                                        <div className='my-3'>
                                            <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Outdoor Dimension:</h6>
                                            <div className="d-grid">
                                                Hieght: <input type="number" className='my-1' name="OHieght" id="OHieght" style={{ width: '3rem' }} onChange={handleOhieght} value={OHieght} />
                                                &nbsp; Width: <input type="number" name="OWidth" id="OWidth" style={{ width: '3rem' }} onChange={handleOwidth} value={OWidth} /> <br />
                                                Depth: <input type="number" className='my-1' name="ODepth" id="ODepth" style={{ width: '3rem', position: "relative", left: '5px' }} onChange={handleOdepth} value={ODepth} />
                                            </div>
                                        </div>
                                    </div>
                                }
                            </Typography>
                        }
                        <Divider />

                        <Box sx={{ display: 'flexqszz', flexDirection: 'row', pt: 2 }} className='d-flex justify-content-between  my-4'>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Button onClick={handleReset}>Reset</Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {activeStep === steps.length - 1 ? <Button onClick={handleAppliancesubmit}>Submit</Button> :
                                <Button onClick={handleNext}>
                                    Next
                                </Button>}

                        </Box>
                    </React.Fragment>
                )}
            </div>
        </>
    )
}

export default Appliances