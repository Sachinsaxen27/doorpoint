import { useState } from 'react';
import './App.css';
import Loading from './Component/Loading';
import Navigation from './Component/Navigation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from './Component/Login/Signin';
import SecondNav from './Component/SecondNav'
import Bsignup from './Component/Login/Bsignup';
import Signup from './Component/Login/signup';
import Bsignin from './Component/Login/Bsignin';
import DoorPointState from './ComponentAPI/DoorPointState';
import Electronic from './Component/shoppingproduct/Electronic/Electronic';
import Camera from './Component/shoppingproduct/Electronic/Camera';
import Allelectronic from './Component/shoppingproduct/Electronic/Allelectronic';
import AllItem from './Component/shoppingproduct/Electronic/AllItem';
import AllProductshowcase from './Component/shoppingproduct/Electronic/AllProductshowcase'
import FashionSection from './Component/shoppingproduct/Fashion/FashionSection';
import WomenSection from './Component/shoppingproduct/Fashion/WomenSection';
import HandbagSection from './Component/shoppingproduct/Fashion/HandbagSection';
import Groomingitem from './Component/shoppingproduct/Fashion/Groomingitem';
import Groom1 from './Component/shoppingproduct/Fashion/Groom1';
import CartList from './Component/shoppingproduct/CartList';
import ItemViewPage from './Component/shoppingproduct/ItemViewPage';
import Buypage from './Component/shoppingproduct/Fashion/Buypage';
import Profile from './Component/Profile/Profile';
import Ordercomfrimpage from './Component/shoppingproduct/Ordercomfrimpage';
function App() {
  const [loader, setmyloader] = useState(true)
  const [Store, setmyStore] = useState(false)
  setTimeout(() => {
    setmyloader(false)
    setmyStore(true)
  }, 2000);
  return (
    <>
      <DoorPointState>
        <Router>
          {loader && <Loading />}
          {Store && <Navigation />}
          {Store && <Routes>
              <Route exact path='/' element={<SecondNav />}></Route>
              <Route exact path='/signin' element={<Signin />}></Route>
              <Route exact path='/signup' element={<Signup />}></Route>
              <Route exact path='/bsignup' element={<Bsignup />}></Route>
              <Route exact path='/bsignin' element={<Bsignin />}></Route>
              <Route exact path='/electronic' element={<Electronic/>}></Route>
              <Route exact path='/camera' element={<Camera/>}></Route>
              <Route exact path='/showcase' element={<AllProductshowcase/>}></Route>
              <Route exact path='/electronicshow' element={<Allelectronic/>}></Route>
              <Route exact path='/allitems' element={<AllItem/>}></Route>
              <Route exact path='/fashionsection' element={<FashionSection/>}></Route>
              <Route exact path='/women' element={<WomenSection/>}></Route>
              <Route exact path='/handbag' element={<HandbagSection/>}></Route>
              <Route exact path='/grooming' element={<Groomingitem/>}></Route>
              <Route exxact path='/skin' element={<Groom1/>}></Route>
              <Route exxact path='/cartpage' element={<CartList/>}></Route>
              <Route exxact path='/itemview' element={<ItemViewPage/>}></Route>
              <Route exxact path='/buypage' element={<Buypage/>}></Route>
              <Route exxact path='/profile' element={<Profile/>}></Route>
              <Route exxact path='/comfirm' element={<Ordercomfrimpage/>}></Route>
          </Routes>}
        </Router>
      </DoorPointState>
    </>
  );
}

export default App;
