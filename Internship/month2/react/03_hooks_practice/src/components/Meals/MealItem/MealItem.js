import React, { useContext } from "react";

// imported files
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

// imported css files
import classes from "./MealItem.module.css";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);
  const priceValue = `$ ${price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id:id,
      name:name,
      amount:amount,
      price:price
    })
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceValue}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
