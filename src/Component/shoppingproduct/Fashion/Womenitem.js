import React, { useContext, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import CreateIcon from '@mui/icons-material/Create';
import '../../Slider.css'
import Notfound from '../Notfound';
import Editfashion from './Editfashion'
import Modal from '@mui/material/Modal';
import DoorPointApi from '../../../ComponentAPI/DoorPointAPI';
// import ItemViewPage from '../ItemViewPage';
import { actioncart } from '../../../DoorPoint_State'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
function Womenitem(props) {
    const { element } = props
    const navigate=useNavigate()
    const context = useContext(DoorPointApi)
    const { Add_Cart,showAlert} = context
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(element)
    const dispatch = useDispatch()
    const { ViewItem } = bindActionCreators(actioncart, dispatch)
    const history = useNavigate()
    const elementsend = (element) => {
        localStorage.setItem('value', JSON.stringify(element))
        ViewItem(element)
        history('/itemview')
    }
    const Buy_item = (element) => {

        if (localStorage.token) {
          navigate('/buypage',{state:{item:element}})
        //   console.log(element,'dadsa')
          showAlert('Buying items', 'primary')
        }
        else {
          showAlert('Login first for buying items', 'warning')
        }
      }
    console.log(Array.isArray(element.image))
    return (
        <>
            {/* 3169 */}
            {!element ? (<Notfound />) : (<Card sx={{ maxWidth: 260 }} className='col-4 mx-2 my-2'>
                <CardActionArea onClick={() => { elementsend(element) }} >
                    <div className="text-center">
                        {element.image.length>1?
                            <img src={element.image[0].data} className="img-thumbnail" alt="..." style={{ height: "15rem", border: "none", backgroundColor: "transparent" }} /> : <img src={element.image} className="img-thumbnail" alt="..." style={{ height: "15rem", border: "none", backgroundColor: "transparent" }} />}
                    </div>
                </CardActionArea>
                <Divider />
                <CardContent style={{ cursor: "pointer" }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {element.name ? (element.name).slice(0, 13) : ""}..
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='d-flex justify-content-between' style={{ alignItems: 'center' }}>
                        <strong style={{ fontSize: '30px', fontWeight: "100" }}>
                            &#x20B9;{element.price}
                        </strong>
                        <div className="d-flex ">
                            <FavoriteIcon className='mx-1' style={{ color: "red", width: '20px' }} />
                            <ShareSharpIcon className='mx-1' style={{ width: '20px' }} />
                            <CreateIcon className='mx-1' onClick={handleOpen} />
                        </div>
                    </Typography>
                </CardContent>
                <CardActions className='justify-content-between' style={{ position: 'sticky', top: '34.3rem' }}>
                    <Button size="small" color="primary" onClick={() => { Add_Cart(element, 1) }}>
                        Add to Cart
                    </Button>
                    <Button size="small" color="primary" onClick={()=>{Buy_item(element)}}>
                        Buy Now
                    </Button>
                </CardActions>
            </Card>)}
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <div>
                    <Editfashion element={element} />
                </div>
            </Modal>
        </>
    )
}

export default Womenitem