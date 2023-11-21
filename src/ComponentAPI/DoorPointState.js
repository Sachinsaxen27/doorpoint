import React, { useEffect, useState } from 'react'
import DoorPointApi from "./DoorPointAPI";

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
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json()

    setMyinfo(json)
  }
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      getinfo()
    }
  }, [])
  // FOR PRESENTING ALL ELECTRONIC ITEM
  const [products, setMyproduct] = useState([])
  const[productlist,setMyproductlist]=useState([])
  const[productfilter,setMyProductfilter]=useState("None")
  const [cameralist, setMycameralist] = useState([])
  const [filterlist, setMyfilterlist] = useState([])
  const [filterCamera, setMyFliterCamera] = useState({msg:""})
  const handlefilter=(msg)=>{
    setMyProductfilter(msg)
  }
  const showFliter = (msg,type) => {
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
      console.log(error)
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
  const[filterproducts,setMyFilterproducts]=useState([])
  const[filteroption,setMyfilteroption]=useState({msg:'',type:""})
  const filteritem=(msg,type)=>{
    setMyfilteroption({msg:msg,type:type})
  }
  const Optiongetitem=async()=>{
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
    getcameralist()
    const ProductFilterList=localStorage.getItem('Productlist')
    if(ProductFilterList){
      setMyproductlist(JSON.parse(ProductFilterList))
    }
    getinfocamera()
    const storedFilterList = localStorage.getItem('filterlist');
    if (storedFilterList) {
      setMyfilterlist(JSON.parse(storedFilterList));
    }
    Optiongetitem()
    const FilterProduct=localStorage.getItem('itemlist')
    if(FilterProduct){
      setMyproductlist(JSON.parse(FilterProduct))
    }
    // eslint-disable-next-line 
  }, [filterCamera,productfilter,filteroption])
  // FOR PRESENTING FASHION ITEM
  
  return (
    <>
      <DoorPointApi.Provider value={{ alert, showAlert, info, cameralist, showFliter, filterlist,filterCamera,products,handlefilter,productlist,productfilter,filteritem,filterproducts}}>
        {props.children}
      </DoorPointApi.Provider>
    </>
  )
}

export default DoorPointState