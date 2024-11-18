import React, { useContext, useEffect, useState } from 'react'
import DoorPointApi from '../../ComponentAPI/DoorPointAPI'
// import { Button, Modal } from 'react-bootstrap'
import '../Style.css'
import './Pages.css'
import '../shoppingproduct/Pages.css'
import { useNavigate } from 'react-router-dom'
import empty from '../images/redalert.png'
// import { useNavigate } from 'react-router-dom'
function CartList() {
    // const history = useNavigate()
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handle_Show = () => setShow(true);
    // const [time_Out, setMytime_out] = useState(false)
    // const handle_Timeout_close = () => {
    //     history('/cartpage')
    //     setMytime_out(false)
    // }
    // const [itemcount, setMyitemCount] = useState(1)
    // const[itemID,setMyItemID]=useState()
    // const handlecount = (value) => {
    //     // setMyItemID(id)
    //     if (itemcount < 5) {
    //         setMyitemCount(itemcount + value)
    //     }
    //     else {
    //         handle_Show()
    //     }
    // }
    // const handlecountdecrement = (value) => {
    //     setMyitemCount(itemcount - value)
    // }
    const context = useContext(DoorPointApi)
    const { info, currentDate, Daysarr, montharr, Mycart_list, DeletItem } = context
    const history = useNavigate()
    const [money, setMoney] = useState(0)
    const [total_Price, setMyTotal_price] = useState(0)
    const [newprice, setMyNewPrice] = useState(0)
    const [total_Saving, setMyTotal_Saving] = useState(0)
    useEffect(() => {
        let totalmoney = Mycart_list.reduce((accu, curr) => accu + curr.price, 0)
        let totaldiscount = Mycart_list.reduce((accu, curr) => {
            const discount = curr.price > 4999 ? 0.25 : 0.15;
            const discountedPrice = curr.price * (1 - discount);
            return accu + discountedPrice;
        }, 0);
        setMyNewPrice(Math.floor(totaldiscount))
        setMoney(totalmoney)
    }, [Mycart_list])
    useEffect(() => {
        if (money < 1000) {
            setMyTotal_price(newprice + 3 + 49);
        } else if (money > 1000 && money < 5000) {
            setMyTotal_price(newprice + 3);
        } else if (money >= 5000) {
            setMyTotal_price(newprice + 3 + 7);
        }
        setMyTotal_Saving(money - newprice)
        // eslint-disable-next-line
    }, [money])
    return (
        <>
            <div className="container text-center cartcontainer">
                <div className="row">
                   {Mycart_list.length>0&&<div className="col-8">
                        <div className='orderdiv'>
                            <div className='orderbtn px-2'>
                                Cart Summary
                            </div>
                            <div id='orderdet'>
                                {Mycart_list.map((element, index) => {
                                    return <div key={index} style={{ display: 'flex', padding: '14px 1px 10px 12px', marginBottom: '15px' }}>
                                        <div>
                                            <div style={{ width: '5rem' }}>
                                                {element.image.length>1?<img src={element.image[0].data} alt="product_image" style={{ width: '-webkit-fill-available', height: "100px" }} />:<img src={element.image} alt="product_image" style={{ width: '-webkit-fill-available', height: "100px" }} />}
                                            </div>
                                        </div>
                                        <div className='container text-justify'>
                                            <div className='row justify-content-between' >
                                                <div className='col-6'>
                                                    <div>{element.name}</div>
                                                    <div style={{ color: "#878787", fontSize: "14px", height: "20px" }}>{element.color}</div>
                                                    <div style={{ color: "#878787", fontSize: "14px", height: "20px" }}><span>Seller: </span>{element.brand}</div>
                                                    <div>
                                                        <span style={{ textDecoration: 'line-through', opacity: '0.5' }}>{element.price}</span>
                                                        <span style={{ marginLeft: '10px' }}>{element.price > 4999 ? Math.floor(element.price - (element.price * 25 / 100)) : Math.floor(element.price - (element.price * 15 / 100))}</span>
                                                        <span style={{ fontWeight: '500', color: '#388e3c', marginLeft: '7px', fontSize: '13px' }}>20% Off  + 5% Off by DoorPoint</span>
                                                    </div>
                                                    <button className='buttonremoveitem' onClick={() => DeletItem(element._id)}>Remove</button>
                                                </div>
                                                <div className='col-6' style={{ textAlign: 'end' }}>
                                                    <div>Delivery by {(Daysarr[currentDate.getDay()]).slice(0, 3)}, {currentDate.getDate()} {(montharr[(currentDate.getMonth())]).slice(0, 3)} | {500 < 999 ? <span>₹49</span> : <span style={{ color: '#388e3c', fontSize: '14px' }}>FREE</span>}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })}
                                <div style={{ borderTop: 'outset', marginBottom: '10px' }}>
                                    <div style={{ textAlign: 'end', marginTop: '5px' }}>
                                        <strong>Subtotal:</strong> ₹ {newprice}
                                    </div>
                                </div>
                                <div style={{ boxShadow: " 0 -1px 1px 0 rgba(0, 0, 0, .2)", backgroundColor: "#f1f3f6", height: "8px", border: "1px solid #f0f0f0" }}></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '10px' }}>
                                    <span style={{ marginLeft: '10px', fontSize: '14px', color: 'black' }}>Order confirmation email will be sent to <strong> {info.email} </strong></span>
                                    <span style={{ marginRight: '20px', marginBottom: '10px' }}><button className='placeholderbutton' style={{
                                        background: " #fb641b", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, .2)", border: "none", color: "#fff", width: '200px', height: '48px'
                                    }} onClick={() => history('/buypage')}
                                    >Place Order</button></span>
                                </div>
                            </div>
                            <div id='ordercom' style={{ display: 'none' }}>
                                <div className='addressline' style={{ marginLeft: "29px", display: 'flex', padding: '12px 10px 10px 4px' }}>
                                    {/* {!Array.isArray(value) ? <span style={{ fontWeight: '600' }}>1 Item</span> : ''} */}
                                </div>
                            </div>
                        </div>
                    </div>}
                    {Mycart_list.length>0?<div className="col-4" style={{ position: 'fixed', right: "20px" }}>
                        <div>
                            <div className='text-justify' style={{ border: '1px solid rgba(0, 0, 0, .125)' }}>
                                <div style={{ padding: '12px', color: "rgba(0, 0, 0, 0.425)", fontWeight: "500" }} >PRICE DETAILS</div>
                                <div style={{ borderBottom: '1px solid rgba(0, 0, 0, .125)' }}>
                                    <div style={{ borderBottom: "1px solid rgba(0, 0, 0, .125)", borderTop: "1px solid rgba(0, 0, 0, .125)", padding: '12px' }}>
                                        <div className='divamount_total my-2'><div>Price ({Mycart_list.length} Item)</div> <div>{newprice}</div></div>
                                        <div className='divamount_total my-3'><div>Delivery Charges</div> {money < 1000 ? <div>₹49</div> : <div style={{ color: "rgb(56, 142, 60)" }}> <span className='notdeliverycharge'>₹49</span> FREE</div>}</div>
                                        <div className='divamount_total my-2'><div>Platform Fees</div> <div>₹3</div></div>
                                        {newprice >= 5000 && <div className='divamount_total my-2'><div>Payment Handling Fee</div> <div>₹7</div></div>}
                                    </div>
                                    <div style={{ display: 'flex', padding: '13px', fontWeight: '600', justifyContent: 'space-between' }}><div>Total Payable</div><div>{total_Price}</div></div>
                                </div>
                                {total_Saving > 300 && <div style={{ textAlign: 'justify', color: 'green', margin: '13px' }}>
                                    Your Total Savings on this order {total_Saving}
                                </div>}
                            </div>
                        </div>
                        <div className='safe_secure my-4'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-fill-check" viewBox="0 0 16 16" style={{ width: "42px", height: "33px", color: "darkgrey" }}>
                                    <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z" />
                                </svg>
                            </span>
                            <span style={{ color: 'darkgrey', fontSize: '14px', fontWeight: '600' }}>
                                Safe and Secure Payment.Easy returns. <br />
                                100% Authentic products.
                            </span>
                        </div>
                    </div>:
                    <div className='nocartitemcontainer'>
                        <div>
                            <img src={empty} alt="No item" />
                        </div>
                        <div>
                            <p style={{marginBottom:'0rem',marginTop:'15px',fontWeight:'600'}}>Your cart is empty!</p>
                            <p style={{fontSize:'10px'}}>Explore our wide selection and find something you like</p>
                        </div>
                    </div>}
                    <div className='cartfooter'>
                        <div><span>Policies :</span><span className='mx-1'>Returns Policy </span>|<span className='mx-1'>Terms of use</span>|<span className='mx-1'>Security</span>|<span className='mx-1'>Privacy</span></div>
                        <div>&#169; 2023-2024 DoorPoint.com</div>
                        <div>Need help? Visit the <a href="/">Help Center</a> or <a href="/">Contact Us</a></div>
                    </div>
                    {/* <img src={element.image[0].data} alt="product_image" style={{ width: '100px', height: "100px" }} /> */}
                    {/* <input type="text" name="number" id="number" readOnly style={{ width: '56px', marginLeft: '6px', marginRight: '6px', textAlign: 'center' }} value={element.quantity ? element.quantity : itemcount} /> */}
                    {/* <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} style={{ marginTop: '145px' }}>
                        <Modal.Body>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ height: '66px' }}>
                                    <i className="fa-sharp fa-solid fa-circle-exclamation fa-rotate-180 fa-2xl" style={{ color: "#fa0000", fontSize: '60px', marginTop: '32px' }}></i>
                                </div>
                                <div style={{ fontSize: "20px", fontWeight: "500", marginTop: "20px", color: "#212121", textAlign: 'center' }}>
                                    You can only purchase 5 units of null in a single order. If you have a higher requirement, please create a new order.
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="secondary" style={{ backgroundColor: "#2874f0" }} onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal> */}
                </div>
            </div>
        </>
    )
}

export default CartList