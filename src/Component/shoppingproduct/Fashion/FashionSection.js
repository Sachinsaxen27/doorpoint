import React from 'react'
import women from '../../images/women.png'
import handbag from '../../images/bag.png'
import grooming from '../../images/groom.png'
import jewellery from '../../images/jewellery.png'
import men from '../../images/men.png'
import wallet from '../../images/wallet.png'
import mengrooming from '../../images/mengrooming.png'
import menwwatch from '../../images/watch.png'
import kids from '../../images/baby.png'
import toys from '../../images/toys.png'
import belt from '../../images/belt.png'
import access from '../../images/diaper.png'
import Divider from '@mui/material/Divider';
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
function FashionSection() {
    return (
        <>
            &nbsp;
            <div className="text-center" style={{ margin: '0 auto' }}>
                <h2 className='my-5'><Divider>Fashion Store</Divider></h2>
            </div>
            <div className="container d-flex justify-content-center">
                <div className=' mx-2  text-center' style={{ width: '19rem', backgroundColor: "#0000000f", borderRadius: '17px' }}>
                    <h5>Women's Store</h5>
                    <div className="row justify-content-evenly" style={{ margin: '0 auto', marginLeft: '7px' }}>
                        <div className='mx-4 my-2'>
                            <div style={{ backgroundColor: '#ff00004a', height: '6rem', width: '6rem', display: 'flex', justifyContent: "center", alignItems: 'center', borderRadius: '50px' }}>
                                <img src={women} alt="jeans" style={{ width: '3rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p >Clothing</p>
                        </div>
                        <div className='mx-4 my-2'>
                            <div style={{ backgroundColor: '#ff00004a', height: '6rem', width: '6rem', display: 'flex', justifyContent: "center", alignItems: 'center', borderRadius: '50px' }}>
                                <img src={handbag} alt="jeans" style={{ width: '4rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p >Handbags</p>
                        </div>
                    </div>
                    <div className="row justify-content-evenly" style={{ margin: '0 auto', marginLeft: '7px' }}>

                        <div className='mx-4 my-2'>
                            <div style={{ backgroundColor: '#ff00004a', height: '6rem', width: '6rem', display: 'flex', justifyContent: "center", alignItems: 'center', borderRadius: '50px' }}>
                                <img src={grooming} alt="jeans" style={{ width: '4rem', height: '5rem', borderRadius: "15px" }} />
                            </div>
                            <p >Groooming</p>
                        </div>
                        <div className='mx-4 my-2'>
                            <div style={{ backgroundColor: '#ff00004a', height: '6rem', width: '6rem', display: 'flex', justifyContent: "center", alignItems: 'center', borderRadius: '50px' }}>
                                <img src={jewellery} alt="jeans" style={{ width: '5rem', height: '4 rem', borderRadius: "15px" }} />
                            </div>
                            <p>Jewellery</p>
                        </div>
                    </div>
                </div>
                <div className=' mx-2  text-center' style={{ width: '19rem', backgroundColor: "#0000000f", borderRadius: '17px' }}>
                    <h5>Men's Store</h5>
                    <div className="row justify-content-evenly" style={{ margin: '0 auto', marginLeft: '7px' }}>
                        <div className='mx-4 my-2'>
                            <div style={{ backgroundColor: '#ff00004a', height: '6rem', width: '6rem', display: 'flex', justifyContent: "center", alignItems: 'center', borderRadius: '50px' }}>
                                <img src={men} alt="jeans" style={{ width: '4rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p >Clothing</p>
                        </div>
                        <div className='mx-4 my-2'>
                            <div style={{ backgroundColor: '#ff00004a', height: '6rem', width: '6rem', display: 'flex', justifyContent: "center", alignItems: 'center', borderRadius: '50px' }}>
                                <img src={wallet} alt="jeans" style={{ width: '4rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p >Wallet</p>
                        </div>
                    </div>
                    <div className="row justify-content-evenly" style={{ margin: '0 auto', marginLeft: '7px' }}>

                        <div className='mx-4 my-2'>
                            <div style={{ backgroundColor: '#ff00004a', height: '6rem', width: '6rem', display: 'flex', justifyContent: "center", alignItems: 'center', borderRadius: '50px' }}>
                                <img src={mengrooming} alt="jeans" style={{ width: '4rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p >Groooming</p>
                        </div>
                        <div className='mx-4 my-2'>
                            <div style={{ backgroundColor: '#ff00004a', height: '6rem', width: '6rem', display: 'flex', justifyContent: "center", alignItems: 'center', borderRadius: '50px' }}>
                                <img src={menwwatch} alt="jeans" style={{ width: '3rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p>Watch</p>
                        </div>
                    </div>
                </div>
                <div className=' mx-2  text-center' style={{ width: '19rem', backgroundColor: "#0000000f", borderRadius: '17px' }}>
                    <h5>Kid's Store</h5>
                    <div className="row justify-content-evenly" style={{ margin: '0 auto', marginLeft: '7px' }}>
                        <div className='mx-4 my-2'>
                            <div style={{ backgroundColor: '#ff00004a', height: '6rem', width: '6rem', display: 'flex', justifyContent: "center", alignItems: 'center', borderRadius: '50px' }}>
                                <img src={kids} alt="jeans" style={{ width: '4rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p >Clothing</p>
                        </div>
                        <div className='mx-4 my-2'>
                            <div style={{ backgroundColor: '#ff00004a', height: '6rem', width: '6rem', display: 'flex', justifyContent: "center", alignItems: 'center', borderRadius: '50px' }}>
                                <img src={belt} alt="jeans" style={{ width: '4rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p >Accessories</p>
                        </div>
                    </div>
                    <div className="row justify-content-evenly" style={{ margin: '0 auto', marginLeft: '7px' }}>

                        <div className='mx-4 my-2'>
                            <div style={{ backgroundColor: '#ff00004a', height: '6rem', width: '6rem', display: 'flex', justifyContent: "center", alignItems: 'center', borderRadius: '50px' }}>
                                <img src={toys} alt="jeans" style={{ width: '4rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p >Toys</p>
                        </div>
                        <div className='mx-4 my-2'>
                            <div style={{ backgroundColor: '#ff00004a', height: '6rem', width: '6rem', display: 'flex', justifyContent: "center", alignItems: 'center', borderRadius: '50px' }}>
                                <img src={access} alt="jeans" style={{ width: '4rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p>Health Care</p>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                infinite={true}
                partialVisible={false}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            >
                {slider1.map((imageUrl, index) => {
                    return (
                        <div className="card text-center border-0 " key={index} style={{ width: "17rem", height: '23.4rem', top: '-35px'}}>
                            <div className="slider" >
                                <img src={imageUrl.url} alt="movie" style={{ width: imageUrl.width, hieght: imageUrl.height, left: '-4px' }} />
                            </div>
                            <div className="card-body" style={{ top: imageUrl.top, position: "relative", right: "-2px" }}>
                                <p className="card-title" id='card-title'>{imageUrl.heading1}</p>
                                <p style={{ fontSize: '16px', color: "#388e3c" }}>{imageUrl.heading2}</p>
                                <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", opacity: ".6", fontSize: '14px', lineHeight: '1.4' }}>{imageUrl.heading3}</p>
                            </div>
                        </div>
                    );
                })}
            </Carousel>

        </>
    )
}

export default FashionSection