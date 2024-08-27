import React from 'react'
import "./Hero.css"
import heroImg from "../assets/hero_image.png"
import handIcon from "../assets/hand_icon.png"

const Hero = () => {
  return (
    <div className="Hero">
      <div className="HeroLeft">
        <div className="Heading">

          <h5>NEW ARRIVALS ONLY</h5>
        </div>
        <div className="TextImg">

          <h6>new</h6>
          <img src={handIcon} alt="Hand Icon" />
        </div>
        <div className="Text">
          <h6>collections</h6>
          <h6>for everyone</h6>
        </div>
        <div className="CollectionBtn">
          <button>Latest Collections &rarr;</button>
        </div>
      </div>
      <div className="HeroRight">
        <img src={heroImg} alt="Hero Image" />
      </div>
    </div>
  )
}

export default Hero