import React from "react"
import backgroundImage from "../images/africa-bed-transformed.png" // Adjust the path if necessary
import "./HeroSection.css" // Importing CSS

const HeroSection = () => (
  <div className="hero" style={{ backgroundImage: `url(${backgroundImage})`, borderRadius: '15px'  }}>
    <div className="hero-content">
      <h1 class="windsong">Personal Client Travel</h1>
      <h3 class="fell">Crafting journeys that transcend the ordinary, leaving an indelible mark on your heart long after you’ve returned home.</h3>
    </div>
  </div>
)

export default HeroSection