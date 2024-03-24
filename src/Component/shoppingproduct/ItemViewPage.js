import React, { useContext, useEffect, useState } from 'react'
import './Pages.css'
import DoorPointApi from '../../ComponentAPI/DoorPointAPI'
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import CountDown from './CountDown';
import Rating from '@mui/material/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { actioncart } from '../../DoorPoint_State';
import { bindActionCreators } from 'redux';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import truck from '../images/free-delivery-icon.png'
import replacement from '../images/product-package-replacement-icon.png'
import warranty from '../images/safety-icon.png'
import paycash from '../images/buyer-pay-icon.png'
import topbrand from '../images/first-icon.png'
import installation from '../images/toolbox-repairing-icon.png'
import dpdelivery from '../images/dp.svg'
import Divider from '@mui/material/Divider';
import FashionPreview from './ProductView/FashionPreview';
// import indiaPincodeSearch from 'india-pincode-search';
function ItemViewPage() {
    const dispatch = useDispatch()
    const { AddItem, RemoveItem } = bindActionCreators(actioncart, dispatch)
    const quantity = useSelector(state => state.carts)
    const data=useSelector(state=>state.items)
    const context = useContext(DoorPointApi)
    const { locationname, postcode, getcart, showAlert } = context
    const [numberDate, setMyNumber] = useState()
    const {ViewItem} = bindActionCreators(actioncart, dispatch)
    useEffect(() => {
        let n = Math.floor(Math.random() * 10) + 1
        if (n === 0 || n === 1 || n === 10) {
            setMyNumber(2)
        }
        else {
            setMyNumber(n)
        }
        return () => clearTimeout(n)
    }, [])
    
    const [imagenumber, setMyimageNumber] = useState(0)
    let date = new Date()
    date.setDate(date.getDate() + 1);
    let montharr = ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let Daysarr = ["Sunday", "Monday", "Tuesday", 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + numberDate);
    let money = data.price
    const formatter = new Intl.NumberFormat('en-US');
    money = formatter.format(money)
    const Add_Cart = async (element, quantity) => {
        if (localStorage.token) {
            const response = await fetch('http://localhost:5000/api/addcart/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ element, quantity: quantity })
            });
            if (response.ok) {
                getcart()
            } else {
                updateCart(element)
            }
        }
        else {
            showAlert("Please Loign First", 'warning')
        }
    }
    const updateCart = async (element) => {
        // /updatecart/:id
        if (localStorage.token) {

            const response = await fetch(`http://localhost:5000/api/addcart/updatecart/${element._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'auth-token': localStorage.token
                },
                body: JSON.stringify({ quantity })
            })
            const json = await response.json()
            if (json.success) {
                getcart()
            }
        } else {
            showAlert("Please Login First", 'warning')
        }
    }
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollRight = () => {
        if (scrollPosition <= 240) {
            setScrollPosition(scrollPosition + 40);
        }
    };
    const scrollLeft = () => {
        setScrollPosition(scrollPosition - 40);
    };
    const [readstate, setMyReadstate] = useState("Read More")
    const [areatext, setMyareatext] = useState(200)
    const fulldetails = () => {
        const textarea = document.getElementById('fulldetails')
        if (areatext === 200) {
            // textarea.style.height = 'fit-content'
            setMyareatext((data.information.length))
            setMyReadstate("Less")
        }
        else {
            // textarea.style.height = '50px'
            setMyareatext(200)
            setMyReadstate("Read More")
        }
    }
    return (
        <>
            <div className=' my-5 itemview'>
                <div className="row">
                    <div className="col-4" style={{ display: "flex", alignItems: 'center', marginTop: '15px' }}>
                        <div className='image_group'>
                            {(data.clotheCategory).slice(0, 6) === "Winter" && (data.image.length > 1 ? data.image?.map((element, index) => {
                                return <img src={element.data} alt="" style={{ height: '61px', cursor: 'pointer', width: "36px" }} className='my-1 mx-1' onClick={() => setMyimageNumber(index)} key={index} />
                            }) : <img src={data.image} alt="" style={{ height: '3rem', cursor: 'pointer' }} className='my-1 mx-1' />)}
                            {(data.clotheCategory).slice(0, 6) !== "Winter" && (data.image.length > 1 ? data.image?.map((element, index) => {
                                return <img src={element.data} alt="" style={{ height: '3rem', cursor: 'pointer', width: "40px" }} className='my-1 mx-1' onClick={() => setMyimageNumber(index)} key={index} />
                            }) : <img src={data.image} alt="" style={{ height: '3rem', cursor: 'pointer' }} className='my-1 mx-1' />)}
                        </div>
                        {data.image.length <= 1 ? <div className='big_image' style={{ margin: "0px auto" }}><img src={data.image} alt="" className='img-fluid ' style={{ width: "24rem", height: "32rem" }} /> </div> : <div className='big_image' style={{ margin: "0px auto" }}> <img src={data.image[imagenumber].data} alt="" className='img-fluid' style={{ height: '32rem', width: 'fit-content' }} /></div>}
                    </div>
                    <div className="col-6 mx-3" style={{ marginTop: '15px',right:"27px" }}>
                        <h3> {data.name}</h3>
                        <div className='ratingprice'>
                            <h2><span className='tag'>₹</span>{money}</h2><span style={{ display: 'flex' }}><Rating name="half-rating" defaultValue={data.rating} precision={0.5} readOnly /><span className='mx-2 itemgroup_2'>Rating</span></span>
                        </div>
                        <div className='shippindetails container-fluid'>
                            <div className='freedelivery my-1'><span className='delivery'>FREE delivery</span><strong> {Daysarr[currentDate.getDay()]}, {currentDate.getDate()} {montharr[(currentDate.getMonth())]}</strong>. <span className='delivery'>Details</span></div>
                            <span className='freedelivery my-1'>Or fastest delivery <strong>Tomorrow,{date.getDate()},{montharr[date.getMonth()]}</strong>. Order within <CountDown /></span>
                            <div className='locationplace my-1'><AddLocationOutlinedIcon />{locationname.loca}, {postcode}</div>
                        </div>
                        <div className='my-2'></div>
                        <div className='cartbutton my-2'>
                            <div className='cartbutton_1 my-2 mx-2'>
                                <span className='quantity_1'>Quantity{quantity <= 1 ? <RemoveCircleOutlineIcon className='mx-1' /> : <RemoveCircleOutlineIcon className='mx-1' onClick={() => RemoveItem(1)} />} <input type="text" name="quantity" id="quantity" readOnly value={quantity} className='quantityinput' /> <ControlPointIcon className='mx-1' onClick={() => AddItem(1)} /></span>
                                <span className='button_group'><button type="button" className="btn btn-primary text-center mx-1" onClick={() => Add_Cart(data, quantity)}>Add to Cart</button><button type="button" className="btn btn-primary mx-1 text-center">Buy Now</button></span>
                            </div>
                            <span className='wishlist'><button type="button" className="btn btn-danger mx-1 text-center">Add to Wishlist<FavoriteIcon className='mx-1' /></button></span>
                        </div>
                        <Divider />
                        <div className='listoffer'>
                            <span className='mx-1'>Available Offers</span>
                            <ul className='mx-1'>
                                <li>✔️ <strong> Bank Offer</strong> Get ₹25* instant discount for the 1st DoorPoint Order using DoorPoint UPI</li>
                                <li>✔️ <strong>Bank Offer</strong> 5% Cashback on DoorPoint Axis Bank Card</li>
                                <li>✔️ <strong>Special Price </strong>Get extra 42% off (price inclusive of cashback/coupon)</li>
                                <li>✔️ <strong>Partner Offer </strong>Sign-up for DoorPoint Pay Later & get free Times Prime Benefits worth ₹10,000*</li>
                            </ul>
                        </div>
                        <Divider />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button type="button" className="btn btn-light btn-outline-secondary" onClick={scrollLeft} style={{ height: '2.3rem' }}><NavigateBeforeIcon /></button>
                            <div className='listgroup_2'>
                                <div className='scrolloption' style={{ transform: `translateX(-${scrollPosition}px)`, width: '289px', display: 'flex', transition: "transform 0.3s ease-in-out", color: '#007185' }}>
                                    <div className='mx-2 itemgroup_2'>
                                        <span>
                                            <img src={replacement} alt="" />
                                        </span>
                                        <span>7 days Service Center Replacement</span>
                                    </div>
                                    <div className='mx-2 itemgroup_2'>
                                        <span>
                                            <img src={truck} alt="" />
                                        </span>
                                        <span>Free Delivery</span>
                                    </div>
                                    <div className='mx-2 itemgroup_2'>
                                        <span>
                                            <img src={warranty} alt="" />
                                        </span>
                                        <span>1 Year Warranty</span>
                                    </div>
                                    <div className='mx-2 itemgroup_2'>
                                        <span><img src={paycash} alt="" /></span>
                                        <span>Pay on Delivery</span>
                                    </div>
                                    <div className='mx-2 itemgroup_2'>
                                        <span>
                                            <img src={topbrand} alt="" />
                                        </span>
                                        <span>Top Brand</span>
                                    </div>
                                    <div className='mx-2 itemgroup_2'>
                                        <span><img src={installation} alt="" /></span>
                                        <span>Installation available</span>
                                    </div>
                                    <div className='mx-2 itemgroup_2'>
                                        <span><img src={dpdelivery} alt="" /></span>
                                        <span>DoorPoint Delivered</span>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn btn-light btn-outline-secondary" onClick={scrollRight} style={{ height: '2.3rem' }}><NavigateNextIcon /></button>
                        </div>
                        <Divider />
                    </div>
                </div>
            </div>
            <div>
                <Divider><h2>Product Details</h2></Divider>
                <ul className="list-group mx-2">
                    <li className="list-group-item">
                        <div className="row justify-content-between">
                            <div className="col-3">
                                Item Id
                            </div>
                            <div className="col-sm-9">
                                {data.itemid}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row justify-content-between">
                            <div className="col-3">
                                Name
                            </div>
                            <div className="col-sm-9">
                                {data.name}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row justify-content-between">
                            <div className="col-3">
                                Brand
                            </div>
                            <div className="col-sm-9 ">
                                {data.brand}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row justify-content-between">
                            <div className="col-3">
                                Color
                            </div>
                            <div className="col-sm-9">
                                {data.color}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row justify-content-between">
                            <div className="col-3">
                                Size
                            </div>
                            <div className="col-sm-9">
                                {data.size}
                            </div>
                        </div>
                    </li>
                    {data.itemtype === 'Clothes' &&
                        <FashionPreview/>
                    }
                    {data.information !== "N/A" && <div className="row mx-2 information1">
                        <div className="text-start ">
                            About this Item:
                        </div>
                        <div className='entryinformation' id='fulldetails' >
                            {(data.information).slice(0, areatext)}
                            {(data.information).length>=areatext&&<span style={{cursor:"pointer"}} onClick={fulldetails}>...{readstate}</span>}
                        </div>
                    </div>}
                </ul>
            </div>
            {/* Singhanukrati@76 */}
        </>
    )
}

export default ItemViewPage