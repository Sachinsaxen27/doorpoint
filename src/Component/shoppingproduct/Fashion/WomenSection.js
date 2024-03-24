import React, { useEffect, useState } from 'react'
import icon1 from '../../images/icon.png'
import icon2 from '../../images/icon1.png'
import icon3 from '../../images/icon2.png'
import icon4 from '../../images/icon3.png'
import icon5 from '../../images/jeans32.png'
import icon6 from '../../images/dressss.png'
import '../../Slider.css'
import Womenitem from './Womenitem'
import { useLocation } from 'react-router-dom'
import Notfound from '../Notfound'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function WomenSection() {
    const [womenfashion, setMywomenfashion] = useState([])
    const [option, setMyoption] = useState(localStorage.getItem('filtersoption') || "Saree")
    const location = useLocation()
    const getwomenlist = async () => {
        const response = await fetch(`http://localhost:5000/api/fashionadd/getfilterclotheswomen?gender=Women&clothing=${option}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setMyloadingTime(true)
        setTimeout(()=>{
            setMyloadingTime(false)
        },1000)
        setMywomenfashion(json)
    }
    const handleclick = (value) => {
        localStorage.setItem('filtersoption', value)
        setMyoption(value)
    }
    const[loadingtime,setMyloadingTime]=useState(true)
    useEffect(() => {
        if (location.pathname === "/women") {
            setMyoption(localStorage.getItem('filtersoption') || "Saree")
        }
        getwomenlist();
        // eslint-disable-next-line
    }, [option,location.pathname])
    return (
        <>
            <div className="container women_nav">
                <div onClick={() => handleclick("Winter")}>
                    <div>
                        <img src={icon1} alt="" className='nav_image' />
                    </div>
                    <span>Winter Wear</span>
                </div>
                <div onClick={() => handleclick("Kurta")}>
                    <div>
                        <img src={icon2} alt="" className='nav_image' />
                    </div>
                    <span>Kurta & Sets</span>
                </div>
                <div onClick={() => handleclick("Top and Tees")}>
                    <div>
                        <img src={icon3} alt="" className='nav_image' />
                    </div>
                    <span>Top & Tees </span>
                </div>
                <div onClick={() => handleclick("Saree")}>
                    <div>
                        <img src={icon4} alt="" className='nav_image' />
                    </div>
                    <span style={{ marginLeft: '43px' }}>Sarees</span>
                </div>
                <div onClick={() => handleclick("Jeans")}>
                    <div>
                        <img src={icon5} alt="" className='nav_image' />
                    </div>
                    <p>Jeans & Jeggings</p>
                </div>
                <div onClick={() => handleclick("Fit and Flare")}>
                    <div>
                        <img src={icon6} alt="" className='nav_image' />
                    </div>
                    <p style={{ marginLeft: '37px' }}>Dresses</p>
                </div>
            </div>
            {loadingtime&&<Box sx={{ display: 'flex' }} className='loadingbar'>
                <CircularProgress />
            </Box>}
            {!loadingtime&&<div className="container">
                <div className="row" style={{ margin: '0 auto' }}>
                    {womenfashion.length > 0 ? womenfashion.map((element, index) => {
                        return <div key={index}><Womenitem element={element} /></div>
                    }) : <Notfound />}
                </div>
            </div>}
        </>
    )
}

export default WomenSection