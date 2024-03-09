import React from 'react'

// css file
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
    <div className="hero-title">
      <span>Our best delivered cuisines</span>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
        molestiae!
      </p>
    </div>
    <div className="hero-image">
      <div className="image-part">
        <img src="/images/Ellipse 1.png" alt="Images" />
        <p>Chiken noodles</p>
      </div>
      <hr className="hero-line" />
      <div className="image-part">
        <img src="/images/Ellipse 2.png" alt="Images" />
        <p>French fries</p>
      </div>
      <hr className="hero-line" />
      <div className="image-part">
        <img src="/images/Ellipse 3.png" alt="Images" />
        <p>Avocado noodles</p>
      </div>
    </div>
  </div>
  )
}

export default Hero