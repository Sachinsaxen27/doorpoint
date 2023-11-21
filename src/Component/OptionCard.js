import React from 'react'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import './Style.css'
import { Link } from 'react-router-dom';

export default function OptionCard() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const slider1 = [
        {
            url:"https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
            heading1: 'Top Mirrorless Camera',
            heading2: 'Shop Now!',
            heading3: 'Canon,Sony,Fujifilm',
            top:'-9px'
        },
        {
            url: "https://rukminim2.flixcart.com/image/200/200/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=70",
            heading1: 'Premium PowerBanks',
            heading2: 'Shop Now!',
            heading3: 'Mi,realme & more',
            top:'-9px',
            left:'-14px'
        },
        {
            url:"https://rukminim2.flixcart.com/flap/200/200/image/20c224cd52ae7a87.jpg?q=70",
            heading1: 'Best of Trimmers',
            heading2: 'Shop Now!',
            heading3: 'Mi,realme & Philips',
            top:'-9px'
        },
        {
            url:"https://rukminim2.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
            heading1: 'Printers',
            heading2: 'From ₹3999',
            heading3: 'HP',
            top:'-9px',
            right:'12px',
            left:'-18px'
        },

        {
            url:"https://m.media-amazon.com/images/I/41QoAqu6g4L._AC_SY200_.jpg",
            heading1: 'Latest Smartphones',
            heading2: 'From ₹10,999',
            heading3: 'Buy Now',
            top:'-9px',
            left:'-18px'
        }
    ];
    const slider2 = [
        {
            url:"https://rukminim2.flixcart.com/image/200/200/jp2xoy80/watch/c/j/8/38042pp04-fastrack-original-imafbet3f2y54u6s.jpeg?q=70",
            heading1: 'Fastrack,Timex,Sonata',
            heading2: 'From ₹499',
            heading3: 'Rush To Grab The Best Offer!',
            width:'8rem',
            hieght:'10rem'
        },
        {
            url: "https://rukminim2.flixcart.com/fk-p-flap/200/200/image/324eee4e5f645574.jpg?q=70",
            heading1: 'Sparx,Bata & more',
            heading2: 'From ₹149',
            heading3: 'Trending Now!',
            width:'12rem',
            height:'14rem'
        },
        {
            url:"https://rukminim2.flixcart.com/fk-p-flap/200/200/image/fa87460a6b15fec9.jpg?q=70",
            heading1: "Kids' Ethnic Set",
            heading2: 'Under ₹299',
            heading3: 'Dhamaka Deals!',
            width:'12rem',
            height:'14rem'
        },
        {
            url:"https://rukminim2.flixcart.com/image/200/200/kqjtd3k0/track-pant/4/w/k/32-a1212-0000-levi-s-original-imag4j4f8pjygzcm.jpeg?q=70",
            heading1: 'Puma,ADIDAS,Reebok...',
            heading2: 'UPTO 80% Off',
            heading3: 'Trackpants,Shorts',
            width:'12rem',
            height:'14rem'
        },
        {
            url:"https://rukminim2.flixcart.com/image/200/200/l4ei1e80/dress/s/r/y/m-16771386-dressberry-original-imagfbaeya8ceerp.jpeg?q=70",
            heading1: 'Dressberry,Mast & Harbour...',
            heading2: '50-80% Off',
            heading3: "Women's Dresses & more",
            width:'12rem',
            height:'14rem'
        }
    ];
    return (
        <>
                       
            <div className="d-flex mt-2 mb-2">
            <div className="card overflow-x-scroll" style={{ width: "64rem", height: '23.4rem',  margin:"0 auto"}}>
                    <div className="card-body d-flex">
                    <div className="card text-center border-0" style={{ width: "14rem", height: '23rem', top: '-17px',right:'19px', backgroundImage: "URL('https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90')", backgroundPosition: "0px bottom", backgroundRepeat: "no-repeat" }}>
                            <div className="card-body">
                                <h5 className="card-title" id='card1' style={{ fontSize: "30px", lineHeight: "1.38", fontWeight: "400" }}>Best of Electronic</h5>
                                <Link to='/electronic' className="btn btn-primary" style={{position:'relative',left:'21px'}}>View ALL</Link>
                            </div>
                        </div>

                    <div style={{width:'50rem',position:'relative',right:'19px',top:'-2px' }}>
                            <Carousel
                                responsive={responsive}
                                autoPlay={true}
                                swipeable={true}
                                draggable={true}
                                infinite={true}
                                partialVisible={false}
                                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                            >
                                {slider1.map((imageUrl, index,key) => {
                                    return (
                                        <div className="card text-center border-0 " key={key} style={{ width: "15rem", height: '23.4rem', top: '-21px',cursor:'pointer' }}>
                                            <div className="slider" key={index}>
                                                <img src={imageUrl.url} alt="movie"className='card-img-top' style={{width:'8rem',hieght:'10rem',left:imageUrl.left}} />
                                            </div>
                                            <div className="card-body" style={{ top:imageUrl.top, position: "relative", right:imageUrl.right }}>
                                                <p className="card-title" id='card-title'>{imageUrl.heading1}</p>
                                                <p style={{ fontSize: '16px', color: "#388e3c" }}>{imageUrl.heading2}</p>
                                                <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", opacity: ".6", fontSize: '14px', lineHeight: '1.4' }}>{imageUrl.heading3}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div style={{ position: 'relative', marginleft: '4px' }}>
                    <div className="card" style={{ width: "14.56rem", height: '23.4rem' }}>
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/464/708/image/d133935e34408b02.jpg?q=70" alt="" style={{ width: '14rem', height: '23.4rem', position: "relative", left: "2px", margin: "2px" }} />
                    </div>
                </div>
            </div>
            <div className="d-flex mt-2 mb-2">
                <div className="card overflow-x-scroll" style={{ width: "79rem", height: '23.4rem',  margin:"0 auto"     }}>
                    <div className="card-body d-flex">
                        <div className="card text-center border-0" style={{ width: "17rem", height: '22.4rem', top: '-6px', right:'19px', backgroundImage: "url('https://rukminim1.flixcart.com/fk-p-flap/278/278/image/ae3cf1d27ef0eabc.jpg?q=90')", backgroundPosition: "0px bottom", backgroundRepeat: "no-repeat" }}>
                            <div className="card-body"  >
                                <h5 className="card-title" id='card1' style={{ fontSize: "30px", lineHeight: "1.38", fontWeight: "400" }}>Top Deal on Fashion</h5>
                                <Link to='/fashionsection' className="btn btn-primary" style={{position:'relative',left:'27px'}}>View ALL</Link>
                            </div>
                        </div>
                        <div  style={{position:"relative",right:"19px",width:'63.4rem' }}>
                            <Carousel
                                responsive={responsive}
                                autoPlay={true}
                                swipeable={true}
                                draggable={true}
                                infinite={true}
                                partialVisible={false}
                                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                            >
                                {slider2.map((imageUrl, index) => {
                                    return (
                                        <div className="card text-center border-0 "key={index} style={{ width: "17rem", height: '20rem', top: '-40px' }}>
                                            <div className="slider" >
                                                <img src={imageUrl.url} className='card-img-top' alt="movie" style={{width:imageUrl.width,hieght:imageUrl.height,left:'-4px'}} />
                                            </div>
                                            <div className="card-body" style={{ top:imageUrl.top, position: "relative", right: "-2px" }}>
                                                <p className="card-title" id='card-title'>{imageUrl.heading1}</p>
                                                <p style={{ fontSize: '16px', color: "#388e3c" }}>{imageUrl.heading2}</p>
                                                <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", opacity: ".6", fontSize: '14px', lineHeight: '1.4' }}>{imageUrl.heading3}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}