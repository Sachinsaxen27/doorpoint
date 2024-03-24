import React, { useContext} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Rating from '@mui/material/Rating';
import { Button, CardActionArea, CardActions, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import DoorPointApi from '../../../ComponentAPI/DoorPointAPI';
import Notfound from '../Notfound';

function AllItem() {
    const context = useContext(DoorPointApi)
    const history = useNavigate()
    const { filterproducts, showAlert } = context
    const handleCart = () => {
        if (localStorage.getItem("token")) {
        }
        else {
            history('/signin')
            showAlert("Login First", 'danger')
        }
    }
  return (
    <>
    &nbsp;
    <div className='container row mx-5 my-5'>
                {filterproducts.length > 0 ? (filterproducts).map((element, index) => {
                    return <div key={index} className='mx-1'>
                        <Card sx={{ maxWidth: 255, maxHeight: 390, minHeight: 390 }} className=' card col-4 mx-2 my-2'>
                            {element.category==='Trimmer'&& <CardActionArea style={{display:'flex'}}>
                                <CardMedia
                                    component="img"
                                    height="210"
                                    image={element.image}
                                    alt="green iguana"
                                    className='img-thumbnail'
                                    style={{ border: 'none' }}
                                />
                            </CardActionArea>}
                            {element.category === 'Smartwatches' && <CardActionArea style={{display:'flex'}}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={element.image}
                                    alt="green iguana"
                                    className='img-thumbnail'
                                    style={{ border: 'none' ,width:'12rem'}}
                                />
                            </CardActionArea>}
                            {element.category === 'Headphones' && <CardActionArea style={{height:'15rem',display:'flex'}} >
                                <CardMedia
                                    component="img"
                                    height="145"
                                    image={element.image}
                                    alt="green iguana"
                                    className='img-thumbail'
                                    style={{ border: 'none',width: '9rem' }}
                                />
                            </CardActionArea>}
                            {element.category === 'Printer' && <CardActionArea style={{height:'15rem',display:'flex'}}>
                                <img src={element.image} alt="" className='img-thumbnail' style={{border:"none"}} />
                            </CardActionArea>}
                            <Divider />
                            <CardContent className="card-body">
                                <Typography gutterBottom variant="h5" component="div" className='card-title'>
                                    {element.company} {(element.name).slice(0, 6)}
                                </Typography>
                                <Typography variant="body2" color="text.secondary"className='d-flex justify-content-between' style={{alignItems:'center'}}>
                                    <strong style={{fontSize:'30px',fontWeight:"100"}}>
                                        &#x20B9;{element.price}
                                    </strong>
                                    <div className="d-flex ">
                                        <FavoriteIcon style={{ color: "red" ,width:'20px'}} />
                                        <ShareSharpIcon  style={{width:'20px'}}/>
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
                    </div>
                }) : <Notfound/>}
            </div>
    </>
  )
}

export default AllItem