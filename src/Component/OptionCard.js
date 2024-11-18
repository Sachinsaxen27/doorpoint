import React, { useEffect, useState } from 'react'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import './Style.css'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Divider } from '@mui/material';

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
    const [slider1, setMySlider1] = useState([])
    const [slider2, setMySlider2] = useState([])
    // console.log(slider2)
    const getallitemlist = async () => {
        const response = await fetch('http://localhost:5000/api/cameraadd/allitemlist', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        const listvalues = Object.values(json)
        setMySlider1(listvalues)
    }

    const getallfashionlist = async () => {
        const response = await fetch('http://localhost:5000/api/fashionadd/allitemlist', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        const listvalues = Object.values(json)
        let limit = listvalues[0].sort(() => Math.random() - 0.5).slice(0, 5)
        setMySlider2(limit)
    }
    useEffect(() => {
        getallitemlist()
        getallfashionlist()
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className="d-flex" style={{ height: '24rem' }}>
                <div className="card text-center border-0" style={{ width: "14rem", height: '23rem', backgroundImage: "URL('https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90')", backgroundPosition: "0px bottom", backgroundRepeat: "no-repeat", zIndex: 100000, left: "2px" }}>
                    <div className="card-body">
                        <h5 className="card-title" id='card1' style={{ fontSize: "30px", lineHeight: "1.38", fontWeight: "400" }}>Best of Electronic</h5>
                        <Link to='/electronic' className="btn btn-primary" style={{ position: 'relative', left: '21px' }}>View ALL</Link>
                    </div>
                </div>

                <div style={{ width: '66.9rem' }}>
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        swipeable={true}
                        draggable={true}
                        infinite={true}
                        partialVisible={false}
                        style={{ width: "66rem" }}
                        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    >
                        {slider1.map((element, index, key) => {
                            return (
                                <Card sx={{ maxWidth: 300, maxHeight: 360 }} key={index} className='col-4 mx-1 my-2'>
                                    {element.category === "Mobile" && <CardActionArea style={{ height: '15rem', display: 'flex' }}>
                                        <CardMedia
                                            component="img"
                                            height="210"
                                            image={element.image}
                                            alt="green iguana"
                                            className='img-thumbnail'
                                            style={{ border: 'none', width: "10rem", height: "12.4rem" }}
                                        />
                                    </CardActionArea>}
                                    {element.category === "Desktop PC" && <CardActionArea style={{ height: '15rem', display: 'flex' }}>
                                        <CardMedia
                                            component="img"
                                            height="210"
                                            image={element.image}
                                            alt="green iguana"
                                            className='img-thumbnail'
                                            style={{ border: 'none', width: "14rem", height: "9.4rem" }}
                                        />
                                    </CardActionArea>}
                                    {element.category === "Laptop" && <CardActionArea style={{ height: '15rem', display: 'flex' }}>
                                        <CardMedia
                                            component="img"
                                            height="210"
                                            image={element.image}
                                            alt="green iguana"
                                            className='img-thumbnail'
                                            style={{ border: 'none', height: "9rem", width: '14rem' }}
                                        />
                                    </CardActionArea>}
                                    {element.category === "Smartwatches" && <CardActionArea style={{ height: '15rem', display: 'flex' }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={element.image}
                                            alt="green iguana"
                                            className='img-thumbnail'
                                            style={{ border: 'none', width: '12rem' }}
                                        />
                                    </CardActionArea>}
                                    {element.category === "Printer" && <CardActionArea style={{ height: '15rem', display: 'flex' }}>
                                        <CardMedia
                                            component="img"
                                            // height="10"
                                            image={element.image}
                                            alt="green iguana"
                                            className='img-thumbnail'
                                            style={{ border: 'none', height: "140px" }}
                                        />
                                    </CardActionArea>}
                                    {element.category === "Headphones" && <CardActionArea style={{ height: '15rem', display: 'flex' }}>
                                        <CardMedia
                                            component="img"
                                            height="145"
                                            image={element.image}
                                            alt="green iguana"
                                            className='img-thumbail'
                                            style={{ border: 'none', width: '9rem' }}
                                        />
                                    </CardActionArea>}
                                    {element.category === "Trimmer" && <CardActionArea style={{ height: '15rem', display: 'flex' }}>
                                        <CardMedia
                                            component="img"
                                            height="210"
                                            image={element.image}
                                            alt="green iguana"
                                            className='img-thumbnail'
                                            style={{ border: 'none' }}
                                        />
                                    </CardActionArea>}
                                    <Divider />
                                    <CardContent>
                                        <div className="card-body text-center" style={{ position: "relative", top: '-40px' }}>
                                            <p className="card-title" id='card-title'>{element.category}</p>
                                            <p style={{ fontSize: '16px', color: "#388e3c" }}>{element.name}</p>
                                            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", opacity: ".6", fontSize: '14px', lineHeight: '1.4' }}>&#8377;{element.price}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
            <div className="d-flex" style={{ height: '24rem' }}>
                <div className="card text-center border-0" style={{ width: "12.6rem", height: '23rem', backgroundImage: "url('https://rukminim1.flixcart.com/fk-p-flap/278/278/image/ae3cf1d27ef0eabc.jpg?q=90')", backgroundPosition: "0px bottom", backgroundRepeat: "no-repeat", zIndex: 100000, left: '2px' }}>
                    <div className="card-body"  >
                        <h5 className="card-title" id='card1' style={{ fontSize: "30px", lineHeight: "1.38", fontWeight: "400" }}>Top Deal on Fashion</h5>
                        <Link to='/fashionsection' className="btn btn-primary" style={{ position: 'relative', left: '27px' }}>View ALL</Link>
                    </div>
                </div>
                <div style={{ width: '66.9rem' }}>
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        swipeable={true}
                        draggable={true}
                        infinite={true}
                        partialVisible={false}
                        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    >
                        {slider2.map((element, index) => {
                            // console.log(element.image)
                            if (element !== null) {
                                return (
                                    <Card sx={{ maxWidth: 300, maxHeight: 360 }} key={index} className='col-4 mx-1 my-2'>
                                        <CardActionArea style={{ height: '15rem', display: 'flex' }}>
                                            {Array.isArray(element.image) ?
                                                <CardMedia
                                                    component="img"
                                                    height="210"
                                                    image={element.image[0].data}
                                                    alt="green iguana"
                                                    className='img-thumbnail'
                                                    style={{ border: 'none', width: '8.8rem',height:'225px' }}
                                                /> : <CardMedia
                                                    component="img"
                                                    height="210"
                                                    image={element.image}
                                                    alt="green iguana"
                                                    className='img-thumbnail'
                                                    style={{ border: 'none', width: '8.8rem' }}
                                                />}
                                        </CardActionArea>
                                        <Divider />
                                        <CardContent>
                                            <div className="card-body text-center" style={{ position: "relative", top: '-40px' }}>
                                                <p className="card-title" id='card-title'>{element.itemtype}</p>
                                                <p style={{ fontSize: '16px', color: "#388e3c" }}>{element.name ? (element.name).slice(0, 10) : "   "}</p>
                                                <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", opacity: ".6", fontSize: '14px', lineHeight: '1.4' }}>&#8377;{element.price}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            }
                            else {
                                return null
                            }
                        })}
                    </Carousel>
                </div>

            </div>


        </>
    )
}