import React from 'react'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import './Style.css'
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
const sliderImageUrl = [
    {
        url: "https://rukminim2.flixcart.com/image/200/200/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70",
        heading: 'Wall Decor Items',
        right:"-11px"
    },
    {
        url: "https://rukminim2.flixcart.com/image/200/200/kz7bcsw0/artificial-plant/c/s/z/11-yes-4potss-ryme-original-imagb9zw4msbftaw.jpeg?q=70",
        heading: 'Artificial Plants',
        right:"-11px"
    },
    {
        url:
            "https://rukminim2.flixcart.com/image/200/200/k3j1z0w0/ceiling-lamp/w/7/r/gold-01-classical-original-imafmbywhhurgf6b.jpeg?q=70",
        heading: 'Decor Lightings',
        right:"-11px"
    },
    {
        url:
            "https://rukminim2.flixcart.com/image/200/200/k5e7o280/wall-clock/6/h/j/designer-wall-clock10-cw-ct-red25412-analog-ajanta-original-imafzyx3fdtf2hcb.jpeg?q=70",
        heading: 'Clocks',
        right:"-11px"
    },

    {
        url:
            "https://rukminim2.flixcart.com/image/200/200/xif0q/hose-connector/b/q/b/1-2-brass-nozzle-water-spray-gun-hose-nozzles-pipe-for-gardening-original-imaghbm9jgx9vgxh.jpeg?q=70",
        heading: 'Sanitizer Sprayers',
        right:"-11px"
    }
];
const slider1 = [
    {
        url: "https://rukminim2.flixcart.com/image/200/200/xif0q/refrigerator-new/t/x/s/-original-imaghtghjcf67haj.jpeg?q=70",
        heading1: 'Double Door Refrigerator',
        heading2: 'From ₹16,129',
        heading3: 'Samsung,LG...',
        top: '-21px',
        width:'6rem'
    },
    {
        url: "https://rukminim2.flixcart.com/image/200/200/kfeamq80/refrigerator-new/c/t/h/468asmqs-na-marq-by-flipkart-original-imafvufgxpd8bged.jpeg?q=70",
        heading1: 'Marq Refrigerator',
        heading2: 'From ₹8,999',
        heading3: 'Buy Now!',
        top: '-21px',
        width:'6rem'
    },
    {
        url:
            "https://rukminim2.flixcart.com/image/200/200/xif0q/washing-machine-new/z/l/l/-original-imags7tpwaxawghz.jpeg?q=70",
            heading1: 'Big Washing Machinesr',
            heading2: 'Buy Now',
            heading3: 'From ₹13,490',
            top:'-20px',
            width:'7rem'
        },
    {
        url:
            "https://rukminim2.flixcart.com/image/200/200/xif0q/refrigerator-new/x/b/q/-original-imagpyjfdzwzhsrk.jpeg?q=70",
            heading1: 'Single Door Refrigerator',
            heading2: 'From ₹9,990',
            heading3: 'Samsung,LG...',
            top: '-21px',
            width:'6rem'
    },

    {
        url:
            "https://rukminim2.flixcart.com/image/200/200/xif0q/washing-machine-new/g/m/y/-original-imags6atgukpvvdt.jpeg?q=70",
        heading1: 'Front Load Washing Machines',
        heading2: 'Buy Now',
        heading3: 'From ₹17,990',
        top: '-21px',
        width:'7rem'
    }
];
function OptionCard3() {
    return (
        <>
            <div className="d-flex mt-2 mb-2">
                <div className="card overflow-x-scroll" style={{ width: "79rem", height: '23.4rem',  margin:"0 auto" }}>
                    <div className="card-body d-flex">
                        <div className="card text-center border-0" style={{ width: "18rem", height: '23rem', top: '-16px',right:'19px', backgroundImage: "url('https://rukminim1.flixcart.com/fk-p-flap/278/278/image/964e5530abdf3180.jpg?q=90')", backgroundPosition: "0px bottom", backgroundRepeat: "no-repeat" }}>
                            <div className="card-body">
                                <h5 className="card-title" id='card1' style={{ fontSize: "30px", lineHeight: "1.38", fontWeight: "400" }}>Top Deals On TVs & Appliances</h5>
                                <button className="btn btn-primary" style={{position:'relative',left:'35px'}}>View ALL</button>
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
                                        <div className="card text-center border-0 "key={index} style={{ width: "17rem", height: '20rem', top: '-21px' }}>
                                            <div className="slider" >
                                                <img src={imageUrl.url} alt="movie" style={{width:imageUrl.width,hieght:'10rem',left:'-4px'}} />
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
            <div className="d-flex mt-2 mb-2">
                <div className="card overflow-x-scroll" style={{ width: "79rem", height: '23.4rem', margin:"0 auto" }}>
                    <div className="card-body d-flex">
                        <div className="card text-center border-0" style={{ width: "18rem", height: '23rem', top: '-16px',right:'19px', backgroundImage: "url('https://rukminim1.flixcart.com/fk-p-flap/278/278/image/82905b5b763b5da8.jpg?q=90')", backgroundPosition: "0px bottom", backgroundRepeat: "no-repeat" }}>
                            <div className="card-body">
                                <h5 className="card-title" id='card1' style={{ fontSize: "30px", lineHeight: "1.38", fontWeight: "400" }}>Home & Kitchen Essentials</h5>
                                <button className="btn btn-primary" style={{position:'relative',left:'38px'}}>View ALL</button>
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
                                {sliderImageUrl.map((imageUrl, index) => {
                                    return (
                                        <div className="card text-center border-0 "key={index} style={{ width: "17rem", height: '20rem', top: '-17px' }}>
                                            <div className="slider">
                                                <img src={imageUrl.url} alt="movie" />
                                            </div>
                                            <div className="card-body" style={{ top: "-20px", position: "relative", right:imageUrl.right }}>
                                                <p className="card-title" id='card-title'>{imageUrl.heading}</p>
                                                <p style={{ fontSize: '16px', color: "#388e3c" }}>Upto 80% Off</p>
                                                <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", opacity: ".6", fontSize: '14px', lineHeight: '1.4' }}>Big Discounts</p>
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

export default OptionCard3