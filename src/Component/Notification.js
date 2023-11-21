import React, { useContext, useEffect, useState } from 'react'
import DoorPointAPI from '../ComponentAPI/DoorPointAPI'
import CloseIcon from '@mui/icons-material/Close';

function Notification() {
    // const [open, setOpen] = useState(true);

    const context = useContext(DoorPointAPI)
    const { alert} = context
    useEffect(()=>{
        if(alert.msg){
            setMyopen(true)
        }
    },[alert.msg])
    const [open,setMyopen]=useState(true)
    const handlealert=()=>{
        setMyopen(false)
    }
    return (
        <>
            {(alert.msg && open) && <div id='notify' style={{ height: "62px", width: '24rem', position: 'fixed', top: "110px", right: '1rem', zIndex: '1000000' }}>
            <div className={`alert alert-${alert.type} d-flex justify-content-between text-center`} role="alert">
                    {alert.msg}
        <span role="button" className="btn-close" style={{cursor:"pointer"}} onClick={handlealert}><CloseIcon/></span>
            </div>
            </div >}
        </>
    )
}

export default Notification