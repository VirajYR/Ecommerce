import React from 'react'
import "./Offers.css"
import OffersImg from "../assets/exclusive_image.png"
const Offers = () => {
    return (
        <div className="Offers">
            <div className="OffersLeft">
                <h5>Exlcusive</h5>
                <h5>Offers For You</h5>
                <p>ONLY ON BEST SELLER PRODUCTS</p>
                <div className="CheckBtn">
                    <button>Check Now</button>
                </div>
            </div>
            <div className="OffersRight">
                <img src={OffersImg} alt="Offer Image" />
            </div>
        </div>
    )
}

export default Offers