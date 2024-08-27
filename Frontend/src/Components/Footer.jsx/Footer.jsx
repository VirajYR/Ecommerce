import React from 'react'
import "./Footer.css"
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import instaIcon from "../assets/instagram_icon.png"
import pinterestIcon from "../assets/pintester_icon.png"
import whatsappIcon from "../assets/whatsapp_icon.png"

const Footer = () => {
    return (
        <>
            <div className="Footer">

                <Link style={{ textDecoration: 'none' }} to="/" ><div className="webIcon">
                    <img src={logo} alt="Website Logo" />
                    <h1>DRCOSMETICS</h1>
                </div></Link>
                <div className="FooterLinks">
                    <ul>
                        <li>Company</li>
                        <li>Products</li>
                        <li>Offices</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="SocialHandles">
                    <img src={instaIcon} alt="Our Instagram Page" />
                    <img src={pinterestIcon} alt="Our Pinterest Page" />
                    <img src={whatsappIcon} alt="Our Whatsapp Group" />
                </div>
                <hr />

                <p>Copyright &#169; 2024 - All Rights Reserved</p>
            </div>


        </>
    )
}

export default Footer