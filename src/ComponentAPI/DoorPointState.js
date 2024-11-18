import React, { useEffect, useState } from 'react'
import DoorPointApi from "./DoorPointAPI";
import axios from 'axios';
function DoorPointState(props) {
  // FOR ALTER WARNING OR UPDATES
  const [alert, setMyAlert] = useState({ msg: null, type: null })
  const showAlert = (message, type) => {
    setMyAlert({ msg: message, type: type })
    setTimeout(() => {
      setMyAlert({ msg: null, type: null })
    }, 2000)
  }
  // FOR LOGIN USER
  const [info, setMyinfo] = useState({})
  const getinfo = async () => {
    const response = await fetch("http://localhost:5000/api/userlogin/getuserdata", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
      },
    });
    const json = await response.json()
    // console.log(json)
    if (json) {
      setMyinfo(json)
    }
  }
  // FOR PRESENTING ALL ELECTRONIC ITEM
  const [products, setMyproduct] = useState([])
  const [productlist, setMyproductlist] = useState([])
  const [productfilter, setMyProductfilter] = useState("None")
  const [cameralist, setMycameralist] = useState([])
  const [filterlist, setMyfilterlist] = useState([])
  const [filterCamera, setMyFliterCamera] = useState({ msg: "" })
  const handlefilter = (msg) => {
    setMyProductfilter(msg)
  }
  const showFliter = (msg, type) => {
    setMyFliterCamera(msg)
  }
  const getinfocamera = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/productadd/getmobile/${productfilter}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const json = await response.json()
      if (productfilter === "None") {
        setMyproduct(json)
        // localStorage.setItem("cameralist",JSON.stringify(json))
      }
      else {
        setMyproductlist(json)
        localStorage.setItem("Productlist", JSON.stringify(json))
      }
    } catch (error) {
      console.error(error)
    }
  }
  const getcameralist = async () => {
    const response = await fetch(`http://localhost:5000/api/cameraadd/getcamera/${filterCamera}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json()
    if (filterCamera === "None") {
      setMycameralist(json)
      // localStorage.setItem("cameralist",JSON.stringify(json))
    }
    else {
      setMyfilterlist(json)
      localStorage.setItem("filterlist", JSON.stringify(json))
    }
  }
  const [filterproducts, setMyFilterproducts] = useState([])
  const [filteroption, setMyfilteroption] = useState({ msg: '', type: "" })
  const filteritem = (msg, type) => {
    setMyfilteroption({ msg: msg, type: type })
  }
  const Optiongetitem = async () => {
    const response = await fetch(`http://localhost:5000/api/${filteroption.type}/filtercategory/${filteroption.msg}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json()
    setMyFilterproducts(json)
    localStorage.setItem("itemlist", JSON.stringify(json))
  }
  useEffect(() => {
    let authtoken = localStorage.getItem('token')
    if (authtoken !== null) {
      getinfo()
      // eslint-disable-next-line
    }
    getcameralist()
    const ProductFilterList = localStorage.getItem('Productlist')
    if (ProductFilterList) {
      setMyproductlist(JSON.parse(ProductFilterList))
    }
    getinfocamera()
    const storedFilterList = localStorage.getItem('filterlist');
    if (storedFilterList) {
      setMyfilterlist(JSON.parse(storedFilterList));
    }
    if (filteroption.msg !== '') {
      Optiongetitem()
    }
    const FilterProduct = localStorage.getItem('itemlist')
    if (FilterProduct) {
      setMyproductlist(JSON.parse(FilterProduct))
    }
    // eslint-disable-next-line 
  }, [filterCamera, productfilter, filteroption])
  const Add_Cart = async (element, quantity) => {
    if (localStorage.token) {
      const response = await fetch('http://localhost:5000/api/addcart/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ element, quantity: quantity })
      });
      if (response.ok) {
        getcart()
      } else {
        showAlert("Already Exist", 'danger')
      }
    }
    else {
      showAlert("Login first for adding in cart", 'danger')
    }
  }
  const [cartlen, setMycartlen] = useState(0)
  const [Mycart_list, setMyCart_List] = useState('')
  const getcart = async () => {
    const response = await fetch('http://localhost:5000/api/addcart/getcart', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'auth-token': localStorage.getItem('token')
      }
    })
    if (response.ok) {
      const json = await response.json()
      setMycartlen(json.getcart)
      setMyCart_List(json.getcart)
    } else {
      setMycartlen(0)
    }
  }
  const clearCartitem = async (id) => {
    const response = await fetch(`http://localhost:5000/api/addcart/deleteAllItem/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json = await response.json()
    // console.log(json)
    if (json) {
      setMycartlen(0)
      // console.log("success", json)
      // console.log('success')
    }
    else {
      console.log("unsuccess")
      showAlert("Item is already not available in the cart", 'danger')
    }
  }
  const DeletItem = async (id) => {
    // console.log(id)
    const response = await fetch(`http://localhost:5000/api/addcart/deleteitem/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
    const json = await response.json()
    // console.log(json)
    if (json) {
      console.log(json.success)
      getcart()
      showAlert("Item deleted from the cart", 'success')
    }
    else {
      console.log("Item is already available in the cart", 'danger')
    }
  }
  useEffect(() => {
    if (localStorage.token) {
      getcart()
    } else {
      setMycartlen(0)
    }
    // eslint-disable-next-line
  }, [localStorage.token])
  const [position, setMyposition] = useState({ lat: 0, long: 0 })
  const [locationname, setLocationName] = useState({ loca: "Hello", load: "Select Your address" })
  const [postcode, setMypostcode] = useState()
  const getlatitude = (lat, long) => {
    // console.log('enter', lat, long)
    setMyposition({ lat: lat, long: long })
  }
  useEffect(() => {
    if (position.lat !== 0 && position.long !== 0) {
      getareaname()
    }
    // eslint-disable-next-line
  }, [position.lat])
  const getareaname = async () => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${position.lat}&lon=${position.long}&format=json`);
      setLocationName({ loca: "Delivering at " + response.data.address.city, load: "Updated Location" });
      // console.log(response.data)
      setMypostcode(response.data.address.postcode)
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  }
  let date = new Date()
  date.setDate(date.getDate() + 1);
  let montharr = ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let Daysarr = ["Sunday", "Monday", "Tuesday", 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const [numberDate, setMyNumber] = useState()
  useEffect(() => {
    let n = Math.floor(Math.random() * 10) + 1
    if (n === 0 || n === 1 || n === 10) {
      setMyNumber(2)
    }
    else {
      setMyNumber(n)
    }
    return () => clearTimeout(n)
  }, [])
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + numberDate);
  return (
    <>
      <DoorPointApi.Provider value={{clearCartitem, Mycart_list, currentDate, Daysarr, montharr, getinfo, getcart, alert, locationname, getlatitude, showAlert, postcode, info, cameralist, showFliter, cartlen, Add_Cart, filterlist, filterCamera, products, handlefilter, productlist, productfilter, filteritem, filterproducts, DeletItem }}>
        {props.children}
      </DoorPointApi.Provider>
    </>
  )
}

export default DoorPointState