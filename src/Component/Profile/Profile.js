import React, { useContext, useEffect, useState } from 'react'
import '../Style.css'
import DoorPointApi from '../../ComponentAPI/DoorPointAPI'
import { Divider, FormControlLabel, RadioGroup } from '@mui/material'
import Radio from '@mui/material/Radio'
import sareee from '../images/icon7.jpg'
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Profile() {
    const context = useContext(DoorPointApi)
    const { info } = context
    const [user_address, setMyUser_Address] = useState(info.address)
    const [loader, setMyLoader] = useState(true)
    const [content, setMyContent] = useState(false)
    const [option, setMyoption] = useState("Profile")
    const [Order_List, setMyOrder_List] = useState()
    const handlestateoption = () => {
        let stateid = document.getElementById("statelist")
        if (stateid.style.display === 'none') {
            stateid.style.display = 'block'
        } else {
            stateid.style.display = 'none'
        }
    }
    function handleaddressform() {
        let formbtn = document.getElementById('newaddressbutton')
        let addressform = document.getElementById('addressformfield')
        if (formbtn.style.display === 'block') {
            formbtn.style.display = 'none'
            addressform.style.display = 'block'
        } else {
            formbtn.style.display = 'block'
            addressform.style.display = 'none'
        }
    }
    const [credintial, setMycredintial] = useState({ name: "", mobileno: "", pincode: "", city: "", house_number: "", landmark: "", area: '', secondmobile: "" })
    const [userstate, setMyuserstate] = useState('State')
    const [addresstype, setMyaddresstype] = useState()
    const handleAddressChange = (e) => {
        setMycredintial({ ...credintial, [e.target.name]: e.target.value })
    }
    const handlestatelist = (value) => {
        let stateid = document.getElementById("statelist")
        stateid.style.display = 'none'
        setMyuserstate(value)
    }
    const handleaddresstype = (value) => {
        setMyaddresstype(value)
    }
    const handleaddresssubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/api/userlogin/updateuseraddress/${info._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ name: credintial.name, mobileno: credintial.mobileno, pincode: credintial.pincode, house_number: credintial.house_number, landmark: credintial.landmark, state: userstate, addresstype: addresstype, city: credintial.city, area: credintial.area, secondmobile: credintial.secondmobile })
        });
        const json = await response.json()
        if (!json === false) {
            console.log("Success")
            setMycredintial({ name: "", mobileno: "", pincode: "", city: "", house_number: "", landmark: "", area: '', secondmobile: "" })
            setMyaddresstype('')
            setMyuserstate("State")
            setMyUser_Address(json.user.address)
            handleaddressform()
        } else {
            console.log("Error")
        }
    }
    const [panNumber, setMypanNumber] = useState()
    const [image, setImage] = useState([])
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
    const handlepannum = (e) => {
        setMypanNumber(e.target.value)
    }
    const handlepansubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/api/userlogin/updatepan/${info._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ panNumber: panNumber, panimage: image })
        });
        const json = response.json()
        if (!json === false) {
            console.log("Success")
            setImage('')
            setMypanNumber('')
        } else {
            console.log("Error")
        }
    }
    const GetOrder_List = async () => {
        console.log('enter')
        const response = await fetch('http://localhost:5000/api/orderhistory/Get_Order_list', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'auth-token': localStorage.getItem('token')
            }
        })
        if (response.ok) {
            const json = await response.json()
            setMyOrder_List(json.order)
        } else {
            console.log('error')
        }
    }
    const handleoption = (value) => {
        setMyoption(value)
        if (value === 'Myorder') {
            console.log(value)
            GetOrder_List()
        }
    }
    useEffect(() => {
        setMyLoader(true)
        setMyContent(false)
        const timer = setTimeout(() => {
            setMyLoader(false)
            setMyContent(true)
        }, 2000);
        // return ()=>clearTimeout(timer)
    }, [option])
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-4">
                        <div className='my-5'>
                            <div className='divprofile' style={{ display: 'flex', flexDirection: 'row', padding: "12px", marginBottom: "16px" }}>
                                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg" alt="icon" className='mx-2' />
                                <div style={{ display: 'flex', flexDirection: 'column', padding: "5px 0 0 16px", width: "calc(100% - 50px)" }}><span style={{ fontSize: '12px' }}>Hello,</span><span style={{ fontWeight: '500' }}>{info.name}</span></div>
                            </div>
                            <div style={{ boxShadow: '0px 0px 4px 1px rgba(0, 0, 0, .08)' }}>
                                <div style={{ paddingBottom: "12px" }}>
                                    <div className='divorderinfo my-3' style={{ cursor: "pointer" }} onClick={() => handleoption("Myorder")}>
                                        <div>
                                            <span className='mx-1'><i className="fa-solid fa-boxes-stacked fa-xl" style={{ color: "#484ef4" }}></i></span><span className='divorder mx-2'>MY ORDER</span>
                                        </div>
                                        <div><i className="fa-solid fa-chevron-right "></i></div>
                                    </div>
                                    <Divider />
                                    <div>
                                        <div style={{ padding: "20px 12px 5px 24px" }}><span className='mx-1'><i className="fa-solid fa-user fa-xl" style={{ color: '#484ef4' }}></i></span><span className='mx-2' style={{ fontSize: "16px", fontWeight: "500", color: "#878787" }}> ACCOUNT SETTINGS</span></div>
                                        <div>
                                            <div >
                                                <div className='divprofilelist' onClick={() => handleoption("Profile")}>Profile Information</div>
                                                <div className='divprofilelist' onClick={() => handleoption("Manage")}>Manage Addresses</div>
                                                <div className='divprofilelist' onClick={() => handleoption("Pan")}>PAN Card Information</div>
                                            </div>
                                        </div>
                                    </div>
                                    &nbsp;
                                    <Divider />
                                    <div>
                                        <div style={{ padding: "20px 12px 5px 24px" }}><span className='mx-1'><i className="fa-solid fa-wallet fa-xl" style={{ color: '#484ef4' }}></i></span><span className='mx-2' style={{ fontSize: "16px", fontWeight: "500", color: "#878787" }}> PAYMENTS</span></div>
                                        <div>
                                            <div >
                                                <div className='divprofilelist' style={{ display: 'flex', justifyContent: 'space-between' }}><div>Gift Card</div><div className='divrupe'>₹0</div></div>
                                                <div className='divprofilelist'>Saved UPI</div>
                                                <div className='divprofilelist'>Saved Card </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div>
                                        <div style={{ padding: "20px 12px 5px 24px" }}><span className='mx-1'><i className="fa-solid fa-folder fa-xl" style={{ color: '#484ef4' }}></i></span><span className='mx-2' style={{ fontSize: "16px", fontWeight: "500", color: "#878787" }}> ACCOUNT SETTINGS</span></div>
                                        <div>
                                            <div >
                                                <div className='divprofilelist'>My Coupons</div>
                                                <div className='divprofilelist'>My Wishlist </div>
                                                <div className='divprofilelist'>All Notifactions</div>
                                                <div className='divprofilelist'>My Review & Ratings</div>
                                            </div>
                                        </div>
                                    </div>
                                    <Divider className='my-2' />
                                    <div className='divorderinfo'>
                                        <div>
                                            <span className='mx-1'><i className="fa-solid fa-right-from-bracket" style={{ color: "#484ef4" }}></i></span><span className=' divlogout mx-2'>Logout</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        {option === "Profile" && <div className='my-5'>
                            {loader && <div style={{ display: 'flex', justifyContent: 'center', marginTop: '230px' }}>
                                <i className="fa-solid fa-arrow-rotate-right fa-spin fa-2xl" style={{ color: "#2f3aca" }} />
                            </div>}
                            {content && <div className="divdetailssection">
                                <div style={{ padding: "24px 32px 0" }}>
                                    <div style={{ paddingBottom: "56px" }}>
                                        <div style={{ paddingBottom: '24px' }}>
                                            <span style={{ fontSize: '18px', fontWeight: '500', paddingRight: '24px' }}>Personal Information</span>
                                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#2874f0', cursor: 'pointer' }}>Edit</span>
                                        </div>
                                        <div style={{ width: "270px", paddingRight: "12px" }}>
                                            <div>
                                                <span>
                                                    <input type="text" name='name' className='inputfield' value={info.name} disabled />
                                                </span>
                                            </div>
                                            <div style={{ padding: '12px 0px' }}>
                                                <span style={{ fontSize: '14px' }}>Your Gender</span>
                                                <div className='divgender' style={{ display: 'flex' }}>
                                                    <div>
                                                        <input type="radio" name="male" id="male" className='inputgender' style={{ marginTop: '5px' }} disabled />
                                                        <span className='inputoption mx-2' > Male</span>
                                                    </div>
                                                    <div className='mx-4'>
                                                        <input type="radio" name="female" id="female" className='inputgender' style={{ marginTop: '5px' }} disabled />
                                                        <span className='inputoption mx-2'> Female</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ paddingBottom: '56px' }}>
                                        <div style={{ paddingBottom: '24px' }}>
                                            <span style={{ fontSize: '18px', fontWeight: '500', paddingRight: '24px' }}>Email Address</span>
                                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#2874f0', cursor: 'pointer' }}>Edit</span>
                                        </div>
                                        <div style={{ width: "270px", paddingRight: "12px" }}>
                                            <span>
                                                <input type="text" name='name' className='inputfield' value={info.email} disabled />
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ paddingBottom: '56px' }}>
                                        <div style={{ paddingBottom: '24px' }}>
                                            <span style={{ fontSize: '18px', fontWeight: '500', paddingRight: '24px' }}>Mobile Number</span>
                                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#2874f0', cursor: 'pointer' }}>Edit</span>
                                        </div>
                                        <div style={{ width: "270px", paddingRight: "12px" }}>
                                            <span>
                                                <input type="text" name='name' className='inputfield' value={info.mobile} disabled />
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ paddingBottom: '11px' }}>
                                        <div >
                                            <span style={{ fontSize: '18px', fontWeight: '500', paddingRight: '24px' }}>FAQs</span>
                                        </div>
                                        <div style={{ width: "270px", paddingRight: "12px" }}>
                                            <div className='divinfo'>
                                                <h4>What happens when I update my email address (or mobile number)?</h4>
                                                <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
                                                <h4>When will my Flipkart account be updated with the new email address (or mobile number)?</h4>
                                                <p>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
                                                <h4>What happens to my existing Flipkart account when I update my email address (or mobile number)</h4>
                                                <p>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
                                                <h4>Does my Seller account get affected when I update my email address?</h4>
                                                <p>Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='my-3' style={{ cursor: 'pointer', color: '#2874f0', fontSize: '14px', fontWeight: '500' }}>Deactivate Account</div>
                                        <div style={{ cursor: 'pointer', color: "#d23276", fontSize: "14px", fontWeight: '500' }}>Delete Account</div>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png" alt="" style={{ width: "45.7rem" }} />
                                </div>
                            </div>}
                        </div>}
                        {option === "Manage" && <div className='my-5'>
                            {loader && <div style={{ display: 'flex', justifyContent: 'center', marginTop: '230px' }}>
                                <i className="fa-solid fa-arrow-rotate-right fa-spin fa-2xl" style={{ color: "#2f3aca" }} />
                            </div>}
                            {content && <div className="divdetailssection">
                                <div style={{ padding: "24px 32px 0" }}>
                                    <div style={{ paddingBottom: '24px' }}>
                                        <span style={{ fontSize: '18px', fontWeight: '500', paddingRight: '24px' }}>Manage Address</span>
                                    </div>
                                    <div className='newaddress'>
                                        <div id='newaddressbutton' className='divnewaddress' style={{ display: 'block' }} onClick={handleaddressform}>
                                            <i className="fa-solid fa-plus fa-xl" style={{ color: "#2874f0", margin: '0px 16px' }}></i> ADD A NEW ADDRESS
                                        </div>
                                        <div>
                                            <div id='addressformfield' className="divnewaddress" style={{ backgroundColor: '#f5faff', display: "none" }}>
                                                <div style={{ marginLeft: '24px' }}>ADD A NEW ADDRESS</div>
                                                <div>
                                                    <div className='container'>
                                                        <div style={{ display: 'flex', width: "85%" }}>
                                                            <input type="text" name='name' className='inputfields ' value={credintial.name} onChange={handleAddressChange} placeholder='Name' />
                                                            <input type="number" name="mobileno" id="mobileno" className='inputfields ' value={credintial.mobileno} onChange={handleAddressChange} placeholder='10-digit mobile number' />
                                                        </div>
                                                        <div style={{ display: 'flex', width: "85%" }}>
                                                            <input type="number" name='pincode' className='inputfields' value={credintial.pincode} onChange={handleAddressChange} placeholder='Pincode' />
                                                            <input type="text" name="landmark" id="landmark" value={credintial.landmark} onChange={handleAddressChange} className='inputfields ' placeholder='Landmark' />
                                                        </div>
                                                        <div style={{ width: "85%" }}>
                                                            <textarea style={{ resize: "none", width: "96.3%", marginLeft: '10px' }} rows='4' name="house_number" id="house_number" placeholder='Address(Area and Street)' value={credintial.house_number} onChange={handleAddressChange}></textarea>
                                                        </div>
                                                        <div style={{ display: 'flex', width: "85%" }}>
                                                            <input type="text" name='area' className='inputfields' value={credintial.area} onChange={handleAddressChange} placeholder='Area' />
                                                            <input type="number" name="secondmobile" id="secondmobile" value={credintial.secondmobile} onChange={handleAddressChange} className='inputfields ' placeholder='Alternate Phone(Optional)' />
                                                        </div>
                                                        <div style={{ display: 'flex', width: "85%" }}>
                                                            <input type="text" name='city' value={credintial.city} onChange={handleAddressChange} className='inputfields' placeholder='City/District/Town' />
                                                            <div style={{ width: "60%" }}>
                                                                <button className='inputfields' onClick={handlestateoption} style={{ width: "93%", borderRadius: '2px', background: 'transparent', border: '1px solid gray', display: 'flex', justifyContent: 'space-between', alignItems: "center", cursor: 'pointer' }} ><span style={{ display: "flex", margin: '6px' }}>{userstate}</span><span><i className="fa-solid fa-caret-down fa-lg" style={{ marginRight: '6px' }}></i></span></button>
                                                                <ul id='statelist' className='list_state' >
                                                                    <li style={{ pointerEvents: "none", opacity: '0.5' }}>--Select State--</li>
                                                                    <li onClick={() => handlestatelist("Andaman and Nicobar Islands")} value={"Andaman and Nicobar Islands"} name={"Andaman and Nicobar Islands"}>Andaman and Nicobar Islands</li>
                                                                    <li onClick={() => handlestatelist("Andhra Pradesh")} value={"Andhra Pradesh"}>Andhra Pradesh</li>
                                                                    <li onClick={() => handlestatelist("Arunachal Pradesh")} value={'Arunachal Pradesh'}>Arunachal Pradesh</li>
                                                                    <li onClick={() => handlestatelist("Assam")} value={'Assam'}>Assam</li>
                                                                    <li onClick={() => handlestatelist("Bihar")} value={"Bihar"}>Bihar</li>
                                                                    <li onClick={() => handlestatelist("Chandigarh")} value={"Chandigarh"}>Chandigarh </li>
                                                                    <li onClick={() => handlestatelist("Chhattisgarh")} value={'Chhattisgarh'}>Chhattisgarh</li>
                                                                    <li onClick={() => handlestatelist("Dadra & Nagar Haveli and Daman & Diu")} value={'Dadra & Nagar Haveli and Daman & Diu'}>Dadra & Nagar Haveli and Daman & Diu</li>
                                                                    <li onClick={() => handlestatelist("Delhi")} value={"Delhi"}>Delhi</li>
                                                                    <li onClick={() => handlestatelist("Goa")} value={"Goa"}>Goa</li>
                                                                    <li onClick={() => handlestatelist("Gujarat")} value={"Gujarat"}>Gujarat</li>
                                                                    <li onClick={() => handlestatelist("Haryana")} value={"Haryana"}>Haryana</li>
                                                                    <li onClick={() => handlestatelist("Himachal Pradesh")} value={'Himachal Pradesh'}>Himachal Pradesh</li>
                                                                    <li onClick={() => handlestatelist("Jammu & Kashmir")} value={'Jammu & Kashmir'}>Jammu & Kashmir</li>
                                                                    <li onClick={() => handlestatelist("Jharkhand")} value={'Jharkhand'}>Jharkhand</li>
                                                                    <li onClick={() => handlestatelist("Karnataka")} value={'Karnataka'}>Karnataka</li>
                                                                    <li onClick={() => handlestatelist("Kerala")} value={'Kerala'}>Kerala</li>
                                                                    <li onClick={() => handlestatelist("Ladakh")} value={'Ladakh'}>Ladakh</li>
                                                                    <li onClick={() => handlestatelist("Lakshadweep")} value={'Lakshadweep'}>Lakshadweep</li>
                                                                    <li onClick={() => handlestatelist("Maharashtra")} value={'Maharashtra'}>Maharashtra</li>
                                                                    <li onClick={() => handlestatelist("Madhya Pradesh")} value={'Madhya Pradesh'}>Madhya Pradesh</li>
                                                                    <li onClick={() => handlestatelist("Manipur")} value={'Manipur'}>Manipur</li>
                                                                    <li onClick={() => handlestatelist("Meghalaya")} value={'Meghalaya'}>Meghalaya</li>
                                                                    <li onClick={() => handlestatelist("Mizoram")} value={'Mizoram'}>Mizoram</li>
                                                                    <li onClick={() => handlestatelist("Nagaland")} value={'Nagaland'}>Nagaland</li>
                                                                    <li onClick={() => handlestatelist("Odisha")} value={'Odisha'}>Odisha</li>
                                                                    <li onClick={() => handlestatelist("Puducherry")} value={'Puducherry'}>Puducherry</li>
                                                                    <li onClick={() => handlestatelist("Punjab")} value={'Punjab'}>Punjab</li>
                                                                    <li onClick={() => handlestatelist("Rajasthan")} value={'Rajasthan'}>Rajasthan</li>
                                                                    <li onClick={() => handlestatelist("Sikkim")} value={'Sikkim'}>Sikkim</li>
                                                                    <li onClick={() => handlestatelist("Tamil Nadu")} value={'Tamil Nadu'}>Tamil Nadu</li>
                                                                    <li onClick={() => handlestatelist("Tripura")} value={'Tripura'}>Tripura</li>
                                                                    <li onClick={() => handlestatelist("Telangana")} value={'Telangana'}>Telangana</li>
                                                                    <li onClick={() => handlestatelist("Uttar Pradesh")} value={'Uttar Pradesh'}>Uttar Pradesh</li>
                                                                    <li onClick={() => handlestatelist("Uttarakhand")} value={'Uttarakhand'}>Uttarakhand</li>
                                                                    <li onClick={() => handlestatelist("West Bengal")} value={'West Bengal'}>West Bengal</li>
                                                                </ul>
                                                            </div>

                                                        </div>
                                                        <div style={{ marginLeft: '10px', marginBottom: '16px' }}>
                                                            <div style={{ fontSize: "12px", color: "#878787", marginBottom: "10px" }}>Address Type</div>
                                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                                <RadioGroup style={{ display: 'flex', flexDirection: 'row', color: "black" }}>
                                                                    <FormControlLabel value='Home' name='Home' control={<Radio />} onClick={() => handleaddresstype('Home')} label="Home" />
                                                                    <FormControlLabel value='Office' name='Office' control={<Radio />} onClick={() => handleaddresstype('Office')} label="Office" />
                                                                </RadioGroup>
                                                            </div>
                                                        </div>
                                                        <div style={{ marginLeft: '10px', marginTop: '25px' }}>
                                                            <button className='divsaveaddress' onClick={handleaddresssubmit}>Save</button>
                                                            <button className='divcancel' onClick={handleaddressform}>Cancel</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {(user_address)?.map((element, index) => {
                                        return <div key={index} className='addnewaddress' >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div className='addresstype'>
                                                    {element.addresstype}
                                                </div>
                                                <div>
                                                    <i className="fa-solid fa-ellipsis-vertical" style={{ color: "#000000", marginRight: '10px' }}></i>
                                                </div>
                                            </div>
                                            <div style={{ fontWeight: "500", marginLeft: "10px", marginBottom: '10px' }}>
                                                <span>{element.name}</span>
                                                <span style={{ marginLeft: '15px' }}>{element.mobileno}</span>
                                            </div>
                                            <div className='addressline' style={{ marginLeft: "10px", marginBottom: '10px' }}><span>{element.house_number}</span><span style={{ marginLeft: '5px' }}>{element.area}</span><span style={{ marginLeft: '5px' }}>{element.city}</span><span style={{ marginLeft: '5px' }}>{element.state}</span> - <span style={{ marginLeft: '5px' }}>{element.postal_code}</span></div>
                                        </div>
                                    })}
                                    &nbsp;
                                </div>
                            </div>}
                        </div>}
                        {option === "Pan" && <div className='my-5'>
                            {loader && <div style={{ display: 'flex', justifyContent: 'center', marginTop: '230px' }}>
                                <i className="fa-solid fa-arrow-rotate-right fa-spin fa-2xl" style={{ color: "#2f3aca" }} />
                            </div>}
                            {content && <div className="divdetailssection">
                                <div style={{ padding: "24px 32px 0" }}>
                                    <div style={{ paddingBottom: '24px' }}>
                                        <span style={{ fontSize: '18px', fontWeight: '500', paddingRight: '24px' }}>Personal Information</span>
                                    </div>
                                    <div>
                                        <div style={{ marginBottom: '15px' }}>
                                            <input type="text" className='pan_num' name='panNumber' value={panNumber} onChange={handlepannum} placeholder='PAN Card Number' />
                                        </div>
                                        <div className='pan_image'>
                                            <label htmlFor="panimage" className='pan_image_detail'>Upload PAN Card (Only JPEG file is allowed)</label>
                                            <input type="file" name="panimage" id="panimage" onChange={convertobase64} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'baseline', fontSize: '14px' }}>
                                        <input type="checkbox" name="check" id="check" required /><div className='checkdetails'>I do hereby declare that PAN furnished/stated above is correct and belongs to me, registered as an account holder with www.DoorPoint.com. I further declare that I shall solely be held responsible for the consequences, in case of any false PAN declaration.</div>
                                    </div>
                                    <div style={{ marginTop: '25px', paddingBottom: '10px' }}>
                                        <button className='divuploadpan' onClick={handlepansubmit}>Upload</button>
                                    </div>
                                    <div style={{ marginTop: '15px', cursor: 'pointer' }}>
                                        <span style={{ fontWeight: "500", fontSize: "16px", color: "#2874f0", margin: "0 15px 25px 0", display: "inline-block" }}>Read Terms & Conditions of PAN Card Information</span>
                                    </div>
                                </div>
                            </div>}
                        </div>}
                        {option === "Myorder" && <div className='my-5'>
                            {loader && <div style={{ display: 'flex', justifyContent: 'center', marginTop: '230px' }}>
                                <i className="fa-solid fa-arrow-rotate-right fa-spin fa-2xl" style={{ color: "#2f3aca" }} />
                            </div>}
                            {content && Order_List?.map((value, index) => {
                                return <div class="orderlistcontainer">
                                    <div class="row">
                                        <div class="orderlistimagecontainer">
                                            {value.image.length>1?<img src={value.image[0].data} alt="ProductImage" />:<img src={value.image[0]} alt="ProductImage" />}
                                        </div>
                                        <div class="col orderhistoryitemname" style={{fontSize:'14px'}}>
                                            {value.name}
                                        </div>
                                        <div class="col orderhistoryitemname justify-content-center">
                                            ₹{value.price}
                                        </div>
                                        <div class="col orderhistoryitemname">
                                            <i className="fa-solid fa-circle fa-xs mx-2" style={{ color: "#00d391",marginTop:'3px'}} />
                                            {value.delivrystatus}
                                        </div>
                                    </div>
                                </div>
                            }
                            )
                            }
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile