import React from 'react'
import logo from './images/Logo1.gif'
function Loading() {
    return (
        <>
        <div style={{display:"grid",justifyContent:'center',margin:'137px auto'}}>
            <div className="text-center" style={{backgroundColor:'rgb(255 249 249)',height:'20rem',width:'25rem'}}>
                <img src={logo} alt="" style={{height:'14rem',width:'14rem'}} />
                <br />
                <h3>DoorPoint</h3>
                {/* <img src="https://www.linkpicture.com/q/spinner.gif" alt="" /> */}
            </div>
        </div>
        </>
    )
}

export default Loading