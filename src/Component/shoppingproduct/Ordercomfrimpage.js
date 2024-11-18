import React, { useContext } from 'react'
import './Pages.css'
import DoorPointApi from '../../ComponentAPI/DoorPointAPI'
function Ordercomfrimpage() {
  const {info,currentDate,Daysarr,montharr}=useContext(DoorPointApi)
  let date=new Date()
  let Order_num=Math.floor(Math.random() * 9_000_000_0000000) + 1_000_000_0000000;
  return (
    <>
      <div className='ordercomfirmnotification'>
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-header text-center"><h1>DoorPoint</h1></div>
          <div class="card-body">
            <h5 class="card-title">Thank you {info.name},</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">For Shopping with us</h6>
            <p class="card-text">Your order will be dilvered  by {(Daysarr[currentDate.getDay()]).slice(0,3)}, {currentDate.getDate()} {(montharr[(currentDate.getMonth())]).slice(0,3)},{date.getFullYear()}</p>
            <p>We are pleased to comfirm your order no OD{Order_num}</p>
            <p>Thank you for shopping with DoorPoint!</p>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Ordercomfrimpage