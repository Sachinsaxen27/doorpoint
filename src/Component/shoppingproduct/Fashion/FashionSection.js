    import React, { useEffect, useState } from 'react'
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
// import Carousel from 'react-multi-carousel'
import '../../Slider.css'
import Notfound from '../Notfound'
import Womenitem from './Womenitem'
import { Link } from 'react-router-dom'
function FashionSection() {
    const [fashion, setMyfashion] = useState([])
    const[option,setMyOption]=useState('')
    const getcameralist = async () => {
        const response = await fetch(`http://localhost:5000/api/fashionadd/allitemlist`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        let array = Object.values(json)
        setMyfashion(array[0])
    }
    useEffect(() => {
        getcameralist()
        localStorage.removeItem('value')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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
                        <div className='mx-4 my-2 section'>
                            <Link to='/women' style={{textDecoration:"none",color:"black"}} onClick={()=>setMyOption('Saree')}>
                            <div className='sectionp-1'>
                                <img src={women} alt="jeans" style={{ width: '3rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p >Clothing</p>
                            </Link>               
                        </div>
                        <div className='mx-4 my-2 section'>
                            <Link to='/handbag' style={{textDecoration:"none",color:"black"}}>
                            <div className='sectionp-1'>
                                <img src={handbag} alt="jeans" style={{ width: '4rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p >Handbags</p>
                            </Link>
                        </div>
                    </div>
                    <div className="row justify-content-evenly" style={{ margin: '0 auto', marginLeft: '7px' }}>
                        <div className='mx-4 my-2 section'>
                            <Link to='/grooming' style={{textDecoration:"none",color:"black"}}>
                            <div className='sectionp-1'>
                                <img src={grooming} alt="jeans" style={{ width: '4rem', height: '5rem', borderRadius: "15px" }} />
                            </div>
                            <p >Groooming</p>
                            </Link>
                        </div>
                        <div className='mx-4 my-2 section'>
                            <div className='sectionp-1'>
                                <img src={jewellery} alt="jeans" style={{ width: '5rem', height: '4 rem', borderRadius: "15px" }} />
                            </div>
                            <p>Jewellery</p>
                        </div>
                    </div>
                </div>
                <div className=' mx-2  text-center' style={{ width: '19rem', backgroundColor: "#0000000f", borderRadius: '17px' }}>
                    <h5>Men's Store</h5>
                    <div className="row justify-content-evenly" style={{ margin: '0 auto', marginLeft: '7px' }}>
                        <div className='mx-4 my-2 section'>
                            <div className='sectionp-1'>
                                <img src={men} alt="jeans" style={{ width: '4rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p >Clothing</p>
                        </div>
                        <div className='mx-4 my-2 section'>
                            <div className='sectionp-1'>
                                <img src={wallet} alt="jeans" style={{ width: '4rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p >Wallet</p>
                        </div>
                    </div>
                    <div className="row justify-content-evenly" style={{ margin: '0 auto', marginLeft: '7px' }}>

                        <div className='mx-4 my-2 section'>
                            <div className='sectionp-1'>
                                <img src={mengrooming} alt="jeans" style={{ width: '4rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p >Groooming</p>
                        </div>
                        <div className='mx-4 my-2 section'>
                            <div className='sectionp-1'>
                                <img src={menwwatch} alt="jeans" style={{ width: '3rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p>Watch</p>
                        </div>
                    </div>
                </div>
                <div className=' mx-2  text-center' style={{ width: '19rem', backgroundColor: "#0000000f", borderRadius: '17px' }}>
                    <h5>Kid's Store</h5>
                    <div className="row justify-content-evenly" style={{ margin: '0 auto', marginLeft: '7px' }}>
                        <div className='mx-4 my-2 section'>
                            <div className='sectionp-1'>
                                <img src={kids} alt="jeans" style={{ width: '4rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p >Clothing</p>
                        </div>
                        <div className='mx-4 my-2 section'>
                            <div className='sectionp-1'>
                                <img src={belt} alt="jeans" style={{ width: '4rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p >Accessories</p>
                        </div>
                    </div>
                    <div className="row justify-content-evenly" style={{ margin: '0 auto', marginLeft: '7px' }}>

                        <div className='mx-4 my-2 section'>
                            <div className='sectionp-1'>
                                <img src={toys} alt="jeans" style={{ width: '4rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p >Toys</p>
                        </div>
                        <div className='mx-4 my-2 section'>
                            <div className='sectionp-1'>
                                <img src={access} alt="jeans" style={{ width: '4rem', height: '4rem', borderRadius: "15px" }} />
                            </div>
                            <p>Health Care</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-4' style={{ boxShadow: "0px 0px 8px 10px" }}>
                <div id="carouselExampleFade" className="carousel slide carousel-fade w-100 h-100">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://m.media-amazon.com/images/G/31/img21/MA2023/BOTW23/DEC27/BOTW_MFA_27_3000x800._SX3000_QL85_FMpng_.png" className="d-block" alt="image0" style={{ height: '250px', width: '100%' }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://rb.gy/8ozmcs" className="d-block" alt="image1" style={{ height: '250px', width: '100%' }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://m.media-amazon.com/images/G/31/img21/MA2023/AFrevamp_winterflip/Menhero/JJUnder999_3000x800._SX3000_QL85_FMpng_.png" className="d-block" alt='image2' style={{ height: '250px', width: '100%' }} /></div>
                    </div>
                    <button className="carousel-control-prev button-carousel" type="button" data-target="#carouselExampleFade" data-slide="prev">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className="carousel-control-next button-carousel" type="button" data-target="#carouselExampleFade" data-slide="next">
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
            <div className='my-4' style={{ boxShadow: "0px 0px 8px 10px" }}>
                <div id="carouselExampleIndicators" className="carousel slide w-100 h-100">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://m.media-amazon.com/images/G/31/img23/WA/december/p0-hero/image-1701698220054_3000x800._SX3000_QL85_FMpng_.png" className="d-block w-100" alt="image1" style={{ height: '250px', width: '100%' }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://m.media-amazon.com/images/G/31/img23/WA/december/p0-hero/imae-1701698219960_3000x800._SX3000_QL85_FMpng_.png" className="d-block w-100" alt="image2" style={{ height: '250px', width: '100%' }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev button-carousel" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className="carousel-control-next button-carousel" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
            <div className="container">
                <div className="row" style={{margin:'0 auto'}}>
                    {fashion.length > 0 && fashion.map((element, index) => {
                        if (element && index<15) {
                            return <Womenitem element={element} key={index}/>
                        }
                        return null
                    })}
                </div>
            </div>
        </>
    )
}

export default FashionSection