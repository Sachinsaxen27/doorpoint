import React, { useState } from 'react'
import '../../Slider.css'
import icon1 from '../../images/icon13.png'
import icon2 from '../../images/icon14.png'
import icon3 from '../../images/icon15.png'
import icon4 from '../../images/icon16.png'
import icon5 from '../../images/icon17.png'
import icon6 from '../../images/icon18.png'
import icon7 from '../../images/icon19.jpg'
import icon8 from '../../images/icon20.jpg'
import icon9 from '../../images/icon21.jpg'
import icon10 from '../../images/icon22.png'
import icon11 from '../../images/icon23.png'
import icon12 from '../../images/icon24.png'
import icon13 from '../../images/icon25.png'
import icon14 from '../../images/icon26.png'
import icon15 from '../../images/icon27.png'
import icon16 from '../../images/icon28.png'
import icon17 from '../../images/icon29.png'
import icon18 from '../../images/icon30.png'
import icon19 from '../../images/icon31.png'
import icon20 from '../../images/icon32.png'
import icon21 from '../../images/icon33.png'
import { Link } from 'react-router-dom'
function Groomingitem() {
    const [option, setMyoption] = useState("Shoulder Bag")
    const handleclick = (value) => {
        setMyoption(value)
    }
    return (
        <>
            <div className="container women_groom">
                <h6 style={{ marginLeft: "6px" }}>Shop By Category:</h6>
                <div className='women_bag1'>
                    <div onClick={() => handleclick("Shoulder Bag")} className='women_sec mx-1'>
                        <Link to='/skin' style={{textDecoration:"none",color:'black',textAlign:'-webkit-center'}}>
                        <div>
                            <img src={icon1} alt="" className='mx-1 nav_imag' />
                        </div>
                        <span style={{marginTop:'12px'}}>Skin Care</span>
                        </Link>
                    </div>
                    <div onClick={() => handleclick("Hand-Held")} className='women_sec mx-1'>
                        <div>
                            <img src={icon2} alt="" className='mx-1 nav_imag' />
                        </div>
                        <span>Haircare</span>
                    </div>
                    <div onClick={() => handleclick("Totes")} className='women_sec mx-1'>
                        <div>
                            <img src={icon3} alt="" className='mx-1 nav_imag' />
                        </div>
                        <span>Makeup</span>
                    </div>
                    <div onClick={() => handleclick("Sling Bag")} className='women_sec mx-1'>
                        <div>
                            <img src={icon4} alt="" className='mx-1 nav_imag' />
                        </div>
                        <span>Deos & Fragrances</span>
                    </div>
                    <div onClick={() => handleclick("Wallet")} className='women_sec mx-1'>
                        <div>
                            <img src={icon5} alt="" className='mx-1 nav_imag' />
                        </div>
                        <span>Bath & Shower</span>
                    </div>
                    <div onClick={() => handleclick("BackPack")} className='women_sec mx-1'>
                        <div>
                            <img src={icon6} alt="" className='mx-1 nav_imag' />
                        </div>
                        <span>Groomin Devices</span>
                    </div>
                </div>
            </div>
            <div>
                <img src={icon7} alt="icon" style={{ width: '100%' }} />
                <img src={icon8} alt="icon18" style={{ width: "100%" }} />
                <img src={icon9} alt="icon18" style={{ width: "100%" }} />
            </div>
            <div className="container women_groom2" style={{width:"68rem"}}>
                <h6 className='my-1' style={{ marginLeft: "6px", textAlign:'center'}}>Shop By Brand:</h6>
                <div className='women_groom1'>
                    <div className="row brand_name">
                        <div onClick={() => handleclick("Shoulder Bag")} className='mx-1'>
                            <div>
                                <img src={icon10} alt="" className='mx-1 my-1 brand_img' />
                            </div>
                        </div>
                        <div onClick={() => handleclick("Hand-Held")} className='mx-1'>
                            <div>
                                <img src={icon11} alt="" className='mx-1 my-1 brand_img' />
                            </div>
                        </div>
                        <div onClick={() => handleclick("Totes")} className='mx-1'>
                            <div>
                                <img src={icon12} alt="" className='mx-1 my-1 brand_img' />
                            </div>
                        </div>
                        <div onClick={() => handleclick("Sling Bag")} className='mx-1'>
                            <div>
                                <img src={icon13} alt="" className='mx-1 my-1 brand_img' />
                            </div>
                        </div>
                        <div onClick={() => handleclick("Wallet")} className='mx-1'>
                            <div>
                                <img src={icon14} alt="" className='mx-1 my-1 brand_img' />
                            </div>
                        </div>
                        <div onClick={() => handleclick("BackPack")} className='mx-1'>
                            <div>
                                <img src={icon15} alt="" className='mx-1 my-1 brand_img' />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row brand_name">
                        <div onClick={() => handleclick("BackPack")} className='mx-1'>
                            <div>
                                <img src={icon16} alt="" className='mx-1 my-1 brand_img' />
                            </div>
                        </div>
                        <div onClick={() => handleclick("BackPack")} className='mx-1'>
                            <div>
                                <img src={icon17} alt="" className='mx-1 my-1 brand_img' />
                            </div>
                        </div>
                        <div onClick={() => handleclick("BackPack")} className='mx-1'>
                            <div>
                                <img src={icon18} alt="" className='mx-1 my-1 brand_img' />
                            </div>
                        </div>
                        <div onClick={() => handleclick("BackPack")} className='mx-1'>
                            <div>
                                <img src={icon19} alt="" className='mx-1 my-1 brand_img' />
                            </div>
                        </div>
                        <div onClick={() => handleclick("BackPack")} className='mx-1'>
                            <div>
                                <img src={icon20} alt="" className='mx-1 my-1 brand_img' />
                            </div>
                        </div>
                        <div onClick={() => handleclick("BackPack")} className='mx-1'>
                            <div>
                                <img src={icon21} alt="" className='mx-1 my-1 brand_img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Groomingitem