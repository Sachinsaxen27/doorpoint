import React, { useEffect, useState } from 'react'
import icon1 from '../../images/icon7.jpg'
import icon2 from '../../images/icon8.jpg'
import icon3 from '../../images/icon9.jpg'
import icon4 from '../../images/icon10.jpg'
import icon5 from '../../images/icon11.jpg'
import icon6 from '../../images/icon12.jpg'
import Womenitem from './Womenitem'
import '../../Slider.css'
import Notfound from '../Notfound'
function HandbagSection() {
    const [option, setMyoption] = useState("Shoulder Bag")
    const handleclick = (value) => {
        setMyoption(value)
    }
    const [womenbag, setMywomenbag] = useState([])
    const getwomenlist = async () => {
        const response = await fetch('http://localhost:5000/api/fashionadd/getwomenbag', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        const resultlist=Object.values(json)
        setMywomenbag(resultlist[0])
    }
    useEffect(()=>{
        getwomenlist()
        // eslint-disable-next-line
    },[option])
    return (
        <>
            <div className="container women_hand">
                <h6 style={{marginLeft:"6px"}}>Shop By Category:</h6>
                <div className='women_hand1'>
                    <div onClick={() => handleclick("Shoulder Bag")}>
                        <div>
                            <img src={icon1} alt="" className='mx-1 nav_image' />
                        </div>
                    </div>
                    <div onClick={() => handleclick("Hand-Held")}>
                        <div>
                            <img src={icon2} alt="" className='mx-1 nav_image' />
                        </div>
                    </div>
                    <div onClick={() => handleclick("Totes")}>
                        <div>
                            <img src={icon3} alt="" className='mx-1 nav_image' />
                        </div>
                    </div>
                    <div onClick={() => handleclick("Sling Bag")}>
                        <div>
                            <img src={icon4} alt="" className='mx-1 nav_image' />
                        </div>
                    </div>
                    <div onClick={() => handleclick("Wallet")}>
                        <div>
                            <img src={icon5} alt="" className='mx-1 nav_image' />
                        </div>
                    </div>
                    <div onClick={() => handleclick("BackPack")}>
                        <div>
                            <img src={icon6} alt="" className='mx-1 nav_image' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-2">
                <div className="row" style={{ margin: '0 auto' }}>
                    {womenbag?.map((element, index) => {
                        if( element.bagtype===option){
                            return <Womenitem element={element} key={index} />
                        }
                        return null

                    })}
                </div>
            </div>
        </>
    )
}

export default HandbagSection