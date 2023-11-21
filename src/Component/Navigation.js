import React, { useContext, useEffect, useState } from 'react'
import AddProductbutton from './AddProductbutton'
import './Style.css'
import Door from './images/doorpoints.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import cart from './images/cart3.png'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import order from './images/order.png'
import point from './images/point.png'
import card from './images/card.png'
import gift from './images/gift.png'
import heart from './images/heart.png'
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Notification from './Notification';
import DoorPointApi from '../ComponentAPI/DoorPointAPI';
import './Style.css'
// import PopUp from './PopUp.js';

export default function Navigation(props) {
  const context=useContext(DoorPointApi)
  const {showAlert,info}=context
  const history=useNavigate()
  const handleclick = () => {
    const lis = document.getElementById('lis')
    if (lis.style.display === 'none') {
      lis.style.display = 'block'
    }
    else {
      lis.style.display = 'none'
    }

  }

  const handleclicks = () => {
    const lis = document.getElementById('lis1')
    if (lis.style.display === 'none') {
      lis.style.display = 'block'
    }
  }

  const handleclose = () => {
    const lis = document.getElementById('lis1')
    lis.style.display = 'none'
  }
  const locate = useLocation()
  useEffect(() => {

    if (locate.pathname === '/signin') {
      document.body.style.backgroundColor = 'lavender'
    }
    else if (locate.pathname === '/signup') {
      // document.body.style.backgroundColor = '#d1bba2'
      // document.body.style.backgroundColor = '#90EE90'
      document.body.style.backgroundColor = '#D1FFBD'
    }
    else if (locate.pathname === '/bsignup') {
      document.body.style.backgroundColor = 'lavender'
    }
    else {
      // document.body.style.backgroundColor = "#f1f3f6"
      document.body.style.backgroundColor = '#fff'
    }
  }, [locate.pathname])
  const handlelogout = () => {
    localStorage.clear();
    showAlert('Logout Successfully', 'success')
    history('/')
  }
  const[name,setMyname]=useState('')
  useEffect(()=>{
    if(info.name!==undefined){
      let Fullname=(info.name).split(' ')
      setMyname(Fullname[0])
      console.log(name)
    }
  },[setMyname,info.name,name])
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "rgb(57 79 107)", position: 'fixed', zIndex: '1000', top: '0px', height: '62px', width: '80rem',left:"0rem"}}>
        <div className="container" style={{ position: 'relative', right: '3rem' }}>
          <Link className="navbar-brand" to="/"><img src={Door} alt="DoorPoint" style={{ width: '6rem' }} /></Link>
          <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '9rem' }}>
            <ul style={{ display: "flex", listStyle: "none", alignItems: "center", marginTop: '15px' }}>
              <li style={{ cursor: 'pointer' }}><div style={{ color: 'white' }}><span style={{ position: "relative", left: '26px', top: '6px', fontSize: '14px', fontWeight: 'bold' }}>Hello</span><br /><span><AddLocationOutlinedIcon /><span style={{ fontSize: "14px", position: 'relative', top: "-4px " }}>Select your address</span></span></div>
              </li>
              <li style={{ marginLeft: '7px' }}>
                <button style={{ borderRadius: '5px', width: '4rem', height: '40px', justifyContent: 'center', display: 'flex', cursor: 'pointer' }} onClick={handleclick}>
                  <span style={{ marginTop: '5px' }}>All</span><ArrowDropDownIcon style={{ marginTop: '5px' }} /> </button>
                <ul id='lis' style={{ listStyle: "none", backgroundColor: 'white', width: '9rem', marginLeft: '2px', display: 'none', position: 'fixed', top: '46px', borderRadius: '5px' }}>
                  <li style={{ marginTop: '7px', marginLeft: "5px" }}>All Categoris</li>
                  <li style={{ marginTop: '7px', marginLeft: "5px" }}>Electronic</li>
                  <li style={{ marginTop: '7px', marginLeft: "5px" }}>Appliances</li>
                  <li style={{ marginTop: '7px', marginLeft: "5px" }}>Apps & Games</li>
                  <li style={{ marginTop: '7px', marginLeft: "5px" }}>Fashion</li>
                  <li style={{ marginTop: '7px', marginLeft: "5px" }}>Home & Kitchen</li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" style={{ width: "25rem", height: "38px" }}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-warning" type="submit" style={{ position: 'relative', right: '29px' }}><SearchOutlinedIcon /></button>
            </form>
            <ul style={{ display: "flex", listStyle: "none", alignItems: "center", marginTop: '15px' }}>
              <li style={{ cursor: "pointer" }}>
                <img src={cart} alt="Cart" style={{ width: '2rem', position: 'relative', top: '4px' }} />
                <span style={{ fontWeight: '600', color: 'white', position: 'relative', right: '17px', top: '0px' }}>0</span>
                <span style={{ fontWeight: '600', fontSize: "16px", position: 'relative', color: 'white', top: '14px', right: "7px" }}>Cart</span>
              </li>
              <li className='list-nav3' style={{ color: 'white', fontWeight: '400', width: '6rem' }}>
                <div style={{ fontSize: "13px", position: 'relative', top: "8px", left: '18px' }}>Returns<br />
                  <span style={{ fontSize: "16px", fontWeight: '600', position: 'relative', top: "-6px" }}>& Orders</span>
                </div>
              </li>
              {(locate.pathname !== '/signin') && <li style={{ position: 'relative', left: "13px", top: '2px' }} onMouseEnter={handleclicks} onMouseLeave={handleclose} >
                {localStorage.token===undefined?<button className=' btn-primary' ><Link to='/signin' style={{ position: 'relative', top: "-2px", display: 'flex', justifyContent: 'center', textDecoration: "none", color: 'white' }}>Sign In</Link>
                </button>:<button className=' btn-primary' >Hello,{name}
                </button>}
                <ul id='lis1' style={{ listStyle: "none", backgroundColor: 'white', height: "13rem", borderRadius: '6px',cursor:"pointer", display: 'none', position: 'fixed', top: "48px", width: '14rem' }}>
                  <li >
                    {localStorage.token === undefined && <div className="d-flex w-100 justify-content-between text-center" style={{ fontSize: "14px", borderBottom: '1px solid', color: 'black' }}>
                      <Link to='/signup' style={{ textDecoration: 'none', marginTop: '4px', color: 'black' }}>
                        <span className="mb-1" style={{ marginLeft: '8px', marginTop: "6px" }}>New Customer?</span>
                      </Link>
                      <Link to='/signup' style={{ textDecoration: 'none', marginTop: '4px', color: 'blue', fontWeight: '600' }}>
                        <span style={{ marginRight: '6px', marginTop: '6px' }}>Sign Up</span>
                      </Link>
                    </div>}
                  </li>
                  <li className='list-nav'>
                    <PersonOutlineIcon /><span style={{ fontSize: '15px', marginLeft: '13px', marginTop: '1px' }}>Profile</span>
                  </li>
                  <li className='list-nav' >
                    <img src={point} alt="Point" style={{ width: '24px' }} /> <span style={{ fontSize: '15px', marginLeft: '13px', marginTop: '1px' }}>
                      DoorPoint Plus</span>
                  </li>
                  <li className='list-nav' >
                    <img src={order} alt="order" style={{ width: '22px' }} /><span style={{ fontSize: '15px', marginLeft: '13px', marginTop: '1px' }}>Orders</span>
                  </li>
                  <li className='list-nav' >
                    <img src={heart} alt="Hear" style={{ width: '22px' }} /> <span style={{ fontSize: '15px', marginLeft: '13px', marginTop: '1px' }}>Wishlist</span>
                  </li>
                  <li className='list-nav' >
                    <img src={gift} alt="gift" style={{ width: '22px' }} /><span style={{ fontSize: '15px', marginLeft: '13px', marginTop: '1px' }}>Rewards</span>
                  </li>
                  <li className='list-nav' >
                    <img src={card} alt="Card" style={{ width: '22px' }} /><span style={{ fontSize: '15px', marginLeft: '13px', marginTop: '1px' }}>Gift Card</span>
                  </li>
                  {localStorage.token !== undefined && <li className='list-nav' onClick={handlelogout}>
                    <LogoutIcon /><span style={{ fontSize: '15px', marginLeft: '13px', marginTop: '1px' }}>Logout</span>
                  </li>}
                </ul>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
      <Notification />
      <AddProductbutton />
    </>
  )
} 