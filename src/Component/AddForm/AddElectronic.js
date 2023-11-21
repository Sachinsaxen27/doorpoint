import React, { useContext, useState } from 'react'
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
import '../Style.css'

const steps = ['Basic Info', 'Specifaction', 'Details'];

function AddElectronic() {
    const context = useContext(DoorPointApi)
    const { showAlert } = context
    // Company list code Start

    const handleopenlist = (elementID) => {
        const companylist = document.getElementById(elementID)
        if (companylist.style.display === 'none') {
            companylist.style.display = 'block'
        }
    }
    const handlelistClose = (elementID) => {
        const companylist = document.getElementById(elementID)
        if (companylist.style.display === 'block') {
            companylist.style.display = 'none'
        }
    }
    const [company, setmyCompanyname] = useState('None')
    const handleChange = (selectedcompany) => {
        setmyCompanyname(selectedcompany)
    }
    const [category, setmyCategory] = useState('None')
    const handleCategory = (selectedCategory) => {
        setmyCategory(selectedCategory)
        setmyCompanyname("None")

    }
    // console.log(category,'console')
    const [headtype, setmyHeadphones] = useState('None')
    const [cameratype, setMycameratype] = useState('None')
    const handleHeadphones = (selectedCategory) => {
        setmyHeadphones(selectedCategory)
        setMycameratype(selectedCategory)
    }
    // Company list code End

    // API TO ADD MOBILE ON DATABASE
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
    const [details, setmyDetails] = useState({ name: "", mmodel: "", ram: "", internal: "", display: "", camera: "", rating: "", processor: "", battery: "", price: "", information: "" })
    const [head, setMyhead] = useState({ playtime: "", connectivity: "", pageminutes: "", color: "", paperSize: "", lensmount: "", sensorsize: "", sensortype: "", effectivelens: "", cameracolor: "", operatingsystem: '', graphiccard: '', storagetype: '', hddstorage: "",inbox:"" })
    const [Trimmers, setMyTrimmer] = useState({ range: "", chargingtime: "", bladetype: "", bodytype: "", sensor: "", shape: "", notification: "" })
    const [waterResistant, setMywaterResistant] = useState('')
    const handleSubmit = async(e) => {
        e.preventDefault()
        if (category === 'Mobile') {
            const response = await fetch('http://localhost:5000/api/productadd/mobile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: details.name, battery: details.battery, display: details.display, ram: details.ram, internal: details.internal, camera: details.camera, processor: details.processor, company: company, mmodel: details.mmodel, image: image, price: details.price, category: category, information: details.information, operatingsystem: head.operatingsystem })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${category} Add Successfully`, "success")
                // pagedirection("/signin")
            } else {
                showAlert(`${category} Already Exist`, "danger")
            }
        }
        else if (category === 'Headphones') {
            const response = await fetch('http://localhost:5000/api/headphonesadd/headphone', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: details.name, battery: details.battery, company: company, mmodel: details.mmodel, image: image, price: details.price, category: category, information: details.information, headtype: headtype, connectivity: head.connectivity, playtime: head.playtime })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${category} Add Successfully`, "success")
                // pagedirection("/signin")
            } else {
                showAlert(`${category} Already Exist`, "danger")
            }
        }
        else if (category === 'Printer') {
            const response = await fetch('http://localhost:5000/api/printeradd/printer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: details.name, company: company, mmodel: details.mmodel, image: image, price: details.price, category: category, information: details.information, connectivity: head.connectivity, paperSize: head.paperSize, pageminutes: head.pageminutes, color: head.color })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${category} Add Successfully`, "success")
                // pagedirection("/signin")
            } else {
                showAlert(`${category} Already Exist`, "danger")
            }
        }
        else if (category === 'Camera') {
            const response = await fetch('http://localhost:5000/api/cameraadd/camera', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: details.name, battery: details.battery, display: details.display, company: company, mmodel: details.mmodel, image: image, price: details.price, category: category, information: details.information, lensmount: head.lensmount, sensorsize: head.sensorsize, cameratype: cameratype, cameracolor: head.cameracolor, effectivelens: head.effectivelens, sensortype: head.sensortype,inbox:head.inbox})
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${category} Add Successfully`, "success")
                // pagedirection("/signin")
            } else {
                showAlert(`${category} Already Exist`, "danger")
            }
        }
        else if (category === 'Laptop') {
            const response = await fetch('http://localhost:5000/api/productadd/mobile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: details.name, battery: details.battery, display: details.display, ram: details.ram, internal: details.internal, camera: details.camera, processor: details.processor, company: company, mmodel: details.mmodel, image: image, price: details.price, category: category, information: details.information, operatingsystem: head.operatingsystem, graphiccard: head.graphiccard, storagetype: head.storagetype })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${category} Add Successfully`, "success")
                // pagedirection("/signin")
            } else {
                showAlert(`${category} Already Exist`, "danger")
            }
        }
        else if (category === 'Trimmer') {
            const response = await fetch('http://localhost:5000/api/trimmeradd/trimmer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: details.name, mmodel: details.mmodel, image: image, price: details.price, information: details.information, category: category,
                    waterResistant: waterResistant, range: Trimmers.range, color: head.color, chargingtime: Trimmers.chargingtime, bladetype: Trimmers.bladetype, bodytype: Trimmers.bodytype, battery: details.battery, company: company
                })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${category} Add Successfully`, "success")
                // pagedirection("/signin")
            } else {
                showAlert(`${category} Already Exist`, "danger")
            }
        }
        else if (category === 'Smartwatches') {
            const response = await fetch('http://localhost:5000/api/watchesadd/smartwatch', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: details.name, company: company, mmodel: details.mmodel, category: category, image: image, price: details.price, information: details.information, color: head.color, sensor: Trimmers.sensor, display: details.display, processor: details.processor, battery: details.battery, operatingsystem: head.operatingsystem, shape: Trimmers.shape, notification: Trimmers.notification
                })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${category} Add Successfully`, "success")
                // pagedirection("/signin")
            } else {
                showAlert(`${category} Already Exist`, "danger")
            }
        }
        else if (category === 'Desktop PC') {
            console.log("EEE")
            const response = await fetch('http://localhost:5000/api/productadd/mobile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: details.name, battery: details.battery, display: details.display, ram: details.ram, internal: details.internal, camera: details.camera, processor: details.processor, company: company, mmodel: details.mmodel, image: image, price: details.price, category: category, information: details.information, operatingsystem: head.operatingsystem, graphiccard: head.graphiccard, storagetype: head.storagetype, hddstorage: head.hddstorage })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${category} Add Successfully`, "success")
                // pagedirection("/signin")
            } else {
                showAlert(`${category} Already Exist`, "danger")
            }
        }
        setActiveStep(0);
        setmyDetails({ name: "", mmodel: "", ram: "", internal: "", display: "", camera: "", rating: "", processor: "", battery: "", price: "", information: "" })
        setMyhead({ playtime: "", connectivity: "", pageminutes: "", color: "", paperSize: "", lensmount: "", sensorsize: "", sensortype: "", effectivelens: "", cameracolor: "", operatingsystem: '', graphiccard: '', storagetype: '', hddstorage: "" })
        setMyTrimmer({ range: "", chargingtime: "", bladetype: "", bodytype: "", sensor: "", shape: "", notification: "" })
    }
    const handlewater = (selectedgender) => {
        setMywaterResistant(selectedgender)
    }
    const handledetailsChange = (e) => {
        setmyDetails({ ...details, [e.target.name]: e.target.value })
        setMyhead({ ...head, [e.target.name]: e.target.value })
        setMyTrimmer({ ...Trimmers, [e.target.name]: e.target.value })

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
        setmyDetails({ name: "", mmodel: "", ram: "", internal: "", display: "", camera: "", rating: "", processor: "", battery: "", price: "", information: "" })
        setMyhead({ playtime: "", connectivity: "", pageminutes: "", color: "", paperSize: "", lensmount: "", sensorsize: "", sensortype: "", effectivelens: "", cameracolor: "", operatingsystem: '', graphiccard: '', storagetype: '', hddstorage: "" })
        setMyTrimmer({ range: "", chargingtime: "", bladetype: "", bodytype: "", sensor: "", shape: "", notification: "" })
        setmyCategory("None")
        setmyCompanyname("None")
    };
    return (
        <>
            <div className="my-4 pp">
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
                                <div className="d-flex justify-content-center">
                                    <div className='my-3'>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Category:</h6>
                                        <div className='mx-5 productlist' style={{ position: 'relative', right: "3rem" }} onClick={() => { handleopenlist("categorylis_1") }} >
                                            <div className="col">
                                                {category}
                                            </div>
                                            <div className='col' style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '4rem', justifyContent: 'center' }}> <ArrowDropDownIcon />
                                            </div>
                                        </div>
                                        <ul id='categorylis_1' style={{ listStyle: 'none', width: '11rem', backgroundColor: '#fff', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '27.7rem', top: "11.55rem", zIndex: '10000' }} onMouseLeave={() => { handlelistClose('categorylis_1') }} required >
                                            <li>
                                                <MenuItem onClick={() => handleCategory('Headphones')} name='Headphones' value={"Headphones"}>Headphones</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleCategory('Mobile')} name='Mobile' value={'Mobile'}>Mobile</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleCategory('Printer')} name='Printer' value={'Printer'}>Printer</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleCategory('Camera')} name='Camera' value={'Camera'}>Camera</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleCategory('Laptop')} name='Laptop' value={'Laptop'}>Laptop</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleCategory('Trimmer')} name='Trimmer' value={"Trimmer"}>Trimmer</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleCategory('Smartwatches')} name='Smartwatches' value={"Smartwatches"}>Smartwatches</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleCategory('Desktop PC')} name='Desktop PC' value={"Desktop PC"}>Desktop PC</MenuItem>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='my-3'>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>Name:</h6>
                                        <input type="text" name="name" id="name" className='mx-5' style={{ position: 'relative', right: '3rem' }} onChange={handledetailsChange} value={details.name} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className='my-3'>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Company Name:</h6>
                                        <div className='mx-5 productlist' style={{ right: '3rem' }} onClick={() => { handleopenlist('companylist_1') }} >
                                            <div className="col">
                                                {company}
                                            </div>
                                            <div className='col' style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '4rem', justifyContent: 'center' }}> <ArrowDropDownIcon />
                                            </div>
                                        </div>
                                        {category === 'Headphones' && <ul id='companylist_1' style={{ listStyle: 'none', width: '11rem', backgroundColor: '#fff', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '27.7rem', top: "16.8rem", zIndex: '10000', height: "10rem", overflowY: 'scroll' }} onMouseLeave={() => { handlelistClose('companylist_1') }} required >
                                            <li>
                                                <MenuItem onClick={() => handleChange('Apple')} name='Apple' value={'Apple'}>Apple</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Glee')} name='Glee' value={"Glee"}>Glee</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Boat')} name='Boat' value={'Boat'}>Boat</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Sony')} name='Sony' value={'Sony'}>Sony</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('JBL')} name='JBL' value={'JBL'}>JBL</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('OnePlus')} name='OnePlus' value={"OnePlus"}>OnePlus</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Noise')} name='Noise' value={"Noise"}>Noise</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Mivi')} name='Mivi' value={"Mivi"}>Mivi</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Redmi')} name='Redmi' value={"Redmi"}>Redmi</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Samsung')} name='Samsung' value={"Samsung"}>Samsung</MenuItem>
                                            </li>

                                        </ul>}
                                        {category === 'Mobile' && <ul id='companylist_1' style={{ listStyle: 'none', width: '11rem', backgroundColor: '#fff', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '27.7rem', top: "16.8rem", zIndex: '10000', height: "10rem", overflowY: 'scroll' }} onMouseLeave={() => { handlelistClose('companylist_1') }} required >
                                            <li>
                                                <MenuItem onClick={() => handleChange('Apple')} name='Apple' value={'Apple'}>Apple</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Glee')} name='Glee' value={"Glee"}>Glee</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('IQ00')} name='IQ00' value={'IQ00'}>IQ00</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Motorola')} name='Motorola' value={'Motorola'}>Motorola</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Nothing')} name='Nothing' value={'Nothing'}>Nothing</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('OnePlus')} name='OnePlus' value={"OnePlus"}>OnePlus</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Oppo')} name='Oppo' value={"Oppo"}>Oppo</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Realme')} name='Realme' value={"Realme"}>Realme</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Redmi')} name='Redmi' value={"Redmi"}>Redmi</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Samsung')} name='Samsung' value={"Samsung"}>Samsung</MenuItem>
                                            </li>

                                        </ul>}
                                        {category === 'Camera' && <ul id='companylist_1' style={{ listStyle: 'none', width: '11rem', backgroundColor: '#fff', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '27.7rem', top: "16.8rem", zIndex: '10000', height: "10rem", overflowY: 'scroll' }} onMouseLeave={() => { handlelistClose('companylist_1') }} required >
                                            <li>
                                                <MenuItem onClick={() => handleChange('Canon')} name='Canon' value={'Canon'}>Canon</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('CP PLus')} name='CP PLus' value={'CP PLus'}>CP PLus</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Glee')} name='Glee' value={"Glee"}>Glee</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Fujifilm')} name='Fujifilm' value={'Fujifilm'}>Fujifilm</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Sony')} name='Sony' value={'Sony'}>Sony</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Nikon')} name='Nikon' value={"Nikon"}>Nikon</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Pentax')} name='Pentax' value={"Pentax"}>Pentax</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Panasonic')} name='Panasonic' value={"Panasonic"}>Panasonic</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Sigma')} name='Sigma' value={"Sigma"}>Sigma</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Casio')} name='Casio' value={"Casio"}>Casio</MenuItem>
                                            </li>

                                        </ul>}
                                        {category === 'Printer' && <ul id='companylist_1' style={{ listStyle: 'none', width: '11rem', backgroundColor: '#fff', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '27.7rem', top: "16.8rem", zIndex: '10000', height: "10rem", overflowY: 'scroll' }} onMouseLeave={() => { handlelistClose('companylist_1') }} required >
                                            <li>
                                                <MenuItem onClick={() => handleChange('Brother')} name='Brother' value={'Brother'}>Brother</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Canon')} name='Canon' value={'Canon'}>Canon</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Dell')} name='Dell' value={"Dell"}>Dell</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Epson')} name='Epson' value={'Epson'}>Epson</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Glee')} name='Glee' value={"Glee"}>Glee</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('HP')} name='HP' value={'HP'}>HP</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Panasonic')} name='Panasonic' value={"Panasonic"}>Panasonic</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Sharp')} name='Sharp' value={"Sharp"}>Sharp</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Samsung')} name='Samsung' value={"Samsung"}>Samsung</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Toshiba')} name='Toshiba' value={"Toshiba"}>Toshiba</MenuItem>
                                            </li>
                                        </ul>}
                                        {category === 'Laptop' && <ul id='companylist_1' style={{ listStyle: 'none', width: '11rem', backgroundColor: '#fff', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '27.7rem', top: "16.8rem", zIndex: '10000', height: "10rem", overflowY: 'scroll' }} onMouseLeave={() => { handlelistClose('companylist_1') }} required >
                                            <li>
                                                <MenuItem onClick={() => handleChange('Asus')} name='Asus' value={"Asus"}>Asus</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Apple')} name='Apple' value={'Apple'}>Apple</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Dell')} name='Dell' value={"Dell"}>Dell</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Glee')} name='Glee' value={"Glee"}>Glee</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('HP')} name='HP' value={'HP'}>HP</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Honor')} name='Honor' value={'Honor'}>Honor</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Lenovo')} name='Lenovo' value={'Lenovo'}>Lenovo</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('MSI')} name='MSI' value={'MSI'}>MSI</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Realme')} name='Realme' value={"Realme"}>Realme</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Xiaomi')} name='Xiaomi' value={"Xiaomi"}>Xiaomi</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Samsung')} name='Samsung' value={"Samsung"}>Samsung</MenuItem>
                                            </li>
                                        </ul>}
                                        {category === 'Trimmer' && <ul id='companylist_1' style={{ listStyle: 'none', width: '11rem', backgroundColor: '#fff', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '27.7rem', top: "16.8rem", zIndex: '10000', height: "10rem", overflowY: 'scroll' }} onMouseLeave={() => { handlelistClose('companylist_1') }} required >
                                            <li>
                                                <MenuItem onClick={() => handleChange('Nova')} name='Nova' value={'Nova'}>Nova</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Glee')} name='Glee' value={"Glee"}>Glee</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Syska')} name='Syska' value={'Syska'}>Syska</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Philips')} name='Philips' value={'Philips'}>Philips</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Panasonic')} name='Panasonic' value={'Panasonic'}>Panasonic</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Ustraa')} name='Ustraa' value={"Ustraa"}>Ustraa</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Havells')} name='Havells' value={"Havells"}>Havells</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Realme')} name='Realme' value={"Realme"}>Realme</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Xiaomi M')} iname='Xiaomi M' value={"Xiaomi M"}>Xiaomi M</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Beardo')} name='Beardo' value={"Beardo"}>Beardo</MenuItem>
                                            </li>
                                        </ul>}
                                        {category === 'Smartwatches' && <ul id='companylist_1' style={{ listStyle: 'none', width: '11rem', backgroundColor: '#fff', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '27.7rem', top: "16.8rem", zIndex: '10000', height: "10rem", overflowY: 'scroll' }} onMouseLeave={() => { handlelistClose('companylist_1') }} required >
                                            <li>
                                                <MenuItem onClick={() => handleChange('Apple')} name='Apple' value={'Apple'}>Apple</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Boat')} name='Boat' value={"Boat"}>Boat</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Glee')} name='Glee' value={"Glee"}>Glee</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Fasttrack')} name='Fasttrack' value={'Fasttrack'}>Fasttrack</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('FireBolt')} name='FireBolt' value={'FireBolt'}>FireBolt</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Noise')} name='Noise' value={'Noise'}>Noise</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('OnePlus')} name='OnePlus' value={"OnePlus"}>OnePlus</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Realme')} name='Realme' value={"Realme"}>Realme</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Redmi')} name='Redmi' value={"Redmi"}>Redmi</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Samsung')} name='Samsung' value={"Samsung"}>Samsung</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Titan')} name='Titan' value={"Titan"}>Titan</MenuItem>
                                            </li>
                                        </ul>}
                                        {category === 'Desktop PC' && <ul id='companylist_1' style={{ listStyle: 'none', width: '11rem', backgroundColor: '#fff', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '27.7rem', top: "16.8rem", zIndex: '10000', height: "10rem", overflowY: 'scroll' }} onMouseLeave={() => { handlelistClose('companylist_1') }} required >
                                            <li>
                                                <MenuItem onClick={() => handleChange('Acer')} name='Acer' value={'Acer'}>Acer</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Apple')} name='Apple' value={'Apple'}>Apple</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Asus')} name='Asus' value={'Asus'}>Asus</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Dell')} name='Dell' value={'Dell'}>Dell</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Glee')} name='Glee' value={"Glee"}>Glee</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Hp')} name='Hp' value={"Hp"}>Hp</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Lenovo')} name='Lenovo' value={'Lenovo'}>Lenovo</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Mircosoft')} name='Mircosoft' value={"Mircosoft"}>Mircosoft</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('MSI')} name='MSI' value={"MSI"}>MSI</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Razer')} name='Razer' value={"Razer"}>Razer</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Redmi')} name='Redmi' value={"Redmi"}>Redmi</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleChange('Samsung')} name='Samsung' value={"Samsung"}>Samsung</MenuItem>
                                            </li>
                                        </ul>}
                                        {category === 'None' && <ul id='companylist_1' style={{ listStyle: 'none', width: '11rem', backgroundColor: '#fff', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '27.7rem', top: "16.8rem", zIndex: '10000', height: "2rem", overflowY: 'scroll' }} onMouseLeave={() => { handlelistClose('companylist_1') }} required >
                                            
                                        </ul>}
                                    </div>
                                    <div className='my-3'>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Model Name:</h6>
                                        <input type="text" name="mmodel" id="mmodel" className='mx-5' onChange={handledetailsChange} value={details.mmodel} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                            </Typography>}
                        {(activeStep === 1 && category === "Headphones") &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between ">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}> Image:</h6>
                                        <input type="file" name="mobileimage" onChange={convertobase64} id="mobileimage" required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}> Connectivity:</h6>
                                        <input type="text" name="connectivity" id="connectivity" className='mx-5' onChange={handledetailsChange} value={head.connectivity} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>

                                </div>
                                <div className="d-flex justify-content-between ">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>Battery:</h6>
                                        <input type="text" name="battery" id="battery" className='mx-5' onChange={handledetailsChange} value={details.battery} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }}  >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Headphones:</h6>
                                        <div className='mx-5 productlist' style={{ position: 'relative', right: "3rem", width: '12rem' }} onClick={() => { handleopenlist("earphone_1") }}>
                                            <div className="col" style={{ fontSize: '12px' }}>
                                                {headtype}
                                            </div>
                                            <div className='col' style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '4rem', justifyContent: 'center' }}> <ArrowDropDownIcon />
                                            </div>
                                        </div>
                                        <ul id='earphone_1' style={{ listStyle: 'none', width: '12rem', backgroundColor: '#fff', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '3rem', top: "3.3rem", zIndex: '10000' }} onMouseLeave={() => { handlelistClose('earphone_1') }} required >
                                            <li>
                                                <MenuItem onClick={() => handleHeadphones('Bluetooth Headphones')} name='Bluetooth Headphones' value={"Bluetooth Headphones"}>Bluetooth Headphones</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleHeadphones('Wired Headphones')} name='Wired Headphones' value={'Wired Headphones'}>Wired Headphones</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleHeadphones('Earbuds')} name='Earbuds' value={'Earbuds'}>Earbuds</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleHeadphones('Speakers')} name='Speakers' value={'Speakers'}>Speakers</MenuItem>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="d-flex justify-content-between ">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>Playtime:</h6>
                                        <input type="text" name="playtime" id="playtime" className='mx-5' onChange={handledetailsChange} value={head.playtime} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                            </Typography>
                        }
                        {(activeStep === 1 && category === "Mobile") &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}> Image:</h6>
                                        <input type="file" name="mobileimage" onChange={convertobase64} id="mobileimage" required />
                                    </div>
                                    <div className='my-3 ' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Ram Size:</h6>
                                        <input type="text" name="ram" id="ram" className='mx-5 ' onChange={handledetailsChange} value={details.ram} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center ">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: "43px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Internal Storage:</h6>
                                        <input type="text" name="internal" id="internal" className='mx-5' onChange={handledetailsChange} value={details.internal} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "1px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>Battery:</h6>
                                        <input type="text" name="battery" id="battery" className='mx-5' onChange={handledetailsChange} value={details.battery} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: "43px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Display Size:</h6>
                                        <input type="text" name="display" id="display" className='mx-5' onChange={handledetailsChange} value={details.display} style={{ position: 'relative', right: '3rem' }} required />

                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "1px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Processor:</h6>
                                        <input type="text" name="processor" id="processor" className='mx-5' onChange={handledetailsChange} value={details.processor} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '10.2rem' }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Camera:</h6>
                                        <input type="text" name="camera" id="camera" className='mx-5' onChange={handledetailsChange} value={details.camera} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    {category === "Headphones" &&
                                        <div className='my-3' style={{ position: 'absolute', left: '19.5rem' }} >
                                            <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Headphones:</h6>
                                            <div className='mx-5 productlist' style={{ position: 'relative', right: "3rem", width: '12rem' }} onClick={() => { handleopenlist("earphone_1") }}>
                                                <div className="col" style={{ fontSize: '12px' }}>
                                                    {headtype}
                                                </div>
                                                <div className='col' style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '4rem', justifyContent: 'center' }}> <ArrowDropDownIcon />
                                                </div>
                                            </div>
                                            <ul id='earphone_1' style={{ listStyle: 'none', width: '12rem', backgroundColor: '#fff', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '6rem', top: "3.3rem", zIndex: '10000' }} onMouseLeave={() => { handlelistClose('earphone_1') }} required >
                                                <li>
                                                    <MenuItem onClick={() => handleHeadphones('Bluetooth Headphones')} name='Bluetooth Headphones' value={"Bluetooth Headphones"}>Bluetooth Headphones</MenuItem>
                                                </li>
                                                <li>
                                                    <MenuItem onClick={() => handleHeadphones('Wired Headphones')} name='Wired Headphones' value={'Wired Headphones'}>Wired Headphones</MenuItem>
                                                </li>
                                                <li>
                                                    <MenuItem onClick={() => handleHeadphones('Earbuds')} name='Earbuds' value={'Earbuds'}>Earbuds</MenuItem>
                                                </li>
                                                <li>
                                                    <MenuItem onClick={() => handleHeadphones('Speakers')} name='Speakers' value={'Speakers'}>Speakers</MenuItem>
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                </div>
                            </Typography>
                        }
                        {(activeStep === 1 && category === "Printer") &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}> Image:</h6>
                                        <input type="file" name="mobileimage" onChange={convertobase64} id="mobileimage" required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}> PaperSize:</h6>
                                        <input type="text" name="paperSize" id="paperSize" className='mx-5' onChange={handledetailsChange} value={head.paperSize} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between ">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}> Connectivity:</h6>
                                        <input type="text" name="connectivity" id="connectivity" className='mx-5' onChange={handledetailsChange} value={head.connectivity} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}> Page/Minutes:</h6>
                                        <input type="text" name="pageminutes" id="pageminutes" className='mx-5' onChange={handledetailsChange} value={head.pageminutes} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between ">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}> Color:</h6>
                                        <input type="text" name="color" id="color" className='mx-5' onChange={handledetailsChange} value={head.color} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                            </Typography>
                        }
                        {(activeStep === 1 && category === "Camera") &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}> Image:</h6>
                                        <input type="file" name="mobileimage" onChange={convertobase64} id="mobileimage" required />
                                    </div>
                                    <div className='my-3 ' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Mount:</h6>
                                        <input type="text" name="lensmount" id="lensmount" className='mx-5 ' onChange={handledetailsChange} value={head.lensmount} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between ">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Camera Color:</h6>
                                        <input type="text" name="cameracolor" id="cameracolor" className='mx-5' onChange={handledetailsChange} value={head.cameracolor} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>Battery:</h6>
                                        <input type="text" name="battery" id="battery" className='mx-5' onChange={handledetailsChange} value={details.battery} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Display Size:</h6>
                                        <input type="text" name="display" id="display" className='mx-5' onChange={handledetailsChange} value={details.display} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "52px" }}  >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Camera Type:</h6>
                                        <div className='mx-5 productlist' style={{ position: 'relative', right: "3rem", width: '12rem' }} onClick={() => { handleopenlist("earphone_1") }}>
                                            <div className="col" style={{ fontSize: '12px' }}>
                                                {cameratype}
                                            </div>
                                            <div className='col' style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '4rem', justifyContent: 'center' }}> <ArrowDropDownIcon />
                                            </div>
                                        </div>
                                        <ul id='earphone_1' style={{ listStyle: 'none', width: '12rem', backgroundColor: '#fff', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '3rem', top: "3.3rem", zIndex: '10000' }} onMouseLeave={() => { handlelistClose('earphone_1') }} required >
                                            <li>
                                                <MenuItem onClick={() => handleHeadphones('DSLR & Mirrorless')} name='DSLR & Mirrorless' value={"DSLR & Mirrorless"}>DSLR & Mirrorless</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleHeadphones('Action Camera')} name='Action Camera' value={"Action Camera"}>Action Camera</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleHeadphones('Instant Camera')} name='Instant Camera' value={"Instant Camera"}>Instant Camera</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleHeadphones('Car Dash Camera')} name='Car Dash Camera' value={"Car Dash Camera"}>Car Dash Camera</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleHeadphones('Wired Security Camera')} name='Wired Security Camera' value={"Wired Security Camera"}>Wired Security Camera</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleHeadphones('Wifi Security Camera')} name='Wifi Security Camera' value={"Wifi Security Camera"}>Wifi Security Camera</MenuItem>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between ">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Senor Type:</h6>
                                        <input type="text" name="sensortype" id="sensortype" className='mx-5' onChange={handledetailsChange} value={head.sensortype} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>Sensor Size:</h6>
                                        <input type="text" name="sensorsize" id="sensorsize" className='mx-5' onChange={handledetailsChange} value={head.sensorsize} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between ">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Effective Lens:</h6>
                                        <input type="text" name="effectivelens" id="effectivelens" className='mx-5' onChange={handledetailsChange} value={head.effectivelens} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                            </Typography>
                        }
                        {(activeStep === 1 && category === "Laptop") &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}> Image:</h6>
                                        <input type="file" name="mobileimage" onChange={convertobase64} id="mobileimage" required />
                                    </div>
                                    <div className='my-3 ' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>RAM:</h6>
                                        <input type="text" name="ram" id="ram" className='mx-5 ' onChange={handledetailsChange} value={details.ram} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between ">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>SDD/HDD Capacity:</h6>
                                        <input type="text" name="internal" id="internal" className='mx-5' onChange={handledetailsChange} value={details.internal} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>Battery:</h6>
                                        <input type="text" name="battery" id="battery" className='mx-5' onChange={handledetailsChange} value={details.battery} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Display Size:</h6>
                                        <input type="text" name="display" id="display" className='mx-5' onChange={handledetailsChange} value={details.display} style={{ position: 'relative', right: '3rem' }} required />

                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Processor:</h6>
                                        <input type="text" name="processor" id="processor" className='mx-5' onChange={handledetailsChange} value={details.processor} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Storage Type:</h6>
                                        <input type="text" name="storagetype" id="storagetype" className='mx-5' onChange={handledetailsChange} value={head.storagetype} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Camera:</h6>
                                        <input type="text" name="camera" id="camera" className='mx-5' onChange={handledetailsChange} value={details.camera} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>

                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Operating System:</h6>
                                        <input type="text" name="operatingsystem" id="operatingsystem" className='mx-5' onChange={handledetailsChange} value={head.operatingsystem} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Graphic Card:</h6>
                                        <input type="text" name="graphiccard" id="graphiccard" className='mx-5' onChange={handledetailsChange} value={head.graphiccard} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>

                                </div>
                            </Typography>
                        }
                        {(activeStep === 1 && category === "Trimmer") &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}> Image:</h6>
                                        <input type="file" name="mobileimage" onChange={convertobase64} id="mobileimage" required />
                                    </div>
                                    <div className='my-3 ' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Water Resistant:</h6>
                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                                            <FormControlLabel value='Yes' name='Yes' control={<Radio />} onClick={() => handlewater('Yes')} label="Yes" />
                                            <FormControlLabel value="male" onClick={() => handlewater('No')} name='No' control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between ">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Color</h6>
                                        <input type="text" name="color" id="color" className='mx-5' onChange={handledetailsChange} value={head.color} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>Battery:</h6>
                                        <input type="text" name="battery" id="battery" className='mx-5' onChange={handledetailsChange} value={details.battery} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Range:</h6>
                                        <input type="text" name="range" id="range" className='mx-5' onChange={handledetailsChange} value={Trimmers.range} style={{ position: 'relative', right: '3rem' }} required />

                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Charging Time:</h6>
                                        <input type="text" name="chargingtime" id="chargingtime" className='mx-5' onChange={handledetailsChange} value={Trimmers.chargingtime} style={{ position: 'relative', right: '3rem' }} required />

                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: '8px' }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Blade Type:</h6>
                                        <input type="text" name="bladetype" id="bladetype" className='mx-5' onChange={handledetailsChange} value={Trimmers.bladetype} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: '52px' }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Body Type:</h6>
                                        <input type="text" name="bodytype" id="bodytype" className='mx-5' onChange={handledetailsChange} value={Trimmers.bodytype} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    {category === "Headphones" &&
                                        <div className='my-3' style={{ position: 'absolute', left: '19.5rem' }} >
                                            <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Headphones:</h6>
                                            <div className='mx-5 productlist' style={{ position: 'relative', right: "3rem", width: '12rem' }} onClick={() => { handleopenlist("earphone_1") }}>
                                                <div className="col" style={{ fontSize: '12px' }}>
                                                    {headtype}
                                                </div>
                                                <div className='col' style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '4rem', justifyContent: 'center' }}> <ArrowDropDownIcon />
                                                </div>
                                            </div>
                                            <ul id='earphone_1' style={{ listStyle: 'none', width: '12rem', backgroundColor: '#fff', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '6rem', top: "3.3rem", zIndex: '10000' }} onMouseLeave={() => { handlelistClose('earphone_1') }} required >
                                                <li>
                                                    <MenuItem onClick={() => handleHeadphones('Bluetooth Headphones')} name='Bluetooth Headphones' value={"Bluetooth Headphones"}>Bluetooth Headphones</MenuItem>
                                                </li>
                                                <li>
                                                    <MenuItem onClick={() => handleHeadphones('Wired Headphones')} name='Wired Headphones' value={'Wired Headphones'}>Wired Headphones</MenuItem>
                                                </li>
                                                <li>
                                                    <MenuItem onClick={() => handleHeadphones('Earbuds')} name='Earbuds' value={'Earbuds'}>Earbuds</MenuItem>
                                                </li>
                                                <li>
                                                    <MenuItem onClick={() => handleHeadphones('Speakers')} name='Speakers' value={'Speakers'}>Speakers</MenuItem>
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                </div>
                            </Typography>
                        }
                        {(activeStep === 1 && category === "Smartwatches") &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}> Image:</h6>
                                        <input type="file" name="mobileimage" onChange={convertobase64} id="mobileimage" required />
                                    </div>
                                    <div className='my-3 ' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Color :</h6>
                                        <input type="text" name="color" id="color" className='mx-5 ' onChange={handledetailsChange} value={head.color} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Senor:</h6>
                                        <input type="text" name="sensor" id="sensor" className='mx-5 ' onChange={handledetailsChange} value={Trimmers.sensor} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    <div className='my-3 ' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Display :</h6>
                                        <input type="text" name="display" id="display" className='mx-5 ' onChange={handledetailsChange} value={details.display} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Operating System:</h6>
                                        <input type="text" name="operatingsystem" id="operatingsystem" className='mx-5 ' onChange={handledetailsChange} value={head.operatingsystem} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    <div className='my-3 ' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Battery:</h6>
                                        <input type="text" name="battery" id="battery" className='mx-5 ' onChange={handledetailsChange} value={details.battery} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Shape:</h6>
                                        <input type="text" name="shape" id="shape" className='mx-5 ' onChange={handledetailsChange} value={Trimmers.shape} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    <div className='my-3 ' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Notification:</h6>
                                        <input type="text" name="notification" id="notification" className='mx-5 ' onChange={handledetailsChange} value={Trimmers.notification} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                            </Typography>
                        }
                        {(activeStep === 1 && category === "Desktop PC") &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}> Image:</h6>
                                        <input type="file" name="mobileimage" onChange={convertobase64} id="mobileimage" required />
                                    </div>
                                    <div className='my-3 ' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>RAM:</h6>
                                        <input type="text" name="ram" id="ram" className='mx-5 ' onChange={handledetailsChange} value={details.ram} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between ">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>SDD Capacity:</h6>
                                        <input type="text" name="internal" id="internal" className='mx-5' onChange={handledetailsChange} value={details.internal} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "52px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>HDD Capacity:</h6>
                                        <input type="text" name="hddstorage" id="hddstorage" className='mx-5' onChange={handledetailsChange} value={head.hddstorage} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Display Size:</h6>
                                        <input type="text" name="display" id="display" className='mx-5' onChange={handledetailsChange} value={details.display} style={{ position: 'relative', right: '3rem' }} required />

                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Processor:</h6>
                                        <input type="text" name="processor" id="processor" className='mx-5' onChange={handledetailsChange} value={details.processor} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>Battery:</h6>
                                        <input type="text" name="battery" id="battery" className='mx-5' onChange={handledetailsChange} value={details.battery} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>

                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Camera:</h6>
                                        <input type="text" name="camera" id="camera" className='mx-5' onChange={handledetailsChange} value={details.camera} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>

                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "8px" }} >
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Operating System:</h6>
                                        <input type="text" name="operatingsystem" id="operatingsystem" className='mx-5' onChange={handledetailsChange} value={head.operatingsystem} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "52px" }}>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Graphic Card:</h6>
                                        <input type="text" name="graphiccard" id="graphiccard" className='mx-5' onChange={handledetailsChange} value={head.graphiccard} style={{ position: 'relative', right: '3rem' }} required />
                                    </div>

                                </div>
                            </Typography>
                        }
                        
                        {activeStep === 2 && <Typography sx={{ mt: 2, mb: 1 }}>
                            <div className="d-flex justify-content-between">
                                <div className='my-3'>
                                    <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Price:</h6>
                                    <input type="number" name="price" id="price" className='mx-5' onChange={handledetailsChange} value={details.price} style={{ position: 'relative', right: '3rem' }} required />
                                </div>
                                <div className='my-3'>
                                    <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>Details:</h6>
                                    <textarea name="information" id="information" cols="30" value={details.information} rows="3" onChange={handledetailsChange} required></textarea>
                                </div>
                            </div>
                            {category === "Camera" && <div className="d-flex justify-content-between">
                            <div className='my-3'>
                                    <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>In the Box:</h6>
                                    <textarea name="inbox" id="inbox" cols="30" value={head.inbox} rows="3" onChange={handledetailsChange} required></textarea>
                                </div>
                            </div>}
                        </Typography>}
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
                            {activeStep === steps.length - 1 ? <Button onClick={handleSubmit}>Submit</Button> :
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

export default AddElectronic