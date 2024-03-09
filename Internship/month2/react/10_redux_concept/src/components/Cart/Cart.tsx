import React from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

// imported files
import { useAppSelector, useAppDispatch } from "../../redux/foodSlice";
import { clearCart } from "../../redux/cartSlice";
import ItemCard from "./ItemCard";

// css file
import "./Cart.css";

interface CartItem {
  id: number;
  price: string;
  image: string;
  title: string;
  description: string;
  time: string;
  quantity: number;
  category: string;
}

const Cart: React.FC = () => {
  const availableCartItems = useAppSelector((state) => state.cart.cart);
  let totalAmount = 0;
  const dispacth = useAppDispatch();

  const orderHandler = () => {
    toast.success("Order Placed Successfully", {
      position: "top-right",
      autoClose: 1000,
    });
    dispacth(clearCart());
  };
  const clickToClearCart = () => {
    dispacth(clearCart());
  };
  function addToTotalCartAmount(value: number) {
    totalAmount += value;
  }
  const content = availableCartItems.map((item: CartItem, index: number) => (
    <>
      <ItemCard key={index} addItem={item} />
      {addToTotalCartAmount(Number(item.price) * Number(item.quantity))}
    </>
  ));

  return (
    <div className="cart">
    
      {totalAmount > 0 ? (
        <div className="cart-items">{content}</div>
      ) : (
        <div className="items-unavailable">
          <img src ="/images/emptyCart.png" alt="Loading..."/>
          <p>It seems like there is nothing in your cart.</p>
          <NavLink to="/menu">
            <span>Let's fill it</span>
          </NavLink>
        </div>
      )}
      {availableCartItems.length>0 && (
        <div className="cart-bill">
          <div className="cart-title">
            <span>Noodletown Cart</span>
          </div>
          <div className="cart-content">
            <table>
              <tr>
                <th>CartItems</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>TotalPrice</th>
              </tr>
              {availableCartItems.map((available) => (
                <tr>
                  <td>{available.title}</td>
                  <td>{available.quantity}</td>
                  <td>&#8377;{available.price}</td>
                  <td>
                    &#8377;
                    {Number(available.price) * Number(available.quantity)}
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="cart-total-amount">
            TotalAmount : &#8377;{totalAmount}
          </div>
          <div className="chekout-btns">
            <button type="button" onClick={() => orderHandler()}>
              Order Now
            </button>
            <button type="button" onClick={clickToClearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
