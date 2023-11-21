  import React, { useContext, useEffect } from 'react'
import './Productstyle.css'
import DoorPointApi from '../../../ComponentAPI/DoorPointAPI';
import CardProduct from './CardProduct';
import { Link, useLocation } from 'react-router-dom';
function Camera() {
  const context = useContext(DoorPointApi)
  const { cameralist, showFliter } = context
  const location = useLocation()
  const handlepage = (selectedinput) => {
    showFliter(selectedinput)
  }
  console.log(cameralist,'s')
  useEffect(() => {
    if (location.pathname === '/camera') {
      showFliter("None")
    }
  }, [location.pathname, showFliter])

  return (
    <>
      &nbsp;
      <div className=" container row my-5 mx-5">
        <div className="col" >
          <Link to='/showcase' style={{ textDecoration: "none", color: 'black' }}>
            <div className='categoryitem' onClick={() => { handlepage('DSLR & Mirrorless') }}>
              <img src="https://m.media-amazon.com/images/G/31/img23/Camera/Shop_by_cat/shop_by_catagory_1._CB594526489_.png" alt="" style={{ width: '8rem' }} />
              <span>DSLR & Mirrorless</span>
            </div>
          </Link>
        </div>
        <div className="col">
          <Link to='/showcase' style={{ textDecoration: "none", color: 'black' }}>
            <div className='categoryitem' onClick={() => { handlepage('Action Camera') }}>
              <img src="https://m.media-amazon.com/images/G/31/IMG_22/Varun/shop_by_catagory_action_cam._CB593657321_.png" alt="" style={{ width: '8rem' }} />
              <span>Aciton Camera</span>
            </div>
          </Link>
        </div>
        <div className="col" >
          <Link to='/showcase' style={{ textDecoration: "none", color: 'black' }}>
            <div className='categoryitem' onClick={() => { handlepage('Instant Camera') }}>
              <img src="https://m.media-amazon.com/images/G/31/camera/securefest/updated/new/shopbycat/shop_by_catagory_3._CB612655570_.png" alt="" style={{ width: '8rem', }} />
              <span>Instant Cameras</span>
            </div>
          </Link>
        </div>
        <div className="col" >
          <Link to='/showcase' style={{ textDecoration: "none", color: 'black' }}>
            <div className='categoryitem' onClick={() => { handlepage('Car Dash Camera') }}>
              <img src="https://m.media-amazon.com/images/G/31/camera/securefest/updated/new/shopbycat/shop_by_catagory_4._CB612655570_.png" alt="" style={{ width: '8rem' }} />
              <span>Car Dash Camera</span>
            </div>
          </Link>
        </div>
        <div className="col">
          <Link to='/showcase' style={{ textDecoration: "none", color: 'black' }}>
            <div className='categoryitem' onClick={() => { handlepage('Wired Security Camera') }}>
              <img src="https://m.media-amazon.com/images/G/31/camera/securefest/updated/new/shopbycat/shop_by_catagory_4._CB612655570_.png" alt="" style={{ width: '8rem' }} />
              <span style={{ width: '8rem', textAlign: "center" }}>Wired Security Camera</span>
            </div>
          </Link>
        </div>
        <div className="col">
          <Link to='/showcase' style={{ textDecoration: "none", color: 'black' }}>
            <div className='categoryitem' onClick={() => { handlepage("Wifi Security Camera") }}>
              <img src="https://m.media-amazon.com/images/G/31/camera/securefest/updated/new/shopbycat/shop_by_catagory_11._CB612655570_.png" alt="" style={{ width: '8rem' }} />
              <span style={{ width: '8rem', textAlign: 'center' }}>Wifi Security Camera</span>
            </div>
          </Link>
        </div>
      </div>
      <div className='container'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Cameras/Vbuyingguide/D13974280_IN_CECAM_BuyingGuide_1500X200_Final.jpg" alt="" style={{ width: '100%', marginBottom: '2px', cursor: 'pointer' }} />
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/camera/ibg/1500x300_cam.jpg" alt="" style={{ width: '100%', marginBottom: '2px', cursor: 'pointer' }} />
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Security_camera/Artboard_3.jpg" alt="" style={{ width: '100%', marginBottom: '2px', cursor: 'pointer' }} />
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Cat_Intgration/CEPC/Camera_accessories_1500x300.jpg" alt="" style={{ width: '100%', marginBottom: '2px', cursor: 'pointer' }} />
      </div>
      <div style={{ display: 'grid', justifyContent: 'center' }}>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Jupiter/23/KS/Laptops/MSO/Container/Inputs/Revised/Bigbet_T3_8.png" alt="" />
      </div>
      &nbsp;
      <div className='container row mx-5' style={{ position: 'absolute', left: '41px' }}>
        {cameralist && (cameralist)?.map((element, index) => {
          return <CardProduct element={element} key={index} />
          //  <Card sx={{ maxWidth: 260 }} key={index} className='col-4 mx-1 my-2'>
          //   <CardActionArea>
          //     <CardMedia
          //       component="img"
          //       height="200"
          //       image={element.image}
          //       alt="green iguana"
          //       style={{ width: '13rem', position: 'relative', left: '27px' }}
          //     />
          //   </CardActionArea>
          //   <Divider />
          //   <CardContent>
          //     <Typography gutterBottom variant="h5" component="div">
          //      {element.company} {element.name}
          //     </Typography>
          //     <Typography variant="body2" color="text.secondary">
          //       {(element.information).slice(0, 50)}...
          //     </Typography>
          //     <Typography variant="body2" color="text.secondary">
          //       <strong>
          //         &#x20B9;{element.price}
          //       </strong>
          //     </Typography>
          //   </CardContent>
          //   <Rating name="read-only" value={3.5} precision={0.5} readOnly style={{ position: "relative", top: '0.7rem', left: '10.1px', fontSize: '16px' }} />
          //   <CardActions style={{ position: 'sticky', top: '34.3rem' }}>
          //     <Button size="small" color="primary" onClick={handleCart}>
          //       Add to Cart
          //     </Button>
          //   </CardActions>
          // </Card>
        })}
      </div>
    </>
  )
}

export default Camera