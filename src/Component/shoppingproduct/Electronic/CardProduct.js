import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@mui/material';
import DoorPointApi from '../../../ComponentAPI/DoorPointAPI';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';

function CardProduct(props) {
    const context = useContext(DoorPointApi)
    const { showAlert } = context
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
            <Card sx={{ maxWidth: 260 }} className='col-4 mx-1 my-2'>
                {props.element.cameratype === 'DSLR & Mirrorless' && <CardActionArea style={{ height: '15rem' }}>
                    <CardMedia
                        component="img"
                        height="210"
                        image={props.element.image}
                        alt="green iguana"
                        style={{ border: 'none' }}
                    />
                </CardActionArea>}
                {props.element.cameratype === 'Instant Camera' && <CardActionArea style={{ height: '15rem' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={props.element.image}
                        alt="green iguana"
                        className='img-thumbnail'
                        style={{ border: 'none' }}
                    />
                </CardActionArea>}
                {props.element.cameratype === 'Action Camera' && <CardActionArea style={{ height: '15rem' }} >
                    <CardMedia
                        component="img"
                        height="145"
                        image={props.element.image}
                        alt="green iguana"
                        className='img-thumbail'
                        style={{ border: 'none', position: 'relative', width: '16rem', right: '23px' }}
                    />
                </CardActionArea>}
                {props.element.cameratype === 'Car Dash Camera' && <CardActionArea style={{ height: '15rem' }}>
                    <img src={props.element.image} alt="" className='img-thumbnail' style={{ border: "none" }} />
                    {/* <CardMedia
                                    component="img"
                                    height="200"
                                    image={props.element.image}
                                    alt="green iguana"
                                    className='img-thumbnail'
                                    style={{ border: 'none'}}
                                /> */}
                </CardActionArea>}
                {props.element.cameratype === 'Wired Security Camera' && <CardActionArea style={{ height: '15rem' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={props.element.image}
                        alt="green iguana"
                        className='img-thumbnail'
                        style={{ border: 'none' }}
                    />
                </CardActionArea>}
                {props.element.cameratype === 'Wifi Security Camera' && <CardActionArea style={{ height: '15rem', display: 'flex' }} >
                    <CardMedia
                        component="img"
                        height="150"
                        image={props.element.image}
                        alt="green iguana"
                        className='img-thumbnail'
                        style={{ border: 'none', width: "8rem", height: "12.4rem" }}
                    />
                </CardActionArea>}
                <Divider />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {(props.element.name).slice(0, 13)}..
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='d-flex justify-content-between' style={{ alignItems: 'center' }}>
                        <strong style={{ fontSize: '30px', fontWeight: "100" }}>
                            &#x20B9;{props.element.price}
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
        </>
    )
}

export default CardProduct