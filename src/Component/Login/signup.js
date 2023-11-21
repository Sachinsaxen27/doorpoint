import React, { useContext, useState } from 'react'
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import door from '../images/doorpoints.png'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import i from '../images/i.png'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import TextField from '@mui/material/TextField';
import { Link, useNavigate} from 'react-router-dom';
import DoorPointApi from '../../ComponentAPI/DoorPointAPI';

function Login() {
    const context=useContext(DoorPointApi)
    const{showAlert}=context
    const pagedirection=useNavigate()
    const [code, setCode] = useState('');
    const handleCode = (event) => {
        setCode(event.target.value);
    };
    const [credintial, setMycredintial] = useState({ name: "", email: "", password: "", mobile: "" })
    const handlesubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:5000/api/userlogin/usersignup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name:credintial.name,mobile:credintial.mobile,code:code,email:credintial.email,password:credintial.password})
        });
        const json = await response.json()
        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            showAlert("Account Create Successfully","success")
            pagedirection("/signin")
            console.log("Account Create Successfully","success")
        }
    }
const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'number' && !isNaN(value)) {
        setMycredintial({ ...credintial, [name]: value });
    } else if (name !== 'number') {
        setMycredintial({ ...credintial, [name]: value });
    }
    // setMycredintial({ ...credintial, [e.target.name]: e.target.value })

}

return (
    <>
        <div className="container text-center" style={{marginTop: '90px', height: '29rem', width: '48rem' }} >
            <div className="row align-items-start">
                <div className="col">
                </div>
                <div className="col">
                    <img src={door} alt="DoorPoint" style={{ width: '8rem' }} />
                </div>
                <div className="col">
                </div>
            </div>
            <div className="container text-center" style={{ marginTop: '25px' }}>
                <div className="row align-items-start">
                    <div className="col">
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "22rem", backgroundColor: 'aliceblue', boxShadow: "3px 0px 10px 20px" }}>
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: 'start', fontSize: '30px' }}>Create Account</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary" style={{ textAlign: 'start', marginTop: '16px' }}>Your Name</h6>
                                <div style={{ display: 'grid', marginTop: "5px", marginBottom: '10px' }}>
                                    <input type='text' value={credintial.name} name="name" id="name" onChange={handleChange} />
                                </div>
                                <h6 className="card-subtitle mb-2 text-body-secondary" style={{ textAlign: 'start' }}>Mobile Number</h6>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                                            <InputLabel id="demo-simple-select-label">Code</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={code}
                                                label="code"
                                                onChange={handleCode}
                                            >
                                                <MenuItem value={+852}>+852</MenuItem>
                                                <MenuItem value={+36}>+36</MenuItem>
                                                <MenuItem value={+354}>+354</MenuItem>
                                                <MenuItem value={+91}>+91</MenuItem>
                                                <MenuItem value={+62}>+62</MenuItem>
                                                <MenuItem value={+98}>+98</MenuItem>
                                                <MenuItem value={+964}>+964</MenuItem>
                                                <MenuItem value={+353}>+353</MenuItem>
                                                <MenuItem value={+39}>+39</MenuItem>
                                                <MenuItem value={+81}>+81</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <input  type="number" id="number" value={credintial.mobile} name="mobile" onChange={handleChange} />

                                </div>
                                <h6 className="card-subtitle mb-2 text-body-secondary" style={{ textAlign: 'start', marginTop: '16px' }}>Email(Optional)</h6>
                                <div style={{ display: 'grid', marginTop: "5px", marginBottom: '10px' }}>
                                    <input type="email" name="email" value={credintial.email} id="email" style={{ height: '39px', backgroundColor: "transparent", border: '1px solid gray', borderRadius: "5px" }} onChange={handleChange}/>
                                </div>
                                <h6 className="card-subtitle mb-2 text-body-secondary" style={{ textAlign: 'start', marginTop: '16px' }}>Password</h6>
                                <div style={{ display: 'grid', marginTop: "5px", marginBottom: '10px' }}>
                                    <input type="password" name="password" id="password" value={credintial.password} style={{ height: '39px', backgroundColor: "transparent", border: '1px solid gray', borderRadius: "5px" }} onChange={handleChange}/>
                                    <p style={{ fontSize: "12px", textAlign: 'start', display: 'flow' }}> <img src={i} alt="i" style={{ width: '12px' }} /> Passwords must be at least 6 characters.</p>
                                </div>
                                <div style={{ display: 'grid', marginTop: '15px' }}>
                                    <button style={{ borderRadius: '8px', backgroundColor: "lightcyan", height: '35px' }} onClick={handlesubmit} >Continue</button>
                                </div>
                                <div>&nbsp;</div>
                                <div style={{ textAlign: 'start', display: 'grid', boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.5)' }}>
                                    <span style={{ fontWeight: '700', fontSize: "14px", marginLeft: '5px' }}>Buying for work ?</span>
                                    <span>
                                        <Link to='/bsignup' style={{ fontSize: '13px', marginLeft: '5px' }}>Create a free business account</Link>
                                        <span style={{ fontSize: '13px', marginLeft: '5px' }}>or</span><Link to='/bsignin' style={{ fontSize: '13px', marginLeft: '5px' }}>Sign in</Link>
                                    </span>
                                </div>
                                <div>&nbsp;</div>
                                <div style={{ textAlign: 'start', position: 'relative', right: '6px' }}>
                                    <span style={{ fontWeight: '700', fontSize: "14px", marginLeft: '5px' }}>Already have an account?</span>
                                    <span>
                                        <Link to='/signin' style={{ fontSize: '13px', marginLeft: '5px' }}>Sign in<ArrowRightIcon style={{ position: "relative", top: '8px', right: '6px' }} /></Link>
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
            <div className="row align-items-start" style={{ marginTop: '16px' }}>
                <div className="col">
                </div>
                <div className="col">
                    <div style={{ border: '1px solid gray', position: 'relative', width: '6rem', top: '21px', right: '3rem', opacity: '0.22' }}></div>
                    <div style={{ border: '1px solid gray', position: 'relative', width: '6rem', top: '21px', left: '11.1rem', opacity: '0.22' }}></div>
                    <img src={door} alt="DoorPoint" style={{ width: '8rem' }} />
                </div>
                <div className="col">
                </div>
            </div>
        </div>
    </>
)
}

export default Login