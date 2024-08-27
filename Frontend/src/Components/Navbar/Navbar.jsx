import React, { useContext, useState } from 'react'
import logo from "../assets/logo.png"
import cartIcon from "../assets/cart_icon.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { ShopContext } from '../ShopContext/ShopContext'


const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <>
      <div className="Navbar">
        <Link style={{ textDecoration: 'none' }} to="/" ><div className="webIcon">
          <img src={logo} alt="Website Logo" />
          <h1>DRCOSMETICS</h1>
        </div></Link>


        <div className="menuBar">
          <ul className="menu">
            <li onClick={() => setMenu("shop")}><Link style={{ textDecoration: 'none' }} to="/">Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
            <li onClick={() => setMenu("men")}><Link style={{ textDecoration: 'none' }} to="/men">Men</Link>{menu === "men" ? <hr /> : <></>}</li>
            <li onClick={() => setMenu("women")}><Link style={{ textDecoration: 'none' }} to="/women">Women</Link>{menu === "women" ? <hr /> : <></>}</li>
            <li onClick={() => setMenu("kids")}><Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
          </ul>
        </div>

        <div className="loginAndCart">
          {localStorage.getItem("auth-token") ? <button className="loginBtn" onClick={() => {
            localStorage.removeItem("auth-token"); window.location
              .replace("/")
          }}>Log Out</button> : <Link style={{ textDecoration: 'none' }} to="/login"><button className="loginBtn">LOGIN</button></Link>}


          <Link style={{ textDecoration: 'none' }} to="/cart"><img src={cartIcon} alt="Cart Icon" className="cart" /></Link>

          <div className="cartCount">{getTotalCartItems()}</div>


        </div>


      </div>
      <div className="NavHorizontalRuler">

        <hr />
      </div>
    </>
  )
}

export default Navbar