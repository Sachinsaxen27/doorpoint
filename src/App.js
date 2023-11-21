import { useState } from 'react';
import './App.css';
import Loading from './Component/Loading';
import Navigation from './Component/Navigation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import signup from './Component/Login/Signup'
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
          </Routes>} 
        </Router>
      </DoorPointState>
    </>
  );
}

export default App;
