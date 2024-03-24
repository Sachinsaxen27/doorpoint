import React, { useEffect, useState } from 'react'
import icon1 from '../../images/icon34.jpg'
import icon2 from '../../images/icon35.jpg'
import icon3 from '../../images/icon36.jpg'
import icon4 from '../../images/icon37.jpg'
import icon5 from '../../images/icon38.jpg'
import icon6 from '../../images/icon39.jpg'
import icon7 from '../../images/icon40.jpg'
import icon8 from '../../images/icon41.jpg'
import icon9 from '../../images/icon42.jpg'
import icon10 from '../../images/icon43.jpg'
import icon11 from '../../images/icon44.jpg'
import icon12 from '../../images/icon45.jpg'
import '../../Slider.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import 'react-multi-carousel/lib/styles.css'
import Womenitem from './Womenitem'
function Groom1() {
    const [option, setMyoption] = useState("FaceWash")
    const handleclick = (value) => {
        setMyoption(value)
    }
    // const [cate, setMYcate] = useState('face')
    // const handlecate = (value) => {
    //     setMYcate(value)
    // }
    const [panel, setMypanel] = useState(false)
    const handlechange = (panel) => (isexpand) => {
        setMypanel(isexpand ? panel : false)
    }
    const [womenbag, setMywomenbag] = useState([])
    const getwomenlist = async () => {
        const response = await fetch('http://localhost:5000/api/fashionadd/getgrooming', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        const resultlist = Object.values(json)
        setMywomenbag(resultlist[0])
    }
    useEffect(() => {
        if (womenbag.length === 0) {
            getwomenlist()
        }
        // eslint-disable-next-line
    }, [womenbag])
    return (
        <>

            <div className="container women_groom_skin">
                <div>
                    <Accordion expanded={panel === 'panel1'} onChange={handlechange("panel1")}>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>Skincare for Face</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='women_skin_bag'>
                                <div onClick={() => handleclick("FaceWash")} className='skin_box mx-1'>
                                    <div>
                                        <img src={icon1} alt="" className='skin_groom mx-1' />
                                    </div>
                                    <span>Face washes & Scrubs</span>
                                </div>
                                <div onClick={() => handleclick("Cream")} className='skin_box mx-1'>
                                    <div>
                                        <img src={icon2} alt="" className='skin_groom mx-1' />
                                    </div>
                                    <span>Cream & Moisturizers</span>
                                </div>
                                <div onClick={() => handleclick("Sunscreen")} className='skin_box mx-1'>
                                    <div>
                                        <img src={icon3} alt="" className='skin_groom mx-1' />
                                    </div>
                                    <span>Sunscreens</span>
                                </div>
                                <div onClick={() => handleclick("FaceMask")} className='skin_box mx-1'>
                                    <div>
                                        <img src={icon4} alt="" className='skin_groom mx-1' />
                                    </div>
                                    <span>Face masks & Sheets</span>
                                </div>  
                                <div onClick={() => handleclick("Toner")} className='skin_box mx-1'>
                                    <div>
                                        <img src={icon5} alt="" className='skin_groom mx-1' />
                                    </div>
                                    <span>Toners</span>
                                </div>
                                <div onClick={() => handleclick("Facial tissues")} className='skin_box mx-1'>
                                    <div>
                                        <img src={icon6} alt="" className='skin_groom mx-1' />
                                    </div>
                                    <span>Facial tissues & Wipes</span>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={panel === 'panel2'} onChange={handlechange("panel2")}>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography>Skincare for Body</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='women_skin_bag'>
                                <div onClick={() => handleclick("Shoulder Bag")} className='skin_box mx-1'>
                                    <div>
                                        <img src={icon7} alt="" className='skin_groom mx-1' />
                                    </div>
                                    <span>Body lotions</span>
                                </div>
                                <div onClick={() => handleclick("Hand-Held")} className='skin_box mx-1'>
                                    <div>
                                        <img src={icon8} alt="" className='skin_groom mx-1' />
                                    </div>
                                    <span>Body oils</span>
                                </div>
                                <div onClick={() => handleclick("Totes")} className='skin_box mx-1'>
                                    <div>
                                        <img src={icon9} alt="" className='skin_groom mx-1' />
                                    </div>
                                    <span>Hand cream & lotions</span>
                                </div>
                                <div onClick={() => handleclick("Sling Bag")} className='skin_box mx-1'>
                                    <div>
                                        <img src={icon10} alt="" className='skin_groom mx-1' />
                                    </div>
                                    <span>Talcum powder</span>
                                </div>
                                <div onClick={() => handleclick("Wallet")} className='skin_box mx-1'>
                                    <div>
                                        <img src={icon11} alt="" className='skin_groom mx-1' />
                                    </div>
                                    <span>Body butters</span>
                                </div>
                                <div onClick={() => handleclick("BackPack")} className='skin_box mx-1'>
                                    <div>
                                        <img src={icon12} alt="" className='skin_groom mx-1' />
                                    </div>
                                    <span>Body creams</span>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div className="container my-2">
                <div className="row" style={{ margin: '0 auto' }}>
                    {womenbag?.map((element, index) => {
                        if (element.groomingtype === option) {
                            return <Womenitem element={element} />
                        }
                        return null
                    })}
                </div>
            </div>
            {/* {womenbag?.map((element, index) => {
                if (Array.isArray(element.image)) {
                    if (element.image.length === 1) {
                        return <div key={index}>
                            <img src={element.image} className="img-thumbnail" alt="..." style={{ height: "15rem", border: "none", backgroundColor: "transparent" }} />
                        </div>
                    }
                    else{

                        return (
                            <div>
                            {element.image.map((item) => (
                                <img src={item.data} className="img-thumbnail" alt="..." style={{ height: "15rem", border: "none", backgroundColor: "transparent" }} />
                                )
                                )}
                        </div>
                    )
                }
                }
                return null
            })} */}


        </>
    )
}

export default Groom1