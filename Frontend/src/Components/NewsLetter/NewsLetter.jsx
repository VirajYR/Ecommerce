import React from 'react'
import "./NewsLetter.css"
const NewsLetter = () => {
    return (
        <div className="NewsLetter">
            <h5>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h5>
            <p>Subscribe to our newsletter and stay updated</p>
            <div className="SubscribeBar">
                <input type="text" placeholder='Your Email Id : ' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter