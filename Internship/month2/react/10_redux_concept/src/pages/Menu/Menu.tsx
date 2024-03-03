import React from 'react'

// css files
import './Menu.css'
import Brandlist from './Brandlist'
import Foodlist from './Foodlist'

const Menu = () => {
  return (
    <div>
        <div className="menu-brand">
        <div className="menu-title">Top brands for you</div>
        <Brandlist/>
      </div>

      <div className="menu-food">
        <div className="food-title">Food according to weather</div>
        <Foodlist/>
      </div>

      <div className="menu-list">
        <div className="content-item">
          <img src="/images/Rectangle 21.png" alt="" />
          <div className="list-content">
            <span>Veggie friendly</span>
            <p>29 Places Near You</p>
          </div>
        </div>
        <div className="content-item">
          <img src="/images/Rectangle 23.png" alt="" />
          <div className="list-content">
            <span>Trending this week</span>
            <p>29 Places Near You</p>
          </div>
        </div>
        <div className="content-item">
          <img src="/images/Rectangle 25.png" alt="" />
          <div className="list-content">
            <span>Authentic</span>
            <p>29 Places Near You</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Menu