import { useDispatch } from "react-redux";

// imported files
import { itemActions } from "../../store";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = ({ title, price, description, id }) => {
  const dispatch = useDispatch();

  const cartItemHandler = () => {
    dispatch(itemActions.addToCart({ id, title, price }));
    console.log(title);
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={cartItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
