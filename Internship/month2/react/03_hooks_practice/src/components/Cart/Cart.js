import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// imported files
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout/Checkout";

// imported css files
import classes from "./Cart.module.css";

const Cart = ({ onHideCart }) => {
  const cartCtx = useContext(CartContext);
  const [formVisibility, setFormVisibility] = useState(false);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const formDataHandler = async (data) => {
    const response = await fetch(
      "https://reactapiforpostdata-default-rtdb.firebaseio.com/orders.json/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: data, orderedItems: cartCtx.items }),
      }
    );
    if (response.ok) {
      console.log("userdata with order added successfully");
      toast.success("Order added successfully", {
        position: "top-right",
        autoClose: 2000,
      });
      onHideCart();
      cartCtx.reset();
      
    }
  };
  const orderClickHandler = () => {
    setFormVisibility(true);
  };

  return (
    <Modal hideCart={onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      {formVisibility ? (
        <Checkout
          onConfirm={formDataHandler}
          onCancle={() => setFormVisibility(false)}
        />
      ) : (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={onHideCart}>
            Close
          </button>
          <button className={classes.button} onClick={orderClickHandler}>
            Order
          </button>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
