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
    console.log(json)
    setMyinfo(json)
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
  const [cartlen, setMycartlen] = useState()
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
    } else {
      setMycartlen(0)
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
    console.log('enter', lat, long)
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
      // console.log(response)
      console.log(response.data)
      setMypostcode(response.data.address.postcode)
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  }
  return (
    <>
      <DoorPointApi.Provider value={{ getinfo, getcart, alert, locationname, getlatitude, showAlert, postcode, info, cameralist, showFliter, cartlen, Add_Cart, filterlist, filterCamera, products, handlefilter, productlist, productfilter, filteritem, filterproducts }}>
        {props.children}
      </DoorPointApi.Provider>
    </>
  )
}

export default DoorPointState