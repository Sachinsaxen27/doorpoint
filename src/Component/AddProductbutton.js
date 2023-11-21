import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import { Divider } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import './Style.css'
import AddElectronic from './AddForm/AddElectronic';
import AddFashion from './AddForm/AddFashion';
import ToysBeauty from './AddForm/ToysBeauty';
import Appliances from './AddForm/Appliances';


const actions = [
    { icon: <AddBusinessTwoToneIcon />, name: 'Add' }
];
function AddProductbutton() {
    // ADD FORM OPTION CHANGEMENT
    const [option, setMyOption] = useState('Mobile')
    const handleoptionChange = (selectedcompany) => {
        setMyOption(selectedcompany)

    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        let model = document.getElementById('card_1')
        if (model.style.display === 'block') {
            setOpen(true)
        }
        else {
            setOpen(false)
        }
    };
    const handleCardclose = (e) => {
        e.preventDefault()
        let model = document.getElementById('card_1')
        if (model.style.display === 'block') {
            model.style.display = 'none'
            setOpen(false)
        }
    }
    const handleCardopen = () => {
        let model = document.getElementById('card_1')
        if (model.style.display === 'none') {
            model.style.display = 'block'
            // document.body.style.opacity='0'  
        }
    }

    return (
        <>
            <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }} style={{ position: 'fixed', bottom: "20px", right: "10px", zIndex: '1000' }}>
                <Backdrop open={open} />
                <SpeedDial
                    ariaLabel="SpeedDial tooltip example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                    onMouseLeave={handleClose}                                                                        
                    onOpen={handleOpen}                                                      
                    open={open}                                                               
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={handleCardopen}
                        />
                    ))}
                </SpeedDial>
            </Box>
            <div id='card_1' className="card" style={{ width: "42rem", height: '31rem', display: "none", position: 'fixed', top: '6rem', left: '20rem', zIndex: '10000', overflow: 'auto ', overflowX: 'hidden',top:"30px" }}>
            <CancelIcon onClick={handleCardclose} style={{position:'fixed',left:'59rem',cursor:'pointer',top:"37px"}}/>
                <div className="card-body">
                    <div className="d-flex text-center">
                        <h6 className="card-title text-center mx-3" onClick={() => handleoptionChange('Mobile')} style={{ cursor: "pointer" }}>Add Electronic</h6>
                        <h6 className="card-title text-center mx-3" onClick={() => handleoptionChange('Clothes')} style={{ cursor: "pointer" }}>Add Clothes</h6>
                        <h6 className="card-title text-center mx-3" onClick={() => handleoptionChange('Toys')} style={{ cursor: "pointer" }}>Add Toys,Books</h6>
                        <h6 className="card-title text-center mx-3" onClick={() => handleoptionChange('Appliances')} style={{ cursor: "pointer" }}>Add Home Appliances</h6>
                    </div>
                    <Divider />
                    {/* ADD MOBILE AWECODE START */}
                    {option === 'Mobile' && <AddElectronic />}
                    {/* ADD MOBILE FORM END HERE */}
                    {/* ADD FASHION CODE START */}
                    {/* http://localhost:5000/api/fashionadd/getclothes */}
                    {option === 'Clothes' && <AddFashion />}
                    {/* ADD FASHION FORM END HERE */}
                    {/* ADD TOYS AND BEAUTY CODE START */}
                    {/* http://localhost:5000/api/fashionadd/getclothes */}
                    {option === 'Toys' && <ToysBeauty />}
                    {/* ADD FASHION FORM END HERE */}
                    {option === 'Appliances' && <Appliances />}
                    {/* ADD APPLIANCES FORM END HERE */}

                </div>
            </div>

        </>
    )
}

export default AddProductbutton

