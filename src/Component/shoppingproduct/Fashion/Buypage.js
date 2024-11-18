import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../Pages.css'
import DoorPointApi from '../../../ComponentAPI/DoorPointAPI'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import '../../Style.css'
import { Button, Modal } from 'react-bootstrap'
import timerwatch from '../../images/pocket-watch.gif'
import timerwatch2 from '../../images/pocket-watch2.png'
function Buypage() {
    let num = Math.floor(Math.random() * (999 - 101 + 1)) + 101
    const [numcode, setMynumcode] = useState(num)
    const history = useNavigate()
    const randomnum = () => {
        setMynumcode(num)
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handle_Show = () => setShow(true);
    const [time_Out, setMytime_out] = useState(false)
    const handle_Timeout = () => setMytime_out(true)
    const [paymentmode, setMypaymentMode] = useState('')
    const location = useLocation()
    const context = useContext(DoorPointApi)
    const { info, showAlert, currentDate, Daysarr, montharr, Mycart_list, DeletItem,clearCartitem } = context
    const { item } = location.state ? location.state : Mycart_list
    console.log(Mycart_list,'item')
    const [user_address, setMyUser_Address] = useState(info.address)
    const [saveAddress, setMySaveAddress] = useState()
    const [paymentvisible, setMypaymentvisbile] = useState(false)
    const iteminfo = item ? item : Mycart_list
    // console.log(Array.isArray(iteminfo[0].image))
    const [credintial, setMycredintial] = useState({ name: "", mobileno: "", pincode: "", city: "", house_number: "", landmark: "", area: '', secondmobile: "" })
    const [userstate, setMyuserstate] = useState('State')
    const [addresstype, setMyaddresstype] = useState()
    const [money, setMymoney] = useState(item ? item.price : 0)
    const [discountpercent, setMyDiscountPercent] = useState(10)
    const [totalsaving, setMytotalSaving] = useState()
    const [itemcount, setMyitemCount] = useState(1)
    const [timer, setMytimer] = useState(779)
    const [verificationCode, setMyVerificationCode] = useState("")
    const [total_amount, setMyTotal_Amount] = useState()
    const [Cartmoney, setCartMoney] = useState(0)
    const [total_Price, setMyTotal_price] = useState(0)
    const [newCartprice, setMyNewCartPrice] = useState(0)
    const [total_Saving, setMyTotal_Saving] = useState(0)
    useEffect(() => {
        let totalmoney = Mycart_list.reduce((accu, curr) => accu + curr.price, 0)
        let totaldiscount = Mycart_list.reduce((accu, curr) => {
            const discount = curr.price > 4999 ? 0.25 : 0.15;
            const discountedPrice = curr.price * (1 - discount);
            return accu + discountedPrice;
        }, 0);
        setMyNewCartPrice(Math.floor(totaldiscount))
        setCartMoney(totalmoney)
    }, [Mycart_list])
    useEffect(() => {
        if (Cartmoney < 1000) {
            setMyTotal_price(newCartprice + 3 + 49);
        } else if (Cartmoney > 1000 && Cartmoney < 5000) {
            setMyTotal_price(newCartprice + 3);
        } else if (Cartmoney >= 5000) {
            setMyTotal_price(newCartprice + 3 + 7);
        }
        setMyTotal_Saving(Cartmoney - newCartprice)
        // eslint-disable-next-line
    }, [Cartmoney])
    const handle_Timeout_close = () => {
        history('/cartpage')
        setMytime_out(false)
    }
    const handleAddressOption = (value) => {
        setMySaveAddress(value)
    }
    useEffect(() => {
        if (document.getElementById('loginin').style.display === 'none') {
            document.getElementById('logindet').style.display = 'block'
        }
    }, []
    )
    const handleshow = (value) => {
        const element = document.getElementById(value)
        if (element.style.display === 'none') {
            if (element.id === 'logindet') {
                document.getElementById('loginin').style.display = 'none'
            }
            if (element.id === 'addressdet' && saveAddress !== undefined) {
                document.getElementById('finaladdress').style.display = 'none'
            }
            if (element.id === 'orderdet') {
                document.getElementById('ordercom').style.display = 'none'
            }
        }
        else {
            if (element.id === 'logindet') {
                document.getElementById('addressdet').style.display = 'block'
                document.getElementById('loginin').style.display = 'block'
            }
            if (element.id === 'addressdet') {
                document.getElementById('orderdet').style.display = 'block'
                document.getElementById('finaladdress').style.display = 'block'
            }
            if (element.id === 'orderdet') {
                document.getElementById('paymentdet').style.display = 'block'
                setMypaymentvisbile(true)
                document.getElementById('ordercom').style.display = 'block'
            }
            // fadd.style.display='flex'    
            element.style.display = 'none'
        }
    }
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
            setMycredintial({ name: "", mobileno: "", pincode: "", city: "", house_number: "", landmark: "", area: '', secondmobile: "" })
            setMyuserstate('State')
            setMyUser_Address(json.user.address)
            handleaddressform()
            // console.log("Success")
        } else {
            console.log("Error")
        }
    }
    const handlecount = (value) => {
        if (itemcount < 5) {
            setMyitemCount(itemcount + value)
        }
        else {
            handle_Show()
        }
    }
    const handlecountdecrement = (value) => {
        setMyitemCount(itemcount - value)
    }
    useEffect(() => {
        let pricerate = item && item.price
        let discountRate = pricerate > 5000 ? 25 : 15;
        let discountedPrice = Math.floor(pricerate - (pricerate * discountRate / 100)) * itemcount;
        setMymoney(discountedPrice.toLocaleString('en-US'));
        setMyDiscountPercent(discountRate === 25 ? 20 : 10);
        setMytotalSaving((pricerate * itemcount) - discountedPrice);
        // {if (value.price > 5000) {
        //     let res = (value.price / 100) * 25
        //     setMymoney((Math.floor(value.price - res) * itemcount).toLocaleString('en-US'))
        //     setMyDiscountPercent(20)
        //     setMytotalSaving((value.price*itemcount)-Number(money.replace(',','')))
        // }
        // else {
        //     let res = (value.price / 100) * 15
        //     setMymoney((Math.floor(value.price - res) * itemcount).toLocaleString('en-US'))
        //     setMyDiscountPercent(10)
        // }}
        // eslint-disable-next-line
    }, [itemcount])
    useEffect(() => {
        if (timer > 0 && paymentvisible) {
            const timerid = setInterval(() => {
                setMytimer(timer => timer - 1)
            }, 1000);
            return () => clearInterval(timerid)
        }
        else if (timer === 0) {
            handle_Timeout()
            AddCart(item)

        }
        // eslint-disable-next-line 
    }, [timer, paymentvisible]
    )
    const AddCart = async (element) => {
        if (localStorage.token) {
            const response = await fetch(`http://localhost:5000/api/addcart/carts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'auth-token': localStorage.token
                },
                body: JSON.stringify({ element })
            })
            const json = await response.json()
            if (json.success) {
                // console.log('success')
            }
            else {
                showAlert("Item is already available in the cart", 'danger')
            }
        } else {
            showAlert("Please login first to add item in cart", 'warning')
        }
    }
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secondsPart = seconds % 60;
        return `${minutes}:${secondsPart < 10 ? '0' : ''}${secondsPart}`;
    }
    // const[colorvalue,setMycolorvalue]=useState('135, 135, 135')
    useEffect(() => {
        if (paymentmode !== "COD" && paymentmode !== '') {
            showAlert("Only Cash on Delivery Available", 'danger')
        }
        // eslint-disable-next-line 
    }, [paymentmode])
    const CodVerif = (e) => {
        setMyVerificationCode(e.target.value)
    }
    const Opencodeverifaction = () => {
        let box = document.getElementById('Code_verification')
        if (box.style.display === 'none' & paymentmode === 'COD') {
            box.style.display = 'block'
        }
        else {
            box.style.display = 'none'
        }
    }
    useEffect(() => {
        Opencodeverifaction();
        // eslint-disable-next-line 
    }, [paymentmode]);
    useEffect(() => {
        const pricerate = item && item.price
        if (pricerate < 999) {
            setMyTotal_Amount(Number(money.replace(",", '')) + 3 + 49)
        }
        else if (pricerate <= 9999) {
            setMyTotal_Amount((Number(money.replace(",", '')) + 3 + 7).toLocaleString('en-US'))
            // console.log('enter', total_amount)
        }
        // eslint-disable-next-line
    }, [money])
    const data=item?item:Mycart_list
    const Addorderhistory=async(value)=>{
        const response = await fetch(`http://localhost:5000/api/orderhistory/order_store`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token":localStorage.getItem('token')
            },
            body: JSON.stringify({element:value})
        });
        const json = await response.json()
        console.log(json)

    }
    const Comfirmorder = () => {
        if (numcode === Number(verificationCode)) {
            history('/comfirm')
            Addorderhistory(data)
            clearCartitem(info._id)
            // location()
            // console.log(verificationCode)
        }
        else {
            showAlert("Invalid capature code please try again !", 'danger')
            setMyVerificationCode("")
            randomnum()
        }
    }
    return (
        <>
            <br />
            <div className="container text-center my-5">
                <div className="row">
                    <div className="col-8">
                        <div className='logindiv'>
                            <div className='loginbtn'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-1-square-fill mx-2" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
                                {/* <i className="fa-solid fa-pencil" /> */}
                            </svg>Login
                                <i className="fa-solid fa-pencil my-2" style={{ color: "#fff", marginLeft: 'auto', marginRight: '10px' }}></i>
                            </div>
                            <div id='logindet' style={{ display: 'none' }}>
                                {/* <div className="container text-center" > */}
                                <div className="container justify-content-between text-center" style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div className="mx-4">
                                        <div className="row justify-content-evenly" >
                                            <div className="col-4 my-2">
                                                <div>Name</div>
                                                <div>Contact</div>
                                            </div>
                                            <div className="col-4 my-2">
                                                <div style={{ width: 'max-content' }}>{info.name}</div>
                                                <div>{info.mobile}</div>
                                            </div>
                                        </div>
                                        <div className='logosign my-1'>Logout & Sign in to another account</div>
                                        <button onClick={() => handleshow('logindet')} className='btncheck my-2'>CONTINUE CHECKOUT</button>
                                    </div>
                                    <div style={{ fontSize: '14px', textAlign: 'justify' }}>
                                        <div className='my-2' >Advantages of our secure login</div>
                                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>
                                            <li><i className="fa-solid fa-truck my-2" style={{ color: "#74C0FC" }}></i>&nbsp;Easily Track Orders,Hassle free Returns</li>
                                            <li><i className="fa-solid fa-bell my-2" style={{ color: "#74C0FC" }}></i> &nbsp;Get Relevant Alerts and Recommendation</li>
                                            <li><i className="fa-solid fa-star my-2" style={{ color: "#74C0FC" }}></i>&nbsp;Wishlist,Reviews,Rating and more</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='warningnote my-3'>
                                    <span>! Please note that upon clicking "Logout" you will lose all items in cart and will be redirected to DoorPoint home page.</span>
                                </div>
                            </div>
                            <div id='loginin' style={{ height: '35px', display: "none" }}>
                                <div style={{ marginLeft: '10px', marginBottom: '10px', marginTop: '10px', textAlign: 'justify' }}>
                                    <span className='mx-4' style={{ fontWeight: "500", color: "#212121", fontSize: '14px' }}>{info.name}</span>&nbsp;<span>{info.mobile}</span>
                                </div>
                            </div>
                        </div>
                        <div className='addressdiv'>
                            <div className='addressbtn'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-2-square-fill mx-2" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306" />
                            </svg> Address
                                <i className="fa-solid fa-pencil my-2" style={{ color: "#fff", marginLeft: 'auto', marginRight: '10px' }}></i>
                            </div>
                            <div id='addressdet' style={{ display: 'none' }}>
                                {(user_address)?.map((element, index) => {
                                    return <div key={index} className='addnewaddress' >
                                        <div style={{ fontWeight: "500", marginLeft: "10px", marginBottom: '10px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                                            <div style={{ marginBottom: "32px" }}>
                                                <input type="radio" name="address1" id={`address1-${index}`} onClick={() => handleAddressOption(element)} style={{ marginTop: "18px" }} />
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column ' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                                                    <span>{element.name}</span>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: "10px" }}>
                                                        <div className='addresstype'>
                                                            {element.addresstype}
                                                        </div>
                                                    </div>
                                                    <span style={{ marginLeft: '15px' }}>{element.mobileno}</span>
                                                </div>
                                                <div className='addressline' style={{ marginLeft: "10px" }}><span>{element.house_number}</span><span style={{ marginLeft: '5px' }}>{element.area}</span><span style={{ marginLeft: '5px' }}>{element.city}</span><span style={{ marginLeft: '5px' }}>{element.state}</span> - <span style={{ marginLeft: '5px' }}>{element.postal_code}</span></div>
                                            </div>
                                        </div>
                                        {saveAddress === element && <button className='deliverbtn' onClick={() => handleshow('addressdet')}>Delivere here</button>}
                                    </div>
                                })}
                                <div>
                                    <div style={{ backgroundColor: 'gray', border: '1px solid gray', height: '5px' }}></div>
                                    <div id='newaddressbutton' className='divnewaddress' style={{ display: 'block', textAlign: 'justify' }} onClick={handleaddressform}>
                                        <i className="fa-solid fa-plus fa-xl" style={{ color: "#2874f0", margin: '0px 16px' }}></i> ADD A NEW ADDRESS
                                    </div>
                                    <div id='addressformfield' className="divnewaddress" style={{ backgroundColor: '#f5faff', display: "none" }}>
                                        <div style={{ textAlign: "justify", marginLeft: "28px", marginBottom: "12px" }}>ADD A NEW ADDRESS</div>
                                        <div>
                                            <div className='container'>
                                                <div style={{ display: 'flex', width: "85%" }}>
                                                    <input type="text" name='name' className='inputfields ' value={credintial.name} onChange={handleAddressChange} style={{ padding: '10px' }} placeholder='Name' />
                                                    <input type="number" name="mobileno" id="mobileno" className='inputfields ' value={credintial.mobileno} onChange={handleAddressChange} style={{ padding: '10px' }} placeholder='10-digit mobile number' />
                                                </div>
                                                <div style={{ display: 'flex', width: "85%" }}>
                                                    <input type="number" style={{ padding: '10px' }} name='pincode' className='inputfields' value={credintial.pincode} onChange={handleAddressChange} placeholder='Pincode' />
                                                    <input type="text" name="landmark" id="landmark" style={{ padding: '10px' }} value={credintial.landmark} onChange={handleAddressChange} className='inputfields ' placeholder='Landmark' />
                                                </div>
                                                <div style={{ width: "85%" }}>
                                                    <textarea style={{ resize: "none", width: "96.3%", padding: '10px' }} rows='4' name="house_number" id="house_number" placeholder='Address(Area and Street)' value={credintial.house_number} onChange={handleAddressChange}></textarea>
                                                </div>
                                                <div style={{ display: 'flex', width: "85%" }}>
                                                    <input type="text" name='area' className='inputfields' value={credintial.area} onChange={handleAddressChange} style={{ padding: '10px' }} placeholder='Area' />
                                                    <input type="number" name="secondmobile" id="secondmobile" value={credintial.secondmobile} onChange={handleAddressChange} className='inputfields ' style={{ padding: '10px' }} placeholder='Alternate Phone(Optional)' />
                                                </div>
                                                <div style={{ display: 'flex', width: "85%" }}>
                                                    <input type="text" name='city' value={credintial.city} onChange={handleAddressChange} className='inputfields' style={{ padding: '10px' }} placeholder='City/District/Town' />
                                                    <div style={{ width: "60%" }}>
                                                        <button className='inputfields' onClick={handlestateoption} style={{ width: "93%", borderRadius: '2px', background: 'transparent', border: '1px solid gray', display: 'flex', justifyContent: 'space-between', alignItems: "center", cursor: 'pointer' }} ><span style={{ display: "flex", margin: '6px', padding: '10px' }}>{userstate}</span><span><i className="fa-solid fa-caret-down fa-lg" style={{ marginRight: '6px' }}></i></span></button>
                                                        <ul id='statelist' className='list_states' >
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
                                                    <div style={{ fontSize: "12px", color: "#878787", marginBottom: "10px", textAlign: "justify", marginTop: "10px" }}>Address Type</div>
                                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                        <RadioGroup style={{ display: 'flex', flexDirection: 'row', color: "black" }}>
                                                            <FormControlLabel value='Home' name='Home' control={<Radio />} onClick={() => handleaddresstype('Home')} label="Home" />
                                                            <FormControlLabel value='Office' name='Office' control={<Radio />} onClick={() => handleaddresstype('Office')} label="Office" />
                                                        </RadioGroup>
                                                    </div>
                                                </div>
                                                <div style={{ marginLeft: '10px', marginTop: '25px', textAlign: 'justify' }}>
                                                    <button style={{ backgroundColor: '#fb641b' }} className='divsaveaddress' onClick={handleaddresssubmit}>Save</button>
                                                    <button style={{ fontWeight: '500' }} className='divcancel' onClick={handleaddressform}>Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='finaladdress' style={{ display: 'none' }}>
                                {saveAddress && <div className='addressline' style={{ marginLeft: "14px", display: 'flex', padding: '12px 10px 10px 4px' }}>
                                    <div className='mx-3' style={{ fontWeight: '500', fontSize: '14px', color: "#212121" }}>{saveAddress.name}</div>
                                    <span>{saveAddress.house_number}</span> ,<span style={{ marginLeft: '2px' }}>{saveAddress.area}</span>,<span style={{ marginLeft: '2px' }}>{saveAddress.city}</span>,<span style={{ marginLeft: '2px' }}>{saveAddress.state}</span>&nbsp;-&nbsp;<span style={{ fontWeight: '500', color: 'color: "#212121"' }}>{saveAddress.postal_code}</span>
                                </div>}
                            </div>
                        </div>
                        <div className='orderdiv'>
                            <div className='orderbtn'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-3-square-fill mx-2" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318" />
                            </svg> Order Summary
                                <i className="fa-solid fa-pencil my-2" style={{ color: "#fff", marginLeft: 'auto', marginRight: '10px' }}></i>
                            </div>
                            <div id='orderdet' style={{ display: 'none' }}>
                                {item ? <div style={{ display: 'flex', padding: '14px 1px 10px 12px', marginBottom: '15px' }}>
                                    {/* <div>
                                        {iteminfo.image.length>2?<img src={iteminfo.image.data} alt="product_image" style={{ width: 'auto', height: "100px" }} />:<img src={iteminfo.image} alt="product_image" style={{ width: 'auto', height: "100px" }} />}
                                        <div style={{ marginTop: '10px' }}>
                                            <div style={{ display: "flex" }}>
                                                <button disabled={itemcount === 1} onClick={() => handlecountdecrement(1)} style={{ borderRadius: '20px', width: '26px', height: '26px', border: "1px solid #c2c2c2", background: "linear-gradient(#fff, #f9f9f9)" }}><i className="fa-solid fa-minus fa-xs"></i></button>
                                                <input type="text" name="number" id="number" readOnly style={{ width: '56px', marginLeft: '6px', marginRight: '6px', textAlign: 'center' }} value={itemcount} />
                                                <button disabled={itemcount === 6} onClick={() => handlecount(1)} style={{ borderRadius: '20px', width: '26px', height: '26px', border: "1px solid #c2c2c2", background: "linear-gradient(#fff, #f9f9f9)" }}><i className="fa-solid fa-plus fa-xs"></i></button>

                                            </div>
                                        </div>
                                    </div> */}
                                    <div style={{ marginLeft: '20px', display: 'flex', textAlign: 'justify' }}>
                                        <div>
                                            <div>{iteminfo.name}</div>
                                            <div style={{ color: "#878787", fontSize: "14px", height: "20px" }}>{item.color}</div>
                                            <div style={{ color: "#878787", fontSize: "14px", height: "20px" }}><span>Seller : </span>{iteminfo.brand}</div>
                                            <div>
                                                <span style={{ textDecoration: 'line-through', opacity: '0.5' }}>₹{(iteminfo.price).toLocaleString('en-US')}</span>
                                                <span style={{ marginLeft: '10px' }}>₹{money}</span>
                                                <span style={{ fontWeight: '500', color: '#388e3c', marginLeft: '7px', fontSize: '13px' }}>{discountpercent}% Off  + 5% Off by DoorPoint</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: '66px' }}>
                                        <div>Delivery by {(Daysarr[currentDate.getDay()]).slice(0, 3)}, {currentDate.getDate()} {(montharr[(currentDate.getMonth())]).slice(0, 3)} | {item.price < 999 ? <span>₹49</span> : <span style={{ color: '#388e3c', fontSize: '14px' }}>FREE</span>}</div>
                                    </div>
                                </div> : iteminfo.map((element, index) => {
                                    console.log(element.image,">image")
                                    return <div key={index} style={{ display: 'flex', padding: '14px 1px 10px 12px', marginBottom: '15px' }}>
                                        <div style={{width:'130px'}}>
                                            <div style={{ width: 'auto' }}>
                                                {element.image.length>1?<img src={element.image[0]?.data} alt="product_image" style={{ width: 'fit-content', height: "100px" }} />:<img src={element.image} alt="product_image" style={{ width: 'fit-content', height: "100px" }} />}
                                            </div>
                                        </div>
                                        <div className='container text-justify'>
                                            <div className='row justify-content-between' >
                                                <div className='col-6'>
                                                    <div>{element.name}</div>
                                                    <div style={{ color: "#878787", fontSize: "14px", height: "20px" }}>{element.color}</div>
                                                    <div style={{ color: "#878787", fontSize: "14px", height: "20px" }}><span>Seller: </span>{element.brand}</div>
                                                    <div>
                                                        <span style={{ textDecoration: 'line-through', opacity: '0.5' }}>{element.price}</span>
                                                        <span style={{ marginLeft: '10px' }}>{element.price > 4999 ? Math.floor(element.price - (element.price * 25 / 100)) : Math.floor(element.price - (element.price * 15 / 100))}</span>
                                                        <span style={{ fontWeight: '500', color: '#388e3c', marginLeft: '7px', fontSize: '13px' }}>20% Off  + 5% Off by DoorPoint</span>
                                                    </div>
                                                    <button className='buttonremoveitem' onClick={() => DeletItem(element._id)}>Remove</button>
                                                </div>
                                                <div className='col-6' style={{ textAlign: 'end' }}>
                                                    <div>Delivery by {(Daysarr[currentDate.getDay()]).slice(0, 3)}, {currentDate.getDate()} {(montharr[(currentDate.getMonth())]).slice(0, 3)} | {500 < 999 ? <span>₹49</span> : <span style={{ color: '#388e3c', fontSize: '14px' }}>FREE</span>}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })}
                                <div style={{ boxShadow: " 0 -1px 1px 0 rgba(0, 0, 0, .2)", backgroundColor: "#f1f3f6", height: "8px", border: "1px solid #f0f0f0" }}></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '10px' }}>
                                    <span style={{ marginLeft: '10px', fontSize: '14px', color: 'black' }}>Order confirmation email will be sent to <strong> {info.email} </strong></span>
                                    <span style={{ marginRight: '20px', marginBottom: '10px' }}><button style={{
                                        background: " #fb641b",
                                        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, .2)",
                                        border: "none",
                                        color: "#fff",
                                        width: '200px',
                                        height: '48px'
                                    }} onClick={() => handleshow("orderdet")}>Continue</button></span>
                                </div>
                            </div>
                            <div id='ordercom' style={{ display: 'none' }}>
                                <div className='addressline' style={{ marginLeft: "29px", display: 'flex', padding: '12px 10px 10px 4px' }}>
                                    {!Array.isArray(item) ? <span style={{ fontWeight: '600' }}>1 Item</span> : ''}
                                </div>
                            </div>
                        </div>
                        <div className='paymentdiv'>
                            <div className='paymentbtn'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-4-square-fill" viewBox="0 0 16 16" style={{ margin: '10px' }}>
                                <path d="M6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218" />
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5.519 5.057q.33-.527.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265Z" />
                            </svg>
                                {/* <i className="fa-solid fa-pencil" /> */}
                                Payment Option
                                <i className="fa-solid fa-pencil my-2" style={{ color: "#fff", marginLeft: 'auto', marginRight: '10px' }}></i>
                            </div>
                            <div id='paymentdet' style={{ display: 'none' }}>
                                <div>
                                    <div className='watchtimer' >Complete payment in<span style={{ marginLeft: '15px' }}>
                                        {timer > 0 ? <img src={timerwatch} alt="watch" style={{ width: '30px' }} /> : <img src={timerwatch2} alt='watch2' style={{ width: '30px' }} />}
                                    </span>
                                        <span style={{ marginLeft: '10px' }}>{(formatTime(timer))}</span>
                                    </div>
                                </div>
                                <div style={{ boxShadow: " 0 -1px 1px 0 rgba(0, 0, 0, .2)", backgroundColor: "#f1f3f6", height: "8px", border: "1px solid #f0f0f0", marginTop: '-5px' }}></div>
                                <div style={{ display: 'flex', alignItems: 'center', height: "70px" }}>
                                    <input type="radio" onChange={() => setMypaymentMode('Googlepay')} name="paymentmode" id="googlepay" style={{ margin: '10px' }} /><div style={{ marginLeft: '10px' }}>Google Pay UPI <span style={{ color: "#878787", marginLeft: "8px" }}>{info.email}</span></div>
                                </div>
                                <div style={{ boxShadow: " 0 -1px 1px 0 rgba(0, 0, 0, .2)", backgroundColor: "#f1f3f6", height: "8px", border: "1px solid #f0f0f0" }}></div>
                                <div>
                                    <div className='paymentoption'>
                                        <input type="radio" name="paymentmode" id="UPI" onClick={Opencodeverifaction} onChange={() => setMypaymentMode('UPI')} value={paymentmode} />
                                        <div>
                                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif" alt="" style={{ width: '25px', height: '26px' }} />
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline ' }}>
                                                UPI
                                                <span style={{ color: "rgb(135, 135, 135)", fontSize: "14px" }} >Pay by any UPI app</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='paymentoption' >
                                        <input type="radio" name="paymentmode" id="Wallet" onClick={Opencodeverifaction} onChange={() => setMypaymentMode('Wallet')} /><div>
                                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif" alt="" style={{ width: '25px' }} />
                                            <span style={{ marginLeft: '10px' }}>Wallets</span></div>
                                    </div>
                                    <div className='paymentoption' >
                                        <input type="radio" name="paymentmode" id="CCard" onClick={Opencodeverifaction} onChange={() => setMypaymentMode('CCard')} /><div style={{ alignItems: 'baseline', flexDirection: 'column' }}>Credit/Debit/ATM Card <span style={{ color: "rgb(135, 135, 135)", fontSize: "14px" }} >Add and secure cards as per RBI guidleines</span></div>
                                    </div>
                                    <div className='paymentoption' >
                                        <input type="radio" name="paymentmode" id="Internet_Banking" onClick={Opencodeverifaction} onChange={() => setMypaymentMode("Internet_Banking")} /><div style={{ alignItems: 'baseline', flexDirection: 'column' }}>Net Banking <span style={{ color: "rgb(135, 135, 135)", fontSize: "14px" }} >This instrument has low success,use UPI or cards for better experince</span></div>
                                    </div>
                                    <div style={{ borderBottom: "1px solid #f0f0f0" }}>
                                        <div className='paymentoption' style={{ borderBottom: "0px" }}>
                                            <div className='paymentcod'>
                                                <input type="radio" name="paymentmode" id="COD" onClick={Opencodeverifaction} onChange={() => setMypaymentMode("COD")} style={{ marginLeft: '1px' }} /><div style={{ marginLeft: '10px' }}>Cash on delivery</div><br />
                                            </div>
                                        </div>
                                        <div id='Code_verification' style={{ display: 'none' }}>
                                            {money && money > 5000 ? (
                                                <div className='codwarn'>Due to handling cost, a nominal fee of ₹7 will be charged</div>
                                            ) : (
                                                newCartprice > 5000 && (
                                                    <div className='codwarn'>Due to handling cost, a nominal fee of ₹7 will be charged</div>
                                                )
                                            )}
                                            <div>
                                                <div className='codveri'>
                                                    <div className='codcode'>
                                                        <span>{numcode}</span>
                                                        <i className="fa-solid fa-arrows-rotate" onClick={randomnum} style={{ color: "#1f98f4", fontSize: '16px', marginTop: '6px', marginLeft: '15px' }} />
                                                    </div>
                                                    <div className='codnum'>
                                                        <div>
                                                            <input type="number" id='number' name='number' value={verificationCode} placeholder='Enter the Number' onChange={CodVerif} />
                                                        </div>
                                                        <div>
                                                            <button onClick={Comfirmorder} className='mx-3'>COMFIRM ORDER</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='paymentoption' style={{ color: "rgb(135, 135, 135)", fontSize: "16px" }} >
                                        <input type="radio" name="paymentmode" id="EMI" onChange={() => setMypaymentMode("EMI")} disabled={item ? item.price < 2000 : newCartprice < 200} /><div>EMI (Easy Installments) </div>
                                    </div>
                                    <div className="paymentoption" style={{ display: 'flex', justifyContent: 'right', marginRight: '15px' }}>
                                        <button disabled={paymentmode !== 'COD'} style={{ background: " #fb641b", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, .2)", border: "none", color: "#fff", width: '200px', height: '48px' }}>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4" style={{ position: 'fixed', right: "20px" }}>
                        <div>
                            {item ? <div className='text-justify' style={{ border: '1px solid rgba(0, 0, 0, .125)' }}>
                                <div style={{ padding: '12px', color: "rgba(0, 0, 0, 0.425)", fontWeight: "500" }} >PRICE DETAILS</div>
                                <div style={{ borderBottom: '1px solid rgba(0, 0, 0, .125)' }}>
                                    <div style={{ borderBottom: "1px solid rgba(0, 0, 0, .125)", borderTop: "1px solid rgba(0, 0, 0, .125)", padding: '12px' }}>
                                        <div className='divamount_total my-2'><div>Price (1 Item)</div> <div> ₹{money}</div></div>
                                        <div className='divamount_total my-3'><div>Delivery Charges</div> {item.price < 999 ? <div>₹49</div> : <div style={{ color: "rgb(56, 142, 60)" }}>FREE</div>}</div>
                                        <div className='divamount_total my-2'><div>Platform Fees</div> <div>₹3</div></div>
                                        {item.price >= 5000 && <div className='divamount_total my-2'><div>Payment Handling Fee</div> <div>₹7</div></div>}
                                    </div>
                                    <div style={{ display: 'flex', padding: '13px', fontWeight: '600', justifyContent: 'space-between' }}><div>Total Payable</div><div>₹{total_amount}</div></div>
                                </div>
                                {totalsaving > 300 && <div style={{ textAlign: 'justify', color: 'green', margin: '13px' }}>
                                    Your Total Savings on this order ₹{totalsaving}
                                </div>}
                            </div> : <div className='text-justify' style={{ border: '1px solid rgba(0, 0, 0, .125)' }}>
                                <div style={{ padding: '12px', color: "rgba(0, 0, 0, 0.425)", fontWeight: "500" }} >PRICE DETAILS</div>
                                <div style={{ borderBottom: '1px solid rgba(0, 0, 0, .125)' }}>
                                    <div style={{ borderBottom: "1px solid rgba(0, 0, 0, .125)", borderTop: "1px solid rgba(0, 0, 0, .125)", padding: '12px' }}>
                                        <div className='divamount_total my-2'><div>Price ({Mycart_list.length} Item)</div> <div>{newCartprice}</div></div>
                                        <div className='divamount_total my-3'><div>Delivery Charges</div> {Cartmoney < 1000 ? <div>₹49</div> : <div style={{ color: "rgb(56, 142, 60)" }}> <span className='notdeliverycharge'>₹49</span> FREE</div>}</div>
                                        <div className='divamount_total my-2'><div>Platform Fees</div> <div>₹3</div></div>
                                        {newCartprice >= 5000 && <div className='divamount_total my-2'><div>Payment Handling Fee</div> <div>₹7</div></div>}
                                    </div>
                                    <div style={{ display: 'flex', padding: '13px', fontWeight: '600', justifyContent: 'space-between' }}><div>Total Payable</div><div>{total_Price}</div></div>
                                </div>
                                {total_Saving > 300 && <div style={{ textAlign: 'justify', color: 'green', margin: '13px' }}>
                                    Your Total Savings on this order {total_Saving}
                                </div>}
                            </div>}
                        </div>
                        <div className='safe_secure my-4'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-fill-check" viewBox="0 0 16 16" style={{ width: "42px", height: "33px", color: "darkgrey" }}>
                                    <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z" />
                                </svg>
                            </span>
                            <span style={{ color: 'darkgrey', fontSize: '14px', fontWeight: '600' }}>
                                Safe and Secure Payment.Easy returns. <br />
                                100% Authentic products.
                            </span>
                        </div>
                    </div>
                    <Modal show={time_Out} onHide={handle_Timeout_close} backdrop="static" keyboard={false} style={{ marginTop: '145px' }}>
                        <Modal.Body>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ height: '66px' }}>
                                    <i className="fa-sharp fa-solid fa-circle-exclamation fa-rotate-180 fa-2xl" style={{ color: "#fa0000", fontSize: '60px', marginTop: '32px' }}></i>
                                </div>
                                <div style={{ fontSize: "20px", fontWeight: "500", marginTop: "20px", color: "#212121", textAlign: 'center' }}>
                                    The reserved time for one or more items in your basket has expired. The item is no longer reserved and will be transferred to your cart.
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="secondary" style={{ backgroundColor: "#2874f0" }} onClick={handle_Timeout_close}>
                                Go TO CART
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} style={{ marginTop: '145px' }}>
                        <Modal.Body>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ height: '66px' }}>
                                    <i className="fa-sharp fa-solid fa-circle-exclamation fa-rotate-180 fa-2xl" style={{ color: "#fa0000", fontSize: '60px', marginTop: '32px' }}></i>
                                </div>
                                <div style={{ fontSize: "20px", fontWeight: "500", marginTop: "20px", color: "#212121", textAlign: 'center' }}>
                                    You can only purchase 5 units of {item && item.name} in a single order. If you have a higher requirement, please create a new order.
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="secondary" style={{ backgroundColor: "#2874f0" }} onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>

        </>
    )
}

export default Buypage