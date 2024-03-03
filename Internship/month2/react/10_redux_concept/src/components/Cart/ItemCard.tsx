import React from 'react'

const ItemCard = () => {

    const dummy_data=[
        {
            image:"Rectangle 15 (3).png",
            title:"Marghrita Pizza",
            price:"140",
            
        }
    ]
  return (
    <div>
        <div className="cart-items">
      <div className="item">
        <img src="./asset/" alt="" />
        <div className="name-price">
          <span>Marghrita Pizza</span>
          <p>&#8377; 140</p>
        </div>
        <p>A classNameic Cheesy Margharita. Can't Go Wrong.</p>
        <div className="cart-btns">
          <button>-</button>
          <span>01</span>
          <button>+</button>
        </div>
        <div className="total">
          <div className="sub-total">
            <p>Subtotal</p>
            <span>&#8377; 140</span>
          </div>
          <hr />
          <div className="total-price">
            <p>Total</p>
            <span>&#8377; 140</span>
          </div>
        </div>
      </div>
      <div className="item">
        <img src="./asset/Rectangle 95.png" alt="" />
        <div className="name-price">
          <span>Marghrita Pizza</span>
          <p>&#8377; 140</p>
        </div>
        <p>A classNameic Cheesy Margharita. Can't Go Wrong.</p>
        <div className="cart-btns">
          <button>-</button>
          <span>01</span>
          <button>+</button>
        </div>
        <div className="total">
          <div className="sub-total">
            <p>Subtotal</p>
            <span>&#8377; 140</span>
          </div>
          <hr />
          <div className="total-price">
            <p>Subtotal</p>
            <span>&#8377; 140</span>
          </div>
        </div>
      </div>
      <div className="item">
        <img src="./asset/Rectangle 102.png" alt="" />
        <div className="name-price">
          <span>Marghrita Pizza</span>
          <p>&#8377; 140</p>
        </div>
        <p>A classNameic Cheesy Margharita. Can't Go Wrong.</p>
        <div className="cart-btns">
          <button>-</button>
          <span>01</span>
          <button>+</button>
        </div>
        <div className="total">
          <div className="sub-total">
            <p>Subtotal</p>
            <span>&#8377; 140</span>
          </div>
          <hr />
          <div className="total-price">
            <p>Subtotal</p>
            <span>&#8377; 140</span>
          </div>
        </div>
      </div>
      <div className="item">
        <img src="./asset/Rectangle 115.png" alt="" />
        <div className="name-price">
          <span>Marghrita Pizza</span>
          <p>&#8377; 140</p>
        </div>
        <p>A classNameic Cheesy Margharita. Can't Go Wrong.</p>
        <div className="cart-btns">
          <button>-</button>
          <span>01</span>
          <button>+</button>
        </div>
        <div className="total">
          <div className="sub-total">
            <p>Subtotal</p>
            <span>&#8377; 140</span>
          </div>
          <hr />
          <div className="total-price">
            <p>Subtotal</p>
            <span>&#8377; 140</span>
          </div>
        </div>
      </div>
      <div className="item">
        <img src="./asset/Rectangle 116.png" alt="" />
        <div className="name-price">
          <span>Marghrita Pizza</span>
          <p>&#8377; 140</p>
        </div>
        <p>A classNameic Cheesy Margharita. Can't Go Wrong.</p>
        <div className="cart-btns">
          <button>-</button>
          <span>01</span>
          <button>+</button>
        </div>
        <div className="total">
          <div className="sub-total">
            <p>Subtotal</p>
            <span>&#8377; 140</span>
          </div>
          <hr />
          <div className="total-price">
            <p>Subtotal</p>
            <span>&#8377; 140</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ItemCard