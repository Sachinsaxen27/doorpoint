import React from 'react'
import SlideShow from './SlideShow'
import OptionCard from './OptionCard'
import OptionCard2 from './OptionCard2'
import OptionCard3 from './OptionCard3'
import OptionFooter from './OptionFooter'

export default function SecondNav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#3c4e62",height:"34px",marginTop:'55px'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{fontSize:"16px",color:'white'}}><i className="fa-solid fa-bars" style={{color: "#ffffff"}}></i> <span style={{fontSize:'14px'}}>All</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/" style={{color:"white",fontSize:"14px"}}>DoorPoint MiniTV</a>
        <a className="nav-link" href="/" style={{color:"white",fontSize:"14px"}}>Sell</a>
        <a className="nav-link" href="/" style={{color:"white",fontSize:"14px"}}>Best Seller</a>
        <a className="nav-link " href="/" style={{color:"white",fontSize:"14px"}}>Today's Deal</a>
        <a className="nav-link " href="/" style={{color:"white",fontSize:"14px"}}>Mobile</a>
        <a className="nav-link " href="/" style={{color:"white",fontSize:"14px"}}>New Releases</a>
        <a className="nav-link " href="/" style={{color:"white",fontSize:"14px"}}>Customer Service</a>
      </div>
    </div>
  </div>
</nav>

<SlideShow/>
<OptionCard/>
<OptionCard2/>
<OptionCard3/>
<OptionFooter/>
    </>
  )
}
