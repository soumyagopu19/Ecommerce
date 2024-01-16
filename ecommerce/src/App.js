import React, { lazy ,Suspense,useEffect} from 'react';
import { Route, Routes,BrowserRouter, Redirect } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import ToolBar from './Components/ToolBar';
import CartDetail from './Components/Cart/CartDetail';
import ShopDetail from './Components/Shop/ShopDetails';
import getCategoryList from './actions/GetCategoryList';

function App() {
  const dispatch = useDispatch();
useEffect(()=>{
  dispatch(getCategoryList())
},[])
  return (
    <div className="App">
     <BrowserRouter>
     <ToolBar/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/shop" element={<Shop/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/cartDetails/:id" element={<CartDetail/>} />
        <Route exact path="/shopDetails/:id" element={<ShopDetail/>} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
