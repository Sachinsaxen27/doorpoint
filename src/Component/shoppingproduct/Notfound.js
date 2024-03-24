import React from 'react'
import notfound  from '../images/item.avif'
import { Link } from 'react-router-dom'

function Notfound() {
    return (
        <>
            <div style={{ margin: "0 auto" }}>
                <img src={notfound} alt="Not Found" style={{ width: '40rem', height: '20rem' }} />
                <div className="container mx-5">
                    <h1 style={{ fontWeight: '100', fontSize: "100px" }}>Sorry</h1>
                    <h5 style={{ fontWeight: '100', fontSize: '25px' }}>We Couldn't found the item</h5>
                    <h6 style={{ fontWeight: '100', fontSize: '25px' }}>Try seraching or go to <Link to='/' style={{ textDecoration: 'none' }}>DoorPoint's Home Page</Link> </h6>
                </div>
            </div>
        </>
    )
}

export default Notfound