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

const steps = ['Basic Info', 'Specifaction', 'Details'];

function ToysBeauty() {
    const context = useContext(DoorPointApi)
    const { showAlert } = context
    const handleopentoysbeautylist = (elementId) => {
        let companylist = document.getElementById(elementId)
        if (companylist.style.display === 'none') {
            companylist.style.display = 'block'
        }
    }
    const handleClosetoysbeautylist = (elementId) => {
        let companylist = document.getElementById(elementId)
        if (companylist.style.display === 'block') {
            companylist.style.display = 'none'
        }
    }
    // prodictlist_1
    const [toysbeauty, setMytoysbeauty] = useState('None')
    const handletoysbeautylist = (selectedtoysbeauty) => {
        setMytoysbeauty(selectedtoysbeauty)
    }
    const [Products, setMyProducts] = useState('None')
    const handleproduct = (selectedproduct) => {
        setMyProducts(selectedproduct)
        setMytoysbeauty('None')
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
    const handletoysbeautygender = (selectedgender) => {
        setMygender(selectedgender)
    }
    const [toysdetails, setmytoysdetails] = useState({ itemid: "", name: "", age: "", brand: "", material: "", color: "", price: "", recommandplayer: "", information: "", features: "", includeaccess: "", notes: "", rechargeable: "" })
    const [booksdetails, setMyBooksdeatials] = useState({ publishdate: "", publisher: "", binding: "", nopage: "", languages: "", edition: "", author: "", availablelanguages: "" })
    const handletoysbeautysubmit = async (e) => {
        e.preventDefault()
        if (Products === "Toys") {
            const response = await fetch('http://localhost:5000/api/toysadd/addtoys', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: toysdetails.name, itemid: toysdetails.itemid, brand: toysdetails.brand, color: toysdetails.color, material: toysdetails.material, price: toysdetails.price, image: image, itemtype: toysbeauty, information: toysdetails.information, producttype: Products, dimensions: dimensions })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${toysbeauty} Add Successfully`, "success")
                // pagedirection("/signin")
            } else {
                showAlert(`${toysbeauty} Already Exis`, "danger")
            }
        }
        else if (Products === "Books") {
            const response = await fetch('http://localhost:5000/api/booksadd/addbooks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: toysdetails.name, itemid: toysdetails.itemid, price: toysdetails.price, image: image, itemtype: toysbeauty, information: toysdetails.information, producttype: Products, publishdate: booksdetails.publishdate, publisher: booksdetails.publisher, edition: booksdetails.edition, author: booksdetails.author, languages: booksdetails.languages, nopage: booksdetails.nopage, binding: booksdetails.binding, availablelanguages: booksdetails.availablelanguages })
            });
            const json = await response.json()
            if (json.success) {
                showAlert(`${toysbeauty} Add Successfully`, "success")
                // pagedirection("/signin")
            } else {
                showAlert(`${toysbeauty} Already Exis`, "danger")
            }
        }
    }
    const handletoysChange = (e) => {
        setmytoysdetails({ ...toysdetails, [e.target.name]: e.target.value })
        setMyBooksdeatials({ ...booksdetails, [e.target.name]: e.target.value })

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
        setmytoysdetails({ itemid: "", name: "", age: "", brand: "", material: "", color: "", price: "", recommandplayer: "", information: "", features: "", includeaccess: "", notes: "", rechargeable: "" })
        setMytoysbeauty('None')
        setImage('None')
        setMyProducts("None")
        setActiveStep(0);
        setMyPH("")
        setMyPW("")
    };
    const [dimensions, setMyDimension] = useState("")
    const [Ph, setMyPH] = useState("")
    const handlePH = (event) => {
        setMyPH(event.target.value)
    }
    const [Pw, setMyPW] = useState("")
    const handlePW = (event) => {
        setMyPW(event.target.value)
    }
    useEffect(() => {
        setMyDimension(Ph + " X " + Pw)
    }, [Ph, Pw])

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
                                        <h6 > Item Id:</h6>
                                        <input type="number" name="itemid" id="itemid" className='mx-3' onChange={handletoysChange} value={toysdetails.itemid} required style={{ position: 'relative', right: '1rem' }} />
                                    </div>
                                    <div className='my-3' >
                                        <h6 > Name:</h6>
                                        <input type="text" name="name" id="name" className='mx-3' onChange={handletoysChange} value={toysdetails.name} required style={{ position: 'relative', right: '1rem' }} />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3' >
                                        <h6>Product Type:</h6>
                                        <div className='mx-3 productlist' onClick={() => { handleopentoysbeautylist('toysbeautylist_1') }} style={{ position: 'relative', right: '1rem' }} >
                                            <div className="col">
                                                {Products}
                                            </div>
                                            <div className='col' style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '4rem', justifyContent: 'center' }}> <ArrowDropDownIcon />
                                            </div>
                                        </div>
                                        <ul id='toysbeautylist_1' style={{ listStyle: 'none', width: '11rem', backgroundColor: '#fff', overflowY: 'hidden', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '29.7rem', top: "17.2rem", zIndex: '10000' }} onMouseLeave={() => { handleClosetoysbeautylist('toysbeautylist_1') }} required >
                                            <li>
                                                <MenuItem onClick={() => handleproduct('Toys')} name='Toys' value={'Toys'}>Toys</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handleproduct('Books')} name='Books' value={'Books'}>Books</MenuItem>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='my-3' style={{ position: "relative", right: '7px' }}>
                                        <h6>Product Selection:</h6>
                                        <div className='mx-3 productlist' onClick={() => { handleopentoysbeautylist('productlist_1') }} style={{ position: 'relative', right: '1rem', width: '12rem' }} >
                                            <div className="col">
                                                {toysbeauty}
                                            </div>
                                            <div className='col' style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '5rem', justifyContent: 'center' }}> <ArrowDropDownIcon />
                                            </div>
                                        </div>
                                        {Products === 'Toys' && <ul id='productlist_1' style={{ listStyle: 'none', width: '12rem', backgroundColor: '#fff', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '32px', top: "3.5rem", zIndex: '10000' }} onMouseLeave={() => { handleClosetoysbeautylist("productlist_1") }} required >
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist('Remote Control')} name='Remote Control ' value={'Remote Control'}>Remote Control </MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist('Soft Toys')} name='Soft Toys' value={'Soft Toys'}>Soft Toys</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist('Board Game')} name='Board Game' value={'Board Game'}>Board Game</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist('Puzzle')} name='Puzzle' value={'Puzzle'}>Puzzle</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist('Action Toys')} name='Action Toys' value={'Action Toys'}>Action Toys</MenuItem>
                                            </li>
                                        </ul>}
                                        {Products === 'Beauty Product' && <ul id='productlist_1' style={{ listStyle: 'none', width: '12rem', backgroundColor: '#fff', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '32px', top: "3.5rem", zIndex: '10000', overflowY: 'scroll', height: '9rem' }} onMouseLeave={() => { handleClosetoysbeautylist("productlist_1") }} required >
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist('MakeUp')} name='MakeUp' value={'MakeUp'}>MakeUp</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist('Skin Care')} name='Skin Care' value={'Skin Care'}>Skin Care</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist('Hair Care')} name='Hair Care' value={'Hair Care'}>Hair Care</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist('Deo & Fragrance')} name='Deo & Fragrance' value={'Deo & Fragrance'}>Deo & Fragrance</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist('Bath & Shower')} name='Bath & Shower' value={'Bath & Shower'}>Bath & Shower</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist("Mens's Grooming")} name="Mens's Grooming" value={"Mens's Grooming"}>Mens's Grooming</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist("Female Grooming")} name="Female Grooming" value={"Female Grooming"}>Female Grooming</MenuItem>
                                            </li>
                                        </ul>}
                                        {Products === 'Books' && <ul id='productlist_1' style={{ listStyle: 'none', width: '12rem', backgroundColor: '#fff', borderRadius: "5px", border: '1px solid #ccc', display: "none", position: 'absolute', right: '32px', top: "3.5rem", zIndex: '10000', fontSize: '14px', overflowY: 'hidden' }} onMouseLeave={() => { handleClosetoysbeautylist("productlist_1") }} required >
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist('Fiction Books')} name='Fiction Books' value={'Fiction Books'}>Fiction Books</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist("Editor's Corner")} name="Editor's Corner" value={"Editor's Corner"}>Editor's Corner</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist('School TextBooks')} name='School TextBooks' value={'School TextBooks'}>School TextBooks</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist('Exam Central')} name='Exam Central' value={'Exam Central'}>Exam Central</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist('Indian Language books')} name='Indian Language books' value={'Indian Language books'}>Indian Language books</MenuItem>
                                            </li>
                                            <li>
                                                <MenuItem onClick={() => handletoysbeautylist("Textbooks")} name="Textbooks" value={"Textbooks"}>Textbooks</MenuItem>
                                            </li>
                                        </ul>}
                                    </div>
                                </div>
                            </Typography>
                        }
                        {(activeStep === 1 && Products === 'Toys') &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6 >Image:</h6>
                                        <input type="file" name="toysbeautyimage" onChange={convertobase64} id="toysbeautyimage" required />
                                    </div>
                                    <div className='my-3' >
                                        <h6>Brand:</h6>
                                        <input type="text" name="brand" id="brand" className='mx-3' onChange={handletoysChange} value={toysdetails.brand} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Age:</h6>
                                        <input type="text" name="age" id="age" className='mx-3' onChange={handletoysChange} value={toysdetails.age} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>Material:</h6>
                                        <input type="text" name="material" id="material" className='mx-3' onChange={handletoysChange} value={toysdetails.material} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Color:</h6>
                                        <input type="text" name="color" id="color" className='mx-3' onChange={handletoysChange} value={toysdetails.color} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3' style={{ position: 'relative', right: "5.1rem" }}>
                                        <h6>Dimension:</h6>
                                        Hieght:<input type="text" name="Ph" id="Ph" className='mx-3' onChange={handlePH} value={Ph} style={{ width: '65px' }} required />
                                        <br />
                                        Width:<input type="text" name="Pw" id="Pw" className='mx-3 my-2' onChange={handlePW} value={Pw} style={{ width: "65px", position: 'relative', left: '6px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Number of Player:</h6>
                                        <input type="text" name="recommandplayer" id="recommandplayer" className='mx-3' onChange={handletoysChange} value={toysdetails.recommandplayer} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>Rechargeable:</h6>
                                        <input type="text" name="rechargeable" id="rechargeable" className='mx-3 my-2' onChange={handletoysChange} value={toysdetails.rechargeable} style={{ position: 'relative', right: '15px' }} required />
                                    </div>
                                </div>
                            </Typography>
                        }
                        {(activeStep === 1 && Products === 'Books') &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6 >Image:</h6>
                                        <input type="file" name="toysbeautyimage" onChange={convertobase64} id="toysbeautyimage" required />
                                    </div>
                                    <div className='my-3' >
                                        <h6>Publisher:</h6>
                                        <input type="text" name="publisher" id="publisher" className='mx-3' onChange={handletoysChange} value={booksdetails.publisher} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Publish Date:</h6>
                                        <input type="number" name="publishdate" id="publishdate" className='mx-3' onChange={handletoysChange} value={booksdetails.publishdate} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>Binding:</h6>
                                        <input type="text" name="binding" id="binding" className='mx-3' onChange={handletoysChange} value={booksdetails.binding} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Number of Pages:</h6>
                                        <input type="number" name="nopage" id="nopage" className='mx-3' onChange={handletoysChange} value={booksdetails.nopage} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3' >
                                        <h6>Language:</h6>
                                        <input type="text" name="languages" id="languages" className='mx-3' onChange={handletoysChange} value={booksdetails.languages} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Edition:</h6>
                                        <input type="text" name="edition" id="edition" className='mx-3' onChange={handletoysChange} value={booksdetails.edition} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6>Author:</h6>
                                        <input type="text" name="author" id="author" className='mx-3 my-2' onChange={handletoysChange} value={booksdetails.author} style={{ position: 'relative', right: '16px' }} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6>Available Languages:</h6>
                                        <input type="text" name="availablelanguages" id="availablelanguages" className='mx-3 my-2' onChange={handletoysChange} value={booksdetails.availablelanguages} style={{ position: 'relative', right: '16px' }} required />
                                    </div>
                                </div>
                            </Typography>
                        }
                        {activeStep === 2 &&
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                {Products === 'Toys' && <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>In the Box:</h6>
                                        <textarea name="includeaccess" id="includeaccess" className='mx-3' onChange={handletoysChange} value={toysdetails.includeaccess} cols="30" rows="2" style={{ position: 'relative', right: '1rem' }} required ></textarea>
                                    </div>
                                    <div className='my-3'>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>Features:</h6>
                                        <textarea name="features" id="features" cols="30" rows="2" onChange={handletoysChange} value={toysdetails.features} required></textarea>
                                    </div>
                                </div>}
                                <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'end' }}>Price:</h6>
                                        <input type="number" name="price" id="price" className='mx-3' onChange={handletoysChange} value={toysdetails.price} style={{ position: 'relative', right: '1rem' }} required />
                                    </div>
                                    <div className='my-3'>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>Details:</h6>
                                        <textarea name="information" id="information" cols="30" rows="2" onChange={handletoysChange} value={toysdetails.information} required></textarea>
                                    </div>
                                </div>
                                {Products === "Toys" && <div className="d-flex justify-content-between">
                                    <div className='my-3'>
                                        <h6 style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}> Additional Note:</h6>
                                        <textarea name="notes" id="notes" cols="30" rows="2" onChange={handletoysChange} value={toysdetails.notes} required></textarea>
                                    </div>
                                </div>}
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
                            {activeStep === steps.length - 1 ? <Button onClick={handletoysbeautysubmit}>Submit</Button> :
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

export default ToysBeauty