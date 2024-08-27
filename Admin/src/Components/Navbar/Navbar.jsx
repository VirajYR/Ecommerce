import React from 'react'
import "./Navbar.css"
import navlogo from "../../assets/nav-logo.svg"
import navProfile from "../../assets/nav-profile.svg";
const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={navlogo} alt="Navbar logo" />

      <img src={navProfile} alt="Navbar Profile" />
    </div>
  )
}

export default Navbar