import React from 'react'
// import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { Divider, Rating } from '@mui/material';
import tick from '../../images/mark.png'
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function ProductFilter() {
    const handlefliter = () => {
        let filte = document.getElementById('filte_r')
        if (filte.style.display === 'none') {
            filte.style.display = 'block'
        }
    }
    const handlefilterclose = () => {
        let filte = document.getElementById('filte_r')
        if (filte.style.display === 'block') {
            filte.style.display = 'none'
        }
    }
    return (
        <>
            <div  style={{ position: 'relative', top: '65px' ,cursor:'pointer'}} onClick={handlefliter}>
                {/* FILTER CODE STARTING POINT */}
                <FilterAltIcon onClick={handlefliter}/>Fliter
            </div>
            <div id='filte_r' style={{ width: '17rem', height: '38rem', backgroundColor: 'white', border: '1px solid #ccc', position: 'fixed', zIndex: '10000', top: "0px", overflow: "scroll", display: 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5 className='text-center' style={{ fontSize: '31px' }}>Filter</h5><span style={{ position: 'relative', left: '5rem', cursor: 'pointer' }} onClick={handlefilterclose}>
                        <CancelIcon />
                    </span>
                </div>
                <Divider />
                &nbsp;
                <ul style={{ listStyle: 'none' }}>
                    <h6 className='mx-2'>Mobiles & Accessories</h6>
                    <li className='mx-4'>Mobile Accessories</li>
                    <li className='mx-4'>Mobile Broadband Devices</li>
                    <li className='mx-4'>SIM Cards</li>
                    <li className='mx-4'>Smartphones & Basic Mobiles</li>
                    <li className='mx-4'>Smartwatches</li>
                </ul>
                <Divider />
                &nbsp;
                <h6 className='mx-2'>Made for DoorPoint Brands</h6>
                <div className='mx-4'>
                    <input type="checkbox" name="brands " id="brands" style={{ width: '1rem', height: '1rem' }} /> <span style={{ position: 'relative', left: "1px", top: '-2px' }}>Made for DoorPoint</span>
                </div>
                <Divider />
                &nbsp;
                <h6 className='mx-2'>DoorPoint Prime</h6>
                <div className='mx-4'>
                    <input type="checkbox" name="prime" id="prime" style={{ width: '1rem', height: '1rem' }} /> <span style={{ position: 'relative', left: "1px", top: '-2px' }}> <img src={tick} alt="tic" style={{ width: '22px', height: "25px", position: 'relative', top: "-3px" }} /> Prime</span>
                </div>
                <Divider />
                &nbsp;
                <h6 className='mx-2'>Pay on Delivery</h6>
                <div className='mx-4'>
                    <input type="checkbox" name="check" id="check" style={{ width: '1rem', height: '1rem' }} /> <span style={{ position: 'relative', left: "1px", top: '-2px' }}>Eligible for Pay On Delivery</span>
                </div>
                <Divider />
                &nbsp;
                <h6 className='mx-2'>Brands</h6>
                <div className='mx-4'>
                    <ul style={{ listStyle: 'none' }}>
                        <li><input type="checkbox" name="Redmi" id="Redmi" style={{ width: '1rem', height: '1rem' }} /> <span style={{ position: 'relative', left: "1px", top: '-2px' }}>Redmi</span></li>
                        <li><input type="checkbox" name="OnePlus" id="OnePlus" style={{ width: '1rem', height: '1rem' }} /> <span style={{ position: 'relative', left: "1px", top: '-2px' }}>OnePlus</span></li>
                        <li><input type="checkbox" name="Realme" id="Realme" style={{ width: '1rem', height: '1rem' }} /> <span style={{ position: 'relative', left: "1px", top: '-2px' }}>Realme</span></li>
                        <li>
                            <input type="checkbox" name="IQ00" id="IQ00" style={{ width: '1rem', height: '1rem' }} /> <span style={{ position: 'relative', left: "1px", top: '-2px' }}>IQ00</span></li>
                        <li>
                            <input type="checkbox" name="Ambrane" id="Ambrane" style={{ width: '1rem', height: '1rem' }} /> <span style={{ position: 'relative', left: "1px", top: '-2px' }}>Ambrane</span></li>
                        <li>
                            <input type="checkbox" name="Apple" id="Apple" style={{ width: '1rem', height: '1rem' }} /> <span style={{ position: 'relative', left: "1px", top: '-2px' }}>Apple</span></li>
                        <li>
                            <input type="checkbox" name="Samsung" id="Samsung" style={{ width: '1rem', height: '1rem' }} /> <span style={{ position: 'relative', left: "1px", top: '-2px' }}>Samsung</span>
                        </li>

                    </ul>
                </div>
                <Divider />
                &nbsp;
                <h6 className='mx-2'>Brands</h6>
                <div className='mx-4'>
                    <ul style={{ listStyle: 'none' }}>
                        <li>
                            <Link to='/' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '12px', color: 'black' }}>
                                <Rating name='rating' value={4} readOnly /> <span>& Up</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '12px', color: 'black' }}>
                                <Rating name='rating' value={3} readOnly /> <span>& Up</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '12px', color: 'black' }}>
                                <Rating name='rating' value={2} readOnly /> <span>& Up</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '12px', color: 'black' }}>
                                <Rating name='rating' value={1} readOnly /> <span>& Up</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Divider />
                &nbsp;
                <h6 className='mx-2'>Price</h6>
                <div className='mx-4'>
                    <ul style={{ listStyle: 'none' }}>
                        <li>
                            <Link to='/' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '16px', color: 'black', marginBottom: '2px' }}>
                                <span>Under ₹1000</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '16px', color: 'black', marginBottom: '2px' }}>
                                <span>₹1,000-₹5,000</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '16px', color: 'black', marginBottom: '2px' }}>
                                <span>₹5,000-₹10,000</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '16px', color: 'black', marginBottom: '2px' }}>
                                <span>₹10,000-₹20,000</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '16px', color: 'black', marginBottom: '2px' }}>
                                <span>Over ₹20,000</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Divider />
                &nbsp;
                <h6 className='mx-2'>Discount</h6>
                <div className='mx-4'>
                    <ul style={{ listStyle: 'none' }}>
                        <li>
                            <Link to='/' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '16px', color: 'black', marginBottom: '2px' }}>
                                <span>10% Off or more</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '16px', color: 'black', marginBottom: '2px' }}>
                                <span>25% Off or more</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '16px', color: 'black', marginBottom: '2px' }}>
                                <span>35% Off or more</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '16px', color: 'black', marginBottom: '2px' }}>
                                <span>50% Off or more</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '16px', color: 'black', marginBottom: '2px' }}>
                                <span>60% Off or more</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '16px', color: 'black', marginBottom: '2px' }}>
                                <span>70% Off or more</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* FILTER CODE END */}

            </div>
        </>
    )
}

export default ProductFilter