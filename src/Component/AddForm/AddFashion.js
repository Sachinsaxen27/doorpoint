import React, { useContext, useState } from 'react'
import { Divider, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DoorPointApi from '../../ComponentAPI/DoorPointAPI'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Basic Info', 'Specifaction', 'Details'];


function AddFashion() {
    const context = useContext(DoorPointApi)
    const { showAlert } = context
    const handleopenfashionlist = () => {
        const companylist = document.getElementById('fashionlist_1')
        if (companylist.style.display === 'none') {
            companylist.style.display = 'block'
        }
    }
    const handleClosefashionlist = () => {
        const companylist = document.getElementById('fashionlist_1')
        if (companylist.style.display === 'block') {
            companylist.style.display = 'none'
        }
    }
    const [producttype, setMyproducttype] = useState("None")
    const handleproducttypelist = (selectedproduct) => {
        setMyproducttype(selectedproduct)
    }
    const [fashion, setMyfashion] = useState('None')
    const handlefashionlist = (selectedfashion) => {
        setMyfashion(selectedfashion)
    }
    const [Grooming, setMygrooming] = useState("None")
    const handlegroominlist = (selectedgroom) => {
        setMygrooming(selectedgroom)
    }
    const [watchconsole, setMyWatchconsole] = useState("None")
    const handleconsolelist = (selectedconsole) => {
        setMyWatchconsole(selectedconsole)
    }
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
    const [gender, setMygender] = useState('')
    const handlefashiongender = (selectedgender) => {
        setMygender(selectedgender)
    }
    const [fashiondetails, setmyFashiondetails] = useState({ name: "", itemid: "", brand: "", color: "", size: "", material: "", price: "", information: "", Footweartype: "", lifeshell: "", quantity: "", clothestype: '', watchstrap: '', watchshape: "", productarea: "", productpocket: "", productcardslot: "", jewelltype: "", plating: "", gemstone: "" })
    const handlefashionsubmit = async (e) => {
        e.preventDefault()
        // const response = await fetch('http://localhost:5000/api/groomingadd/grooming', {
        if (fashion === 'Footwear') {
            const response = await fetch('http://localhost:5000/api/footwearadd/footwear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: fashiondetails.name, itemid: fashiondetails.itemid, brand: fashiondetails.brand, color: fashiondetails.color, size: fashiondetails.size, material: fashiondetails.material, gender: gender, price: fashiondetails.price, image: image, itemtype: fashion, information: fashiondetails.information, footweartype: fashion.footweartype
                })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${fashion} Add Successfully`, "success")
                // pagedirection("/signin")
                console.log(`${fashion} Add Successfully`, "success")
            } else {
                showAlert(`${fashion} Already Exist`, "danger")
            }
        }
        else if (fashion === 'Clothes') {
            const response = await fetch('http://localhost:5000/api/fashionadd/clothes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: fashiondetails.name, itemid: fashiondetails.itemid, brand: fashiondetails.brand, color: fashiondetails.color, size: fashiondetails.size, material: fashiondetails.material, gender: gender, price: fashiondetails.price, image: image, itemtype: fashion, information: fashiondetails.information, clothestype: fashiondetails.clothestype
                })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${fashion} Add Successfully`, "success")
                // pagedirection("/signin")
                console.log(`${fashion} Add Successfully`, "success")
            } else {
                showAlert(`${fashion} Already Exist`, "danger")
            }
        }
        else if (fashion === 'Grooming') {
            const response = await fetch('http://localhost:5000/api/groomingadd/grooming', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    itemid: fashiondetails.itemid, name: fashiondetails.name, itemtype: fashion, gender: gender, image: image, brand: fashiondetails.brand, price: fashiondetails.price, information: fashiondetails.information, lifeshell: fashiondetails.lifeshell, quantity: fashiondetails.quantity, groomingtype: Grooming
                })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${fashion} Add Successfully`, "success")
                // pagedirection("/signin")
                console.log(`${fashion} Add Successfully`, "success")
            } else {
                showAlert(`${fashion} Already Exist`, "danger")
            }
        }
        else if (fashion === 'Watches') {
            const response = await fetch('http://localhost:5000/api/watcheadd/watch', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: fashiondetails.name, itemid: fashiondetails.itemid, gender: gender, image: image, color: fashiondetails.color, brand: fashiondetails.brand, watchconsole: watchconsole, watchshape: fashiondetails.watchshape, watchstrap: fashiondetails.watchstrap, price: fashiondetails.price, information: fashiondetails.information, itemtype: fashion })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${fashion} Add Successfully`, "success")
                // pagedirection("/signin")
                console.log(`${fashion} Add Successfully`, "success")
            } else {
                showAlert(`${fashion} Already Exist`, "danger")
            }
        }
        else if (fashion === 'Accessories') {
            const response = await fetch('http://localhost:5000/api/accessoriesadd/accessories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ itemid: fashiondetails.itemid, name: fashiondetails.name, itemtype: fashion, brand: fashiondetails.brand, color: fashiondetails.color, price: fashiondetails.price, image: image, gender: gender, information: fashiondetails.information, material: fashiondetails.material, producttype: producttype, productarea: fashiondetails.productarea, productpocket: fashiondetails.productpocket, productcardslot: fashiondetails.productcardslot, jewelltype: fashiondetails.jewelltype, plating: fashion.plating, gemstone: fashiondetails.gemstone })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${fashion} Add Successfully`, "success")
                // pagedirection("/signin")
                console.log(`${fashion} Add Successfully`, "success")
            } else {
                showAlert(`${fashion} Already Exist`, "danger")
            }
        }
    }
    const handlefashionChange = (e) => {
        setmyFashiondetails({ ...fashiondetails, [e.target.name]: e.target.value })
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
        setmyFashiondetails({ name: "", itemid: "", brand: "", color: "", size: "", material: "", price: "", information: "", Footweartype: "", lifeshell: "", quantity: "", clothestype: '', watchstrap: '', watchshape: "", productarea: "", productpocket: "", productcardslot: "", jewelltype: "", plating: "", gemstone: "" })
        setMygender('')
        setImage('')
        setMyWatchconsole('')
        setMyfashion('')
        setMygrooming("")
        setActiveStep(0);
    };
    return (
        <>
            <div className="my-4">
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
                        {activeStep === 0 && <Typography sx={{ mt: 2, mb: 1 }}>
                            <div className="d-flex  justify-content-between">
                                <div className='my-3' style={{ width: "15rem" }}>
                                    <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}> Item ID:</h6>
                                    <input type="number" name="itemid" id="itemid" className='mx-5' onChange={handlefashionChange} value={fashion.name} required style={{ position: 'relative', right: '48px' }} />
                                </div>
                                <div className='my-3' style={{ width: "15rem", position: 'relative' }}>
                                    <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}> Name:</h6>
                                    <input type="text" name="name" id="name" className='mx-5' onChange={handlefashionChange} value={fashiondetails.name} required style={{ position: 'relative', right: '3rem' }} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className='my-3' style={{ width: "15rem", position: 'relative', right: '92px' }}>
                                    <h6 style={{ fontSize: '13px', position: 'relative', left: '91px' }}>Gender:</h6>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" style={{ position: 'relative', left: "91.8px" }}>
                                        <FormControlLabel value='female' name='femmale' control={<Radio />} onClick={() => handlefashiongender('female')} label="Female" />
                                        <FormControlLabel value="male" onClick={() => handlefashiongender('male')} name='male' control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </div>
                                <div className='my-3' style={{ width: "15rem", position: 'relative', right: '8px' }} >
                                    <h6 style={{ fontSize: '13px', position: 'relative', left: '7px' }}>Item Type:</h6>
                                    <div className='mx-5 productlist' onClick={handleopenfashionlist} style={{ position: 'relative', right: '39.7px' }} >
                                        <div className="col">
                                            {fashion}
                                        </div>
                                        <div className='col' style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '4rem', justifyContent: 'center' }}>   <ArrowDropDownIcon />
                                        </div>
                                    </div>
                                    <ul id='fashionlist_1' style={{ listStyle: 'none', width: '11rem', height: '9rem', backgroundColor: '#fff', overflowY: 'scroll', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'fixed', left: '45.7rem', zIndex: '10000' }} onMouseLeave={handleClosefashionlist} required >
                                        <li>
                                            <MenuItem onClick={() => handlefashionlist('Footwear')} name='Footwear' value={'Footwear'}>Footwear</MenuItem>
                                        </li>
                                        <li>
                                            <MenuItem onClick={() => handlefashionlist("Grooming")} name="Grooming" value={"Grooming"}>Grooming</MenuItem>
                                        </li>
                                        <li>
                                            <MenuItem onClick={() => handlefashionlist("Clothes")} name="Clothes" value={"Clothes"}>Clothes</MenuItem>
                                        </li>
                                        <li>
                                            <MenuItem onClick={() => handlefashionlist("Watches")} name="Watches" value={"Watches"}>Watches</MenuItem>
                                        </li>
                                        <li>
                                            <MenuItem onClick={() => handlefashionlist("Accessories")} name="Accessories" value={"Accessories"}>Accessories</MenuItem>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </Typography>}
                        {(activeStep === 1 && fashion === 'Footwear') &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Image:</h6>
                                        <input type="file" name="fashionimage" onChange={convertobase64} id="fashionimage" style={{ position: "relative", left: '52px' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '3rem' }}>Brand:</h6>
                                        <input type="text" name="brand" id="brand" className='mx-5' onChange={handlefashionChange} value={fashiondetails.brand} style={{ position: 'relative', left: '1px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex  justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Color:</h6>
                                        <input type="text" name="color" id="color" className='mx-5' onChange={handlefashionChange} value={fashiondetails.color} style={{ position: "relative", left: '4px' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem" }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '3rem' }}>Size:</h6>
                                        <input type="text" name="size" id="size" className='mx-5' onChange={handlefashionChange} value={fashiondetails.size} style={{ position: 'relative', left: '1px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Material:</h6>
                                        <input type="text" name="material" id="material" className='mx-5' onChange={handlefashionChange} value={fashiondetails.material} style={{ position: 'relative', left: '4px  ' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '4px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Footwear Type:</h6>
                                        <input type="text" name="Footweartype" id="Footweartype" className='mx-5' onChange={handlefashionChange} value={fashiondetails.Footweartype} style={{ position: 'relative', left: '4px  ' }} required />
                                    </div>
                                </div>
                            </Typography>
                        }
                        {(activeStep === 1 && fashion === 'Grooming') &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Image:</h6>
                                        <input type="file" name="fashionimage" onChange={convertobase64} id="fashionimage" style={{ position: "relative", left: '52px' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '3rem' }}>Brand:</h6>
                                        <input type="text" name="brand" id="brand" className='mx-5' onChange={handlefashionChange} value={fashiondetails.brand} style={{ position: 'relative', left: '1px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "2px" }} >
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '7px' }}>Grooming Type:</h6>
                                        <div className='mx-5 productlist' onClick={handleopenfashionlist} style={{ width: '12rem', position: 'relative', right: '39.7px' }} >
                                            <div className="col">
                                                {Grooming}
                                            </div>
                                            <div className='col' style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '5rem', justifyContent: 'center' }}>   <ArrowDropDownIcon />
                                            </div>
                                        </div>
                                        <ul id='fashionlist_1' style={{ listStyle: 'none', width: '12rem', height: '9rem', backgroundColor: '#fff', overflowY: 'scroll', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'fixed', left: '21.9rem', zIndex: '10000' }} onMouseLeave={handleClosefashionlist} required >
                                            <li>
                                                <MenuItem onClick={() => handlegroominlist('Deodorant')} name='Deodorant' value={'Deodorant'}>Deodorant</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handlegroominlist("Perfumes")} name="Perfumes" value={"Perfumes"}>Perfumes</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handlegroominlist("Beard Care")} name="Beard Care" value={"Beard Care"}>Beard Care</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handlegroominlist("Watches")} name="Watches" value={"Watches"}>Watches</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handlegroominlist("Shaving & Aftershave")} name="Shaving & Aftershave" value={"Shaving & Aftershave"}>Shaving & Aftershave</MenuItem>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='my-3' style={{ width: "15rem" }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '3rem' }}>Life Shell:</h6>
                                        <input type="text" name="lifeshell" id="lifeshell" className='mx-5' onChange={handlefashionChange} value={fashiondetails.lifeshell} style={{ position: 'relative', left: '1px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Quantity:</h6>
                                        <input type="text" name="quantity" id="quantity" className='mx-5' onChange={handlefashionChange} value={fashiondetails.quantity} style={{ position: 'relative', left: '4px  ' }} required />
                                    </div>
                                </div>
                            </Typography>
                        }
                        {(activeStep === 1 && fashion === 'Clothes') &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Image:</h6>
                                        <input type="file" name="fashionimage" onChange={convertobase64} id="fashionimage" style={{ position: "relative", left: '52px' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '3rem' }}>Brand:</h6>
                                        <input type="text" name="brand" id="brand" className='mx-5' onChange={handlefashionChange} value={fashiondetails.brand} style={{ position: 'relative', left: '1px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Color:</h6>
                                        <input type="text" name="color" id="color" className='mx-5' onChange={handlefashionChange} value={fashiondetails.color} style={{ position: "relative", left: '4px' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem" }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '3rem' }}>Size:</h6>
                                        <input type="text" name="size" id="size" className='mx-5' onChange={handlefashionChange} value={fashiondetails.size} style={{ position: 'relative', left: '1px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Clothes Material:</h6>
                                        <input type="text" name="material" id="material" className='mx-5' onChange={handlefashionChange} value={fashiondetails.material} style={{ position: 'relative', left: '4px  ' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '3px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Clothes Type:</h6>
                                        <input type="text" name="clothestype" id="clothestype" className='mx-5' onChange={handlefashionChange} value={fashiondetails.clothestype} style={{ position: 'relative', left: '4px  ' }} required />
                                    </div>
                                </div>
                            </Typography>
                        }
                        {(activeStep === 1 && fashion === 'Watches') &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Image:</h6>
                                        <input type="file" name="fashionimage" onChange={convertobase64} id="fashionimage" style={{ position: "relative", left: '52px' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '3rem' }}>Brand:</h6>
                                        <input type="text" name="brand" id="brand" className='mx-5' onChange={handlefashionChange} value={fashiondetails.brand} style={{ position: 'relative', left: '1px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Color:</h6>
                                        <input type="text" name="color" id="color" className='mx-5' onChange={handlefashionChange} value={fashiondetails.color} style={{ position: "relative", left: '4px' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem" }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '3rem' }}>Watch Shape:</h6>
                                        <input type="text" name="watchshape" id="watchshape" className='mx-5' onChange={handlefashionChange} value={fashiondetails.watchshape} style={{ position: 'relative', left: '1px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Watch Strap:</h6>
                                        <input type="text" name="watchstrap" id="watchstrap" className='mx-5' onChange={handlefashionChange} value={fashiondetails.watchstrap} style={{ position: 'relative', left: '4px  ' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: '41px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '7px' }}>Watch Console:</h6>
                                        <div className='mx-5 productlist' onClick={handleopenfashionlist} style={{ position: 'relative', right: '39.7px' }} >
                                            <div className="col">
                                                {watchconsole}
                                            </div>
                                            <div className='col' style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '4rem', justifyContent: 'center' }}>   <ArrowDropDownIcon />
                                            </div>
                                        </div>
                                        <ul id='fashionlist_1' style={{ listStyle: 'none', width: '11rem', height: '9rem', backgroundColor: '#fff', overflowY: 'scroll', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'fixed', left: '43.7rem', zIndex: '10000' }} onMouseLeave={handleClosefashionlist} required >
                                            <li>
                                                <MenuItem onClick={() => handleconsolelist('Analog')} name='Analog' value={'Analog'}>Analog</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleconsolelist("Analog-Digital")} name="Analog-Digital" value={"Analog-Digital"}>Analog-Digital</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleconsolelist("Digital")} name="Digital" value={"Digital"}>Digital</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleconsolelist("Smart-Analog")} name="Smart-Analog" value={"Smart-Analog"}>Smart-Analog</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleconsolelist("Fabric")} name="Fabric" value={"Fabric"}>Fabric</MenuItem>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </Typography>
                        }
                        {(activeStep === 1 && fashion === 'Accessories') &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Image:</h6>
                                        <input type="file" name="fashionimage" onChange={convertobase64} id="fashionimage" style={{ position: "relative", left: '52px' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '3rem' }}>Brand:</h6>
                                        <input type="text" name="brand" id="brand" className='mx-5' onChange={handlefashionChange} value={fashiondetails.brand} style={{ position: 'relative', left: '1px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Color:</h6>
                                        <input type="text" name="color" id="color" className='mx-5' onChange={handlefashionChange} value={fashiondetails.color} style={{ position: "relative", left: '4px' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem" }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '3rem' }}>Product Area:</h6>
                                        <input type="text" name="productarea" id="productarea " className='mx-5' onChange={handlefashionChange} value={fashiondetails.productarea} style={{ position: 'relative', left: '1px' }} required placeholder='Height x Width' />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Product Material:</h6>
                                        <input type="text" name="material" id="material" className='mx-5' onChange={handlefashionChange} value={fashiondetails.material} style={{ position: 'relative', left: '4px  ' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', left: "2.5rem" }} >
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '7px' }}>Product Type:</h6>
                                        <div className='mx-5 productlist' onClick={handleopenfashionlist} style={{ position: 'relative', right: '39.7px', width: '12.5rem' }} >
                                            <div className="col">
                                                {producttype}
                                            </div>
                                            <div className='col' style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '5.5rem', justifyContent: 'center' }}>   <ArrowDropDownIcon />
                                            </div>
                                        </div>
                                        <ul id='fashionlist_1' style={{ listStyle: 'none', width: '12.5rem', height: '9rem', backgroundColor: '#fff', overflowY: 'scroll', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', left: '8px', zIndex: '10000' }} onMouseLeave={handleClosefashionlist} required >
                                            <li>
                                                <MenuItem onClick={() => handleproducttypelist('Wallet')} name='Wallet' value={'Wallet'}>Wallet</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleproducttypelist('HandBags')} name='HandBags' value={'HandBags'}>HandBags</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleproducttypelist("BackPack")} name="BackPack" value={"BackPack"}>BackPack</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleproducttypelist("Sunglasses")} name="Sunglasses" value={"Sunglasses"}>Sunglasses</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleproducttypelist("Jewellery")} name="Jewellery" value={"Jewellery"}>Jewellery</MenuItem>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                {producttype === "Jewellery" && <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Jewellery Type:</h6>
                                        <input type="text" name="jewelltype" id="jewelltype" className='mx-5' onChange={handlefashionChange} value={fashiondetails.jewelltype} style={{ position: "relative", left: '4px' }} required />
                                    </div>
                                    <div className='my-3' style={{ width: "15rem" }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '3rem' }}>Plating:</h6>
                                        <input type="text" name="plating" id="plating " className='mx-5' onChange={handlefashionChange} value={fashiondetails.plating} style={{ position: 'relative', left: '1px' }} required />
                                    </div>
                                </div>}
                                {producttype === "Jewellery" && <div className="d-flex">
                                    <div className=' my-3' style={{ width: "15rem",margin:'0 auto'}}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '3rem' }}>Gemstone:</h6>
                                        <input type="text" name="gemstone" id="gemstone " className='mx-5' onChange={handlefashionChange} value={fashiondetails.gemstone} style={{ position: 'relative', left: '1px' }} required />
                                    </div>
                                </div>}
                                {(producttype === 'HandBags' || producttype === 'Wallet' || producttype === 'BackPack') && <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Pocket:</h6>
                                        <input type="text" name="productpocket" id="productpocket" className='mx-5' onChange={handlefashionChange} value={fashiondetails.productpocket} style={{ position: "relative", left: '4px' }} required />
                                    </div>
                                    {(producttype === 'Wallet' || producttype === 'HandBags') && <div className='my-3' style={{ width: "15rem" }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '3rem' }}>Card Slot:</h6>
                                        <input type="text" name="productcardslot" id="productcardslot " className='mx-5' onChange={handlefashionChange} value={fashiondetails.productcardslot} style={{ position: 'relative', left: '1px' }} required />
                                    </div>}
                                </div>}

                            </Typography>
                        }
                        {activeStep === 2 &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Price:</h6>
                                        <input type="number" name="price" id="price" className='mx-5' onChange={handlefashionChange} value={fashiondetails.price} style={{ position: 'relative', left: '4px' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Details:</h6>
                                        <textarea name="information" id="information" cols="30" rows="5" onChange={handlefashionChange} value={fashiondetails.information} style={{ position: 'relative', left: '50px' }} required></textarea>
                                    </div>
                                </div>
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
                            {activeStep === steps.length - 1 ? <Button onClick={handlefashionsubmit}>Submit</Button> :
                                <Button onClick={handleNext}>
                                    Next
                                </Button>}

                        </Box>
                    </React.Fragment>
                )}
            </div >
        </>
    )
}

export default AddFashion