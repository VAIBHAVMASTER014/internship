import React from 'react'
import './Brand.css';

const Brand = () => {
  return (
    <div>
        <div className="image-header">
      <div className="left">
        <img src="./asset/Rectangle 14.png" alt="" />
      </div>
      <div className="right_1">
        <img src="./asset/Rectangle 15 (1).png" alt="" className="right-up" />
      </div>
      <div className="right_2">
        <img src="./asset/Rectangle 16 (1).png" alt="" className="right-down" />
      </div>
    </div>

    {/* <!-- brand --> */}
    <div className="brand">
      <div className="brand-image">
        <img src="./asset/Ellipse 1 (2).png" alt="" />
      </div>
      <div className="brand-content">
        <span className="title">La Pino'z Pizza</span>
        <div className="description">
          <p>Pizza, Fast Food, Beverages</p>
          <p>Average Cost: <span>700rs per 2 Person</span></p>
        </div>
        <p>Vesu,Sura</p>
        <p><span className="red">Open Now: </span>11am - 11pm(Today)</p>
        <div className="brand-btns">
          <button>Order Online</button>
          <button>Directions</button>
          <button>Share</button>
        </div>
      </div>
    </div>

    {/* <!-- menu-image section--> */}
    <div className="menu-section">
      <span className="menu-title">Menu</span>
      <div className="menu-image">
        <div className="first-menu">
          <img src="./asset/Rectangle 33.png" alt="" />
          <p>Dinning Menu</p>
        </div>
        <div className="second-menu">
          <img src="./asset/Rectangle 33.png" alt="" />
          <p>Takeaway Menu</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Brand