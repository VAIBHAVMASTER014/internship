import React, { useContext,useEffect,useState } from "react";

// imported files
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
// imported css files
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const [btnAnimation,setBtnAnimation] =useState(false);
  const numberOfCartItems = cartCtx.items.reduce((currentCartValue, item) => {
    return currentCartValue + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnAnimation ? classes.bump : ''}`;
  useEffect(()=>{
    if(cartCtx.items.length === 0){
      return;
    }
    setBtnAnimation(true);
    const timer = setTimeout(()=>{
      setBtnAnimation(false);
    },300);

    return ()=>{
      clearTimeout(timer)
    }
  },[cartCtx.items])

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
