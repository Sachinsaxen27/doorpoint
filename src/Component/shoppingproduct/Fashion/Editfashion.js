import React, { useContext, useEffect, useState } from 'react'
import { Divider, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DoorPointApi from '../../../ComponentAPI/DoorPointAPI';  


const steps = ['Basic Info', 'Specifaction', 'Details'];

function Editfashion(props) {
    const { element } = props
    console.log(element)
    const [FitType, setMYFittype] = useState('')
    const [Necktype, setMyNeckType] = useState('')
    const [Sleevetype, setMySleevetype] = useState('')
    const [BottomsType, setMyBottomType] = useState('')
    const [clotheCategory, setMyClothesCategory] = useState("None")
    const handlefashionlist2 = (value) => {
        setMyClothesCategory(value)
    }
    const handleopenfashionlist2 = () => {
        const companylist = document.getElementById('fashionlist_2')
        if (companylist.style.display === 'none') {
            companylist.style.display = 'block'
        }
    }
    const handleClosefashionlist2 = () => {
        const companylist1 = document.getElementById('fashionlist_2')
        if (companylist1.style.display === 'block') {
            companylist1.style.display = 'none'
        }
    }
    useEffect(() => {
        if (clotheCategory === 'Saree') {
            setMyNeckType('Stretchable')
            setMYFittype("Blouse Fabric")
            setMySleevetype("Faded")
            setMyBottomType('Blouse color')
        }
        else if (clotheCategory === 'Jeans & Jeggings') {
            setMyNeckType('Stretchable')
            setMYFittype("Rise")
            setMySleevetype("Faded")
            setMyBottomType('Distressed')
        }
        else if (clotheCategory === 'Top and Tees') {
            setMyNeckType('Collar')
            setMYFittype("Fit")
            setMyBottomType("Neck")
            setMySleevetype('Sleeve')
        }
        else if (clotheCategory === 'Fit and Flare') {
            setMyNeckType('Neck')
            setMYFittype("Type")
            setMyBottomType("Length")
            setMySleevetype('Sleeve')
        }
        else {
            setMyBottomType('Bottom Type')
            setMyNeckType('Neck')
            setMYFittype("Fit")
            setMySleevetype('Sleeve')
        }
    }, [clotheCategory])
    const [fashiondetails, setmyFashiondetails] = useState({ name: "", itemid: "", brand: "", color: "", size: "", material: "", price: "", information: "", Footweartype: "", lifeshell: "", quantity: "", clothestype: '', watchstrap: '', watchshape: "", productarea: "", productpocket: "", productcardslot: "", jewelltype: "", plating: "", gemstone: "", pattern: "", bagtype: "", grooming: "", idealfor: '', ptype: '', skintype: '', appiledfor: "", rating: '', sarilength: "", weight: "", type: "", neck: "", sleeve: "", bottomtype: "", inthebox: "", fit: '' })
    useEffect(() => {
        if (element.itemtype === 'Clothes') {
            setmyFashiondetails({
                name: element.name || '',
                itemid: element.itemid || '',
                brand: element.brand || "",
                color: element.color || '',
                size: element.size || '',
                material: element.material || '',
                price: element.price || '',
                information: element.information || '',
                clothestype: element.clothestype || '',
                pattern: element.pattern || "",
                rating: element.rating || "",
                sleeve: element.sleeve || "",
                weight: element.weight || '',
                fit:element.fit||'',
                type:element.type||'',
                bottomtype:element.bottomtype||'',
                inthebox:element.inthebox||"",
                neck:element.neck||'',
                sarilength:element.sarilength||""
            })
            setMyNeckType(element.neck || '')
            setMyClothesCategory(element.clotheCategory || '')
            setMyforwho(element.forwho || '')
            setMygender(element.gender || '')
            setMyfashion(element.itemtype || '')
        } else if (element.itemtype === 'Accessories') {
            setmyFashiondetails({
                itemid: element.itemid || '', name: element.name || '', brand: element.brand || "", color: element.color || '', price: element.price || '', information: element.information || '', material: element.material || '', productarea: element.productarea || '', productpocket: element.productpocket || '', productcardslot: element.productcardslot || '', jewelltype: element.jewelltype || '', plating: element.plating || '', gemstone: element.gemstone || "", bagtype: element.bagtype || ''
            })
            setMyproducttype(element.producttype || "")
            setMyforwho(element.forwho || '')
            setMygender(element.gender || '')
            setMyfashion(element.itemtype || '')
        } else if (element.itemtype === "Grooming") {
            setmyFashiondetails({
                itemid: element.itemid || '',
                name: element.name || "",
                brand: element.brand || "",
                grooming: element.groomingtype || '',
                lifeshell: element.lifeshell || "",
                quantity: element.quantity || "",
                price: element.price || "",
                information: element.information || '',
                idealfor: element.idealfor || "",
                ptype: element.ptype || '',
                skintype: element.skintype || '',
                appiledfor: element.appiledfor || ''
            })
            setMyfashion(element.itemtype || '')
            setMygender(element.gender || '')
        }
    }, [element])
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
    const [watchconsole, setMyWatchconsole] = useState("None")
    const handleconsolelist = (selectedconsole) => {
        setMyWatchconsole(selectedconsole)
    }
    const [image, setImage] = useState([])
    const convertobase64 = (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            // setImage(reader.result)
            const newImage = {
                data: reader.result
            };
            setImage(prevImages => [...prevImages, newImage]);
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
    const [forwho, setMyforwho] = useState('')
    const handleforwho = (selectedgender) => {
        setMyforwho(selectedgender)
    }
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
            const response = await fetch(`http://localhost:5000/api/fashionadd/editClothes/${element._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: fashiondetails.name, itemid: fashiondetails.itemid, brand: fashiondetails.brand, color: fashiondetails.color, size: fashiondetails.size, material: fashiondetails.material, gender: gender, price: fashiondetails.price, image: image, itemtype: fashion, information: fashiondetails.information, clothestype: fashiondetails.clothestype, forwho: forwho, clotheCategory: clotheCategory, pattern: fashiondetails.pattern, rating: fashiondetails.rating, sarilength: fashiondetails.sarilength, weight: fashiondetails.weight, type: fashiondetails.type, neck: fashiondetails.neck, sleeve: fashiondetails.sleeve, inthebox: fashiondetails.inthebox, bottomtype: fashiondetails.bottomtype, fit: fashiondetails.fit
                })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${fashion} Update Successfully`, "success")
            } else {
                showAlert(`${fashion} Not Update`, "danger")
            }
        }
        else if (fashion === 'Grooming') {
            const response = await fetch(`http://localhost:5000/api/groomingadd/editgrooming/${element._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    itemid: fashiondetails.itemid, name: fashiondetails.name, itemtype: fashion, gender: gender, image: image, brand: fashiondetails.brand, price: fashiondetails.price, information: fashiondetails.information, lifeshell: fashiondetails.lifeshell, quantity: fashiondetails.quantity, groomingtype: fashiondetails.grooming, skintype: fashiondetails.skintype, ptype: fashiondetails.ptype, idealfor: fashiondetails.idealfor, appiledfor: fashiondetails.appiledfor
                })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${fashion} Update Successfully`, "success")
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
            const response = await fetch(`http://localhost:5000/api/accessoriesadd/editaccessories/${element._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ itemid: fashiondetails.itemid, name: fashiondetails.name, itemtype: fashion, brand: fashiondetails.brand, color: fashiondetails.color, price: fashiondetails.price, image: image, gender: gender, information: fashiondetails.information, material: fashiondetails.material, producttype: producttype, productarea: fashiondetails.productarea, productpocket: fashiondetails.productpocket, productcardslot: fashiondetails.productcardslot, jewelltype: fashiondetails.jewelltype, plating: fashion.plating, gemstone: fashiondetails.gemstone, bagtype: fashiondetails.bagtype })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${fashion} Update Successfully`, "success")
                // pagedirection("/signin")
                // console.log(`${fashion} Add Successfully`, "success")
            } else {
                showAlert(`${fashion} Not Exist`, "danger")
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
        setActiveStep(0);
    };
    return (
        <>

            <div id='editfashion' className="card" style={{ width: "42rem", height: '31rem', position: 'fixed', left: '20rem', zIndex: '10000', overflow: 'auto ', overflowX: 'hidden', top: "4rem" }}>
                <div className="card-body">
                    <div className="d-flex text-center">
                        <h6 className="card-title text-center mx-3" style={{ cursor: "pointer" }}>Add Clothes</h6>
                    </div>
                    <Divider />
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
                                            <input type="number" name="item" id="item" className='mx-5' onChange={handlefashionChange} value={fashiondetails.itemid} required style={{ position: 'relative', right: '48px' }} />
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
                                                <FormControlLabel value='female' name='femmale' control={<Radio />} onClick={() => handlefashiongender('female')} label="Female" checked={gender === 'female'} />
                                                <FormControlLabel value="male" onClick={() => handlefashiongender('male')} name='male' control={<Radio />} label="Male" checked={gender === 'male'} />
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
                                                    <MenuItem onClick={() => handlefashionlist("Accessories")} name="Accessories" value={"Accessories"}>Accessories</MenuItem>
                                                </li>
                                                <li>
                                                    <MenuItem onClick={() => handlefashionlist("Clothes")} name="Clothes" value={"Clothes"}>Clothes</MenuItem>
                                                </li>
                                                <li>
                                                    <MenuItem onClick={() => handlefashionlist('Footwear')} name='Footwear' value={'Footwear'}>Footwear</MenuItem>
                                                </li>
                                                <li>
                                                    <MenuItem onClick={() => handlefashionlist("Grooming")} name="Grooming" value={"Grooming"}>Grooming</MenuItem>
                                                </li>
                                                <li>
                                                    <MenuItem onClick={() => handlefashionlist("Watches")} name="Watches" value={"Watches"}>Watches</MenuItem>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </Typography>}
                                {(activeStep === 1 && fashion === 'Footwear') &&
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>First Image:</h6>
                                                <input type="file" name="fashionimage1" onChange={convertobase64} id="fashionimage1" style={{ position: "relative", left: '52px' }} required />
                                            </div>
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '91px' }}>Second Image:</h6>
                                                <input type="file" name="fashionimage2" onChange={convertobase64} id="fashionimage2" style={{ position: "relative", left: '92px', width: "13.1rem" }} required />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '9px' }}>Third Image:</h6>
                                                <input type="file" name="fashionimage3" onChange={convertobase64} id="fashionimage3" style={{ position: "relative", left: '9px' }} required />
                                            </div>
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '91px' }}> Fourth Image:</h6>
                                                <input type="file" name="fashionimage4" onChange={convertobase64} id="fashionimage4" style={{ position: "relative", left: '92px', width: '13.1rem' }} required />
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
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '9px' }}>Brand:</h6>
                                                <input type="text" name="brand" id="brand" className='mx-5' onChange={handlefashionChange} value={fashiondetails.brand} style={{ position: 'relative', right: '2.4rem' }} required />
                                            </div>
                                        </div>
                                    </Typography>
                                }
                                {(activeStep === 1 && fashion === 'Grooming') &&
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>First Image:</h6>
                                                <input type="file" name="fashionimage1" onChange={convertobase64} id="fashionimage1" style={{ position: "relative", left: '52px' }} required />
                                            </div>
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '91px' }}>Second Image:</h6>
                                                <input type="file" name="fashionimage2" onChange={convertobase64} id="fashionimage2" style={{ position: "relative", left: '92px', width: "13.1rem" }} required />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '9px' }}>Third Image:</h6>
                                                <input type="file" name="fashionimage3" onChange={convertobase64} id="fashionimage3" style={{ position: "relative", left: '9px' }} required />
                                            </div>
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '91px' }}> Fourth Image:</h6>
                                                <input type="file" name="fashionimage4" onChange={convertobase64} id="fashionimage4" style={{ position: "relative", left: '92px', width: '13.1rem' }} required />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '9px' }}>Brand:</h6>
                                                <input type="text" name="brand" id="brand" className='mx-5' onChange={handlefashionChange} value={fashiondetails.brand} style={{ position: 'relative', right: '39px' }} required />
                                            </div>
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '91px' }}>Skin type:</h6>
                                                <input type="text" name="skintype" id="skintype" className='mx-5' onChange={handlefashionChange} value={fashiondetails.skintype} style={{ position: 'relative', left: '44px  ' }} required />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', left: "2px" }} >
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '6px' }}>Grooming Type:</h6>
                                                <input type="text" name="grooming" id="grooming" className='mx-5' onChange={handlefashionChange} value={fashiondetails.grooming} style={{ position: 'relative', right: '41px' }} required />
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
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '3px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Appiled For:</h6>
                                                <input type="text" name="appiledfor" id="appiledfor" className='mx-5' onChange={handlefashionChange} value={fashiondetails.appiledfor} style={{ position: 'relative', left: '4px  ' }} required />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Form:</h6>
                                                <input type="text" name="ptype" id="ptype" className='mx-5' onChange={handlefashionChange} value={fashiondetails.ptype} style={{ position: 'relative', left: '4px  ' }} required />
                                            </div>
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '3px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Ideal For:</h6>
                                                <input type="text" name="idealfor" id="idealfor" className='mx-5' onChange={handlefashionChange} value={fashiondetails.idealfor} style={{ position: 'relative', left: '4px  ' }} required />
                                            </div>
                                        </div>
                                        {/* <div className="d-flex justify-content-between">
                                    <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                        <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Skin type:</h6>
                                        <input type="text" name="skintype" id="skintype" className='mx-5' onChange={handlefashionChange} value={fashiondetails.skintype} style={{ position: 'relative', left: '4px  ' }} required />
                                    </div>
                                   
                                </div> */}
                                    </Typography>
                                }
                                {(activeStep === 1 && fashion === 'Clothes') &&
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>First Image:</h6>
                                                <input type="file" name="fashionimage1" onChange={convertobase64} id="fashionimage1" style={{ position: "relative", left: '52px' }} required />
                                            </div>
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '91px' }}>Second Image:</h6>
                                                <input type="file" name="fashionimage2" onChange={convertobase64} id="fashionimage2" style={{ position: "relative", left: '92px', width: "13.1rem" }} required />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '9px' }}>Third Image:</h6>
                                                <input type="file" name="fashionimage3" onChange={convertobase64} id="fashionimage3" style={{ position: "relative", left: '9px' }} required />
                                            </div>
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '91px' }}> Fourth Image:</h6>
                                                <input type="file" name="fashionimage4" onChange={convertobase64} id="fashionimage4" style={{ position: "relative", left: '92px', width: '13.1rem' }} required />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '1px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '9px' }}>Pattern:</h6>
                                                <input type="text" name="pattern" id="pattern" className='mx-5' onChange={handlefashionChange} value={fashiondetails.pattern} style={{ position: 'relative', right: "38px" }} required />
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
                                                <input type="text" name="material" id="material" className='mx-5' onChange={handlefashionChange} value={fashiondetails.material} style={{ position: 'relative', left: '4px' }} required />
                                            </div>
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '3px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Clothes Type:</h6>
                                                <input type="text" name="clothestype" id="clothestype" className='mx-5' onChange={handlefashionChange} value={fashiondetails.clothestype} style={{ position: 'relative', left: '4px  ' }} required />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ position: "relative", left: "9px" }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative' }}>For Who:</h6>
                                                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" style={{ position: 'relative' }}>
                                                    <FormControlLabel value='Women' name='Women' control={<Radio />} onClick={() => handleforwho('Women')} label="Women" />
                                                    <FormControlLabel value="Men" onClick={() => handleforwho('Men')} name='Men' control={<Radio />} label="Men" />
                                                    <FormControlLabel value="Kid" onClick={() => handleforwho('Kid')} name='Kid' control={<Radio />} label="Kid" />
                                                </RadioGroup>
                                            </div>
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', left: '49px' }}>
                                                <h6 style={{ fontSize: '13px' }}>Clothes Category:</h6>
                                                <div className='mx-5 productlist' onClick={handleopenfashionlist2} style={{ right: '47.7px' }} >
                                                    <div className="col">
                                                        {clotheCategory}
                                                    </div>
                                                    <div className='col' style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '4rem', justifyContent: 'center' }}>   <ArrowDropDownIcon />
                                                    </div>
                                                </div>
                                                <ul id='fashionlist_2' style={{ listStyle: 'none', width: '11rem', height: '9rem', backgroundColor: '#fff', overflowY: 'scroll', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', left: '8px', zIndex: '10000' }} onMouseLeave={handleClosefashionlist2} required >
                                                    <li>
                                                        <MenuItem onClick={() => handlefashionlist2("Fit and Flare")} name="Dresses" value={"Dresses"}>Dresses</MenuItem>
                                                    </li>
                                                    <li>
                                                        <MenuItem onClick={() => handlefashionlist2("Jeans")} name="Jeans & Jeggings" value={"Jeans & Jeggings"}>Jeans & Jeggings</MenuItem>
                                                    </li>
                                                    <li>
                                                        <MenuItem onClick={() => handlefashionlist2('Kurta & Sets')} name='Kurta & Sets' value={'Kurta & Sets'}>Kurta & Sets</MenuItem>
                                                    </li>
                                                    <li>
                                                        <MenuItem onClick={() => handlefashionlist2("Saree")} name="Saree" value={"Saree"}>Saree</MenuItem>
                                                    </li>
                                                    <li>
                                                        <MenuItem onClick={() => handlefashionlist2("Winter Wear")} name="Winter Wear" value={"Winter Wear"}>Winter Wear</MenuItem>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        {(clotheCategory !== 'None' && clotheCategory !== 'Winter Wear') && <div className="d-flex justify-content-between">
                                            {<div className='my-3' style={{ width: "15rem", position: 'relative', left: '9px' }}>
                                                <h6 style={{ fontSize: '13px' }}>{BottomsType}:</h6>
                                                <input type="text" name="bottomtype" id="bottomtype" onChange={handlefashionChange} value={fashiondetails.bottomtype} required />
                                            </div>}
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', left: '50px' }}>
                                                <h6 style={{ fontSize: '13px' }}>{FitType}:</h6>
                                                <input type="text" name="fit" id="fit" onChange={handlefashionChange} value={fashiondetails.fit} required />
                                            </div>
                                        </div>}
                                    </Typography>
                                }
                                {(activeStep === 1 && fashion === 'Watches') &&
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>First Image:</h6>
                                                <input type="file" name="fashionimage1" onChange={convertobase64} id="fashionimage1" style={{ position: "relative", left: '52px' }} required />
                                            </div>
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '91px' }}>Second Image:</h6>
                                                <input type="file" name="fashionimage2" onChange={convertobase64} id="fashionimage2" style={{ position: "relative", left: '92px', width: "13.1rem" }} required />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '9px' }}>Third Image:</h6>
                                                <input type="file" name="fashionimage3" onChange={convertobase64} id="fashionimage3" style={{ position: "relative", left: '9px' }} required />
                                            </div>
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '91px' }}> Fourth Image:</h6>
                                                <input type="file" name="fashionimage4" onChange={convertobase64} id="fashionimage4" style={{ position: "relative", left: '92px', width: '13.1rem' }} required />
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
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '3rem' }}>Brand:</h6>
                                                <input type="text" name="brand" id="brand" className='mx-5' onChange={handlefashionChange} value={fashiondetails.brand} style={{ position: 'relative', left: '1px' }} required />
                                            </div>
                                        </div>
                                    </Typography>
                                }
                                {(activeStep === 1 && fashion === 'Accessories') &&
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>First Image:</h6>
                                                <input type="file" name="fashionimage1" onChange={convertobase64} id="fashionimage1" style={{ position: "relative", left: '52px' }} required />
                                            </div>
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '91px' }}>Second Image:</h6>
                                                <input type="file" name="fashionimage2" onChange={convertobase64} id="fashionimage2" style={{ position: "relative", left: '92px', width: "13.1rem" }} required />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '9px' }}>Third Image:</h6>
                                                <input type="file" name="fashionimage3" onChange={convertobase64} id="fashionimage3" style={{ position: "relative", left: '9px' }} required />
                                            </div>
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '91px' }}> Fourth Image:</h6>
                                                <input type="file" name="fashionimage4" onChange={convertobase64} id="fashionimage4" style={{ position: "relative", left: '92px', width: '13.1rem' }} required />
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
                                        <div className='d-flex justify-content-between'>
                                            <div className='my-3' style={{ width: "15rem", position: 'relative' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '8px' }}>Brand:</h6>
                                                <input type="text" name="brand" id="brand" className='mx-5' onChange={handlefashionChange} value={fashiondetails.brand} style={{ position: 'relative', right: '39px' }} required />
                                            </div>
                                            {(producttype === 'HandBags' || producttype === 'Wallet' || producttype === 'BackPack') && <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '90px' }}>Pocket:</h6>
                                                <input type="text" name="productpocket" id="productpocket" className='mx-5' onChange={handlefashionChange} value={fashiondetails.productpocket} style={{ position: "relative", left: '43px' }} required />
                                            </div>}
                                            {producttype === 'Jewellery' && <div className=' my-3' style={{ width: "15rem", margin: '0 auto' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '114px' }}>Gemstone:</h6>
                                                <input type="text" name="gemstone" id="gemstone " className='mx-5' onChange={handlefashionChange} value={fashiondetails.gemstone} style={{ position: 'relative', left: '68px' }} required />
                                            </div>}
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
                                        {(producttype === 'HandBags' || producttype === 'Wallet' || producttype === 'BackPack') &&
                                            <div className="d-flex justify-content-between">
                                                <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                    <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Bag Type:</h6>
                                                    <input type="text" name="bagtype" id="bagtype" className='mx-5' onChange={handlefashionChange} value={fashiondetails.bagtype} style={{ position: "relative", left: '4px' }} required />
                                                </div>
                                                {(producttype === 'Wallet' || producttype === 'HandBags') && <div className='my-3' style={{ width: "15rem" }}>
                                                    <h6 style={{ fontSize: '13px', position: 'relative', left: '3rem' }}>Campartment:</h6>
                                                    <input type="text" name="productcardslot" id="productcardslot " className='mx-5' onChange={handlefashionChange} value={fashiondetails.productcardslot} style={{ position: 'relative', left: '1px' }} required />
                                                </div>
                                                }
                                            </div>
                                        }

                                    </Typography>
                                }
                                {activeStep === 2 &&
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '43px' }}>
                                                <h6 style={{ fontSize: '13px', position: 'relative', left: '51px' }}>Price:</h6>
                                                <input type="number" name="price" id="price" className='mx-5' onChange={handlefashionChange} value={fashiondetails.price} style={{ position: 'relative', left: '4px' }} required />
                                            </div>
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', right: '8px' }}>
                                                <h6 style={{ fontSize: '13px' }}>Details:</h6>
                                                <textarea name="information" id="information" cols="30" rows="2" onChange={handlefashionChange} value={fashiondetails.information} required></textarea>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3 ' style={{ width: "15rem", position: 'relative', left: '9px' }}>
                                                <h6 style={{ fontSize: '13px' }}>Type:</h6>
                                                <input type="text" name="type" id="type" value={fashiondetails.type} required placeholder='Only for owner' onChange={handlefashionChange} />
                                            </div>
                                            {clotheCategory !== "Saree" && <div className='my-3' style={{ width: "15rem", position: 'relative', right: '8px' }}>
                                                <h6 style={{ fontSize: '13px' }}>{Sleevetype}:</h6>
                                                <input type="text" name="sleeve" id="sleeve" onChange={handlefashionChange} value={fashiondetails.sleeve} required />
                                            </div>}
                                            {clotheCategory === "Saree" && <div className='my-3' style={{ width: "15rem", position: 'relative', right: '8px' }}>
                                                <h6 style={{ fontSize: '13px' }}>Saree length:</h6>
                                                <input type="number" name="sarilength" id="sarilength" onChange={handlefashionChange} value={fashiondetails.sarilength} required />
                                            </div>}
                                        </div>
                                        <div className="d-flex">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', left: '9px' }}>
                                                <h6 style={{ fontSize: '13px' }}>Rating:</h6>
                                                <input type="number" name="rating" id="rating" onChange={handlefashionChange} value={fashiondetails.rating} required />
                                            </div>
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', left: '126px' }}>
                                                <h6 style={{ fontSize: '13px' }}>{Necktype}:</h6>
                                                <input type="text" name="neck" id="neck" onChange={handlefashionChange} value={fashiondetails.neck} required />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className='my-3' style={{ width: "15rem", position: 'relative', left: '9px' }}>
                                                <h6 style={{ fontSize: '13px' }}>Wieght:</h6>
                                                <input type="number" name="weight" id="weight" onChange={handlefashionChange} value={fashiondetails.weight} required />
                                            </div>
                                            {clotheCategory !== 'Dresses' && <div className='my-3' style={{ width: "15rem", position: 'relative', right: "8px" }}>
                                                <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>In the Box:</h6>
                                                <textarea name="inthebox" id="inthebox" cols="30" rows="1" value={fashiondetails.inthebox} onChange={handlefashionChange} required></textarea>
                                            </div>}
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
                </div>
            </div>
        </>
    )
}

export default Editfashion