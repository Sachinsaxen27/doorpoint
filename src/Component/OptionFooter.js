import React from 'react'
import logo2 from './images/D1.png'
import './Style.css'
function OptionFooter() {
  const handledrop = () => {
    const id1 = document.getElementById('language')
    id1.style.display = 'block';
  }
  const handleleave = () => {
    const id1 = document.getElementById('language')
    id1.style.display = 'none'
  }
  return (
    <>
      <div style={{ backgroundColor: "#232F3E", height: "40rem" }}>
        <div style={{ backgroundColor: '#37475A', display: 'grid', justifyContent: 'center' }}><div className='text-light my-2' style={{ fontSize: '13px' }}>Back to top</div></div>
        <div className="container text-light d-flex" style={{ fontSize: '14px', position: "relative", left: '25px' }}>
          <div className="col mx-3">
            <ul className='my-5 mx-5' style={{ listStyle: 'none' }}>
              <li className='footerlist' style={{ fontWeight: '400', fontSize: "16px" }}><strong>Get to Know Us</strong></li>
              <li className='footerlist'>About Us</li>
              <li className='footerlist'>Careers</li>
              <li className='footerlist'>Press Releases</li>
              <li className='footerlist'>DoorPoint Science</li>
            </ul>
          </div>
          <div className="col" style={{ right: '25px' }}>
            <ul className='my-5' style={{ listStyle: 'none' }}>
              <li className='footerlist' style={{ fontWeight: '400', fontSize: "16px" }}><strong>Connect with Us</strong></li>
              <li className='footerlist'>Facebook</li>
              <li className='footerlist'>Twitter</li>
              <li className='footerlist'>Instagram</li>
            </ul>
          </div>
          <div className="col" style={{ right: "45px" }}>
            <ul className='my-5 ' style={{ listStyle: 'none' }}>
              <li className='footerlist' style={{ fontWeight: '400', fontSize: "16px" }}><strong>Make Money with Us</strong></li>
              <li className='footerlist'>Sell on DoorPoint</li>
              <li className='footerlist'>Sell under DoorPoint Accelerator</li>
              <li className='footerlist'>Protect and Build Your Brand</li>
              <li className='footerlist'>DoorPoint Global Selling</li>
              <li className='footerlist'>Become an Affiliate</li>
              <li className='footerlist'>Fulfilment by DoorPoint</li>
              <li className='footerlist'>Advertise Your Products</li>
              <li className='footerlist'>DoorPoint Pay on Merchants</li>
            </ul>
          </div>
          <div className="col" style={{ right: "13px" }}>
            <ul className='my-5' style={{ listStyle: 'none' }}>
              <li className='footerlist' style={{ fontWeight: '400', fontSize: "16px" }} ><strong>Let Us Help You</strong></li>
              <li className='footerlist'>COVID-19 and DoorPoint</li>
              <li className='footerlist'>Your Account</li>
              <li className='footerlist'>Returns Centre</li>
              <li className='footerlist'>100% Purchase Protection</li>
              <li className='footerlist'>DoorPoint App Download</li>
              <li className='footerlist'>Help</li>
            </ul>
          </div>
        </div>
        <div style={{ backgroundColor: "#3a4553", height: '1px', left: "-4px", width: '100%', display: 'flex', justifyContent: 'center', position: "relative", borderRadius: "15px", top: "-4px" }}> </div>
        <div className=" container text-end">

          <div className="row">
            <div className="col text-end">
              <img src={logo2} alt="Doorpoint" style={{ height: '8rem', position: 'relative', left: '26rem' }} />
            </div>
            <div className="col">
              <div className="dropmenu" style={{ position: 'relative', top: '38px' }}>
                <button className='"btn btn-secondary dropdown-toggle' style={{ height: "39px", width: "130px", borderRadius: "6px", background: 'transparent', borderStyle: "groove " }} onMouseEnter={handledrop} onMouseLeave={handleleave}>Dropdown</button>
                <form id='form'>
                  <ul id='language' onMouseEnter={handledrop} onMouseLeave={handleleave}>
                    <li>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="language" id="english" value="English" />
                        <label className="form-check-label" htmlFor="english">
                          English-EN
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="language" id="hindi" value="Hindi" />
                        <label className="form-check-label" htmlFor="hindi">
                          हिंदी-HI
                        </label>
                      </div>
                    </li>
                    <li>

                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="language" id="tamil" value="Tamil" />
                        <label className="form-check-label" htmlFor="tamil">
                          தமிழ்-TA
                        </label>
                      </div>
                    </li>
                    <li>

                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="language" id="telugu" value="Telugu" />
                        <label className="form-check-label" htmlFor="telugu">
                          తెలుగు-TE
                        </label>
                      </div>
                    </li>
                    <li>

                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="language" id="Kannada" value="Kannada" />
                        <label className="form-check-label" htmlFor="Kannada">
                          ಕನ್ನಡ-KA
                        </label>
                      </div>
                    </li>
                  </ul>
                </form>

              </div>
            </div>
          </div>
        </div><br />
        <div className="container" id='container' style={{ display: 'block' }}>
          <a href="/Australia">Australia</a>
          <a href="/Brazil">Brazil</a>
          <a href="/Canada">Canada</a>
          <a href="/China">China</a>
          <a href="/France">France</a>
          <a href="/Germany">Germany</a>
          <a href="/Italy">Italy</a>
          <a href="/Japan">Japan</a>
          <a href="/Mexico">Mexico</a>
          <a href="/Netherlands">Netherlands</a>
          <a href="/Poland">Poland</a>
          <a href="/Singapore">Singapore</a>
          <a href="/Spain">Spain</a>
          <a href="/Turkey">Turkey</a>
          <a href="/United Arab Emirates">United Arab Emirates</a>
          <br></br>
          <a href="/United Kingdom">United Kingdom</a>
          <a href="/United States">United States</a>
        </div>
      </div>
      <div style={{ backgroundColor: '#131A22', height: "15rem" }}>
        <table className='listtable' style={{ display: 'grid', justifyContent: 'center' }}>
          <thead style={{ marginTop: '23px', marginLeft: '-4px' }}>
            <tr>
              <td className='listfooter' style={{ position: "relative", right: '1.8rem' }}><a href="/">AbeBooks</a><br /><span style={{ display: "grid", width: '5rem' }}>Books,art <br /> & Collectibles</span></td>
              <td style={{ width: '1rem' }}></td>
              <td className='listfooter' style={{ position: 'relative', right: "45px" }}><a href="/">DoorPoint Web Serivices</a> <br /><span>Scalable Cloud <br /> Computing Services</span></td>
              <td style={{ width: '1rem' }}></td>
              <td className='listfooter' ><a href="/">Audible</a><br /><span style={{ display: "grid", width: '5rem' }}>Download Audio Books</span></td>
              <td style={{ width: '1rem' }}></td>
              <td className='listfooter' style={{ position: 'relative', left: '10px' }}><a href="/">DPReview</a><br /><span style={{ display: "grid", width: '4rem' }}>Digital Photography</span></td>
              <td style={{ width: '1rem' }}></td>
              <td className='listfooter' style={{ position: "relative", left: '7.2rem' }}><a href="/">IMDb</a><br /><span style={{ display: "grid", width: '5rem' }}>Movies,TV <br /> & Celebrities</span></td>
            </tr>
            <tr style={{position:'relative',top:'15px'}}>
              <td className='listfooter' style={{ position: "relative", right: '1.8rem' }}><a href="/">Shopbop</a><br /><span style={{ display: "grid", width: '5rem' }}>Designer Fashion Brands</span></td>
              <td style={{ width: '1rem' }}></td>
              <td className='listfooter' style={{ position: 'relative', right: "45px" }}><a href="/">DoorPoint Business</a> <br /><span style={{ display: "grid", width: '5rem' }}>Everything For Your Business</span></td>
              <td style={{ width: '1rem' }}></td>
              <td className='listfooter'><a href="/">	Prime Now</a><br /><span style={{ display: "grid", width: '7rem' }}>2-Hour Delivery <br /> on Everyday Items</span></td>
              <td style={{ width: '1rem' }}></td>
              <td className='listfooter' style={{ position: 'relative', left: '10px' }}><a href="/">DoorPoint Music</a><br /><span style={{ display: "grid", width: '11rem' }}>100 million songs, ad-free <br /> Over 15 million podcast episodes</span></td>
            </tr>
          </thead>
        </table>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div className="container text-center" >

          <a href="/" style={{ color: '#DDD', fontSize: '12px', margin: '5px' }}>Conditions of Use & Sale  </a>
          <a href="/" style={{ color: '#DDD', fontSize: '12px', margin: '5px' }}>Privacy Notice  </a>
          <a href="/" style={{ color: '#DDD', fontSize: '12px', margin: '5px' }}>Interest-Based Ads</a>
          <br />
          <p style={{ color: '#DDD', fontSize: '12px' }}>© 2023, DoorPoint.com, Inc. or its affiliates</p>
        </div>
      </div>
    </>
  )
}

export default OptionFooter