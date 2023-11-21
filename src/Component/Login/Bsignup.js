import React from 'react'
import graph from '../images/graph.png'
import connect from '../images/connect.png'
import tag from '../images/tag.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import i from '../images/i.png'
import { Link } from 'react-router-dom';
function Bsignup() {
    const handleopen = () => {
        const lis = document.getElementById('liss')
        lis.style.display = 'block'
    }
    const handleclose = () => {
        const lis = document.getElementById('liss')
        lis.style.display = 'none'
    }
    return (
        <>
            <div className="container" style={{ marginTop: '90px', height: '29rem', width: '60rem' }}>
                <div className="container ">
                    <div className="row">
                        <div className="col" style={{ border: '2px solid', backgroundColor: 'azure' }}>
                            <div className="container text-center" style={{ marginTop: '25px' }}>
                                <div className="row align-items-start">
                                    <div className="col">
                                    </div>
                                    <div className="col" >
                                        <div className="card" style={{ width: "21rem", top: '-12px' }}>
                                            <div className="card-body">
                                                <h5 className="card-title" style={{ textAlign: 'start', fontSize: '30px' }}>Create Bussiness Account</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary" style={{ textAlign: 'start', marginTop: '16px' }}>Your Name</h6>
                                                <div style={{ display: 'grid', marginTop: "5px", marginBottom: '10px' }}>
                                                    <input type="text" name="name" id="name" />
                                                </div>

                                                <h6 className="card-subtitle mb-2 text-body-secondary" style={{ textAlign: 'start' }}>Mobile Number</h6>
                                                <div style={{ display: 'flex' }}>
                                                    <span style={{ border: '1px solid gray', marginRight: '20px', width: "5.5rem", display: 'flex', borderRadius: '5px', alignItems: 'center', justifyContent: 'center' }} onMouseEnter={handleopen}>Code<ArrowDropDownIcon /></span>
                                                    <div>
                                                        <ul id='liss' style={{ listStyle: "none", backgroundColor: 'white', width: '12rem', marginLeft: '2px', position: 'absolute', borderRadius: '5px', left: '1.1rem', top: '12.15rem', overflow: 'auto', height: '10rem', border: '1px gray', borderStyle: 'ridge', textAlign: 'start', display: "none" }} onMouseLeave={handleclose}>
                                                            <li style={{ margin: '5px' }}>Hong Kong <span>+852</span></li>
                                                            <li style={{ margin: '5px' }}>Iceland<span>+354</span></li>
                                                            <li style={{ margin: '5px' }}>India<span>+91</span></li>
                                                            <li style={{ margin: '5px' }}>Iran<span>+98</span></li>
                                                            <li style={{ margin: '5px' }}>Iraq<span>+964</span></li>
                                                            <li style={{ margin: '5px' }}>Ireland<span>+353</span></li>
                                                            <li style={{ margin: '5px' }}>Israel<span>+972</span></li>
                                                            <li style={{ margin: '5px' }}>Italy<span>+39</span></li>
                                                            <li style={{ margin: '5px' }}>Japan<span>+81</span></li>
                                                            <li style={{ margin: '5px' }}>Kenya<span>+254 </span></li>
                                                        </ul>
                                                    </div>
                                                    <input type="number" name="number" id="password" style={{ width: '19rem' }} />

                                                </div>
                                                <h6 className="card-subtitle mb-2 text-body-secondary" style={{ textAlign: 'start', marginTop: '16px' }}>Email(Optional)</h6>
                                                <div style={{ display: 'grid', marginTop: "5px", marginBottom: '10px' }}>
                                                    <input type="email" name="email" id="email" />
                                                </div>
                                                <h6 className="card-subtitle mb-2 text-body-secondary" style={{ textAlign: 'start', marginTop: '16px' }}>Password</h6>
                                                <div style={{ display: 'grid', marginTop: "5px", marginBottom: '10px' }}>
                                                    <input type="password" name="password" id="password" />
                                                    <p style={{ fontSize: "12px", textAlign: 'start', display: 'flow' }}> <img src={i} alt="i" style={{ width: '12px' }} /> Passwords must be at least 6 characters.</p>
                                                </div>
                                                <div style={{ display: 'grid', marginTop: '15px' }}>
                                                    <button style={{ borderRadius: '8px', backgroundColor: "lightcyan", height: '35px' }}>Continue</button>
                                                </div>
                                                <div style={{ textAlign: 'start', position: 'relative', right: '6px' }}>
                                                    <span style={{ fontWeight: '700', fontSize: "14px", marginLeft: '5px' }}>Already have an account?</span>
                                                    <span>
                                                        <Link to='/bsignin' style={{ fontSize: '13px', marginLeft: '5px' }}>Sign in<ArrowRightIcon style={{ position: "relative", top: '8px', right: '6px' }} /></Link>
                                                    </span>
                                                </div>
                                                <div>&nbsp;</div>
                                                <div style={{ fontSize: "12px", textAlign: 'start', width: '18rem' }}>
                                                    <p>By creating an account or logging in, you agree to DoorPoint's <a href="/"> Conditions of Use</a> and <a href="/"> Privacy Policy.</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ border: '2px solid black', backgroundColor: '#3f3fa1', color: 'white' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <span style={{ fontSize: '28px', fontWeight: '500' }}>Reshape buying for your organisation</span>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: '15px' }}>
                                    <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src={tag} alt="tag" style={{ width: "3rem", height: '3rem' }} />
                                        <span style={{ marginLeft: '10px' }}>
                                            <h5 style={{ fontSize: '21px', fontWeight: '500' }}>GST Invoice & Bulk Discounts</h5>
                                            <span style={{ fontSize: "13px" }}>Save up to 28% more with GST input credit and avail discounts on multi-unit purchases.</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: '15px' }}>
                                    <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src={graph} alt="tag" style={{ width: "3rem", height: '3rem' }} />
                                        <span style={{ marginLeft: '10px' }}>
                                            <h5 style={{ fontSize: '21px', fontWeight: '500' }}>Business Analytics</h5>
                                            <span style={{ fontSize: "13px" }}>Track and monitor spending by your organisation with dynamic charts and data tables.</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: '15px' }}>
                                <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src={connect} alt="tag" style={{ width: "3rem", height: '3rem' }} />
                                        <span style={{ marginLeft: '10px' }}>
                                            <h5 style={{ fontSize: '21px', fontWeight: '500' }}>Secure Your Account</h5>
                                            <span style={{ fontSize: "13px" }}>Add more colleagues to your account for making business purchases instead of sharing your login credentials.</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <img src='https://m.media-amazon.com/images/I/416LUsi8c6L.svg' alt="" style={{ position: 'relative', top: '9.4rem', left: "7.5rem" }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bsignup