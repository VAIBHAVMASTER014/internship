import React from "react";

// css files
import './AvailableItem.css'
const AvailableItems = () => {
  return (
    <div className="available-item">
      <div className="clicked-section">
        <span>Order Online</span>
      </div>
      <div className="visible-section">
        <div className="left-sidebar">
          <ul className="item-link">
            <li>Recommended</li>
            <li>Pizzas(50)</li>
            <li>classNameic Pizzas For classNameic Maniacs (10)</li>
            <li>Garlic Breads (7)</li>
            <li>Lasagna (3)</li>
            <li>Desserts (2)</li>
          </ul>
        </div>
        <hr />
        <div className="right-scrollbar">
          <div className="selected-link">Recommended</div>
          <div className="item-cards">
            <div className="item">
              <img src="./asset/Rectangle 77.png" alt="" />
              <div className="item-content">
                <div className="content">
                  <span>Margherita Pizza</span>
                  <p>A classNameic Cheesy Margharita. Can't Go Wrong.</p>
                  <span>&#8377; 150</span>
                </div>
                <div className="item-btn">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="./asset/Rectangle 73.png" alt="" />
              <div className="item-content">
                <div className="content">
                  <span>Margherita Pizza</span>
                  <p>A classNameic Cheesy Margharita. Can't Go Wrong.</p>
                  <span>&#8377; 150</span>
                </div>
                <div className="item-btn">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="./asset/Rectangle 75.png" alt="" />
              <div className="item-content">
                <div className="content">
                  <span>Margherita Pizza</span>
                  <p>A classNameic Cheesy Margharita. Can't Go Wrong.</p>
                  <span>&#8377; 150</span>
                </div>
                <div className="item-btn">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="./asset/Rectangle 73.png" alt="" />
              <div className="item-content">
                <div className="content">
                  <span>Margherita Pizza</span>
                  <p>A classNameic Cheesy Margharita. Can't Go Wrong.</p>
                  <span>&#8377; 150</span>
                </div>
                <div className="item-btn">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="./asset/Rectangle 77.png" alt="" />
              <div className="item-content">
                <div className="content">
                  <span>Margherita Pizza</span>
                  <p>A classNameic Cheesy Margharita. Can't Go Wrong.</p>
                  <span>&#8377; 150</span>
                </div>
                <div className="item-btn">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableItems;
