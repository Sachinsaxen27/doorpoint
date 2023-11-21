import React from 'react'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import './Style.css'
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function OptionCard2() {
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
            url: "https://rukminim2.flixcart.com/image/200/200/xif0q/track-suit/d/s/p/xl-teetrack-m7-by-metronaut-original-imaghkfdhqg2q2yj.jpeg?q=70",
            heading1: 'Metronaut,Adrenex...',
            heading2: 'Under ₹349',
            heading3: "Men's Boxer,Tracks,shorts...",
            height: "14rem",
            width: '12rem'
        },
        {
            url: "https://rukminim2.flixcart.com/image/200/200/l52sivk0/watch/u/s/b/1-sk-pg-4030-blu-slvr-basic-analog-watch-for-men-with-day-and-original-imagfu46vxygfyhq.jpeg?q=70",
            heading1: 'Sparx,Bata & more',
            heading2: 'From ₹149',
            heading3: 'Trending Now!',
            height: "14rem",
            width: '12rem'
        },
        {
            url: "https://rukminim2.flixcart.com/image/200/200/kevpwnk0-0/t-shirt/n/6/r/l-11534150-roadster-original-imafvggab6xxahzz.jpeg?q=70",
            heading1: 'Jack & Jones,UCB,Spykar',
            heading2: '60-80% Off',
            heading3: 'Jeans,T-shirts',
            height: "14rem",
            width: '12rem'
        },
        {
            url:
                "https://rukminim2.flixcart.com/image/200/200/xif0q/shoe/f/s/s/-original-imagkhvzgsgpn5wt.jpeg?q=70",
            heading1: 'Reebok,Hrx & more',
            heading2: 'Min 60% Off',
            heading3: "Men's Shoes & Sneakers",
            height: "14rem",
            width: '12rem'
        },
        {
            url:
                "https://rukminim2.flixcart.com/image/200/200/xif0q/shoe/h/a/k/-original-imagfyy3pzjhrbrd-bb.jpeg?q=70",
            heading1: 'Puma,ADIDAS & more',
            heading2: 'Min 50% Off',
            heading3: "Men's Shoes & Sneakers",
            height: "14rem",
            width: '12rem'
        }
    ];
    const slider2 = [
        {
            url: "https://rukminim2.flixcart.com/image/200/200/k7w8eq80/two-wheeler-tyre/v/y/s/90-90-12-106061-milaze-tl-54j-sw-ceat-original-imafqyx5tnfraaxh.jpeg?q=70",
            heading1: 'Tyers',
            heading2: 'From ₹349',
            heading3: "Apollo,Bridgestone,Ceat and",
            height: "14rem",
            width: '12rem'
        },
        {
            url: "https://rukminim2.flixcart.com/image/200/200/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=70",
            heading1: 'Geared Cycles',
            heading2: 'From ₹3999',
            heading3: 'Leader,Cradic & more',
            height: "14rem",
            width: '12rem'
        },
        {
            url: "https://rukminim2.flixcart.com/image/200/200/l58iaa80/electric-cycle/i/y/f/-original-imagfykthgudy4qz.jpeg?q=70",
            heading1: 'Electric Cycle',
            heading2: 'Up to 40% Off',
            heading3: 'Nuze,Motovolt & more',
            height: "14rem",
            width: '12rem'
        },
        {
            url:
                "https://rukminim2.flixcart.com/image/200/200/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=70",
            heading1: 'Remote Control Toys',
            heading2: 'Up to 80% Off',
            heading3: "Buy Now!",
            height: "14rem",
            width: '12rem'
        },
        {
            url:
                "https://rukminim2.flixcart.com/image/200/200/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=7",
            heading1: 'Dry Fruits',
            heading2: 'Up to 75% Off',
            heading3: "Happilo,Farmley & More",
            height: "14rem",
            width: '8rem'
        }
    ];
    const slider3 = [
        {
            url: "https://rukminim2.flixcart.com/fk-p-flap/960/960/image/0b7b9d87eccefd31.png",
            width: "25rem", 
            right: '1.5rem',
            Widht:"25rem",
            Hieght:"13rem"
        },
        {
            url: "https://rukminim2.flixcart.com/fk-p-flap/960/960/image/7a29d4b80fc246d9.jpg",
            width: "25rem", 
            right: '1.5rem',
            Widht:"25rem",
            Hieght:"13rem"
        },
        {
            url: "https://rukminim2.flixcart.com/fk-p-flap/960/960/image/1196183c68f09558.jpg",
            width: "25rem", 
            right: '1.5rem',
            Widht:"25rem",
            Hieght:"13rem"
        },
        {

            url: "https://rukminim2.flixcart.com/fk-p-flap/960/960/image/30bba70ac5f43faa.jpg",
            width: "25rem", 
            right: '1.5rem',
            Widht:"25rem",
            Hieght:"13rem"
        },
        {

            url: "https://rukminim2.flixcart.com/fk-p-flap/960/960/image/5a82189aa8558364.jpg",
            width: "25rem", 
            right: '1.5rem',
            Widht:"25rem",
            Hieght:"13rem"
        },
        {

            url: "https://rukminim2.flixcart.com/fk-p-flap/960/960/image/b3e96d57da068ee6.jpg",
            width: "25rem", 
            right: '1.5rem',
            Widht:"25rem",
            Hieght:"13rem"
        },
    ]
    return (
        <>
            <div style={{ width: '79rem',position:"relative", margin:"0 auto" }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {slider3.map((imageUrl, index) => {
                            return (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <div className="card" >
                                        <img src={imageUrl.url} alt="" style={{ height:imageUrl.Hieght, width:imageUrl.Widht}} />
                                    </div>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </div>
            <div className="d-flex mt-2 mb-2">
                <div className="card overflow-x-scroll" style={{ width: "79rem", height: '23.4rem', margin:"0 auto" }}>
                    <div className="card-body d-flex">
                        <div className="card text-center border-0" style={{ width: "18rem", height: '23rem', top: '-16px',right:'19px', backgroundImage: "url('https://rukminim1.flixcart.com/fk-p-flap/278/278/image/ae3cf1d27ef0eabc.jpg?q=90')", backgroundPosition: "0px bottom", backgroundRepeat: "no-repeat" }}>
                            <div className="card-body" style={{position:'relative',right:'28px',width:'16rem'}}>
                                <h5 className="card-title" id='card1' style={{ fontSize: "30px", lineHeight: "1.38", fontWeight: "400" }}>Best Fashion Brand For You!</h5>
                                <button className="btn btn-primary" style={{position:'relative',left:'54px'}}>View ALL</button>
                            </div>
                        </div>
                        <div style={{position:"relative",right:"17px",width:'63.4rem' }}>
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
                                        <div className="card text-center border-0 " key={index} style={{ width: "17rem", height: '23.4rem', top: '-35px' }}>
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex mt-2 mb-2">
                <div className="card overflow-x-scroll" style={{ width: "79rem", height: '23.4rem', margin:"0 auto" }}>
                    <div className="card-body d-flex">
                        <div className="card text-center border-0" style={{ width: "18rem", height: '23rem', top: '-16px',right:'19px', backgroundImage: "url('https://rukminim1.flixcart.com/fk-p-flap/278/278/image/30c9dd7e9c28b96a.jpg?q=90')", backgroundPosition: "0px bottom", backgroundRepeat: "no-repeat" }}>
                            <div className="card-body">
                                <h5 className="card-title" id='card1' style={{ fontSize: "30px", lineHeight: "1.38", fontWeight: "400" }}>Grooming, Books, Auto & more</h5>
                                <button className="btn btn-primary" style={{position:'relative',left:'32px'}}>View ALL</button>
                            </div>
                        </div>
                        <div style={{position:"relative",right:"17px",width:'63.4rem' }}>
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
                                        <div className="card text-center border-0 " key={index} style={{ width: "17rem", height: '23.4rem', top: '-35px' }}>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
