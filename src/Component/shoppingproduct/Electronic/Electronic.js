import React, { useContext, useEffect } from 'react';
import ProductFilter from './ProductFilter';
import laptop from '../../images/lap.png'
import head from '../../images/head.png'
import desk from '../../images/desk.png'
import print from '../../images/print.png'
import smart from '../../images/smart.png'
import camera from '../../images/camera.png'
import trimmer from '../../images/trimmer.png'
import mobile from '../../images/mobiles.png'
import './Productstyle.css'
import { Link, useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import DoorPointApi from '../../../ComponentAPI/DoorPointAPI';
import Notfound from '../Notfound';


function Electronic() {
  const context = useContext(DoorPointApi)
  const { showAlert, products, handlefilter, filteritem } = context
  const location = useLocation()
  const handleProductfilter = (msg) => {
    handlefilter(msg)
  }
  const handlefilteroption = (msg,type) => {
    filteritem(msg,type)
  }
  useEffect(() => {
    if (location.pathname === '/electronic') {
      handlefilter('None')
    }
  }, [location.pathname, handlefilter])
  const handleCart = () => {
    if (localStorage.getItem("token")) {
      console.log("SSS")
    }
    else {
      showAlert("Login First", 'danger')
    }
  }

  return (
    <>
      {/* electronicshow */}
      <ProductFilter />
      <div className="my-5 menus">
        &nbsp;
        <div className="mx-4 row text-center">
          <Link to='/camera' className='mx-1' style={{ color: 'black' }}>
            <div className="col column">
              <div className='column_1'>
                <img src={camera} alt="laptop" style={{ width: '5rem', height: '4rem', top: '42px', position: "absolute", right: "31px" }} />
              </div>
              <span className='span_1'> Camera</span>
            </div>
          </Link>

          <div className="col column mx-1">
            <Link to='/electronicshow' style={{ color: 'black' }} onClick={() => { handleProductfilter("Desktop PC") }}>
              <div className='column_1'>
                <img src={desk} alt="laptop" style={{ width: '4rem', height: '4rem', top: '34px', position: "absolute", right: "2.2rem" }} />
              </div>
              <span className='span_1'> Desktop</span>
            </Link>
          </div>
          <div className="col column mx-1">
            <Link to='/allitems' style={{ color: 'black' }} onClick={() => { handlefilteroption('Headphones',"headphonesadd") }}>
              <div className='column_1  '>
                <img src={head} alt="laptop" style={{ width: '4rem', height: '4rem', top: '34px', position: "absolute", right: "2.2rem" }} />
              </div>
              <span className='span_1'>Headphones</span>
            </Link>
          </div>
          <div className="col column mx-1 ">
            <Link to='/electronicshow' style={{ color: 'black' }} onClick={() => { handleProductfilter("Laptop") }}>
              <div className='column_1'>
                <img src={laptop} alt="laptop" style={{ width: '5rem', height: '4rem', top: '34px', position: "absolute", right: "2.2rem" }} />
              </div>
              <span className='span_1'>Laptop</span>
            </Link>
          </div>
          <div className="col column mx-1">
            <Link to='/electronicshow' style={{ color: 'black' }} onClick={() => { handleProductfilter("Mobile") }}>
              <div className='column_1'><img src={mobile} alt="mobile" style={{ width: '5rem', height: '4rem', top: '34px', position: "absolute", right: "2.2rem" }} />
              </div>
              <span className='span_1'>Mobile</span>
            </Link>
          </div>
          <div className="col column mx-1">
            <Link to='/allitems' style={{ color: 'black' }} onClick={() => { handlefilteroption('Printer',"printeradd") }}>
              <div className='column_1'>
                <img src={print} alt="laptop" style={{ width: '5rem', height: '4rem', top: '34px', position: "absolute", right: "2.2rem" }} />
              </div>
              <span className='span_1'>Printer</span>
            </Link>
          </div>
          <div className="col column mx-1">
            <Link to='/allitems' style={{ color: 'black' }} onClick={() => { handlefilteroption('Smartwatches','watchesadd') }}>
              <div className='column_1'>
                <img src={smart} alt="laptop" style={{ width: '4rem', height: '4rem', top: '34px', position: "absolute", right: "2.2rem" }} />
              </div>
              <span className='span_1'>SmartWatch</span>
            </Link>
          </div>
          <div className="col column mx-1">
          <Link to='/allitems' style={{ color: 'black' }} onClick={() => { handlefilteroption('Trimmer',"trimmeradd") }}>
            <div className='column_1'>
              <img src={trimmer} alt="laptop" style={{ width: '5rem', height: '4rem', top: '34px', position: "absolute", right: "2.2rem" }} />
            </div>
            <span className='span_1'>Trimmer</span>
            </Link>
          </div>
        </div>
      </div >
      <div>
        <div className='my-2'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Madhav/Jupiter/Apple/BDOY/price/2Mob_1242x450.gif" alt="" style={{ width: '100%', borderRadius: '30px' }} /></div>
        <div className='my-2'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/July/Attachbanner/D51285990_WLA_Attach_JulyAcc_Mob_Hero_1242x450_2.jpg" style={{ width: '100%', borderRadius: '30px' }} alt="" />
        </div>
        <div className='my-2'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/desktop/newlaunches/PC_dimension_-_1500x300.jpg" style={{ width: '100%', borderRadius: '30px' }} alt="" />
        </div>
        <div className='my-2'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Acc/hp/july/1500x300.jpg" style={{ width: '100%', borderRadius: '30px' }} alt="" />
        </div>
        <div className='my-2'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Tablets/Banner/SamsungA8/Deals_Released_new/D37907631_IN_CEPC_GW_Tablets_creatives_1500x300.jpg" style={{ width: '100%', borderRadius: '30px' }} alt="" />
        </div>
      </div>
      <div className='container text-center my-5'>
        <h3 style={{ fontWeight: "400" }}>Any Electronic Product & Accessories</h3>
        <div className="container row " style={{ backgroundColor: "#fff" }}>
          <div className="col"><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Trust-icons/trusticons_2.jpg' style={{ width: "15rem" }} alt='' /></div>
          <div className="col"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Trust-icons/trusticons_6.jpg" style={{ width: "15rem" }} alt="" /></div>
          <div className="col"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Trust-icons/trusticons_4.jpg" style={{ width: "15rem" }} alt="fast" /></div>
          <div className="col"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Trust-icons/trusticons_5.jpg" style={{ width: "15rem" }} alt="" /></div>
        </div>
      </div>
      <div className='container' >
        <div className="row ">
          {products.length > 0 ? (products).map((element, index) => {
            return <Card sx={{ maxWidth: 260 }} key={index} className='col-4 mx-1 my-2'>
              {element.category === "Mobile" && <CardActionArea style={{ height: '15rem', display: 'flex' }}>
                <CardMedia
                  component="img"
                  height="210"
                  image={element.image}
                  alt="green iguana"
                  className='img-thumbnail'
                  style={{ border: 'none', width: "10rem", height: "12.4rem" }}
                />
              </CardActionArea>}
              {element.category === "Desktop PC" && <CardActionArea style={{ height: '15rem', display: 'flex' }}>
                <CardMedia
                  component="img"
                  height="210"
                  image={element.image}
                  alt="green iguana"
                  className='img-thumbnail'
                  style={{ border: 'none', width: "14rem", height: "9.4rem" }}
                />
              </CardActionArea>}
              {element.category === "Laptop" && <CardActionArea style={{ height: '15rem', display: 'flex' }}>
                <CardMedia
                  component="img"
                  height="210"
                  image={element.image}
                  alt="green iguana"
                  className='img-thumbnail'
                  style={{ border: 'none',height:"9rem",width:'14rem'}}
                />
              </CardActionArea>}
              <Divider />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {(element.name).slice(0, 13)}..
                </Typography>
                <Typography variant="body2" color="text.secondary" className='d-flex justify-content-between' style={{ alignItems: 'center' }}>
                  <strong style={{ fontSize: '30px', fontWeight: "100" }}>
                    &#x20B9;{element.price}
                  </strong>
                  <div className="d-flex ">
                    <FavoriteIcon style={{ color: "red", width: '20px' }} />
                    <ShareSharpIcon style={{ width: '20px' }} />
                  </div>
                </Typography>
              </CardContent>
              <CardActions className='justify-content-between' style={{ position: 'sticky', top: '34.3rem' }}>
                <Button size="small" color="primary" onClick={handleCart}>
                  Add to Cart
                </Button>
                <Button size="small" color="primary" onClick={handleCart}>
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          }) : <Notfound/>}
        </div>
      </div>
    </>
  )
}

export default Electronic