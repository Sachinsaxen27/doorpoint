import React from 'react'
import door from '../images/doorpoints.png'
import { Link } from 'react-router-dom'
function Bsignin() {
  return (
    <>
       <div className="container text-center" style={{ marginTop: '90px', height: '29rem', width: '48rem' }}>
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
              <div className="card" style={{ width: "22rem",backgroundColor:"azure" }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: 'start', fontSize: '28px' }}>Sign in to get started</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary" style={{ textAlign: 'start', marginTop: '16px' }}>Enter mobile phone number or email</h6>
                  <div style={{ display: 'grid', marginTop: "5px", marginBottom: '10px' }}>
                    <input type="text" name="email" id="email" />
                  </div>

                  <h6 className="card-subtitle mb-2 text-body-secondary" style={{ textAlign: 'start' }}>Password</h6>
                  <div style={{ display: 'grid' }}>
                    <input type="password" name="password" id="password" />
                  </div>
                  <div style={{ display: 'grid', marginTop: '15px' }}>
                    <button style={{ borderRadius: '8px', backgroundColor: "lightcyan", height: '35px' }}>Continue</button>
                  </div>
                  <div>&nbsp;</div>
                  <div style={{ fontSize: "12px", textAlign: 'start' }}>
                    <p>By continuing, you agree to DoorPoint's <a href="/"> Conditions of Use</a> and <a href="/"> Privacy Notice.</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
            </div>
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col">
          </div>
          <div className="col">
            <div style={{border:'1px solid gray',position:'relative',width:'6rem',top:'21px',right:'3rem',opacity:'0.22'}}></div>
            <div style={{border:'1px solid gray',position:'relative',width:'6rem',top:'21px',left:'11.1rem',opacity:'0.22'}}></div>
            <img src={door} alt="DoorPoint" style={{ width: '8rem' }} />
          </div>
          <div className="col">
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col">
          </div>
          <div className="col" style={{display:'grid',marginTop:'10px'}}>
            <Link to='/bsignup' style={{width:'16rem',borderRadius:'5px',textDecoration:'none',backgroundColor:'azure',border:'1px solid black'}}>Create your DoorPoint account</Link>
          </div>
          <div className="col">
          </div>
        </div>
      </div>
    </>
  )
}

export default Bsignin