import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer.jsx/Footer';
import menBanner from "./Components/assets/banner_mens.png"
import womenBanner from "./Components/assets/banner_women.png"
import kidBanner from "./Components/assets/banner_kids.png"

function App() {

  return (
    <>
      <BrowserRouter>
        < Navbar />
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/men' element={<ShopCategory banner={menBanner} category="Men" />}></Route>
          <Route path='/women' element={<ShopCategory banner={womenBanner} category="Women" />}></Route>
          <Route path='/kids' element={<ShopCategory banner={kidBanner} category="Kids" />}></Route>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}></Route>
          </Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/login' element={<LoginSignup />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
